"use client"
import React from 'react'
import { HTMLLogo, HomeLogo, JSLogo, ReactLogo, CSSLogo } from '../assets/svg/utilsSVG'
import { Route, Router } from 'react-router-dom'
import SlideRouter, { initSlideRouter } from 'react-slide-animation-router'
import { createBrowserHistory } from 'history'
// import About from "../app/about"
// import Skill from "../../app/skill"



const history = createBrowserHistory()
initSlideRouter({
  history,
  routeAnimationDuration: 350
})

export default function MyWork() {
  return (
    <>
        <div className='m-5 px-10'>
          <div className='text-4xl text-red-500 mt-5 pt-10 mb-2'>Technologies I Know</div>
            <hr className='w-full bg-white mb-3'/>
                        </div>
               

            <SlideRouter>
      <Route path={'/'} component={Home} exact={true}/>
      <Route path={'/app/about'}  exact={true}/>
      <Route path={'/app/resume'} exact={true}/>
    </SlideRouter>



    </>
  )
}
