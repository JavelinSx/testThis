import { useEffect } from "react"

const withLogging = (WrappedComponent) => {
    const WithLogging = (props) => {
        useEffect(() => {
            console.log(`This useEffect in withLogging count:${props.count}`)
        }, [props.count])
        return <WrappedComponent {...props} />;
    }
    return WithLogging;
}

export default withLogging;