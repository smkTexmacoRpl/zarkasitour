// rafce
import React from 'react'
import { FaCameraRetro } from 'react-icons/fa'
import{ GiNotebook} from 'react-icons/gi'
import { IoIosSpeedometer } from "react-icons/io";

const skillsData = [
  {
    name: "Best Price",
    icon:(
      <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />

    ),
    link:"#",
    description: "lorem ipsum dolor sit amet consecture, adipisicing elit.",
    aosDelay:"0",
  },
  {
    name: "Fast and Safe",
    icon:(
      <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />

    ),
    link:"#",
    description: "lorem ipsum dolor sit amet consecture, adipisicing elit.",
    aosDelay:"500",
  },
  {
    name: "Experience Drives",
    icon:(
      <IoIosSpeedometer className="text-5xl text-primary group-hover:text-black duration-300" />

    ),
    link:"#",
    description: "lorem ipsum dolor sit amet consecture, adipisicing elit.",
    aosDelay:"1000",
  },
]


const Service = () => {
  return (
    <div className='py-14 dark:bg-black dark:text-white sm:min-h[600px] sm:grid sm:place-items-center'>
        <div className='container'>
            <div className='pb-12'>
                <h1 data-aos="zoom-in" className='text-3xl font-semibold text-center font-serif sm:text-4xl'>
                    Why Choose Us

                </h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 '>
              {
              skillsData.map((skill) => (
                <div
                 key={skill.name}
                 data-aos="fade-up"
                 data-aos-delay={skill.aosDelay}
                 className='card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark hover:bg-primary duration-300 text-white hover:text-black rounded-lg'
                
                >
                  <div className='grid place-items-center'>
                  {skill.icon}
                  </div>
                  <h1 className='text-2xl font-semibold font-serif'>{skill.name}</h1>
                  <p>{skill.description}</p>
                  <a href={skill.link}>Learn More</a>
                </div>
               ))
              
              }

            </div>
        </div>
    </div>
  )
}

export default Service
