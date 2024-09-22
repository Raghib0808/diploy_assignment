import React from 'react'

const Info = () => {
  return (
    <div className='info'>
            <div className='info_img'> 
                <img src='https://printify.com/pfh/assets/legacy/higher-profits.svg'/>
                <h2>Higher Profits</h2>
                <p>We offer some of the lowest prices in the industry because print providers continuously compete to win your business.</p>
            </div >
            <div className='info_img'>
                <img src='https://printify.com/pfh/assets/legacy/robust-scaling.svg'/>
                <h2>Robust Scaling</h2>
                <p>Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.</p>
            </div>
            <div className='info_img'>
                <img src='https://printify.com/pfh/assets/legacy/best-selection.svg'/>
                <h2>Best Selection</h2>
                <p>With 900+ products and top quality brands, you can choose the best products for your business.</p>
            </div>
    </div>
  )
}

export default Info
