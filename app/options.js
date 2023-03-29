import React from 'react';
import {useState} from "react";
import { Contact } from './assets/svg/utilsSVG';
import Link from 'next/link';


const Contactoptions = ["Email", "Linkedln", "Skype", "Github"];



export default function Options() {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const onOptionClicked = value => () => {
      setSelectedOption(value);   
      setIsOpen(false);
      console.log(selectedOption);
    };

const toggling = () => setIsOpen(!isOpen);


  return (
    <>
  <div  className='mb-0 mt-48'>
  {isOpen && ( 
    <div className='flex flex-col text-start my-3 bg-white font-bold rounded-md w-full px-2 text-black'>
    {Contactoptions.map(option => (
      <button onClick={onOptionClicked(option)} key={Math.random()} className="py-1 hover:text-red-500">{option}</button>
      ))}
    </div>
    )}

    <div className='text-center items-center' onClick={toggling} >{selectedOption || "Contact"}</div>
</div>



   {/* <div className="relative">
        <div onClick={toggling} className="text-center p-5 font-bold text-md text-black rounded-full">
            {selectedOption || <Contact/>}
            </div>
    
            {isOpen && (        
          <div className="absolute bg-white font-bold rounded-md w-full px-2 text-black">
          {options.map(option => (
            <button onClick={onOptionClicked(option)} key={Math.random()} className="py-2 px-2 rounded-md hover:bg-[#000113] hover:text-yellow-400">{option}</button>
            
          ))}
          </div>        
        )}
      </div> */}


    </>
  )
}
