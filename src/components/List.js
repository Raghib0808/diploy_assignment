import React from 'react'

const List = () => {
  return (
    <div className='List'>
        <div className='Listitem'>
            <img src='https://printify.com/pfh/assets/legacy/custom-products.png'/>
            <h2>CREATE</h2>
            <h2>custom products</h2>
            <p>Easily add your designs to a wide range of products using our free tools.</p>
        </div>
        <div className='Listitem'>
            <img src='https://printify.com/pfh/assets/legacy/your-products.png'/>
            <h2>SELL</h2>
            <h2>on your terms</h2>
            <p>Your choose the products, sale price and where to sell.</p>
        </div>
        <div className='Listitem'>
            <img src='https://printify.com/pfh/assets/legacy/fullfillment.png'/>
            <h2>WE HANDLE</h2>
            <h2>fullfillment</h2>
            <p>Once an order is placed, we automatically handle all the printing and delivery logistics.</p>
        </div>
      
    </div>
  )
}

export default List
