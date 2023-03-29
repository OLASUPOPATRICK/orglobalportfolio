import React from 'react'
import { Home, HomeLogo, ReactLogo, Resume1, Resume2 } from '../assets/svg/utilsSVG'

const workExperience = [
    {
    id: 1,
    title: "EXPERIENCE",
    subtitle: "- Trainee Software Engineer",
    date: "July 2021-April 2022",
    company: "atvaSoft-Full-time",
    address: "Ahmedabad, Gujarat, India",

    subtitletwo: "- Internship",
    datetwo: "July 2021-April 2022",
    companytwo: "atvaSoft-Full-time",
    addresstwo: "Ahmedabad, Gujarat, India",
    },
    {
    id: 2,
    title: "EDUCATION",
    subtitle: "- Trainee Software Engineer",
    date: "July 2021-April 2022",
    company: "atvaSoft-Full-time",
    address: "Ahmedabad, Gujarat, India",

    subtitletwo: "- Internship",
    datetwo: "July 2021-April 2022",
    companytwo: "atvaSoft-Full-time",
    addresstwo: "Ahmedabad, Gujarat, India",
    },
];



export default function Resume() {
  return (
    <>
    <div className='m-5'>
      <div className='bg-[#000113] h-full my-5 py-5 text-white font-bold px-5'>
        <div className='text-[50px] text-white mb-2'>ENOCH DANIJEL</div>
            <hr className='w-full bg-white mb-3'/>

          <div className='grid grid-cols-2'>
            {workExperience.map((item, id) => (
              <div key={id} className='flex flex-col px-2 text-white font-bold'>
                <div className='text-2xl mb-2'>{item.title}</div>
                  <div className='text-red-500 mb-2'><p></p>{item.subtitle}</div>
                    <div className='bg-[#000329] px-5 rounded py-2 h-full mb-2 w-2/5'>{item.date}</div>
                      <div className='mb-1'>{item.company}</div>
                        <div className='mb-10'>{item.address}</div>

                    <div className='text-red-500 mb-2'><p></p>{item.subtitletwo}</div>
                      <div className='bg-[#000329] px-5 rounded py-2 h-full mb-2 w-2/5'>{item.datetwo}</div>
                        <div className='mb-1'>{item.companytwo}</div>
                          <div>{item.addresstwo}</div>
              </div>
        ))}
          </div>

        <hr className='w-full bg-white my-3'/>

        <div className='text-2xl text-white py-1'>PROFILE</div>
              
              <div className='flex flex-row'>
                <button><Resume1/></button>
                <button><Resume2/></button>
              </div>



        </div>    
    </div>
    
    </>
  )
}
