import React from 'react';

const Productdetails = (props) => {
    // console.log(props)
    const { card } = props;
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const singleCard of card) {
        quantity = quantity + singleCard.quantity;
        total = total + singleCard.price * singleCard.quantity;
        shipping = shipping + singleCard.shipping * singleCard.quantity;
    }
    const tax = parseFloat(total * 10 / 100);
    const grand = (total + shipping + tax).toFixed(2)
    return (
        <div className='sticky top-40'>
            <p className='text-2xl font-medium mb-3'>Order Summary</p>
            <p className='text-base mb-3'>Selected Items:{quantity}</p>
            <p className='text-base mb-3'>Total price: ${total}</p>
            <p className='text-base mb-3'>Total shipping: ${shipping}</p>
            <p className='text-base mb-3'>Tax: ${tax}</p>
            <p className='text-xl mb-3'>Grand Total: ${grand}</p>


        </div>
    );
};

export default Productdetails;