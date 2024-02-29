import React, { useEffect, useState } from 'react'
import { api,filterButtonData } from './components/data'
import Cards from './components/Cards';
import FilterData from './components/FilterData';
const App = () => {
  const [filterButton,setFilterButton] = useState(filterButtonData);
  const [cardsData,setCardsData]=useState({});
  const [catagory,setCatagory] = useState('All')
  async function gettingApi(){
    try{
      let response = await fetch(api);
      let data = await response.json();
      setCardsData(data.data);
    }
    catch(e){
      console.log('nai chal raha')
    }
  }
  useEffect(()=>{
    gettingApi();
  },[])
  console.log(cardsData)
  return (
    <div className='container'>
      <div className='heading'>Subject Cards
      </div>
      <div className='main'>
        <FilterData filterButton={filterButton} catagory={catagory} setCatagory={setCatagory}/>
        <Cards cardsData={cardsData} catagory={catagory} setCatagory={setCatagory} />
      </div>
    </div>
  )
}

export default App
