import { useEffect, useState } from "react"
import { getStoredCard } from "../images/utilities/fakedb";

const useCards = (products) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const storedCart = getStoredCard();
        const savedCard = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                addedProduct.quantity = storedCart[id];
                savedCard.push(addedProduct);
            }
            setCards(savedCard);
        }
    }, [products])

    return [cards, setCards];
}

export default useCards;
