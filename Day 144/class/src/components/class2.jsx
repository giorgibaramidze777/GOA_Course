import { useState, useEffect } from "react"

const class2 = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(`number rn: ${count}`)
    }, [count])

    return (
        <>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </>
    )
}

export default class2