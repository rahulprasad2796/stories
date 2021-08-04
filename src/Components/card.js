import React from 'react';

const Card = ({item, addProduct}) => {
    const {name, description} = item;
    return ( <div className="card">
        <h1>{name}</h1>
        <p>{description}</p>
        <button onClick={() => addProduct(item)} >Add to cart</button>
        <hr/>
    </div> );
}
 
export default Card;