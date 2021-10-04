import React from 'react';
import { Card, Col, Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import './Service.css'

const Service = (props) => {
    const { name, cost, img, skill } = props.service;
    return (
        <div className="single-product">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Cost Required : {cost}</p>
            <p>Skill Required : {skill}</p>
        </div>
    );
};

export default Service;