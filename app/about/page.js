import React from 'react'
import { HomeLogo } from '../assets/svg/utilsSVG'
import AboutContent from "../about/aboutcontent"
export default function About() {
  return (
    <>
    <div className='flex flex-col text-center justify-between w-full h-screen text-white'>
      <div className='flex flex-row justify-between px-10'>

        <div className='text-start align-baseline mt-28'>
          <div className='text-[50px] text-red-500 mb-2'>About Me</div>
            <hr className='w-full bg-white mb-3'/>
            <AboutContent/>
        </div>
          <div className='mt-32'>
            <HomeLogo/>
            </div>
      </div>

    </div>
    </>
  )
}
