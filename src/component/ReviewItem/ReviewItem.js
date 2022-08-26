import React from 'react';

const ReviewItem = (props) => {
    const { name, img, seller, price, ratings, shipping } = props.card;
    return (
        <div className='flex border-gray-400 border-2 gap-4 mb-4 p-2 rounded w-3/4 mx-auto'>
            <div className=' rounded'>
                <img className='w-24' src={img} alt="" />
            </div>
            <div className='flex justify-between w-full items-center'>
                <div>
                    <p title={name}>{name.length > 20 ? name.slice(0, 20) + "..." : name}</p>
                    <p >Price:<span className='text-orange-300 '> ${price}</span></p>
                    <p >Shipping Charge: <span className='text-orange-300 '>${shipping}</span></p>
                </div>
                <div>
                    <button>delete</button>
                </div>
            </div>
        </div >

    );
};

export default ReviewItem;