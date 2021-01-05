import React, { useState, useEffect } from "react";
import { useFetch } from './useFetch'

const App = props => {
   const [data, setData] = useState({});
   const [prevQuote,setPrevQuote] = useState({});

   const getData = async () => {
      const response = await fetch('../quotes.json');
      const data = await response.json()
         .catch(error => { alert('request time out check your connection') })
      const result = data.quotes.map(item => item)
      let random = Math.floor(Math.random() * result.length)
      const currentQuote = result[random]
      setData(currentQuote)
   }
   useEffect(() => {
      getData()
   }, [])


   function NextQuote(e) {
      e.preventDefault();
      getData()
      setPrevQuote(data)
   }
function previousQuote(){
   setData(prevQuote)
}
   return (
      <div className='container'>
        <h1 className='text-center text-capitalize my-3'>
            random quote
        </h1> 
        <div className=' d-flex card card-body'>
        <h5 className='text-center'>{data.quote
        }</h5>
        <p className=''>--{data.author}</p>
        </div>
        <div className='d-flex my-3 justify-content-between'>
        <button className='btn btn-info'>Tweet Quote</button>
        <button onClick={previousQuote} className='btn btn-secondary'>prev. quote</button>
        <button onClick={NextQuote} className='btn btn-success'>New Quote</button>
         </div>     
      </div>
   );
}
export default App;