import React from "react";
import { Button , Alert, Card } from 'react-bootstrap';

function ContactCard(props) {
    console.log(props)
    return (
        <div className="contact-card">
            <div>
                <Card>
                    <Card.Img src={props.contact.imgUrl}/>
                    <Card.Title>{props.contact.name}</Card.Title>
                    <Card.Body>
                        <p>Phone: {props.contact.phone}</p>
                        <p>Email: {props.contact.email}</p>
                    </Card.Body>
                    <Button variant = "primary">Oleo de macaco</Button>
                </Card>             
                <Alert variant="success">è meia noite, horario do oleo de macaco</Alert>
            </div>
        </div>
    )
};

export default ContactCard;