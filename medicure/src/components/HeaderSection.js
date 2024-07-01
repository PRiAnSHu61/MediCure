import React from 'react'
import Bg from '../assets/intro.jpg'
import './Css/Header.css'
import HeartCare from '../assets/heartcare.svg'
import Allergy from '../assets/allergy.svg'
import Children from '../assets/children.svg'
import flu from '../assets/flu.svg'
import digestion from '../assets/digestion.svg'
import Pain from '../assets/pain.svg'
import pills from '../assets/pills.svg'
import Prescription from '../assets/prescription.svg'
import Skincare from '../assets/skincare.svg'
import Women from '../assets/women.svg'
const HeaderSection = () => {
    const Data=[
        {Image:HeartCare,Title:'Heart-Care'},
        {Image:Allergy,Title:'Allergy'},
        {Image:Children,Title:'Child-Care'},
        {Image:flu,Title:'Flu'},
        {Image:digestion,Title:'Digestion'},
        {Image:Pain,Title:'Body-Pain'},
        {Image:pills,Title:'VItamin-Pills'},
        {Image:Prescription,Title:'Prescriptions'},
        {Image:Skincare,Title:'Skincare'},
        {Image:Women,Title:'Women-Essentials'},
    ]
  return (
    <>
    <div className='HeaderContainer'>
        <span className='Header_text'>
            <span>
            MediCure - Healthcare
            <br></br> 
            at you doorstep
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
