import React from 'react'
import { toast } from 'react-toastify'

const FilterData = ({filterButton,setCatagory,catagory}) => {
    function clickHandler(title){
        setCatagory(title)
        console.log(catagory)
        toast.success('chal gya')
    }
  return (
    <div className='buttons-div'>
     {
        filterButton.map((btnData)=>{
            return <button className='btn' onClick={()=>clickHandler(btnData.title)} key={btnData.id}>{btnData.title}</button>
        })
     }
    </div>
  )
}

export default FilterData
