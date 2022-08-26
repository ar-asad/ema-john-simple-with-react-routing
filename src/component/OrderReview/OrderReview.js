import React from 'react';
import useCards from '../../hooks/UseCards';
import useProducts from '../../hooks/UseProducts';
import Productdetails from '../Productdetails/Productdetails';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cards, setCards] = useCards(products);
    return (
        <div className='grid grid-cols-12 '>
            <div className="col-start-1 col-end-10 py-8 px-6">
                <p className='text-4xl text-center pb-8 font-semibold text-slate-600'>Choose brand that you want</p>
                <div>
                    {
                        cards.map(card => <ReviewItem
                            key={card.id}
                            card={card}>
                        </ReviewItem>)
                    }
                </div>

            </div>
            <div className="bg-orange-300 col-start-10 col-end-13 px-4 py-8 mr-8 mt-8">
                {/* <p>length:{card.length}</p> */}
                <Productdetails card={cards}></Productdetails>
                {/* console.log(cards) */}
            </div>
        </div>
    );
};

export default OrderReview;