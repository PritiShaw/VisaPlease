import React from 'react';
import Button from 'react-bootstrap/Button';
import {Form} from "react-bootstrap";
class SupplierForm extends React.Component{
    state={
        answer1:"",
        answer2:"",
        answer3:"",
        answer4:"",
        answer5:"",
        answer6:"",
        answer7:"",
        answer8:"",
        answer9:"",
        answer10:""
    }
   
  submit = (e) => {
    e.preventDefault();
    const a=this.state;
    document.getElementById("myForm").reset();
    this.props.Add(a);
    
  }
changeHandler1=(e)=>{
    var a=e.target.value;
    this.setState(()=>({answer1:a}))
}
 
changeHandler2=(e)=>{
    var a=e.target.value;
    this.setState(()=>({answer2:a}))
}
changeHandler3=(e)=>{
    var a=e.target.value;
    this.setState(()=>({answer3:a}))
}
changeHandler4=(e)=>{
    var a=e.target.value;
    this.setState(()=>({answer4:a}))
}
changeHandler5=(e)=>{
    var a=e.target.value;
    this.setState(()=>({answer5:a}))
}
changeHandler6=(e)=>{
    var a=e.target.value;
    this.setState(()=>({answer6:a}))
}
changeHandler7=(e)=>{
    var a=e.target.value;
    this.setState(()=>({answer7:a}))
}
changeHandler8=(e)=>{
    var a=e.target.value;
    this.setState(()=>({answer8:a}))
}
changeHandler9=(e)=>{
    var a=e.target.value;
    this.setState(()=>({answer9:a}))
}
changeHandler10=(e)=>{
    var a=e.target.value;
    this.setState(()=>({answer10:a}))
}
    render()
    { 
       
        return(

            <div>
            <Form id="myForm" onSubmit={this.submit}>
          <br/><br/>
                <Form.Group >
                <Form.Label>What is the name of Supplier's company?</Form.Label>
                <Form.Control type="text" placeholder="Company Name" value={this.state.answer1} onChange={this.changeHandler1}/>
            </Form.Group>
                
            <br/><br/>
            <Form.Group >
            <Form.Label>Is supplier's company open now?</Form.Label>
            <Form.Control as="select" value={this.state.answer2} onChange={this.changeHandler2}>
                <option></option>
                <option>Yes</option>
                <option>No</option>
            </Form.Control>
            </Form.Group>
        
            <br/><br/>
            <Form.Group >
            <Form.Label>Is supplier is from another country?</Form.Label>
            <Form.Control as="select" value={this.state.answer3} onChange={this.changeHandler3}>
            <option></option>
            <option>Yes</option>
            <option>No</option>
            </Form.Control>
            </Form.Group>
            <br/><br/>
            
            <Form.Group >
            <Form.Label>Does supplier provide world wide delivery?</Form.Label>
            <Form.Control as="select" value={this.state.answer4} onChange={this.changeHandler4} >
            <option></option>
            <option>Yes</option>
            <option>No</option>
            </Form.Control>
            </Form.Group>
        
            <br/><br/>
        
            <Form.Group >
            <Form.Label> Which global shipping service is being used by supplier?</Form.Label>
            <Form.Control as="select" value={this.state.answer5} onChange={this.changeHandler5}>
            <option></option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            </Form.Control>
        </Form.Group>
        <br/><br/>
        
        
        <Form.Group >
            <Form.Label>Does supplier provide local delivery?</Form.Label>
            <Form.Control as="select" value={this.state.answer6} onChange={this.changeHandler6}>
            <option></option>
            <option>Yes</option>
            <option>No</option>
            </Form.Control>
            </Form.Group>
        
            <br/><br/>
            <Form.Group >
            <Form.Label>Within what distance is considered accessible for you to travel and buy your supplies?(in meters)</Form.Label>
            <Form.Control type="number" placeholder="meters" value={this.state.answer7} onChange={this.changeHandler7}/>
        </Form.Group>
        <br/><br/>
        <Form.Group >
        <Form.Label>Did your supplier support you throughout the pandemic?</Form.Label>
        <Form.Control as="select" value={this.state.answer8} onChange={this.changeHandler8}>
            <option></option>
            <option>Yes</option>
            <option>No</option>
            </Form.Control>
        </Form.Group>
        <br/><br/>
        <Form.Group >
        <Form.Label>Are your suppliers recovering?</Form.Label>
        <Form.Control as="select" value={this.state.answer9} onChange={this.changeHandler9}>
            <option></option>
            <option>Yes</option>
            <option>No</option>
            </Form.Control>
        </Form.Group>
        <br/><br/>
        <Form.Group >
        <Form.Label>Are your current supplier able to satisfy your future requirements?</Form.Label>
        <Form.Control as="select" value={this.state.answer10} onChange={this.changeHandler10}>
            <option></option>
            <option>Yes</option>
            <option>No</option>
            </Form.Control>
        </Form.Group>
        <br/><br/>
                
                <Button variant="primary" type="submit" size="lg">
                Add Supplier
                </Button>
  
            </Form>
            </div>
        )
    }
}


export default SupplierForm



