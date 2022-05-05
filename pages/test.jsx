import React from 'react'
import Counter from '../components/elements/Counter'

function Test() {
    const [counter, setCounter] = React.useState(0) 
    const increment = React.useCallback(()=>{
        setCounter(c=>c+1)
    }, [setCounter])
    console.log("rendered")
    return (
        <div>
            <Counter increment={increment} />    
            {counter}
        </div>
    )
}

export default Test