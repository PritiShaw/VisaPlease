import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap";
import { uuid } from 'uuidv4'
const SupplierForm = (props) => {
    const [answer1, setAns1] = useState("");
    const [answer2, setAns2] = useState("");
    const [answer3, setAns3] = useState("");
    const [answer4, setAns4] = useState("");
    const [answer5, setAns5] = useState("");
    const [answer6, setAns6] = useState("");
    const [answer7, setAns7] = useState(0);
    const [answer8, setAns8] = useState("");
    const [answer9, setAns9] = useState("");
    const [answer10, setAns10] = useState("");

    const clearForm = () => {
        setAns1("");
        setAns2("");
        setAns3("");
        setAns4("");
        setAns5("");
        setAns6("");
        setAns7("");
        setAns8("");
        setAns9("");
        setAns10("");
    }
    const addSupplier = (e) => {
        e.preventDefault();
        if(!answer7.match(/^\d{1,}(\.\d{0,2})?$/))
        {
            alert("enter meters correctly.")
        }
        else
        {
        if(answer1.length > 0 &&answer2.length > 0 &&answer3.length > 0 &&answer4.length > 0 &&answer5.length > 0 &&answer6.length > 0 &&answer7.length > 0 &&answer8.length > 0 &&answer9.length > 0 && answer10.length > 0&& answer7>0)
        {       
        let supplier = {
            id:uuid(),
            name: answer1, 
            is_open: answer2,
            another_country: answer3,
            ships_worldwide: answer4,
            worldwide_courier: answer5,
            courier_ships_local: answer6,
            accessible_distance: answer7,
            courier_pandemic_support : answer8,
            suppliers_recovering: answer9,
            satisfy_future_requirements: answer10
        }
        props.setSupplierList([...props.supplierList,supplier])
        clearForm()
        }
        }
    }

    return (
        <div>
            <Form onSubmit={(e) => addSupplier(e)}>
                <Form.Group >
                    <Form.Label>What is the name of Supplier's company?</Form.Label>
                    <Form.Control type="text" placeholder="Company Name" value={answer1} onChange={(e) => setAns1(e.target.value)} />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Is supplier's company open now?</Form.Label>
                    <Form.Control as="select" value={answer2} onChange={(e) => setAns2(e.target.value)}>
                        <option></option>
                        <option>Yes</option>
                        <option>No</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group >
                    <Form.Label>Is supplier is from another country?</Form.Label>
                    <Form.Control as="select" value={answer3} onChange={(e) => setAns3(e.target.value)}>
                        <option></option>
                        <option>Yes</option>
                        <option>No</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group >
                    <Form.Label>Does supplier provide world wide delivery?</Form.Label>
                    <Form.Control as="select" value={answer4} onChange={(e) => setAns4(e.target.value)}>
                        <option></option>
                        <option>Yes</option>
                        <option>No</option>
                    </Form.Control>
                </Form.Group>


                <Form.Group >
                    <Form.Label> Which global shipping service is being used by supplier?</Form.Label>
                    <Form.Control as="select" value={answer5} onChange={(e) => setAns5(e.target.value)}>
                        <option></option>
                        <option>Fedex</option>
                        <option>UPS</option>
                        <option>USPS</option>
                        <option>other</option>
                    </Form.Control>
                </Form.Group>


                <Form.Group >
                    <Form.Label>Does supplier provide local delivery?</Form.Label>
                    <Form.Control as="select" value={answer6} onChange={(e) => setAns6(e.target.value)}>
                        <option></option>
                        <option>Yes</option>
                        <option>No</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group >
                    <Form.Label>Within what distance is considered accessible for you to travel and buy your supplies?(in meters )</Form.Label>
                    <Form.Control type="text" placeholder="In meters" value={answer7} onChange={(e) => setAns7(e.target.value)} />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Is your supplier supporting you?</Form.Label>
                    <Form.Control as="select" value={answer8} onChange={(e) => setAns8(e.target.value)}>
                        <option></option>
                        <option>Yes</option>
                        <option>No</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Are your suppliers recovering?</Form.Label>
                    <Form.Control as="select" value={answer9} onChange={(e) => setAns9(e.target.value)}>
                        <option></option>
                        <option>Yes</option>
                        <option>No</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Have your suppliers been consistently providing high quality goods?</Form.Label>
                    <Form.Control as="select" value={answer10} onChange={(e) => setAns10(e.target.value)}>
                        <option></option>
                        <option>Yes</option>
                        <option>No</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit" size="lg">
                    Add Supplier
                </Button>
            </Form>
        </div>
    )
}

export default SupplierForm
