import { merchantMeasurement, getUserDocument } from "../../../utils/firestore";
import { firestore } from "../../../firebaseConfig";

const calculateRecoveryScore = async (userid,answers) => {

    console.log("***Inside calculateRecoveryScore***");

    var subscore1 = Math.round(await calculateLoanScore(userid,answers));
    var subscore2 = Math.round(await calculatePerformanceScore(userid,answers));
    var subscore3 = Math.round(await calculateCashFlowScore(userid,answers));
    var subscore4 = Math.round(await calculateTechSavvinessScore(userid,answers));
    var subscore5 = Math.round(await calculateSupplierScore(userid,answers));

    var overallRecoveryScore = Math.round(await calculateOverallScore(subscore1,subscore2,subscore3,subscore4,subscore5));

    answers["Overall_Recovery_Score"] = overallRecoveryScore;
    answers["SubScores_list"] = [subscore1,subscore2,subscore3,subscore4,subscore5];

    return answers;
}

const calculateLoanScore = async (userid,answers) => {

    var ans1 = (answers["company.size"] === "Yes")? 1 : 0;
    var ans2 = (answers["company.net_worth"] === "Yes") ? 1 : 0;
    var ans3 = (answers["company.type"] === "Yes") ? 1 : 0;

    var loanScore = (ans1 + ans2 + ans3)/3 * 100;

    return loanScore;    
}

const getIndustryROIAverage = async () => {
    const userRef = firestore.doc(`ExternalDataResources/IndustryROIAverages`);
    let ref = await userRef.get();
    try {
      return ref.data();
    } catch (err) {
      console.log(err.message);
      return undefined;
    }
}

const getIndustryNetMarginAverage = async () => {
    const userRef = firestore.doc(`ExternalDataResources/IndustryNetMarginAverages`);
    let ref = await userRef.get();
    try {
      return ref.data();
    } catch (err) {
      console.log(err.message);
      return undefined;
    }
}

const calculatePerformanceScore = async (userid,answers) => {
    
    var ans1 = parseInt(answers["company.profit_last_year"]);
    var ans2 = parseInt(answers["company.investment_cost_last_year"]);
    var ans3 = parseInt(answers["company.units_sold_2months_ago"]);
    var ans4 = parseInt(answers["company.units_solds_last_month"]);
    var ans5 = parseInt(answers["company.sales_last_year"]);

    var ROI = (ans1/ans2)*100;

    let userData = await getUserDocument(userid);
    if (userData === undefined) return undefined;

    let ROIData = await getIndustryROIAverage();
    if (ROIData === undefined) return undefined;

    var industryROIAverage = 10.00; //parseFloat(ROIData[userData["merchantCategoryCode"]]);

    var ROIScore1 = (ROI>=industryROIAverage) ? 70 : 0;
    var ROIScore2 = (ROI>=0) ? 30 : 0;
    
    var finalROIScore = ROIScore1 + ROIScore2;

    var monthly_sales_growth_merchant = (ans4 - ans3)/ans4 * 100;

    var monthly_sales_growth_category = parseFloat(await merchantMeasurement(userid));
    
    var salesVolumeScore1 = (monthly_sales_growth_merchant>=monthly_sales_growth_category) ? 70 : 0;
    var salesVolumeScore2 = (monthly_sales_growth_merchant>=0) ? 30 : 0;

    var finalSalesVolumeScore = salesVolumeScore1 + salesVolumeScore2;

    var netMargin = (ans1 / ans5) * 100;

    let NetMarginData = await getIndustryNetMarginAverage();
    if (NetMarginData === undefined) return undefined;

    var industryNetMarginAverage = 10.00; //parseFloat(NetMarginData[userData["merchantCategoryCode"]]);

    var netMarginScore1 = (netMargin>=industryNetMarginAverage) ? 70 : 0;
    var netMarginScore2 = (netMargin>=0) ? 30 : 0; 

    var finalNetMarginScore = netMarginScore1 + netMarginScore2;

    var performanceScore = (finalROIScore + finalSalesVolumeScore + finalNetMarginScore) / 3;

    return performanceScore;
}

const calculateNetCashFlow = async (cost,revenue,cashOnHand,outstandingDebt,deferralGiven,deferralReceived) => {
    var netDeferrals = deferralReceived - deferralGiven;
    var netCashFlow = cashOnHand - outstandingDebt + revenue - cost + netDeferrals;
    return netCashFlow;
}

const calculateCashFlowScore = async (userid,answers) => {
    var ans1 = parseInt(answers["company.monthly_cost_before_pandemic"]);
    var ans2 = parseInt(answers["company.revenue_before_pandemic"]);
    var ans3 = parseInt(answers["company.monthly_cash_before_pandemic"]);
    var ans4 = parseInt(answers["company.monthly_debt_before_pandemic"]);
    var ans5 = parseInt(answers["company.monthly_payment_deferrals_given_to_customer_before_pandemic"]);
    var ans6 = parseInt(answers["company.monthly_payment_deferrals_received_from_customer_before_pandemic"]);

    var netCashFlowBeforePandemic = await calculateNetCashFlow(ans1,ans2,ans3,ans4,ans5,ans6);

    var ans7 = parseInt(answers["company.monthly_cost"]);
    var ans8 = parseInt(answers["company.mohtly_revenue"]);
    var ans9 = parseInt(answers["company.monthly_cash"]);
    var ans10 = parseInt(answers["company.monthly_debt"]);
    var ans11 = parseInt(answers["company.monthly_payment_deferrals_given_to_customer"]);
    var ans12 = parseInt(answers["company.monthly_payment_deferrals_received_from_customer"]);

    var netCashFlowLastMonth = await calculateNetCashFlow(ans7,ans8,ans9,ans10,ans11,ans12);
 

    var percentChangeinCashFlow = (netCashFlowLastMonth - netCashFlowBeforePandemic)/ netCashFlowLastMonth * 100;

    var cashFlowScore = 0;
  
    if(percentChangeinCashFlow > 0)
        cashFlowScore += 30;
    if(netCashFlowLastMonth > 0)
        cashFlowScore += 70;

    return cashFlowScore;
}

const calculateTechSavvinessScore = async (userid,answers) => {
    
    var ans1 = answers["company.online_website"];
    var ans2 = answers["company.online_ordering"];
    var ans3 = parseInt(answers["company.NoOfSocialPlatform"]);

    var websiteScore = (ans1 === "Yes") ? 100 : 0;
    var deliveryScore = (ans2 === "Yes") ? 100 : 0;

    var socialMediaScore = (ans3 < 4) ? (25 * ans3) : 100;
    
    let userData = await getUserDocument(userid);
    if (userData === undefined) return undefined;

    var noOfTerminalTypes = 2;//userData["terminalType"].length;

    var terminalScore = (noOfTerminalTypes < 3) ? (100/3 * noOfTerminalTypes) : 100;

    var lastTranDateRange = "In last 365 days"; //userData["lastTranDateRange"];

    var POSRecencyScore = (lastTranDateRange === "In last 365 days") ? 100 : 0;

    var techSavvinessScore = (websiteScore + deliveryScore + socialMediaScore + terminalScore + POSRecencyScore) / 5;

    return techSavvinessScore;    
}

const getGlobalShippingServiceStatus = async () => {
    const userRef = firestore.doc(`ExternalDataResources/globalShippingServicesStatus`);
    let ref = await userRef.get();
    try {
      return ref.data();
    } catch (err) {
      console.log(err.message);
      return undefined;
    }
}

const calculateAccessibilityScore = async (ans2,ans3,ans4,ans5,ans6) => {

    var accessibilityScore = 0;
    if(ans2 === "No")
        return 0;
    else
        accessibilityScore+=50;
    if(ans3 === "No"){
        accessibilityScore+=20;
        if(ans6 === "Yes")
            accessibilityScore+=30;
    }
    else{
        if(ans4 === "Yes")
            accessibilityScore+=20;
        
        let data = await getGlobalShippingServiceStatus();
        if (data == undefined) return undefined;
        if (data[ans5] === "Green")
            accessibilityScore+=30;
        else if(data[ans5] === "Orange")
            accessibilityScore+=15;
    }
    accessibilityScore/=2;
    return accessibilityScore;
}

const calculateReliabilityScore = async (ans2,ans8,ans9,ans10) => {

    var reliabilityScore = 0;
    if(ans2 === "No")
        return 0;
    if(ans8 === "Yes")
    reliabilityScore+=50/3;
    if(ans9 === "Yes")
    reliabilityScore+=50/3;
    if(ans10 === "Yes")
    reliabilityScore+=50/3;

    return reliabilityScore;
}

const calculateSupplierScore = async (userid,answers) => {
    
    var suppliers = answers["suppliers"];
    var supplierScore = 0;
    var i;
    if(suppliers.length === 0)
      return 0;
    for(i=0;i<suppliers.length;i++)
    {
        var supplier = suppliers[i];

        var ans1 = supplier["name"];
        var ans2 = supplier["is_open"];
        var ans3 = supplier["another_country"];
        var ans4 = supplier["ships_worldwide"];
        var ans5 = supplier["worldwide_courier"];
        var ans6 = supplier["courier_ships_local"];
        var ans7 = supplier["accessible_distance"];
        var ans8 = supplier["courier_pandemic_support"];
        var ans9 = supplier["suppliers_recovering"];
        var ans10 = supplier["satisfy_future_requirements"];

        var accessibilityScore = await calculateAccessibilityScore(ans2,ans3,ans4,ans5,ans6);
        var reliabilityScore = await calculateReliabilityScore(ans2,ans8,ans9,ans10);
        supplierScore += (accessibilityScore + reliabilityScore);
    }
    supplierScore = supplierScore/suppliers.length;

    return supplierScore;
}

const calculateOverallScore = async (subscore1,subscore2,subscore3,subscore4,subscore5) => {
    
    var overallScore = (subscore1 + subscore2 + subscore3 + subscore4 + subscore5) / 5;

    return overallScore;
}

export{
    calculateRecoveryScore,
    calculateLoanScore,
    calculatePerformanceScore,
    calculateNetCashFlow,
    calculateCashFlowScore,
    calculateTechSavvinessScore,
    calculateSupplierScore,
    calculateOverallScore
}