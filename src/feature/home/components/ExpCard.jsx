import React from 'react'
import { Link } from 'react-router-dom'

const ExpCard = ({ user: { img, title, content,href }}) => {
  return (
    <div className='bg-[#f9fbf8b2] border border-[#d1d9e2] px-[32px] py-[24px] rounded-[5px] space-y-[15px] shadow-lg max-lg:m-5 hover:-translate-y-3 hover:rotate-3 hover:scale-125 transition-all ease-in-out duration-100 delay-75'>
        <div className='flex justify-between items-center'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <Link to={href} className='text-paragraphColor border border-HLHeaderColor px-[18px] py-[8px] rounded-[5px] hover:text-white  hover:bg-HLHeaderColor transition-all duration-100 delay-75 '>View All</Link>
            </div>
        </div>
        <div className='space-y-[8px]'>
            <h1 className='font-bold text-paragraphColor'>{title}</h1>
            <p className='text-paragraphColor'>{content}</p>
        </div>
    </div>
  )
}

export default ExpCard