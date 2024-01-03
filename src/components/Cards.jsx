import React, { useState } from 'react'
import image from "../assets/images/main.png"
import logo from "../assets/images/logo.png"
import { CiSaveDown2, CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { FcLike } from "react-icons/fc";

import "../styles/card.css"

function Cards({ item }) {
    const [isLiked, setIsLiked] = useState(item.isLiked)
    const [likeCount, setLikeCount] = useState(item.likes)
    const [isSingleLiked, setIsSingleLiked] = useState(false)
    return (
        <div className='max-w-[22%] flex flex-col gap-5'>
            <div className='relative card'>
                <img src={image} alt='image' className='rounded-[10px]' />
                <div className='absolute flex justify-between bottom-0 px-5 py-[30px] text-white card_text rounded-[10px]'>
                    <span className='w-[150px] truncate'>Gleam - FullScreen Slider</span>
                    <div className='flex items-center gap-2'>
                        <span className='flex items-center'><CiSaveDown2 className='cursor-pointer' /></span>
                        <span className='flex items-center' onClick={() => setIsLiked(!isLiked)}>{isLiked ? <FcLike className='cursor-pointer' /> : <CiHeart className='cursor-pointer' />}</span>
                    </div>
                </div>
            </div>
            <div className='flex'>
                <div className='flex items-center gap-2'>
                    <img src={logo} alt='logo' width="15%" className='rounded-[50%]' />
                    <span>MatchThemes</span>
                    <span className='bg-[#ccc] text-white px-1 text-[10px] font-bold rounded-[3px] cursor-pointer hover:bg-black hover:text-white'>PRO</span>
                </div>
                <div className='flex items-center gap-3 text-[14px]'>
                    <div className='flex items-center gap-1'>
                        {isSingleLiked ? <FcLike onClick={() => { setIsSingleLiked(!isSingleLiked) }} className='cursor-pointer' /> : <CiHeart onClick={() => { setIsSingleLiked(!isSingleLiked) }} className='cursor-pointer' />}
                        <span>{isSingleLiked ? likeCount + 1 : likeCount}</span>
                    </div>
                    <div className='flex items-center gap-1'>
                        <IoEyeOutline />
                        <span>{item.views + 1}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards