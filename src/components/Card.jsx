import React, { useState } from 'react'
import { FcLikePlaceholder,FcLike  } from "react-icons/fc";
import { toast } from 'react-toastify';
const Card = ({data}) => {
    let dataId = data.id;
    const[likes,setLikes]=useState([]);
    function likeHandler(){
        if(likes.includes(dataId)){
            let newArray = likes.filter((cardId)=>{
               return  cardId !== dataId;
            })
            setLikes(newArray);
            toast.warning('liked removed')
          }else{
            setLikes([data.id]);
            toast.success('added')
        }
    }
  return (
    <div  className='card'>
      <div className='img'><img src={data.image.url} alt="" /></div>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <span className='like' onClick={likeHandler}>
       {
        likes.includes(data.id) ? <FcLike className='icon' />:<FcLikePlaceholder className='icon' />
       } 
      </span>
    </div>
  )
}

export default Card
