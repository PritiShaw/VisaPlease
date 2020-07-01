import React, { useState } from "react";
// import "./calculator.css";
// import "../../App.css";
import { Form, Button } from 'react-bootstrap';

import SupplierForm from "./SupplierForm";
import "../calculator.css"
class Question1 extends React.Component{
  state={
    answer1:this.props.presentAns["company.size"]===undefined?"":this.props.presentAns["company.size"],
    answer2:this.props.presentAns["company.net_worth"]===undefined?"":this.props.presentAns["company.net_worth"],
    answer3:this.props.presentAns["company.merchant_type"]===undefined?"":this.props.presentAns["company.merchant_type"],
  }
   submit = (e) => {
     const{answer1,answer2,answer3}=this.state;
    e.preventDefault();
    if (answer1.length > 0 && answer2.length > 0 && answer3.length > 0  ) { 
      this.props.presentAns["company.size"] = answer1
      this.props.presentAns["company.net_worth"] = answer2
      this.props.presentAns["company.merchant_type"] = answer3

      
      this.props.setAnswers(this.props.presentAns)
        
      this.props.setGroupNumber(2)
    }
  }

    setAnswer1=(e)=>{
      const l=e.target.value;
      
      this.setState(()=>{
          return({answer1:l})
      })
    } 
    setAnswer2=(e)=>{
      const l=e.target.value;
      
      this.setState(()=>{
          return({answer2:l})
      })
    }
    setAnswer3=(e)=>{
      const l=e.target.value;
      
      this.setState(()=>{
          return({answer3:l})
      })
    }

  render(){
    return(
      <div>
      <h4>General criteria for emergency loan(%)</h4><br/><br/>
      <Form onSubmit={(e) => this.submit(e)}>
        <Form.Group >
          <Form.Label>Is your company a small business with 500 or fewer employ?</Form.Label>
          <Form.Control as="select" value={this.state.answer1} onChange={(e) => this.setAnswer1(e)}>
            <option></option>
            <option>Yes</option>
            <option>No</option>
          </Form.Control>
        </Form.Group>
        
        <Form.Group >
          <Form.Label>Is your small business’s tangible net worth lower than $15 million and your average net income for full 2 fiscal years prior to application lower than $5 million?
          </Form.Label>
          <Form.Control as="select" value={this.state.answer2} onChange={(e) => this.setAnswer2(e)}>
            <option></option>
            <option>Yes</option>
            <option>No</option>
          </Form.Control>
        </Form.Group>
        

        <Form.Group >
          <Form.Label>Are you a sole proprietor, independent contractor, or self-employed?</Form.Label>
          <Form.Control as="select" value={this.state.answer3} onChange={(e) => this.setAnswer3(e)}>
            <option></option>
            <option>Yes</option>
            <option>No</option>
          </Form.Control>
        </Form.Group>
        
        
        <hr/>
        <Button id="margin-left" variant="primary" type="submit" size="lg" className="float-right">
          Next
          </Button>
        <br/><br/>
      </Form>
    </div>
    )

  }
  
  
}



class Question2 extends React.Component{
  state={
    answer1:this.props.presentAns["company.profit_last_year"]===undefined?"":this.props.presentAns["company.profit_last_year"],
    answer2:this.props.presentAns["company.investment_cost_last_year"]===undefined?"":this.props.presentAns["company.investment_cost_last_year"],
    answer3:this.props.presentAns["company.units_sold_2months_ago"]===undefined?"":this.props.presentAns["company.units_sold_2months_ago"],
    answer4:this.props.presentAns["company.units_solds_last_month"]===undefined?"":this.props.presentAns["company.units_solds_last_month"],
    answer5:this.props.presentAns["company.sales_last_year"]===undefined?"":this.props.presentAns["company.sales_last_year"]
  
  }
   submit = (e) => {
     const{answer1,answer2,answer3,answer4,answer5}=this.state;
    e.preventDefault();
    if (answer1.length > 0 && answer2.length > 0 && answer3.length > 0  && answer4.length>0 &&answer5.length>0) { 
      this.props.presentAns["company.profit_last_year"] = answer1
      this.props.presentAns["company.investment_cost_last_year"] = answer2
      this.props.presentAns["company.units_sold_2months_ago"] = answer3
      this.props.presentAns["company.units_solds_last_month"] = answer4
      this.props.presentAns["company.sales_last_year"] = answer5
      
      this.props.setAnswers(this.props.presentAns)
        
      this.props.setGroupNumber(3)
    }
  }

    setAnswer1=(e)=>{
      const l=e.target.value;
      if(!l||l.match(/^\d{1,}(\.\d{0,2})?$/))
      {
      this.setState(()=>{
          return({answer1:l})
      })
      }
    } 
    setAnswer2=(e)=>{
      const l=e.target.value;
      if(!l||l.match(/^\d{1,}(\.\d{0,2})?$/))
      {
      this.setState(()=>{
          return({answer2:l})
      })
      }
    }
    setAnswer3=(e)=>{
      const l=e.target.value;
      if(!l||l.match(/^\d{1,}(\.\d{0,2})?$/))
      {
      this.setState(()=>{
          return({answer3:l})
      })
      }
    }
    setAnswer4=(e)=>{
      const l=e.target.value;
      if(!l||l.match(/^\d{1,}(\.\d{0,2})?$/))
      {
      this.setState(()=>{
          return({answer4:l})
      })
      }
    }
    setAnswer5=(e)=>{
      const l=e.target.value;
      if(!l||l.match(/^\d{1,}(\.\d{0,2})?$/))
      {
      this.setState(()=>{
          return({answer5:l})
      })
      }
    }
    prevQues = (e) => {
      e.preventDefault();
      const{answer1,answer2,answer3,answer4,answer5}=this.state;
      this.props.presentAns["company.profit_last_year"] = answer1
      this.props.presentAns["company.investment_cost_last_year"] = answer2
      this.props.presentAns["company.units_sold_2months_ago"] = answer3
      this.props.presentAns["company.units_solds_last_month"] = answer4
      this.props.presentAns["company.sales_last_year"] = answer5
      this.props.setGroupNumber(1);
    }
  render(){
    return(
      <div>
      <h4>How well has your business been performing? (%)</h4><br/><br/>
      <Form onSubmit={(e) => this.submit(e)}>
      <Form.Group >
      <Form.Label>What was your net profit last year?($)</Form.Label>
      <Form.Control type="text" placeholder="$" value={this.state.answer1} onChange={(e) => this.setAnswer1(e)} />
    </Form.Group>
        
        
    <Form.Group >
    <Form.Label>What was your cost of investment last year($)</Form.Label>
    <Form.Control type="text" placeholder="$" value={this.state.answer2} onChange={(e) => this.setAnswer2(e)} />
  </Form.Group>
  
  <Form.Group >
    <Form.Label>How many units have you sold 2 months ago?</Form.Label>
    <Form.Control type="text" placeholder="Number of units" value={this.state.answer3} onChange={(e) => this.setAnswer3(e)} />
  </Form.Group>
  
  <Form.Group>

    <Form.Label>How many units have you sold last month?</Form.Label>
    <Form.Control type="text" placeholder="Number of units" value={this.state.answer4} onChange={(e) => this.setAnswer4(e)} />
  </Form.Group>

  
  <Form.Group>
    <Form.Label>What was your net sales last year?</Form.Label>
    <Form.Control type="text" placeholder="Number of units" value={this.state.answer5} onChange={(e) => this.setAnswer5(e)} />
  </Form.Group>
  
        <hr/>
        <Button onClick={(e)=>this.prevQues(e)} variant="primary" type="submit" size="lg">
          Prev
        </Button>

        <Button id="margin-left" variant="primary" type="submit" size="lg" className="float-right">
          Next
          </Button>
<br/><br/>
      </Form>
    </div>
    )

  }
  
  
}


class Question3 extends React.Component{
  state={
    answer1:this.props.presentAns["company.monthly_cost_before_pandemic"]===undefined?"":this.props.presentAns["company.monthly_cost_before_pandemic"],
    answer2:this.props.presentAns["company.revenue_before_pandemic"]===undefined?"":this.props.presentAns["company.revenue_before_pandemic"],
    answer3:this.props.presentAns["company.monthly_cash_before_pandemic"]===undefined?"":this.props.presentAns["company.monthly_cash_before_pandemic"],
    answer4:this.props.presentAns["company.monthly_debt_before_pandemic"]===undefined?"":this.props.presentAns["company.monthly_debt_before_pandemic"],
    answer5:this.props.presentAns["company.monthly_payment_deferrals_given_to_customer_before_pandemic"]===undefined?"":this.props.presentAns["company.monthly_payment_deferrals_given_to_customer_before_pandemic"],
    answer6:this.props.presentAns["company.monthly_payment_deferrals_received_from_customer_before_pandemic"]===undefined?"":this.props.presentAns["company.monthly_payment_deferrals_received_from_customer_before_pandemic"]
  }
   submit = (e) => {
     const{answer1,answer2,answer3,answer4,answer5,answer6}=this.state;
    e.preventDefault();
    if (answer1.length > 0 && answer2.length > 0 && answer3.length > 0  && answer4.length>0 &&answer5.length>0&&answer6.length>0) { 
      this.props.presentAns["company.monthly_cost_before_pandemic"] = answer1
      this.props.presentAns["company.revenue_before_pandemic"] = answer2
      this.props.presentAns["company.monthly_cash_before_pandemic"] = answer3
      this.props.presentAns["company.monthly_debt_before_pandemic"] = answer4
      this.props.presentAns["company.monthly_payment_deferrals_given_to_customer_before_pandemic"] = answer5
      this.props.presentAns["company.monthly_payment_deferrals_received_from_customer_before_pandemic"] = answer6
      
      this.props.setAnswers(this.props.presentAns)
        
      this.props.setGroupNumber(4)
    }
  }

    setAnswer1=(e)=>{
      const l=e.target.value;
      if(!l||l.match(/^\d{1,}(\.\d{0,2})?$/))
      {
      this.setState(()=>{
          return({answer1:l})
      })
      }
    } 
    setAnswer2=(e)=>{
      const l=e.target.value;
      if(!l||l.match(/^\d{1,}(\.\d{0,2})?$/))
      {
      this.setState(()=>{
          return({answer2:l})
      })
    }
    }
    setAnswer3=(e)=>{
      const l=e.target.value;
      if(!l||l.match(/^\d{1,}(\.\d{0,2})?$/)) 
      {
      this.setState(()=>{
          return({answer3:l})
      })
    }
    }
    setAnswer4=(e)=>{
      const l=e.target.value;
      if(!l||l.match(/^\d{1,}(\.\d{0,2})?$/))
      { 
      this.setState(()=>{
          return({answer4:l})
      })
      }
    }
    setAnswer5=(e)=>{
      const l=e.target.value;
      if(!l||l.match(/^\d{1,}(\.\d{0,2})?$/))
      {
      this.setState(()=>{
          return({answer5:l})
      })
      }
    }
    setAnswer6=(e)=>{
      const l=e.target.value;
      if(!l||l.match(/^\d{1,}(\.\d{0,2})?$/))
      {
      this.setState(()=>{
          return({answer6:l})
      })
      }
    }
    prevQues = (e) => {
      e.preventDefault();
      const{answer1,answer2,answer3,answer4,answer5,answer6}=this.state;
      this.props.presentAns["company.monthly_cost_before_pandemic"] = answer1
      this.props.presentAns["company.revenue_before_pandemic"] = answer2
      this.props.presentAns["company.monthly_cash_before_pandemic"] = answer3
      this.props.presentAns["company.monthly_debt_before_pandemic"] = answer4
      this.props.presentAns["company.monthly_payment_deferrals_given_to_customer_before_pandemic"] = answer5
      this.props.presentAns["company.monthly_payment_deferrals_received_from_customer_before_pandemic"] = answer6
      this.props.setGroupNumber(2);
    }
  render(){
    return(
      <div>
      <h4>Monthly cash flow before pandemic</h4><br/><br/>
      <Form onSubmit={(e) => this.submit(e)}>
      <Form.Group >
          <Form.Label>What was your monthly cost before the pandemic? (in $)</Form.Label>
          <Form.Control type="text" placeholder="$" value={this.state.answer1} onChange={(e) => this.setAnswer1(e)} />
      </Form.Group>

        
        <Form.Group >
          <Form.Label>What was your monthly revenue before the pandemic? (in $)</Form.Label>
          <Form.Control type="text" placeholder="$" value={this.state.answer2} onChange={(e) => this.setAnswer2(e)} />
        </Form.Group>
        
        <Form.Group >
          <Form.Label>How much cash did the company have on hand on a monthly basis before the pandemic? (in $)</Form.Label>
          <Form.Control type="text" placeholder="$" value={this.state.answer3} onChange={(e) => this.setAnswer3(e)} />
        </Form.Group>

        
        <Form.Group >
          <Form.Label>How much outstanding debt did the company have on a monthly basis before the pandemic? (in $)</Form.Label>
          <Form.Control type="text" placeholder="$" value={this.state.answer4} onChange={(e) => this.setAnswer4(e)} />
        </Form.Group>
        
        <Form.Group >
          <Form.Label>What were the total monthly payment deferrals given to your customer before the pandemic? (in $)</Form.Label>
          <Form.Control type="text" placeholder="$" value={this.state.answer5} onChange={(e) => this.setAnswer5(e)} />
        </Form.Group>
        

        <Form.Group >
          <Form.Label>What were the total monthly payment deferrals received from your suppliers/governments/banks before the pandemic? (in $)</Form.Label>
          <Form.Control type="text" placeholder="$" value={this.state.answer6} onChange={(e) => this.setAnswer6(e)} />
        </Form.Group>
        
  
        <hr/>
        <Button onClick={(e)=>this.prevQues(e)} variant="primary" type="submit" size="lg">
          Prev
        </Button>

        <Button id="margin-left" variant="primary" type="submit" size="lg" className="float-right">
          Next
          </Button>
        <br/><br/>
      </Form>
    </div>
    )

  }
  
  
}

class Question4 extends React.Component{
  state={
    answer1:this.props.presentAns["company.monthly_cost"]===undefined?"":this.props.presentAns["company.monthly_cost"],
    answer2:this.props.presentAns["company.mohtly_revenue"]===undefined?"":this.props.presentAns["company.mohtly_revenue"],
    answer3:this.props.presentAns["company.monthly_cash"]===undefined?"":this.props.presentAns["company.monthly_cash"],
    answer4:this.props.presentAns["company.monthly_debt"]===undefined?"":this.props.presentAns["company.monthly_debt"],
    answer5:this.props.presentAns["company.monthly_payment_deferrals_given_to_customer"]===undefined?"":this.props.presentAns["company.monthly_payment_deferrals_given_to_customer"],
    answer6:this.props.presentAns["company.monthly_payment_deferrals_received_from_customer"]===undefined?"":this.props.presentAns["company.monthly_payment_deferrals_received_from_customer"]
  }
   submit = (e) => {
     const{answer1,answer2,answer3,answer4,answer5,answer6}=this.state;
    e.preventDefault();
    if (answer1.length > 0 && answer2.length > 0 && answer3.length > 0  && answer4.length>0 &&answer5.length>0&&answer6.length>0) { 
      this.props.presentAns["company.monthly_cost"] = answer1
      this.props.presentAns["company.mohtly_revenue"] = answer2
      this.props.presentAns["company.monthly_cash"] = answer3
      this.props.presentAns["company.monthly_debt"] = answer4
      this.props.presentAns["company.monthly_payment_deferrals_given_to_customer"] = answer5
      this.props.presentAns["company.monthly_payment_deferrals_received_from_customer"] = answer6
      
      this.props.setAnswers(this.props.presentAns)
        
      this.props.setGroupNumber(5)
    }
  }

    setAnswer1=(e)=>{
      const l=e.target.value;
      if(!l||l.match(/^\d{1,}(\.\d{0,2})?$/))
      {
      this.setState(()=>{
          return({answer1:l})
      })
      }
    } 
    setAnswer2=(e)=>{
      const l=e.target.value;
      if(!l||l.match(/^\d{1,}(\.\d{0,2})?$/))
      { 
      this.setState(()=>{
          return({answer2:l})
      })
      }
    }
    setAnswer3=(e)=>{
      const l=e.target.value;
      if(!l||l.match(/^\d{1,}(\.\d{0,2})?$/))
      {
      this.setState(()=>{
          return({answer3:l})
      })
      }
    }
    setAnswer4=(e)=>{
      const l=e.target.value;
      if(!l||l.match(/^\d{1,}(\.\d{0,2})?$/))
      {
      this.setState(()=>{
          return({answer4:l})
      })
    }
    }
    setAnswer5=(e)=>{
      const l=e.target.value;
      if(!l||l.match(/^\d{1,}(\.\d{0,2})?$/))
      { 
      this.setState(()=>{
          return({answer5:l})
      })
      }
    }
    setAnswer6=(e)=>{
      const l=e.target.value;
      if(!l||l.match(/^\d{1,}(\.\d{0,2})?$/))
      {
      this.setState(()=>{
          return({answer6:l})
      })
      }
    }
    prevQues = (e) => {
      e.preventDefault();
      const{answer1,answer2,answer3,answer4,answer5,answer6}=this.state;
      this.props.presentAns["company.monthly_cost"] = answer1
      this.props.presentAns["company.mohtly_revenue"] = answer2
      this.props.presentAns["company.monthly_cash"] = answer3
      this.props.presentAns["company.monthly_debt"] = answer4
      this.props.presentAns["company.monthly_payment_deferrals_given_to_customer"] = answer5
      this.props.presentAns["company.monthly_payment_deferrals_received_from_customer"] = answer6
      this.props.setGroupNumber(3);
    }
  render(){
    return(
      <div>
      <h4>Cash flow last month</h4><br/><br/>
      <Form onSubmit={(e) => this.submit(e)}>
      <Form.Group >
          <Form.Label>What is your cost last month? (in $)</Form.Label>
          <Form.Control type="text" placeholder="$" value={this.state.answer1} onChange={(e) => this.setAnswer1(e)} />
      </Form.Group>

        
        <Form.Group >
          <Form.Label>What is your revenue last month? (in $)</Form.Label>
          <Form.Control type="text" placeholder="$" value={this.state.answer2} onChange={(e) => this.setAnswer2(e)} />
        </Form.Group>
        
        <Form.Group >
          <Form.Label> How much cash did the company have on hand last month?</Form.Label>
          <Form.Control type="text" placeholder="$" value={this.state.answer3} onChange={(e) => this.setAnswer3(e)} />
        </Form.Group>

        
        <Form.Group >
          <Form.Label>How much outstanding debt does the company have last month? (in $)</Form.Label>
          <Form.Control type="text" placeholder="$" value={this.state.answer4} onChange={(e) => this.setAnswer4(e)} />
        </Form.Group>
        
        <Form.Group >
          <Form.Label>What is the total payment deferrals given to your customer last month? (in $)</Form.Label>
          <Form.Control type="text" placeholder="$" value={this.state.answer5} onChange={(e) => this.setAnswer5(e)} />
        </Form.Group>
        

        <Form.Group >
          <Form.Label>What is the total payment deferrals received from your suppliers/governments/banks last month? (in $)</Form.Label>
          <Form.Control type="text" placeholder="$" value={this.state.answer6} onChange={(e) => this.setAnswer6(e)} />
        </Form.Group>
        
  
        <hr/>
        <Button onClick={(e)=>this.prevQues(e)} variant="primary" type="submit" size="lg">
          Prev
        </Button>

        <Button id="margin-left" variant="primary" type="submit" size="lg" className="float-right">
          Next
          </Button>
<br/><br/>
      </Form>
    </div>
    )

  }
  
  
}

class Question5 extends React.Component{
  state={
    answer1:this.props.presentAns["company.online_website"]===undefined?"":this.props.presentAns["company.online_website"],
    answer2:this.props.presentAns["company.online_ordering"]===undefined?"":this.props.presentAns["company.online_ordering"],
    answer3:this.props.presentAns["company.NoOfSocialPlatform"]===undefined?"":this.props.presentAns["company.NoOfSocialPlatform"]
  }
   submit = (e) => {
     const{answer1,answer2,answer3}=this.state;
    e.preventDefault();
    if (answer1.length > 0 && answer2.length > 0 && answer3.length > 0) { 
      this.props.presentAns["company.online_website"] = answer1
      this.props.presentAns["company.online_ordering"] = answer2
      this.props.presentAns["company.NoOfSocialPlatform"] = answer3
      this.props.setAnswers(this.props.presentAns)
        
      this.props.setGroupNumber(6)
    }
  }
    setAnswer1=(e)=>{
      const l=e.target.value;
      
      this.setState(()=>{
          return({answer1:l})
      })
    } 
    setAnswer2=(e)=>{
      const l=e.target.value;
      
      this.setState(()=>{
          return({answer2:l})
      })
    }
    setAnswer3=(e)=>{
      const l=e.target.value;
      
      this.setState(()=>{
          return({answer3:l})
      })
    }
    prevQues = (e) => {
      e.preventDefault();
      
      const{answer1,answer2,answer3}=this.state;
      this.props.presentAns["company.online_website"] = answer1
      this.props.presentAns["company.online_ordering"] = answer2
      this.props.presentAns["company.NoOfSocialPlatform"] = answer3
      this.props.setGroupNumber(4);
    }
  render(){
    return(
      <div>
      <h4>How tech-savvy is your business? (%)</h4><br/><br/>
      <Form onSubmit={(e) => this.submit(e)}>
      <Form.Group >
      <Form.Label>Do you have an online website?</Form.Label>
      <Form.Control as="select" value={this.state.answer1} onChange={(e) => this.setAnswer1(e)}>
        <option></option>
        <option>Yes</option>
        <option>No</option>
      </Form.Control>
    </Form.Group>
    
    <Form.Group >
      <Form.Label>Do you provide any online ordering and delivery services?</Form.Label>
      <Form.Control as="select" value={this.state.answer2} onChange={(e) => this.setAnswer2(e)}>
        <option></option>
        <option>Yes</option>
        <option>No</option>
      </Form.Control>
    </Form.Group>
    

    <Form.Group >
      <Form.Label>On kow many social media platforms is your business on?
    (like: Facebook, Facebook Messenger, Instagram, Pinterest, Others )</Form.Label>
      <Form.Control type="number" placeholder="number of sites" value={this.state.answer3} onChange={(e) => this.setAnswer3(e)} />
    </Form.Group>

<hr/>
      <Button onClick={this.prevQues} variant="primary" type="submit" size="lg">
       Prev
      </Button>
      <Button id="margin-left" variant="primary" type="submit" size="lg" className="float-right">
        Next
      </Button>
      <br/><br/>
    </Form>
      
    </div>
    )

  }
  
  
}

class Question6 extends React.Component{
  state={
    supplierList:this.props.presentAns["suppliers"]==undefined?[]:this.props.presentAns["suppliers"]
  }
  save = () => {
    this.props.setGroupNumber(7)      
    this.props.presentAns["suppliers"] = this.state.supplierList
    this.props.setAnswers(this.props.presentAns)
  }
  prevQues = (e) => {
    e.preventDefault();
    this.props.presentAns["suppliers"] = this.state.supplierList
    this.props.setGroupNumber(5);
  }
  setSupplierList=(x)=>{
    this.setState(()=>{
        return({supplierList:x})
    })
  }
  removeSupplier = (idx) => {
    let newList = this.state.supplierList.slice()
    newList.splice(idx, 1)
    this.setSupplierList(newList)
  }
  render(){
    return( 
      <div>
      <h4>Evaluation of suppliers (%)</h4>
      <h3 className="mt-5 mb-2 font-italic text-center">Suppliers</h3>
      {!this.state.supplierList.length && <p><strong>No suppliers listed</strong></p>}
      {
        this.state.supplierList.map((i, index) => 
          <div key={index}>
              <span>{index + 1}. {i["name"]}</span>
              <Button size="sm" className="float-right" onClick={(e)=>this.removeSupplier(index)}>Remove</Button><br/><br/>
          </div> 
        )
      }
      <br/>
      {!!this.state.supplierList.length && <Button variant="danger" size="sm" onClick={()=>this.setSupplierList([])}>
        Remove All
        </Button>
      }
      <hr />
      <h4>Fill suppliers information to add supplier</h4>
      <SupplierForm setSupplierList={this.setSupplierList} supplierList={this.state.supplierList} />
      <hr/>
      
      <Button variant="primary"  size="lg" onClick={(e)=>this.prevQues(e)}>
        Prev
      </Button>
      <Button className="float-right" variant="primary"  size="lg" onClick={()=>this.save()}>
        Next
      </Button>
    </div>
    )
  }
}





export { Question1, Question2, Question3, Question4,  Question5, Question6 };
