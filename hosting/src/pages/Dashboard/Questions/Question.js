import React from "react";
// import "./calculator.css";
// import "../../App.css";
import {Form} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {Col} from "react-bootstrap"
import {Link} from "react-router-dom"
const Question1 = (props) => {
    const submit=(e)=>{
        e.preventDefault();
        props.Visibility(2);
     alert("hello");
    }
    return(
        <div  style={props.display<1 ? {pointerEvents: "none", opacity: "0.4"} : {}}>
        <Form onSubmit={submit}>
        <Form.Group >
        <Form.Label>What is the name of your company?</Form.Label>
        <Form.Control type="text" placeholder="Company Name"/>
      </Form.Group>
      <Form.Group >
        <Form.Label>What is the location of your company?</Form.Label>
        <Form.Control type="text" placeholder="Company Address" />
      </Form.Group>
      <Form.Group >
        <Form.Label> Which merchant category are you from?</Form.Label>
        <Form.Control as="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit" size="lg"> 
    Submit
  </Button>
  </Form>
  </div>
    )
}
export {Question1};

const Question2 = (props) => {
    const submit=(e)=>{
        e.preventDefault();
        props.Visibility(3);
     alert("hello");
    }
    return(
        <div style={props.display<2 ? {pointerEvents: "none", opacity: "0.4"} : {}}>
        <Form onSubmit={submit}>
        <Form.Group >
        <Form.Label> What was your annual revenue last year?(in $)</Form.Label>
        <Form.Control type="number" placeholder="$" />
      </Form.Group>
      
      <Form.Group >
        <Form.Label> How long has your business been in operations?</Form.Label>
        <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Years</Form.Label>
          <Form.Control type="number" placeholder="Number of years" />
        </Form.Group>
    
        <Form.Group as={Col}>
          <Form.Label>Months</Form.Label>
          <Form.Control type="number" placeholder="Number of months" />
        </Form.Group>
      </Form.Row>
      </Form.Group>

      <Form.Group >
        <Form.Label> What is the percentage of business owned by local shareholders(%)</Form.Label>
        <Form.Control type="number" placeholder="%" />
      </Form.Group>

<Button variant="primary" type="submit" size="lg">
            Submit
          </Button>
      
  </Form>
  </div>
    )
}
export {Question2};

const Question3 = (props) => {
  const submit=(e)=>{
      e.preventDefault();
      props.Visibility(4);
   alert("hello");
  }
  return(
      <div style={props.display<2 ? {pointerEvents: "none", opacity: "0.4"} : {}}>
      <Form onSubmit={submit}>
      
    <Form.Group >
    <Form.Label>What was your net profit last year?($)</Form.Label>
    <Form.Control type="number" placeholder="$" />
  </Form.Group>
    

  <Form.Group >
  <Form.Label>What was your cost of investment last year($)</Form.Label>
  <Form.Control type="number" placeholder="$" />
</Form.Group>
  
<Form.Group >
<Form.Label>How many units have you sold 2 months ago?</Form.Label>
<Form.Control type="number" placeholder="Number of units" />
</Form.Group>

<Form.Group>
<Form.Label>How many units have you sold last month?</Form.Label>
<Form.Control type="number" placeholder="Number of units" />
</Form.Group>


<Form.Group>
<Form.Label>What was your net sales last year?</Form.Label>
<Form.Control type="number" placeholder="Number of units" />
</Form.Group>


<Button variant="primary" type="submit" size="lg">
          Submit
        </Button>
    
</Form>
</div>
  )
}
export {Question3};


const Question4a = (props) => {
  const submit=(e)=>{
      e.preventDefault();
      props.Visibility(5);
   alert("hello");
  }
  return(
      <div style={props.display<3 ? {pointerEvents: "none", opacity: "0.4"} : {}}>
      <Form onSubmit={submit}>
      <Form.Group >
      <Form.Label>What was your monthly cost before the pandemic? (in $)</Form.Label>
      <Form.Control type="number" placeholder="$" />
      </Form.Group> 
   
  
      <Form.Group >
      <Form.Label>What was your monthly revenue before the pandemic? (in $)</Form.Label>
      <Form.Control type="number" placeholder="$" />
      </Form.Group>
  
      <Form.Group >
      <Form.Label>How much cash did the company have on hand on a monthly basis before the pandemic? (in $)</Form.Label>
      <Form.Control type="number" placeholder="$" />
      </Form.Group>


      <Form.Group >
      <Form.Label>How much outstanding debt did the company have on a monthly basis before the pandemic? (in $)</Form.Label>
      <Form.Control type="number" placeholder="$" />
      </Form.Group>

      <Form.Group >
      <Form.Label>What were the total monthly payment deferrals given to your customer before the pandemic? (in $)</Form.Label>
      <Form.Control type="number" placeholder="$" />
      </Form.Group>


      <Form.Group >
      <Form.Label>What were the total monthly payment deferrals received from your suppliers before the pandemic? (in $)</Form.Label>
      <Form.Control type="number" placeholder="$" />
      </Form.Group>

<Button variant="primary" type="submit" size="lg">
          Submit
        </Button>
    
</Form>
</div>
  )
}
export {Question4a};


const Question4b = (props) => {
    const submit=(e)=>{
        e.preventDefault();
        props.Visibility(6);
     alert("hello");
    }
    return(
        <div style={props.display<3 ? {pointerEvents: "none", opacity: "0.4"} : {}}>
        <Form onSubmit={submit}>
        <Form.Group >
        <Form.Label>What is your cost this month? (in $)</Form.Label>
        <Form.Control type="number" placeholder="$" />
        </Form.Group> 
     
    
        <Form.Group >
        <Form.Label>What is your revenue this month? (in $)</Form.Label>
        <Form.Control type="number" placeholder="$" />
        </Form.Group>
    
        <Form.Group >
        <Form.Label>How much cash does the company have on hand this month? (in $)</Form.Label>
        <Form.Control type="number" placeholder="$" />
        </Form.Group>
  

        <Form.Group >
        <Form.Label>How much outstanding debt does the company have this month? (in $)</Form.Label>
        <Form.Control type="number" placeholder="$" />
        </Form.Group>
  
        <Form.Group >
        <Form.Label>What is the total payment deferrals given to your customer this month? (in $)</Form.Label>
        <Form.Control type="number" placeholder="$" />
        </Form.Group>


        <Form.Group >
        <Form.Label>What is the total payment deferrals received from your suppliers this month? (in $)</Form.Label>
        <Form.Control type="number" placeholder="$" />
        </Form.Group>

<Button variant="primary" type="submit" size="lg">
            Submit
          </Button>
      
  </Form>
  </div>
    )
}
export {Question4b};

const Question5 = (props) => {
    const submit=(e)=>{
        e.preventDefault();
        props.Visibility(7);
     alert("hello");
    }
    return(
        <div style={props.display<4 ? {pointerEvents: "none", opacity: "0.4"} : {}}>
        <Form onSubmit={submit}>
        
        <Form.Group >
        <Form.Label>Do you have an online website?</Form.Label>
        <Form.Control as="select">
        <option>Yes</option>
        <option>No</option>
        </Form.Control>
        </Form.Group>

        <Form.Group >
        <Form.Label>Do you provide any online ordering and delivery services?</Form.Label>
        <Form.Control as="select">
        <option>Yes</option>
        <option>No</option>
        </Form.Control>
        </Form.Group>

        <Form.Group >
        <Form.Label>What social media platforms is your business on?
        (Checklist: Facebook, Facebook Messenger, Instagram, Pinterest, Others )</Form.Label>
        <Form.Control as="select">
        <option>Yes</option>
        <option>No</option>
        </Form.Control>
        </Form.Group>

<Button variant="primary" type="submit" size="lg">
            Submit
          </Button>
  </Form>
  </div>
    )
}
export {Question5};

const Question6a = (props) => {
  const submit=(e)=>{
      e.preventDefault();
      props.Visibility(8);
   alert("hello");
  }
  return(
      <div style={props.display<4 ? {pointerEvents: "none", opacity: "0.4"} : {}}>
      <Form onSubmit={submit}>
      
      <Form.Group >
      <Form.Label>How many suppliers do you have?</Form.Label>
      <Form.Control type="number" placeholder="Number" />
      </Form.Group>

      <Form.Group >
      <Form.Label>What is the name of your supplier company?</Form.Label>
      <Form.Control type="text" placeholder="Company Name"/>  
      </Form.Group>

      <Form.Group >
      <Form.Label>Is the supplier company open now?</Form.Label>
      <Form.Control as="select">
      <option>Yes</option>
      <option>No</option>
      </Form.Control>
      </Form.Group>

      <Form.Group >
      <Form.Label>Is the supplier in the same country or in another country?</Form.Label>
      <Form.Control as="select">
      <option>Yes</option>
      <option>No</option>
      </Form.Control>
      </Form.Group>

      <Form.Group >
      <Form.Label>Does your supplier provide world-wide delivery now?</Form.Label>
      <Form.Control as="select">
      <option>Yes</option>
      <option>No</option>
      </Form.Control>
      </Form.Group>

      <Form.Group >
      <Form.Label>Which global shipping services does your supplier use? </Form.Label>
      <Form.Control as="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>

      <Form.Group >
      <Form.Label>Does supplier provide local delivery?</Form.Label>
      <Form.Control as="select">
      <option>Yes</option>
      <option>No</option>
      </Form.Control>
      </Form.Group>

      <Form.Group >
      <Form.Label>Within what distance (x) is considered accessible to you?</Form.Label>
      <Form.Control type="number" placeholder="Enter Radius" />
      </Form.Group>

<Button variant="primary" type="submit" size="lg">
          Submit
        </Button>
</Form>
</div>
  )
}
export {Question6a};


const Question6b = (props) => {
  const submit=(e)=>{
      e.preventDefault();
      props.Visibility(9);
   alert("hello");
  }
  return(
      <div style={props.display<4 ? {pointerEvents: "none", opacity: "0.4"} : {}}>
      <Form onSubmit={submit}>
      
      <Form.Group >
      <Form.Label>Did your suppliers support you throughout the crisis?</Form.Label>
      <Form.Control as="select">
      <option>Yes</option>
      <option>No</option>
      </Form.Control>
      </Form.Group>

      <Form.Group >
      <Form.Label>Are your suppliers recovering?</Form.Label>
      <Form.Control as="select">
      <option>Yes</option>
      <option>No</option>
      </Form.Control>
      </Form.Group>

      <Form.Group >
      <Form.Label>Are your current suppliers able to satisfy your future requirements?</Form.Label>
      <Form.Control as="select">
      <option>Yes</option>
      <option>No</option>
      </Form.Control>
      </Form.Group>

      
<Button variant="primary" type="submit" size="lg">
          Submit
        </Button>
</Form>
</div>
  )
}
export {Question6b};




