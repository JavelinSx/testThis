import { useState } from "react"

const withCounter = (WrappedComponent) => {
    const WithCounter = (props) => {
        const [count, setCount] = useState(0)

        const handleCounter = () => {
            setCount(count + 1)
        }

        return <WrappedComponent count={count} onButtonClick={handleCounter} {...props} />

    };
    return WithCounter
}

export default withCounter;