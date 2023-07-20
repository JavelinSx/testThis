function Card({ children }) {
    return (
        <li>
            <h2>{children.title}</h2>
            <p>{children.text}</p>
        </li>
    );
}

export default Card;