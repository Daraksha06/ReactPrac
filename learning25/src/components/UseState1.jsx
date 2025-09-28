import React from 'react'

const UseState1 = () => {
  var count =0;
  const increment=()=>{
    alert("increment called")
    count+=1;
     console.log("count = ",count)
  }
  const decrease = (x)=>{
    alert("decrement" + x)
  }
    return (
    <div style={{textAlign: "center"}}>
        <h1>count : {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrease(x)}>Decrement </button>     
        {/* this {decrerase(x)} wont work  */}
    </div>
  )
}

export default UseState1;
// The issue is because React does not re-render the component when you update a normal variable (var count).
// Here’s what’s happening in your code:
// var count = 0 is just a plain JavaScript variable.
// When you click the button, count += 1 increases its value and you see it in the console.
// BUT React doesn’t know that count has changed, so it doesn’t re-render the UI (<h1>count : {count}</h1> stays the same).
// React only re-renders when state or props change. That’s why you need to use the useState hook instead of a normal variable.