import React from 'react'
// import "./style.css"

// const bearsPicture = new URL ("./images/img1.jpg",import.meta.url)
const Main = () => {
  return (
    <div className="main">
       
       <div className="col col1">
        <h2>
          Your Foods
        </h2>
        <p>In here, healty foods are available. come and eat lets fun <br />
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
         Lorem Ipsum has been the industry's standard dummy text ever since the  <br />
        when an unknown printer took a galley of type and scrambled it to make a type <br />
        specimen book. 
        </p>
         <button type='button'> Foods</button>
       </div>
       <div className='col'>
        <div className='card card1'></div>
         <div className='card card2'></div>
        
      </div>

     </div>
  );
}

export default Main;