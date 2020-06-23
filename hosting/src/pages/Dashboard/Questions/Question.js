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
        <Form.Label>Company name</Form.Label>
        <Form.Control type="text" placeholder="Company Name"/>
      </Form.Group>
      <Form.Group >
        <Form.Label>Company location</Form.Label>
        <Form.Control type="text" placeholder="Company Address" />
      </Form.Group>
      <Form.Group >
        <Form.Label>Merchant category</Form.Label>
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
        <Form.Label>Your anuual revenue last year(in $)</Form.Label>
        <Form.Control type="number" placeholder="anuual revenue last year" />
      </Form.Group>
      
      <Form.Group >
        <Form.Label>How long is your business been in operation</Form.Label>
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
        <Form.Label>Percentage of business owned by local shareholders(%)</Form.Label>
        <Form.Control type="number" placeholder="%" />
      </Form.Group>

      <Form.Group >
      <Form.Label>Net profit last year($)</Form.Label>
      <Form.Control type="number" placeholder="net profit last year" />
    </Form.Group>
      

    <Form.Group >
    <Form.Label>Cost of investment last year($)</Form.Label>
    <Form.Control type="number" placeholder="Cost of investment last year" />
  </Form.Group>
    
<Form.Group >
<Form.Row>
<Form.Group as={Col}>
  <Form.Label>Units sold this year</Form.Label>
  <Form.Control type="number" placeholder="Number of units" />
</Form.Group>

<Form.Group as={Col}>
  <Form.Label>Units sold last year</Form.Label>
  <Form.Control type="number" placeholder="Number of units" />
</Form.Group>
</Form.Row> 
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
        <div style={props.display<3 ? {pointerEvents: "none", opacity: "0.4"} : {}}>
        <Form onSubmit={submit}>
        <Form.Group >
        <Form.Label>Average monthly cost before pandemic(in $)</Form.Label>
        <Form.Control type="number" placeholder="$" />
        </Form.Group> 
     
    
        <Form.Group >
        <Form.Label>Average monthly cost after pandemic(in $)</Form.Label>
        <Form.Control type="number" placeholder="$" />
        </Form.Group>
    
        <Form.Group >
        <Form.Label>Average monthly revenue before pandemic(in $)</Form.Label>
        <Form.Control type="number" placeholder="$" />
        </Form.Group>
  

        <Form.Group >
        <Form.Label>Average monthly revenue after pandemic(in $)</Form.Label>
        <Form.Control type="number" placeholder="$" />
        </Form.Group>
  
        <Form.Group >
        <Form.Label>Cash company have in hands now(in $)(approx.)</Form.Label>
        <Form.Control type="number" placeholder="$" />
        </Form.Group>


        <Form.Group >
        <Form.Label>Outstanding debt company have now(in $)(approx.)</Form.Label>
        <Form.Control type="number" placeholder="$" />
        </Form.Group>

        <Form.Group >
    <Form.Label>Does the company allow customers to defer their payment?</Form.Label>
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
export {Question3};

const Question4 = (props) => {
    const submit=(e)=>{
        e.preventDefault();
        props.Visibility(5);
     alert("hello");
    }
    return(
        <div style={props.display<4 ? {pointerEvents: "none", opacity: "0.4"} : {}}>
        <Form onSubmit={submit}>
        
        <Form.Group >
        <Form.Label>Does your company have an online website for business?</Form.Label>
        <Form.Control as="select">
        <option>Yes</option>
        <option>No</option>
        </Form.Control>
        </Form.Group>

        <Form.Group >
        <Form.Label>Does your company provide online ordering/delivery?</Form.Label>
        <Form.Control as="select">
        <option>Yes</option>
        <option>No</option>
        </Form.Control>
        </Form.Group>

        <Form.Group >
        <Form.Label>Do you have any social media acoount?</Form.Label>
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
export {Question4};

const Question5a = (props) => {
  const submit=(e)=>{
      e.preventDefault();
      props.Visibility(6);
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
export {Question5a};


const Question5b = (props) => {
  const submit=(e)=>{
      e.preventDefault();
      props.Visibility(7);
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
export {Question5b};




