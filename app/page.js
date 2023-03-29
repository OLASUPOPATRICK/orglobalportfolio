// "use client"
import React from 'react'
// import Dashboard from "./dashboard"
import {Image} from "next/image"
import { HomeLogo } from './assets/svg/utilsSVG'

export default function Home() {
  return (
    <>
    <div className='flex flex-col text-center justify-between w-full h-screen text-white'>
      <div className='flex flex-row justify-between px-10'>

        <div className='text-start font-bold align-baseline mt-64'>
          <div className='text-4xl'>Hi,</div>
            <div className='text-[50px] text-red-500'>Im Enoch Daniel,</div>
              <div >Full Stack Developer / Smart Contract Engineer / CEO</div>
        </div>
          <div className='mt-32'>
            <HomeLogo/>
            </div>
      </div>

    </div>
    </>
  )
}
