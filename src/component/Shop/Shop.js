import React, { useEffect, useState } from 'react';
import useProducts from '../../hooks/UseProducts';
import { addToDb, getStoredCard } from '../../images/utilities/fakedb';
import Product from '../Product/Product';
import Productdetails from '../Productdetails/Productdetails';

const Shop = () => {
    const [products, setProducts] = useProducts();
    // const [products, setProducts] = useState([]);
    const [cards, setCards] = useState([])
    console.log(cards)


    // useEffect(() => {  
    //     fetch('products.json')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, []);


    useEffect(() => {
        // console.log('local storage first line', products) //see musa
        const storedCart = getStoredCard();
        const savedCard = [];
        for (const id in storedCart) {
            // console.log(id)
            const addedProduct = products.find(product => product.id === id)

            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCard.push(addedProduct);
            }
            setCards(savedCard);
        }

        // console.log('local storage finished ') // see musa
    }, [products])

    const handleAddToCart = (allProduct) => {
        let newCard = [];
        const exists = cards.find(card => card.id === allProduct.id);
        if (!exists) {
            allProduct.quantity = 1;
            newCard = [...cards, allProduct]
        }
        else {
            const rest = cards.filter(card => card.id !== allProduct.id);
            exists.quantity = exists.quantity + 1;
            newCard = [...rest, exists]
        }
        setCards(newCard);
        addToDb(allProduct.id);

    }

    return (
        <div className='grid grid-cols-12'>
            <div className="col-start-1 col-end-10 py-8 px-6">
                <p className='text-4xl text-center pb-8 font-semibold text-slate-600'>Choose brand that you want</p>
                <div className="grid md:grid-cols-3 gap-5">
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            handler={handleAddToCart}>
                        </Product>)
                    }
                </div>
            </div>
            <div className="bg-orange-300 col-start-10 col-end-13 px-4 py-8 ">
                {/* <p>length:{card.length}</p> */}
                <Productdetails card={cards}></Productdetails>
                {/* console.log(cards) */}
            </div>
        </div>
    );
};

export default Shop;