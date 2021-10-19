import React from 'react';

const DisplayData = (props) => {
    const { name, img, cost, skill } = props.data;
    return (
        <div className="single-product font">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Cost Required : {cost}</p>
            <p>Skill Required : {skill}</p>

        </div>
    );
};

export default DisplayData;