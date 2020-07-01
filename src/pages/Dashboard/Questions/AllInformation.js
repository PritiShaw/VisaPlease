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
            <p>Q. Is your company a small business with 500 or fewer employ?</p>
            <p>Ans. {props.presentAns["company.size"]}</p>
            <p>Q. Is your small business’s tangible net worth lower than $15 million and your average net income for full 2 fiscal years prior to application lower than $5 million?</p>
            <p>Ans. {props.presentAns["company.net_worth"]}</p>
            <p>Q. Are you a sole proprietor, independent contractor, or self-employed?</p>
            <p>Ans. {props.presentAns["company.merchant_type"]}</p>
            <br/>
            <hr/>
            
            
            
            <h4>How well has your business been performing(%)</h4>
            <br/>
            <p>Q. What was your net profit last year?($)</p>
            <p>Ans. {props.presentAns["company.profit_last_year"]}</p>
            <p>Q. What was your cost of investment last year?($)</p>
            <p>Ans. {props.presentAns["company.investment_cost_last_year"]}</p>
            <p>Q. How many units have you sold 2 months ago?</p>
            <p>Ans. {props.presentAns["company.units_sold_2months_ago"]}</p>
            <p>Q. How many units have you sold last month?</p>
            <p>Ans. {props.presentAns["company.units_solds_last_month"]}</p>
            <p>Q. What was your net sales last year?</p>
            <p>Ans. {props.presentAns["company.sales_last_year"]}</p>
            
            <br/>
            <hr/>
            


            <h4>Monthly cash flow before pandemic</h4>
            <br/>
            <p>Q.What was your monthly cost before the pandemic? (in $)</p>
            <p>Ans. {props.presentAns["company.monthly_cost_before_pandemic"]}</p>
            <p>Q.What was your monthly revenue before the pandemic? (in $)</p>
            <p>Ans. {props.presentAns["company.revenue_before_pandemic"]}</p>
            <p>Q. How much cash did the company have on hand on a monthly basis before the pandemic? (in $)</p>
            <p>Ans. {props.presentAns["company.monthly_cash_before_pandemic"]}</p>
            <p>Q. How much outstanding debt did the company have on a monthly basis before the pandemic? (in $)</p>
            <p>Ans. {props.presentAns["company.monthly_debt_before_pandemic"]}</p>
            <p>Q.What were the total monthly payment deferrals given to your customer before the pandemic? (in $)</p>
            <p>Ans. {props.presentAns["company.monthly_payment_deferrals_given_to_customer_before_pandemic"]}</p>
            <p>Q.What were the total monthly payment deferrals received from your suppliers/governments/banks before the pandemic? (in $)</p>
            <p>Ans. {props.presentAns["company.monthly_payment_deferrals_received_from_customer_before_pandemic"]}</p>
            
            <br/>
            <hr/>
           

            <h4>Cash flow last month</h4>
            <br/>
            <p>Q.What is your cost last month? (in $)</p>
            <p>Ans. {props.presentAns["company.monthly_cost"]}</p>
            <p>Q.What is your revenue last month? (in $)</p>
            <p>Ans. {props.presentAns["company.mohtly_revenue"]}</p>
            <p>Q. How much cash did the company have on hand last month?</p>
            <p>Ans. {props.presentAns["company.monthly_cash"]}</p>
            <p>Q.How much outstanding debt does the company have last month? (in $)</p>
            <p>Ans. {props.presentAns["company.monthly_debt"]}</p>
            <p>Q.What is the total payment deferrals given to your customer last month? (in $)</p>
            <p>Ans. {props.presentAns["company.monthly_payment_deferrals_given_to_customer"]}</p>
            <p>Q.What is the total payment deferrals received from your suppliers/governments/banks last month? (in $)</p>
            <p>Ans. {props.presentAns["company.monthly_payment_deferrals_received_from_customer"]}</p>
            
            <br/>
            <hr/>



            <h4>How tech-savvy is your business? (%)</h4>
            <br/>
            <p>Q.Do you have an online website?</p>
            <p>Ans. {props.presentAns["company.online_website"]}</p>
            <p>Q.Do you provide any online ordering and delivery services?</p>
            <p>Ans. {props.presentAns["company.online_ordering"]}</p>
            <p>Q. On kow many social media platforms is your business on?
            (like: Facebook, Facebook Messenger, Instagram, Pinterest, Others )</p>
            <p>Ans. {props.presentAns["company.NoOfSocialPlatform"]}</p>            
            <br/>
            <hr/>



            <h4>Supplier's Information</h4>
            <br/><br/>
            {props.presentAns["suppliers"].map((i,index)=>
                <div key={index}>
                <p>{index+1}. {i.name}</p><br/>
                <p>Q.Is supplier's company open now?</p>
                <p>Ans. {i.is_open}</p>
                <p>Q.Is supplier is from another country?</p>
                <p>Ans. {i.another_country}</p>
                <p>Q.Does supplier provide world wide delivery?</p>
                <p>Ans. {i.ships_worldwide}</p>
                <p>Q.Which global shipping service is being used by supplier?</p>
                <p>Ans. {i.worldwide_courier}</p>
                <p>Q.Does supplier provide local delivery?</p>
                <p>Ans. {i.courier_ships_local}</p>
                <p>Q.Within what distance is considered accessible for you to travel and buy your supplies?(in meters )</p>
                <p>Ans. {i.accessible_distance}</p>
                <p>Q.Is your supplier supporting you?</p>
                <p>Ans. {i.courier_pandemic_support}</p>
                <p>Q.Is your supplier recovering?</p>
                <p>Ans. {i.suppliers_recovering}</p>
                <p>Q.Have your supplier been consistently providing high quality goods?</p>
                <p>Ans. {i.satisfy_future_requirements}</p>
            
                <br/>
                <hr/>
    
            
                </div>
            )}



            
            </div>
        )
}

export default AllInformation
