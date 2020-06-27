export function calculateRecoveryScore(userid,answers){

    console.log("***Inside calculateRecoveryScore***");

    var subscore1 = calculateLoanScore(userid,answers);
    var subscore2 = calculatePerformanceScore(userid,answers);
    var subscore3 = calculateCashFlowScore(userid,answers);
    var subscore4 = calculateTechSavvinessScore(userid,answers);
    var subscore5 = calculateSupplierScore(userid,answers);

    var overallRecoveryScore = calculateOverallScore(subscore1,subscore2,subscore3,subscore4,subscore5);

    answers["Overall_Recovery_Score"] = overallRecoveryScore;
    answers["SubScores_list"] = [subscore1,subscore2,subscore3,subscore4,subscore5];

    return answers;
}

export function calculateLoanScore(userid,answers){
    var ans1 = (answers["company.size"] == "Yes")? 1 : 0;
    var ans2 = (answers["company.net_worth"] == "Yes") ? 1 : 0;
    var ans3 = (answers["company.type"] == "Yes") ? 1 : 0;

    var loanScore = (ans1 + ans2 + ans3)/3 * 100;

    return loanScore;    
}

export function calculatePerformanceScore(userid,answers){
    // TODO: Fetch the industry Average as in https://csimarket.com/screening/index.php?s=roi&pageS=1&fis=
    // TODO: Fetch monthly_sales_growth_category from Merchant Measurement API
    // TODO: Fetch the industry Average as in http://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/margin.html

    var ans1 = parseInt(answers["company.profit_last_year"]);
    var ans2 = parseInt(answers["company.investment_cost_last_year"]);
    var ans3 = parseInt(answers["company.units_sold_2months_ago"]);
    var ans4 = parseInt(answers["company.units_solds_last_month"]);
    var ans5 = parseInt(answers["company.sales_last_year"]);

    var ROI = (ans1/ans2)*100;

    // Refer TODO
    var industryROIAverage = 10.00;

    var ROIScore1 = (ROI>=industryROIAverage) ? 70 : 0;
    var ROIScore2 = (ROI>=0) ? 30 : 0;
    
    var finalROIScore = ROIScore1 + ROIScore2;

    var monthly_sales_growth_merchant = (ans4 - ans3)/ans4 * 100;

    // Refer TODO
    var monthly_sales_growth_category = 2.542;

    var salesVolumeScore1 = (monthly_sales_growth_merchant>=monthly_sales_growth_category) ? 70 : 0;
    var salesVolumeScore2 = (monthly_sales_growth_merchant>=0) ? 30 : 0;

    var finalSalesVolumeScore = salesVolumeScore1 + salesVolumeScore2;

    var netMargin = (ans1 / ans5) * 100;

    // Refer TODO
    var industryNetMarginAverage = 10.00;

    var netMarginScore1 = (netMargin>=industryNetMarginAverage) ? 70 : 0;
    var netMarginScore2 = (netMargin>=0) ? 30 : 0; 

    var finalNetMarginScore = netMarginScore1 + netMarginScore2;

    var performanceScore = (finalROIScore + finalSalesVolumeScore + finalNetMarginScore) / 3;

    return performanceScore;
}

export function calculateNetCashFlow(cost,revenue,cashOnHand,outstandingDebt,deferralGiven,deferralReceived){
    var netDeferrals = deferralReceived - deferralGiven;
    var netCashFlow = cashOnHand - outstandingDebt + revenue - cost + netDeferrals;
    return netCashFlow;
}

export function calculateCashFlowScore(userid,answers){
    var ans1 = parseInt(answers["company.monthly_cost_before_pandemic"]);
    var ans2 = parseInt(answers["company.revenue_before_pandemic"]);
    var ans3 = parseInt(answers["company.monthly_cash_before_pandemic"]);
    var ans4 = parseInt(answers["company.monthly_debt_before_pandemic"]);
    var ans5 = parseInt(answers["company.monthly_payment_deferrals_given_to_customer_before_pandemic"]);
    var ans6 = parseInt(answers["company.monthly_payment_deferrals_received_from_customer_before_pandemic"]);

    var netCashFlowBeforePandemic = calculateNetCashFlow(ans1,ans2,ans3,ans4,ans5,ans6);

    var ans7 = parseInt(answers["company.monthly_cost"]);
    var ans8 = parseInt(answers["company.mohtly_revenue"]);
    var ans9 = parseInt(answers["company.monthly_cash"]);
    var ans10 = parseInt(answers["company.monthly_debt"]);
    var ans11 = parseInt(answers["company.monthly_payment_deferrals_given_to_customer"]);
    var ans12 = parseInt(answers["company.monthly_payment_deferrals_received_from_customer"]);

    var netCashFlowThisMonth = calculateNetCashFlow(ans7,ans8,ans9,ans10,ans11,ans12);

    var cashFlowScore = (netCashFlowThisMonth - netCashFlowBeforePandemic)/ netCashFlowThisMonth * 100;

    return cashFlowScore;
}

export function calculateTechSavvinessScore(userid,answers){
    // TODO: Fetch terminalType and lastTranDateRange from Locator API

    var ans1 = answers["company.online_website"];
    var ans2 = answers["company.online_ordering"];
    var ans3 = parseInt(answers["company.NoOfSocialPlatform"]);

    var websiteScore = (ans1 == "Yes") ? 100 : 0;
    var deliveryScore = (ans2 == "Yes") ? 100 : 0;

    var socialMediaScore = (ans3 < 4) ? (25 * ans3) : 100;
    
    // Refer TODO
    var noOfTerminalTypes = 2;

    var terminalScore = (noOfTerminalTypes < 3) ? (100/3 * noOfTerminalTypes) : 100;

    // Refer TODO
    var lastTranDateRange = "In last 365 days";

    var POSRecencyScore = (lastTranDateRange == "In last 365 days") ? 100 : 0;

    var techSavvinessScore = (websiteScore + deliveryScore + socialMediaScore + terminalScore + POSRecencyScore) / 5;

    return techSavvinessScore;    
}

export function calculateSupplierScore(userid,answers){
    // TODO: Implement this function

    return 100;
}

export function calculateOverallScore(subscore1,subscore2,subscore3,subscore4,subscore5){
    
    var overallScore = (subscore1 + subscore2 + subscore3 + subscore4 + subscore5) / 5;

    return overallScore;
}