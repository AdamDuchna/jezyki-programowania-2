import React, { useEffect, useState } from 'react';

function AppButton(){
    const [count,setCount] = useState(0)
    const [tresc,setTresc] = useState("Jeszcze nie")
    useEffect(()=>{
        const wart=Math.floor(Math.random()*(50-10)+10);
        return wart
    },[])

    return (
        <>
        <h1>{count}</h1>
        <h2>{tresc}</h2>
        <h2>{wart}</h2>

        <button onClick={()=>{
            setCount(count+1)
            if(count>wart) setTresc("Za dużo");
            if(count == wart) setTresc("Trafione")}}>+1</button>
        <button onClick={()=>{
            setCount(count+5)
            if(count>wart) setTresc("Za dużo");
            if(count == wart) setTresc("Trafione")}}>+5</button>
        </>

    )
}
export default AppButton;