import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    
       <div className='header__socials'>
           <a href="https://in.linkedin.com/in/kartik-vaghani-4a7046265?trk=people-guest_people_search-card" ><BsLinkedin/></a>
           <a href="https://github.com/Dhrupalpatelpatel" > <FaGithub/></a>
           <a href="https://www.instagram.com/kartik_vaghani_027?hl=en" > <FaInstagram/></a>
       </div>    
     
  )
}

export default HeaderSocials
