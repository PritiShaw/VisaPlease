import React, { useState } from "react";
// import "./calculator.css";
// import "../../App.css";
import { Form, Button } from 'react-bootstrap';

import SupplierForm from "./SupplierForm";
import "../calculator.css"
const Question1 = (props) => {
  const [answer1, setAnswer1] = useState("")
  const [answer2, setAnswer2] = useState("")
  const [answer3, setAnswer3] = useState("")

  const submit = (e) => {
    e.preventDefault();
    if (answer1.length > 0 && answer2.length > 0 && answer3.length > 0) {
      props.presentAns["company.name"] = answer1
      props.presentAns["company.address"] = answer2
      props.presentAns["company.type"] = answer3
      props.setAnswers(props.presentAns)

      props.setGroupNumber(2)
    }
  }
  return (
    <div>
      <Form onSubmit={(e) => submit(e)}>
        <Form.Group >
          <Form.Label>What is the name of your company?</Form.Label>
          <Form.Control type="text" placeholder="Company Name" value={answer1} onChange={(e) => setAnswer1(e.target.value)} />
        </Form.Group>
        
        <Form.Group >
          <Form.Label>What is the location of your company?</Form.Label>
          <Form.Control type="text" placeholder="Company Address" value={answer2} onChange={(e) => setAnswer2(e.target.value)} />
        </Form.Group>
        
        <Form.Group >
          <Form.Label> Which merchant category are you from?</Form.Label>
          <Form.Control as="select" value={answer3} onChange={(e) => setAnswer3(e.target.value)}>
            <option></option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        
        <Button variant="primary" size="lg" type="submit" className="float-right"> Next</Button>
      </Form>
    </div>
  )
}

const Question2 = (props) => {

  const [answer1, setAnswer1] = useState(0)
  const [answer2, setAnswer2] = useState(0)
  const [answer3, setAnswer3] = useState(0)
  const [answer4, setAnswer4] = useState(0)

  const submit = (e) => {
    e.preventDefault();
    if (answer1.length > 0 && answer2.length > 0 && answer3.length > 0 && answer4.length > 0) {
      props.presentAns["company.size"] = answer1
      props.presentAns["company.net_worth"] = answer2
      props.presentAns["company.type"] = answer3
      props.presentAns["company.local_shareholders"] = answer4
      props.setAnswers(props.presentAns)
      props.setGroupNumber(3)
    }
  }
  const prevQues = (e) => {
    e.preventDefault();
    props.setGroupNumber(1);
  }
  return (
    <div>
      <Form onSubmit={submit}>
        <Form.Group >
          <Form.Label>Is your company a small business or 500 or fewer employ?</Form.Label>
          <Form.Control as="select" value={answer1} onChange={(e) => setAnswer1(e.target.value)}>
            <option></option>
            <option>Yes</option>
            <option>No</option>
          </Form.Control>
        </Form.Group>
        
        <Form.Group >
          <Form.Label>Is your small business’s tangible net worth lower than $15 million and your average net income for full 2 fiscal years prior to application lower than $5 million?</Form.Label>
          <Form.Control as="select" value={answer2} onChange={(e) => setAnswer2(e.target.value)}>
            <option></option>
            <option>Yes</option>
            <option>No</option>
          </Form.Control>
        </Form.Group>
        

        <Form.Group >
          <Form.Label>Are you a sole proprietor, independent contractor, or self-employed?</Form.Label>
          <Form.Control as="select" value={answer3} onChange={(e) => setAnswer3(e.target.value)}>
            <option></option>
            <option>Yes</option>
            <option>No</option>
          </Form.Control>
        </Form.Group>
        

        <Form.Group >
          <Form.Label> What is the percentage of business owned by local shareholders(%)</Form.Label>
          <Form.Control type="number" placeholder="%" value={answer4} onChange={(e) => setAnswer4(e.target.value)} />
        </Form.Group>
        
        <Button onClick={prevQues} variant="primary" type="submit" size="lg">
          Prev
        </Button>

        <Button id="margin-left" variant="primary" type="submit" size="lg" className="float-right">
          Next
          </Button>

      </Form>
    </div>
  )
}

const Question3 = (props) => {

  const [answer1, setAnswer1] = useState(0)
  const [answer2, setAnswer2] = useState(0)
  const [answer3, setAnswer3] = useState(0)
  const [answer4, setAnswer4] = useState(0)
  const [answer5, setAnswer5] = useState(0)

  const submit = (e) => {
    e.preventDefault();
    if (answer1.length > 0 && answer2.length > 0 && answer3.length > 0 && answer4.length > 0 && answer5.length > 0) {
      props.presentAns["company.profit_last_year"] = answer1
      props.presentAns["company.investment_cost_last_year"] = answer2
      props.presentAns["company.units_sold_2months_ago"] = answer3
      props.presentAns["company.units_solds_last_month"] = answer4
      props.presentAns["company.sales_last_year"] = answer5
      props.setAnswers(props.presentAns)
      props.setGroupNumber(4)
    }
  }
  const prevQues = (e) => {
    e.preventDefault();
    props.setGroupNumber(2);
  }
  return (
    <div>
      <Form onSubmit={submit}>

        <Form.Group >
          <Form.Label>What was your net profit last year?($)</Form.Label>
          <Form.Control type="number" placeholder="$" value={answer1} onChange={(e) => setAnswer1(e.target.value)} />
        </Form.Group>

        
        <Form.Group >
          <Form.Label>What was your cost of investment last year($)</Form.Label>
          <Form.Control type="number" placeholder="$" value={answer2} onChange={(e) => setAnswer2(e.target.value)} />
        </Form.Group>
        
        <Form.Group >
          <Form.Label>How many units have you sold 2 months ago?</Form.Label>
          <Form.Control type="number" placeholder="Number of units" value={answer3} onChange={(e) => setAnswer3(e.target.value)} />
        </Form.Group>
        
        <Form.Group>

          <Form.Label>How many units have you sold last month?</Form.Label>
          <Form.Control type="number" placeholder="Number of units" value={answer4} onChange={(e) => setAnswer4(e.target.value)} />
        </Form.Group>

        
        <Form.Group>
          <Form.Label>What was your net sales last year?</Form.Label>
          <Form.Control type="number" placeholder="Number of units" value={answer5} onChange={(e) => setAnswer5(e.target.value)} />
        </Form.Group>
        
        <Button onClick={prevQues} variant="primary" type="submit" size="lg">
          Prev
        </Button>
        <Button id="margin-left" variant="primary" type="submit" size="lg" className="float-right">
          Next
        </Button>

      </Form>
    </div>
  )
}

const Question4 = (props) => {

  const [answer1, setAnswer1] = useState(0)
  const [answer2, setAnswer2] = useState(0)
  const [answer3, setAnswer3] = useState(0)
  const [answer4, setAnswer4] = useState(0)
  const [answer5, setAnswer5] = useState(0)
  const [answer6, setAnswer6] = useState(0)

  const submit = (e) => {
    e.preventDefault();
    if (answer1.length > 0 && answer2.length > 0 && answer3.length > 0 && answer4.length > 0 && answer5.length > 0 && answer6.length > 0) {
      props.presentAns["company.monthly_cost_before_pandemic"] = answer1
      props.presentAns["company.revenue_before_pandemic"] = answer2
      props.presentAns["company.monthly_cash_before_pandemic"] = answer3
      props.presentAns["company.monthly_debt_before_pandemic"] = answer4
      props.presentAns["company.monthly_payment_deferrals_given_to_customer_before_pandemic"] = answer5
      props.presentAns["company.monthly_payment_deferrals_received_from_customer_before_pandemic"] = answer6
      props.setAnswers(props.presentAns)
      props.setGroupNumber(4.5)
    }
  }
  const prevQues = (e) => {
    e.preventDefault();
    props.setGroupNumber(3);
  }
  return (
    <div>
      <Form onSubmit={submit}>
        <Form.Group >
          <Form.Label>What was your monthly cost before the pandemic? (in $)</Form.Label>
          <Form.Control type="number" placeholder="$" value={answer1} onChange={(e) => setAnswer1(e.target.value)} />
        </Form.Group>

        
        <Form.Group >
          <Form.Label>What was your monthly revenue before the pandemic? (in $)</Form.Label>
          <Form.Control type="number" placeholder="$" value={answer2} onChange={(e) => setAnswer2(e.target.value)} />
        </Form.Group>
        
        <Form.Group >
          <Form.Label>How much cash did the company have on hand on a monthly basis before the pandemic? (in $)</Form.Label>
          <Form.Control type="number" placeholder="$" value={answer3} onChange={(e) => setAnswer3(e.target.value)} />
        </Form.Group>

        
        <Form.Group >
          <Form.Label>How much outstanding debt did the company have on a monthly basis before the pandemic? (in $)</Form.Label>
          <Form.Control type="number" placeholder="$" value={answer4} onChange={(e) => setAnswer4(e.target.value)} />
        </Form.Group>
        
        <Form.Group >
          <Form.Label>What were the total monthly payment deferrals given to your customer before the pandemic? (in $)</Form.Label>
          <Form.Control type="number" placeholder="$" value={answer5} onChange={(e) => setAnswer5(e.target.value)} />
        </Form.Group>
        

        <Form.Group >
          <Form.Label>What were the total monthly payment deferrals received from your suppliers before the pandemic? (in $)</Form.Label>
          <Form.Control type="number" placeholder="$" value={answer6} onChange={(e) => setAnswer6(e.target.value)} />
        </Form.Group>
        
        <Button onClick={prevQues} variant="primary" type="submit" size="lg">
          Prev
        </Button>

        <Button id="margin-left" variant="primary" type="submit" size="lg"  className="float-right">
          Next
      </Button>
      </Form>
    </div>
  )
}

const Question4b = (props) => {

  const [answer1, setAnswer1] = useState(0)
  const [answer2, setAnswer2] = useState(0)
  const [answer3, setAnswer3] = useState(0)
  const [answer4, setAnswer4] = useState(0)
  const [answer5, setAnswer5] = useState(0)
  const [answer6, setAnswer6] = useState(0)

  const submit = (e) => {
    e.preventDefault();
    if (answer1.length > 0 && answer2.length > 0 && answer3.length > 0 && answer4.length > 0 && answer5.length > 0 && answer6.length) {
      props.presentAns["company.monthly_cost"] = answer1
      props.presentAns["company.mohtly_revenue"] = answer2
      props.presentAns["company.monthly_cash"] = answer3
      props.presentAns["company.monthly_debt"] = answer4
      props.presentAns["company.monthly_payment_deferrals_given_to_customer"] = answer5
      props.presentAns["company.monthly_payment_deferrals_received_from_customer"] = answer6
      props.setAnswers(props.presentAns)
      props.setGroupNumber(5)
    }
  }
  const prevQues = (e) => {
    e.preventDefault();
    props.setGroupNumber(4);
  }
  return (
    <div>
      <Form onSubmit={submit}>
        <Form.Group >
          <Form.Label>What is your cost this month? (in $)</Form.Label>
          <Form.Control type="number" placeholder="$" value={answer1} onChange={(e) => setAnswer1(e.target.value)} />
        </Form.Group>
        

        <Form.Group >
          <Form.Label>What is your revenue this month? (in $)</Form.Label>
          <Form.Control type="number" placeholder="$" value={answer2} onChange={(e) => setAnswer2(e.target.value)} />
        </Form.Group>
        
        <Form.Group >
          <Form.Label>How much cash does the company have on hand this month? (in $)</Form.Label>
          <Form.Control type="number" placeholder="$" value={answer3} onChange={(e) => setAnswer3(e.target.value)} />
        </Form.Group>
        

        <Form.Group >
          <Form.Label>How much outstanding debt does the company have this month? (in $)</Form.Label>
          <Form.Control type="number" placeholder="$" value={answer4} onChange={(e) => setAnswer4(e.target.value)} />
        </Form.Group>
        
        <Form.Group >
          <Form.Label>What is the total payment deferrals given to your customer this month? (in $)</Form.Label>
          <Form.Control type="number" placeholder="$" value={answer5} onChange={(e) => setAnswer5(e.target.value)} />
        </Form.Group>
        

        <Form.Group >
          <Form.Label>What is the total payment deferrals received from your suppliers this month? (in $)</Form.Label>
          <Form.Control type="number" placeholder="$" value={answer6} onChange={(e) => setAnswer6(e.target.value)} />
        </Form.Group>

        
        <Button onClick={prevQues} variant="primary" type="submit" size="lg">
          Prev
        </Button>
        <Button id="margin-left" variant="primary" type="submit" size="lg" className="float-right">
          Next
        </Button>

      </Form>
    </div>
  )
}

const Question5 = (props) => {

  const [answer1, setAnswer1] = useState("")
  const [answer2, setAnswer2] = useState("")
  const [answer3, setAnswer3] = useState("")

  const submit = (e) => {
    e.preventDefault();
    if (answer1.length > 0 && answer2.length > 0 && answer3.length > 0) {
      props.presentAns["company.online_website"] = answer1
      props.presentAns["company.online_ordering"] = answer2
      props.presentAns["company.NoOfSocialPlatform"] = answer3
      props.setAnswers(props.presentAns)
      props.setGroupNumber(6)
    }
  }

  const prevQues = (e) => {
    e.preventDefault();
    props.setGroupNumber(4.5);
  }
  return (
    <div>
      <Form onSubmit={submit}>
        <Form.Group >
          <Form.Label>Do you have an online website?</Form.Label>
          <Form.Control as="select" value={answer1} onChange={(e) => setAnswer1(e.target.value)}>
            <option></option>
            <option>Yes</option>
            <option>No</option>
          </Form.Control>
        </Form.Group>
        
        <Form.Group >
          <Form.Label>Do you provide any online ordering and delivery services?</Form.Label>
          <Form.Control as="select" value={answer2} onChange={(e) => setAnswer2(e.target.value)}>
            <option></option>
            <option>Yes</option>
            <option>No</option>
          </Form.Control>
        </Form.Group>
        

        <Form.Group >
          <Form.Label>On kow many social media platforms is your business on?
        (like: Facebook, Facebook Messenger, Instagram, Pinterest, Others )</Form.Label>
          <Form.Control type="number" placeholder="number of sites" value={answer3} onChange={(e) => setAnswer3(e.target.value)} />
        </Form.Group>
        
        <Button onClick={prevQues} variant="primary" type="submit" size="lg">
          Prev
      </Button>
        <Button id="margin-left" variant="primary" type="submit" size="lg" className="float-right">
          Next
      </Button>
      </Form>
    </div>
  )
}


const Question6 = (props) => {
  const [supplierList, setSupplierList] = useState([])
  if ("suppliers" in props.presentAns)
    setSupplierList(props.presentAns["suppliers"])
  const removeSupplier = (idx) => {
    let newList = supplierList.slice()
    newList.splice(idx, 1)
    setSupplierList(newList)
  }
  const save = () => {
    props.setGroupNumber(7)      
    props.presentAns["suppliers"] = supplierList
    props.setAnswers(props.presentAns)
  }
  return (
    <div>
      <h3 className="mt-5 mb-2 font-italic text-center">Suppliers</h3>
      {!supplierList.length && <p><strong>No suppliers listed</strong></p>}
      {
        supplierList.map((i, index) => 
          <div key={index}>
              <span>{index + 1}. {i["name"]}</span>
              <Button size="sm" className="float-right" onClick={(e)=>removeSupplier(index)}>Remove</Button>
          </div>
        )
      }
      <br/>
      {!!supplierList.length && <Button variant="danger" size="sm" onClick={()=>setSupplierList([])}>
        Remove All
        </Button>
      }
      <Button variant="primary" className="float-right" size="sm" onClick={()=>save()}>
        Next
      </Button>
      <hr />
      <h4>Fill suppliers information to add supplier</h4>
      <SupplierForm setSupplierList={setSupplierList} supplierList={supplierList} />
    </div>
  )
}







export { Question1, Question2, Question3, Question4, Question4b, Question5, Question6 };
