import React from 'react'
import Container from '../../Container/Container'
import { Carousel } from 'flowbite-react'
import Service from '../Service/Service'
import "./Home.css"

const Home = () => {
  return (
    <>
    <Container>
   <section id='home'>
   <div className='home flex flex-col sm:flex-row justify-center items-center gap-4'>
        <div className="m-1 h-56 sm:h-64 xl:h-80 2xl:h-96 2xl:w-96 rounded-md sm:max-w-sm">
        <Carousel>
        <div className="relative flex flex-wrap h-full items-center justify-center">
            <img src="https://t4.ftcdn.net/jpg/04/21/47/27/240_F_421472730_tDiPNr9HZ3o17jGYqh3g7LIiqxTecUaL.jpg" className='h-full w-full' alt="" />
          <div className='absolute p-3'><h2 className="text-2xl font-bold text-blue-700"></h2>
          <p className='text-sm text-blue-600 font-bold'></p></div>
        </div>
        <div className="relative flex h-full items-center justify-center">
        <img src="https://t3.ftcdn.net/jpg/05/22/57/08/240_F_522570890_GPq8Ri2vvEe0O7AjbcLTnhOx0AKEgOta.jpg" alt="" />
        <div className='absolute p-3'><h2 className="text-2xl font-bold text-blue-700"></h2>
        <p className='text-sm text-blue-600 font-bold'></p></div>
        </div>
        <div className="relative flex h-full items-center justify-center">
        <img src="https://t4.ftcdn.net/jpg/05/21/82/59/240_F_521825916_6ABVenzWilxtYpxrrzHmOv9353FT9Rdu.jpg" alt="" />
        <div className='absolute p-3'><h2 className="text-2xl font-bold text-blue-700"></h2>
        <p className='text-sm text-blue-600 font-bold'></p></div>
        </div>
      </Carousel>
        </div>
       <div className='m-1 rounded-md sm:max-w-sm flex flex-col items-center justify-center p-4'>
        <h1 className='text_header'>Connect with our services</h1>
        <p className='text-sm p-3'>Elevate your business with Altos Technologies. As a software development company in India, we craft custom websites and software solutions to fit your unique business needs.
        </p>
        {/* <button className='btn'>Learn more <i className="fas fa-arrow-right"></i></button> */}
        <button className='box_shadow z-20 p-1 bg-gradient-to-r from-[#c25dd4] to-[#4b7394] text-white px-6 rounded-xl flex justify-center items-center gap-3 hover:bg-gradient-to-r  hover:from-[#4b7394] hover:to-[#c25dd4] transition-all ease-linear duration-300'>
        <p>click</p>
          <i className='fa fa-arrow-right'></i>
        </button>
       </div>
    </div>
    <div className="wave-container relative ">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#f5f5f5" fillOpacity="1" d="M0,192L30,213.3C60,235,120,277,180,272C240,267,300,213,360,176C420,139,480,117,540,101.3C600,85,660,75,720,106.7C780,139,840,213,900,208C960,203,1020,117,1080,112C1140,107,1200,181,1260,192C1320,203,1380,149,1410,122.7L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
</svg>
   </div>
   </section>
    </Container>
    <Service/>

    {/* <About/> */}
    </>
  )
}

export default Home
