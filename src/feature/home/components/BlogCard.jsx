import { ArrowRightIcon } from 'lucide-react'
import React from 'react'

const BlogCard = ({ blog : { id , title , content , img , catergory , href , date}}) => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 p-2 border border-[#858585B2] shadow-lg rounded-lg hover:shadow-2xl transition-all ease-in-out duration-150 delay-75 '>
        <div>
            <img src={img} alt="" className='' />
        </div>
        <div className='space-y-10 p-5 '>
            <div className='flex items-center justify-start gap-4'>
                <button className='px-4 py-1 bg-[#04D53F] text-md text-[#FAFAFA] rounded-lg'>{catergory}</button>
                <h5 className='text-[#04D53F] text-sm'>{date}</h5>
            </div>
            <div className='space-y-5'>
                <h3 className='bitter text-paragraphColor text-md lg:text-fontSizeMiniHeader'>{title}</h3>
                <p className='text-sm text-paragraphColor'>{content}</p>
            </div>
            <button className='text-paragraphColor text-sm hover:underline'>Link <ArrowRightIcon className='w-4 h-4 inline-flex' /></button>
           
        </div>
    </div>
  )
}

export default BlogCard