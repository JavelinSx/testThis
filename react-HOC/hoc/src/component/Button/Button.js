import withCounter from "../../hoc/withCounter";
import withLogging from "../../hoc/withLogging";
function Button(props) {
    const { count, onButtonClick } = props
    return (
        <div>
            <button onClick={onButtonClick}>Click Me</button>
            <p>Click count: {count}</p>
        </div>
    );
}

export default withCounter(withLogging(Button));