import React from 'react'
import Navbar from '../components/Navbar'
import crmImg from '../assets/images/crm-img.jpg'
import Footer from '../components/Footer'

function Home() {
   return (
      <>
         <Navbar />
         <section className='container mx-auto flex flex-col items-center justify-center'>
            <div className="flex flex-col items-center justify-center space-y-3 my-12">
               <h1 className="text-gray-900 text-4xl">Web ERP</h1>
               <div className="text-gray-900 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, et.</div>
            </div>
            <div className="max-w-2xl text-gray-900 font-semibold my-12">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla nemo natus repudiandae alias expedita voluptate exercitationem laboriosam amet odit maiores, a accusantium inventore ducimus quia debitis assumenda voluptates fugiat ea?</div>
            <h2 className="text-gray-900 text-xl font-semibold mb-12">New Modules</h2>
            <div className="w-full flex flex-row items-center justify-center space-x-12">
               <div className="flex flex-col items-center justify-center space-y-3 px-6 py-6 border-2 border-gray-200">
                  <img className='w-[350px]' src={crmImg} alt="" srcset="" />
                  <h1 className="text-gray-900 text-lg font-semibold">This is a title test</h1>
                  <p className="max-w-sm text-gray-700 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, perferendis ipsum! Maiores ea doloremque perspiciatis?</p>
               </div>
               <div className="flex flex-col items-center justify-center space-y-3 px-6 py-6 border-2 border-gray-200">
                  <img className='container w-[350px]' src={crmImg} alt="" srcset="" />
                  <h1 className="text-gray-900 text-lg font-semibold">This is a title test</h1>
                  <p className="max-w-sm text-gray-700 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, perferendis ipsum! Maiores ea doloremque perspiciatis?</p>
               </div>
               <div className="flex flex-col items-center justify-center space-y-3 px-6 py-6 border-2 border-gray-200">
                  <img className='w-[350px]' src={crmImg} alt="" srcset="" />
                  <h1 className="text-gray-900 text-lg font-semibold">This is a title test</h1>
                  <p className="max-w-sm text-gray-700 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, perferendis ipsum! Maiores ea doloremque perspiciatis?</p>
               </div>
            </div>
            <h2 className="text-gray-900 text-xl font-semibold my-12">Comment ça marche ?</h2>
            <div className="flex flex-row items-start justify-center space-x-6 px-20">
               <div className="w-1/2">
                  <img className='' src={crmImg} alt="" srcset="" />
               </div>
               <div className="w-1/2">
                  <p className="text-gray-900 text-lg">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo modi nemo illum odio fugit alias? Ex consectetur dolorum illo, vero quas esse maxime laboriosam doloribus cumque expedita. Sunt, hic neque?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ex eos repellendus eum, maiores voluptatum tempora aperiam sapiente impedit culpa, illum ad commodi aut necessitatibus, consectetur qui iure omnis quam?
                  </p>
               </div>
            </div>

         </section>
         <Footer />
      </>
   )
}

export default Home