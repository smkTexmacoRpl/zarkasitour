import React from 'react'
import Mobil1 from '../../assets/Mr1.png'
import Mobil2 from '../../assets/Mr2.png'
import Mobil3 from '../../assets/Mr4.png'

const MobilList =[

{
name: "BMW UX",
price:45,
image:Mobil1,
aosDelay:"0",
},
{
  name: "Inova ",
  price:40,
  image:Mobil2,
  aosDelay:"500",
  },
  {
    name: "Avanza",
    price:30,
    image:Mobil3,
    aosDelay:"1000",
    },

]

const Mobil = () => {
  return (
    <div className='pb-24 pt-12 bg-white dark:bg-dark dark:text-white text-center '>
      <div className="container">
        {}
        <h1 data-aos='fade-up' className='text-3xl sm:text-4xl font-semibold font-serif mb-3'>Car List</h1>
        <p data-aos='fade-up' className='text-sm pb-10'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos reprehenderit iusto esse dolores libero! Nesciunt magnam porro quis, iste cumque sint, debitis et quaerat reprehenderit id cupiditate excepturi? Autem, ad.
        </p>
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12'>
          {MobilList.map((data) =>{
            return(
            <div  key={data.name}
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
            className='space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group'>
           
              <div className='w-full h-[120px]'>
                <img  className='w-full h-[120px] object-contain sm:translate-x-8 group-hover:translate-x-16 duration-500' src={data.image} alt={data.name} />
              </div>
              <div className='space-y-2'>
                <h1 className='text-primary font-semibold text-2xl'>
                  {data.name} 
                </h1>
                <div className='flex justify-between items-center text-xl font-semibold'>
                <p >$ {data.price} / day</p>
                <a href='whatsapp://send?text=Hello&phone=+6285385232301' className='hover:bg-primary hover:p-2 hover:rounded-lg duration-300'>Detail</a> 
                </div>

              </div>
            </div>
            );

          })}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Mobil