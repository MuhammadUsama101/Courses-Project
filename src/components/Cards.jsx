import React, { useState } from 'react'
import Card from './Card';
const Cards = ({cardsData,catagory}) => {
    const [ inputValue,setInputValue]=useState('');
    function inputHandler(e){
        setInputValue(e.target.value);
    }
    function creatingCards(){
        if(catagory === 'All'){
            let allCardsData=[];
            Object.values(cardsData).forEach((catagory)=>{
               catagory.filter((item)=>{
                return inputValue.toLowerCase() == '' ? item : item.title.toLowerCase().includes(inputValue);
               }).forEach((data)=>{
                allCardsData.push(data);
               }) 
            })
            return allCardsData;
        }else{
           return cardsData[catagory]
        }
    }
  return (
    <>
        <input type="text" onChange={inputHandler} placeholder='Search here' />
        <div className='cards-box'>
      {
        creatingCards().map((data)=>{
           return <Card data={data}/>
        })
      }
        </div>
    </>
  )
}

export default Cards
