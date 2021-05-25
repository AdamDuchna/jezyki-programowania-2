import React, { useEffect, useState } from 'react';

function AppButton(){
    const [count,setCount] = useState(0)
    const [tresc,setTresc] = useState("Jeszcze nie")
    const [wart,setWart] = useState(Math.floor(Math.random()*(50-10)+10))
    const [seconds,SetSeconds] = useState(0)
    function reset(){
        SetSeconds(0)
    }

    useEffect(()=>{ setInterval(()=>{ SetSeconds(seconds=>seconds + 1)},1000)},seconds)
    if(seconds == 5){
        setCount(0)
        setTresc("Jeszcze nie")
        reset()
    }



    return (
        <>
        <h1>{seconds}s</h1>
        <h1>{count}</h1>
        <h2>{tresc}</h2>
        <h2>{wart}</h2>

        <button onClick={()=>{
            if(count+1 >=wart) setTresc("Za dużo")
            if(count+1 == wart) setTresc("Trafione")
            setCount(count+1)
            reset()
           }}>+1</button>
        <button onClick={()=>{
            if(count+5 >= wart) setTresc("Za dużo")
            if(count+5 == wart) setTresc("Trafione")
            setCount(count+5)
            reset()

            }}>+5</button>
        
        <button onClick={()=>{
            setCount(0)
            setTresc("Jeszcze nie")
            reset()
            }}>Reset number</button>
        </>

    )
}
export default AppButton;