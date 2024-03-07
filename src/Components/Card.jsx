import React from 'react'

export default function Card(props) {
    const { name, surname, age } = props;

    return (
        <div>
            <h1>{name}</h1>
            <h2>{surname}</h2>
            <h3>{[age]}</h3>
        </div>
    )
};

