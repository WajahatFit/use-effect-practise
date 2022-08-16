import React, { useState, useEffect } from 'react'

export default function Counter() {

  const [count, setCount] = useState(0);
  const [dynamicClass, setDynamicClass] = useState('text');

  // First iteration
    const handleIncrease = () => {
      setCount(prev => prev + 1)
    }
  // Second and Fourth iteration
    //Colors of numbers
    switch(count) {
      case count <= 0:
        setDynamicClass('red')
        break;
      case count > 0 && count <= 5:
       setDynamicClass('orange') 
        break;
      case count > 5:
        setDynamicClass('green');
        break;
    default:
          setDynamicClass('text')
    }

     //random num between 0 & 10
  const randomNum = Math.floor(Math.random() * 10)


  useEffect(()=> {
    console.log('component mounting') 
    setCount(randomNum)
  }, [randomNum])


    const handleDecrese = () => {
      setCount(prev => prev - 1)
    }
  // Third iteration

    useEffect (() => {

    },[])

  return (
    <div>
      <p>Counter: <span className={dynamicClass}>{count}</span></p>
      <button onClick={handleIncrease}>+ Increase</button>
      <button onClick={handleDecrese}>- Decrease</button>
    </div>
  )
}
