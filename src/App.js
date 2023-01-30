import React ,{useState} from 'react';
import './App.css';
function App() {

  
  const [items,setItems]=useState([]);
  const [newItem,setNewItem]=useState("");

  function addItem(){

    if(!newItem){
      alert("Enter an Item");
      return;
    }
    const item={
      id:Math.floor(Math.random()*1000),
      value: newItem
    }
    setItems(oldList=>[...oldList,item]);
    setNewItem("");
  }

  function deleteItem(id){
    const newArray =items.filter(item=>item.id !==id);
    setItems(newArray);
  }

  return (
    <div className="App" >
    <h1>Todo List</h1>

    <input 
    type="text" 
    placeholder="Add an Item"
    value={newItem}
    onChange={e=>setNewItem(e.target.value)}
    />

    <button onClick={()=>addItem()}>Add</button>

    <ul>
     {items.map(item=>{
      return(
        <li key={item.key}>{item.value}   <button className="delete-button" onClick={()=> deleteItem(item.id)}>❌</button></li> 
      )
     })}
    </ul>


   </div>
   
  );
}

export default App;
