import React from 'react'
import Bg from '../assets/intro.jpg'
import './Css/Header.css'
import HeartCare from '../assets/heartcare.svg'
import Diabetes from '../assets/diabetes.svg'
import Headache from '../assets/headache.svg'
import Cleaner from '../assets/Cleaner.svg'
import Lifter from '../assets/Lifter.svg'
import Painter from '../assets/Paint.svg'
import Plumber from '../assets/Plumber.svg'
import Technician from '../assets/Tech.svg'
import Makeup from '../assets/Makeup.svg'
import Pest from '../assets/Pest.svg'
const HeaderSection = () => {
    const Data=[
        {Image:HeartCare,Title:'Heart-Care'},
        {Image:Diabetes,Title:'Diabetes'},
        {Image:Headache,Title:'Headache'},
        {Image:Cleaner,Title:'Cleaner'},
        {Image:Lifter,Title:'Lifter'},
        {Image:Painter,Title:'Painter'},
        {Image:Plumber,Title:'Plumber'},
        {Image:Technician,Title:'Technician'},
        {Image:Makeup,Title:'Makeup'},
        {Image:Pest,Title:'Pest'},
    ]
  return (
    <>
    <div className='HeaderContainer'>
        <span className='Header_text'>
            <span>
            MediCure - You need it, we've got it
            </span>
        </span>
        <span className='background_header'>
            <img src={Bg} alt='bg' />
        </span>
    </div>
    <div className='Header_Feature'>
        <div className='Header_Feature_Heading'>
        You might like
        </div>
        <span className='Sepration'></span>
        <div className='Header_Feature_Container'>
            {Data.map((item,index)=>{
                return(
                    <>
            <div className='Feature_Card' key={index}>
                <div className='Feature_Card_Icon'>
                    <img src={item.Image} alt='Electrician' />
                </div>
                <div className='Feature_Card_Title'>
                    {item.Title}
                </div>
            </div>  
                    </>
                )
            })}
        </div>
        <div className='MoreCateg'>
            <span >More Categories</span>
        </div>
    </div>
    <div className='SeparationLine'></div>
    </>
  )
}

export default HeaderSection
