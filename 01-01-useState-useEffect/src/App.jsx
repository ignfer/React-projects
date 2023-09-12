import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  /*State responsible of the product list, manage the updates on the
  product list*/
  const [productsState,setProductState] = useState([]);
  
  /*Manage the conditional rendering of the list*/
  const [show, setShow] = useState(true);
  
  /*Just to keep a number to asign the id of the new items*/
  const [count, setCount] = useState(0);

  /*List of emojis wich will be picked randomly whenever an item
  it's created*/
  const emojis = ['😀', '😍', '🥳', '🚀', '🌈', '🍕', '🍦', 
  '🎉', '🌺', '🐶', '🐱', '🐻', '🐙', '🦄', '🍩', '🌍'];

  /*Here we'll store info about the input field, for example it's current
  value when the 'add to the list' button is clicked*/
  const productInfo = useRef();

  /*We iterate through the products and return each on a h2 component,
  if keep the fragment because if we wanted to add for example a remove
  button it will be needed annyways*/
  const productItems = productsState.map(product =>
    <>
    <h2>{product.id} - {product.title} - {product.emoji}</h2>
    </>
  );

  /*Handles the creation and addition of new items to the product list*/
  const handleAddProduct = () => {
    const productName = productInfo.current.value;
    const productEmoji = emojis[Math.floor(Math.random() * emojis.length)];

    const newProduct = {title: productName,id: count, emoji: productEmoji};
    
    setProductState([...productsState, newProduct]);
    setCount(count + 1);
  }

  const handleShow = () => {
    setShow(!show);
  }

  return (
    <>
    <h1>Fruit items!</h1>
    <p>In this small project we <strong>create new items and add them to the list</strong> to be rendered
      , we manage <strong>up to 3 simple states</strong>, <strong>conditional rendering </strong>
      and I've had to <strong>research</strong> about how can I keep track of an Array's status. <strong>Try it!</strong> just write
      something on the textfield and click <strong>Add to the list</strong> we will pick a random emoji and
      keep the count.
    </p>
      
      {show ? (
        <>
          <section>
            {productItems}
          </section>
            <button className='button-hide' onClick={handleShow}>Hide list</button>
        </>
      ) : (
        <>
          <section>
            <h2>Nothing to show here!.</h2>
          </section>
            <button className='button-show' onClick={handleShow}>Show list</button>
        </>
      ) }

      <input type='text' ref={productInfo}></input>
      <button onClick={handleAddProduct}>Add to the list!</button>
    </>
  )
}

export default App
