import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name:'Photography  (20GB)', price:'$9.99'},
    {name:'Acrobat Pro', price:'$14.99'},
    {name:'Premiere Pro', price:'$20.99'}
  ]
  const studentsId = [
    {name:'kuddus', roll:'123', group:'commerce'},
    {name:'rahim', roll:'253', group:'science'},
    {name:'abuilla', roll:'643', group:'arts'},
    {name:'rahman', roll:'353', group:'science'}
  ]
  return ( 
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <UsersData></UsersData>
        {
          studentsId.map(student => <Students student={student}></Students>)
        }
        <Products product={products[0]}></Products>
        <Products product={products[1]}></Products>
        
      </header>
    </div>
  );
}

// counter components
function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1)
  const handleDecrease = () => setCount(count - 1)
  return (
    <div>
      <h3>count: {count}</h3>
      <button onClick={handleIncrease}>Increse</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

// user components
function UsersData() {
  const[users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[]);

  return(
    <div>
      <h3>data: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>Email: {user.email}</li>)
        }
      </ul>
    </div>
  )
}

// students components
function Students(props) {
  const studentStyle = {
    border:'2px solid black',
    padding:'20px',
    margin:'10px'
  }
  const {name, roll, group} = props.student;
  return (
    <div style={studentStyle}>
      
      <h2>{name}</h2>
      <h3>{roll}</h3>
      <h3>{group}</h3>
    </div>
  )
}

// products components
function Products(props) {
  const productStyle = {
    border:'2px solid red',
    padding:'20px',
    margin:'10px'
  }
  const {name, price} = props.product
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h3>{price}</h3>
    </div>
  )
}

export default App;
