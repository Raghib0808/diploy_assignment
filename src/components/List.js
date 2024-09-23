import React from 'react'

const List = () => {
  return (
    <div className='List'>
        <div className='Listitem'>
            <img className='limg' src='https://printify.com/pfh/assets/legacy/custom-products.png'/>
            <h2>CREATE</h2>
            <p className='i'>custom products</p>
            <p>Easily add your designs to a wide range of products using our free tools.</p>
        </div>
        <div className='Listitem'>
            <img src='https://printify.com/pfh/assets/legacy/your-products.png'/>
            <h2>SELL</h2>
            <p className='i'>on your terms</p>
            <p>Your choose the products, sale price and where to sell.</p>
        </div>
        <div className='Listitem'>
            <img src='https://printify.com/pfh/assets/legacy/fullfillment.png'/>
            <h2>WE HANDLE</h2>
            <p className='i'>fullfillment</p>
            <p>Once an order is placed, we automatically handle all the printing and delivery logistics.</p>
        </div>
      
    </div>
  )
}

export default List
