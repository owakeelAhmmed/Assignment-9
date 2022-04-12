import React from 'react';
import useCard from '../../Hooks/useCard';
import Card from '../Card/Card';

const Reviews = () => {
    const [cards, setCards] = useCard();
    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4">
           {
               cards.slice(0,3).map(card =><Card
                key={card.id}
                card={card}
               ></Card>)
           }
        </div>
    );
};

export default Reviews;