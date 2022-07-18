import React,{useState} from "react";
import Counter from './counter'

const CountersList = () =>{
const initialState = [{id:0, value:0, name:"Ненужная вещь"},{id:1,value:1,name:"Ложка"},{id:2,value:0,name:"Вилка"},{id:3,value:0,name:"тарелка"},{id:4,value:0,name:"Набор минималиста"}]
const [counters,setCounter] = useState(initialState)
 const handleDelete = (id) =>{
   const newCounters = counters.filter((count)=> count.id !== id)
   setCounter(newCounters)
 }
const handleIncrement = (id) =>{
  const indexValue = counters.findIndex((count)=> count.id === id )
  const updateCounter = counters[indexValue]
  updateCounter.value++
  setCounter([...counters])

}
const handleDicrement= (id) =>{
  const indexValue = counters.findIndex((count)=> count.id === id )
  const updateCounter = counters[indexValue]
  updateCounter.value--
  setCounter([...counters])
}
const handleReset = () =>{
  setCounter(initialState)
}
return (<>
    {counters.map((count)=>{
      return (
        <Counter key={count.id} onDelete={handleDelete} onIncrement={handleIncrement} onDicrement = {handleDicrement} {...count}/>
      );
    })}
    <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Reset</button>
 </>)
}

export default CountersList;