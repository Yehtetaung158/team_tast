import React from 'react'
import img1 from    "../../../assets/HomeIMG/avatargroup.png";
import img2 from "../../../assets/HomeIMG/framestars.png";
import img3 from "../../../assets/HomeIMG/Icon.png"


const ReviewSection = () => {
  return (
    <div className='grid grid-cols-1  lg:grid-cols-3 pt-32'>
        <div className='flex flex-col items-center justify-center gap-5 p-5'>
            <div>
                <img src={img1} alt="" />
            </div>
            <div>
                <h3 className='text-center text-md lg:text-xl font-semibold text-paragraphColor p-5 '>Repurpose analytics with the possibility to come</h3>
            </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-5 p-5'>
            <div>
                <img src={img2} alt="" />
            </div>
            <div>
                <h3  className='text-center text-md lg:text-xl font-semibold text-paragraphColor p-5 '>5 out of 5 stars from 123 reviews from our users</h3>
            </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-5 p-5'>
            <div >
                <img src={img3} className='  mx-auto' alt="" />
            </div>
            <div>
                <h3  className='text-center text-md lg:text-xl font-semibold text-paragraphColor p-5 '>Repurpose analytics with the possibility to come up.</h3>
            </div>
        </div>

    </div>
  )
}

export default ReviewSection