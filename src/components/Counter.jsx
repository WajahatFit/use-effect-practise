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

     //random num between 0 & 10
  const randomNum = Math.floor(Math.random() * 10)


  useEffect(()=> {
    // eslint-disable-next-line 
    setCount(randomNum) 
    //setCount(0)
    // eslint-disable-next-line 
    setDynamicClass('text')
    // eslint-disable-next-line 
    console.log('All clean here. Count:', count, 'Class:', dynamicClass);
  }, [])


    const handleDecrese = () => {
      setCount(prev => prev - 1)
    }
  // Third iteration

    useEffect (() => {
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
    },[count])

  return (
    <div>
      <p>Counter: <span className={dynamicClass}>{count}</span></p>
      <button onClick={handleIncrease}>+ Increase</button>
      <button onClick={handleDecrese}>- Decrease</button>
    </div>
  )
}
