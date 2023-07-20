import Card from "../Card/Card";

function Cards({ cards }) {

    return (
        <ul>
            {cards.map((card, index) => <Card key={index}>{card}</Card>)}
        </ul>
    );
}

export default Cards;