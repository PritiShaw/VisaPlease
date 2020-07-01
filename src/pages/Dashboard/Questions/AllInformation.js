import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap";
import { uuid } from 'uuidv4'
const AllInformation = (props) => {
        return(
            <div>
            <h4>Check the information entered</h4>
            <br/><br/>
            <h4>General criteria for emergency loan(%)</h4>
            <br/>
            <h5>Q. Is your company a small business with 500 or fewer employ?</h5>
            <h6>Ans. {props.presentAns["company.size"]}</h6>
            <h5>Q. Is your small business’s tangible net worth lower than $15 million and your average net income for full 2 fiscal years prior to application lower than $5 million?</h5>
            <h6>Ans. {props.presentAns["company.net_worth"]}</h6>
            <h5>Q. Are you a sole proprietor, independent contractor, or self-employed?</h5>
            <h6>Ans. {props.presentAns["company.merchant_type"]}</h6>
            <br/>
            <hr/>
            
            
            
            <h4>How well has your business been performing(%)</h4>
            <br/>
            <h5>Q. What was your net profit last year?($)</h5>
            <h6>Ans. {props.presentAns["company.profit_last_year"]}</h6>
            <h5>Q. What was your cost of investment last year?($)</h5>
            <h6>Ans. {props.presentAns["company.investment_cost_last_year"]}</h6>
            <h5>Q. How many units have you sold 2 months ago?</h5>
            <h6>Ans. {props.presentAns["company.units_sold_2months_ago"]}</h6>
            <h5>Q. How many units have you sold last month?</h5>
            <h6>Ans. {props.presentAns["company.units_solds_last_month"]}</h6>
            <h5>Q. What was your net sales last year?</h5>
            <h6>Ans. {props.presentAns["company.sales_last_year"]}</h6>
            
            <br/>
            <hr/>
            


            <h4>Monthly cash flow before pandemic</h4>
            <br/>
            <h5>Q.What was your monthly cost before the pandemic? (in $)</h5>
            <h6>Ans. {props.presentAns["company.monthly_cost_before_pandemic"]}</h6>
            <h5>Q.What was your monthly revenue before the pandemic? (in $)</h5>
            <h6>Ans. {props.presentAns["company.revenue_before_pandemic"]}</h6>
            <h5>Q. How much cash did the company have on hand on a monthly basis before the pandemic? (in $)</h5>
            <h6>Ans. {props.presentAns["company.monthly_cash_before_pandemic"]}</h6>
            <h5>Q. How much outstanding debt did the company have on a monthly basis before the pandemic? (in $)</h5>
            <h6>Ans. {props.presentAns["company.monthly_debt_before_pandemic"]}</h6>
            <h5>Q.What were the total monthly payment deferrals given to your customer before the pandemic? (in $)</h5>
            <h6>Ans. {props.presentAns["company.monthly_payment_deferrals_given_to_customer_before_pandemic"]}</h6>
            <h5>Q.What were the total monthly payment deferrals received from your suppliers/governments/banks before the pandemic? (in $)</h5>
            <h6>Ans. {props.presentAns["company.monthly_payment_deferrals_received_from_customer_before_pandemic"]}</h6>
            
            <br/>
            <hr/>
           

            <h4>Cash flow last month</h4>
            <br/>
            <h5>Q.What is your cost last month? (in $)</h5>
            <h6>Ans. {props.presentAns["company.monthly_cost"]}</h6>
            <h5>Q.What is your revenue last month? (in $)</h5>
            <h6>Ans. {props.presentAns["company.mohtly_revenue"]}</h6>
            <h5>Q. How much cash did the company have on hand last month?</h5>
            <h6>Ans. {props.presentAns["company.monthly_cash"]}</h6>
            <h5>Q.How much outstanding debt does the company have last month? (in $)</h5>
            <h6>Ans. {props.presentAns["company.monthly_debt"]}</h6>
            <h5>Q.What is the total payment deferrals given to your customer last month? (in $)</h5>
            <h6>Ans. {props.presentAns["company.monthly_payment_deferrals_given_to_customer"]}</h6>
            <h5>Q.What is the total payment deferrals received from your suppliers/governments/banks last month? (in $)</h5>
            <h6>Ans. {props.presentAns["company.monthly_payment_deferrals_received_from_customer"]}</h6>
            
            <br/>
            <hr/>



            <h4>How tech-savvy is your business? (%)</h4>
            <br/>
            <h5>Q.Do you have an online website?</h5>
            <h6>Ans. {props.presentAns["company.online_website"]}</h6>
            <h5>Q.Do you provide any online ordering and delivery services?</h5>
            <h6>Ans. {props.presentAns["company.online_ordering"]}</h6>
            <h5>Q. On kow many social media platforms is your business on?
            (like: Facebook, Facebook Messenger, Instagram, Pinterest, Others )</h5>
            <h6>Ans. {props.presentAns["company.NoOfSocialPlatform"]}</h6>            
            <br/>
            <hr/>



            <h4>Supplier's Information</h4>
            <br/><br/>
            {props.presentAns["suppliers"].map((i,index)=>
                <div key={index}>
                <h4>{index+1}. {i.name}</h4><br/>
                <h5>Q.Is supplier's company open now?</h5>
                <h6>Ans. {i.is_open}</h6>
                <h5>Q.Is supplier is from another country?</h5>
                <h6>Ans. {i.another_country}</h6>
                <h5>Q.Does supplier provide world wide delivery?</h5>
                <h6>Ans. {i.ships_worldwide}</h6>
                <h5>Q.Which global shipping service is being used by supplier?</h5>
                <h6>Ans. {i.worldwide_courier}</h6>
                <h5>Q.Does supplier provide local delivery?</h5>
                <h6>Ans. {i.courier_ships_local}</h6>
                <h5>Q.Within what distance is considered accessible for you to travel and buy your supplies?(in meters )</h5>
                <h6>Ans. {i.accessible_distance}</h6>
                <h5>Q.Is your supplier supporting you?</h5>
                <h6>Ans. {i.courier_pandemic_support}</h6>
                <h5>Q.Is your supplier recovering?</h5>
                <h6>Ans. {i.suppliers_recovering}</h6>
                <h5>Q.Have your supplier been consistently providing high quality goods?</h5>
                <h6>Ans. {i.satisfy_future_requirements}</h6>
            
                <br/>
                <hr/>
    
            
                </div>
            )}



            
            </div>
        )
}

export default AllInformation
