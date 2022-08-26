import React from 'react';

const Product = (props) => {
    const { handler, product } = props;
    const { name, img, seller, price, ratings } = product;
    return (
        <div className=' border-2 rounded relative'>
            <div className='p-1'>
                <img className='w-full rounded' src={img} alt="" />
            </div>
            <div className='p-3 mb-8'>
                <p className='text-xl mb-3'>{name}</p>
                <p className='mb-4'>Manufacturer: {seller}</p>
            </div>
            <button onClick={() => handler(product)} className='w-full rounded-b bg-orange-400 hover:bg-orange-500 absolute bottom-0 p-2'>Add To Cart</button>
        </div>
    );
};

export default Product;