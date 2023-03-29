import React from 'react'
import { HTMLLogo, HomeLogo, JSLogo, ReactLogo, CSSLogo } from '../assets/svg/utilsSVG'

export default function Skill() {
  return (
    <>
    <div className='flex flex-col text-center justify-between w-full h-screen text-white'>
      <div className='flex flex-row justify-between px-10'>

        <div className='text-start align-baseline mt-28'>
          <div className='text-[50px] text-red-500 mb-2'>Technologies I Know</div>
            <hr className='w-full bg-white mb-3'/>
                {/* {workExperience.map((item, index) => { */}
                    <div className='grid grid-cols-4 gap-8'>
                    <ReactLogo/>
                    <JSLogo/>
                    <HTMLLogo/>
                    <CSSLogo/>
                    <ReactLogo/>
                    <JSLogo/>
                    <HTMLLogo/>
                    <CSSLogo/>
                    <ReactLogo/>
                    {/* <JSLogo/>
                    <HTMLLogo/>
                    <CSSLogo/> */}

                        </div>
                {/* })}                               */}
        </div>
          <div className='mt-32'>
            <HomeLogo/>
            </div>
      </div>

    </div>
    </>
  )
}
