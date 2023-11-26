import React from 'react'
import Navbar from '../components/Navbar'
import checkmark from '../assets/images/checkmark.svg'
import categories from '../assets/images/categories.svg'
import clients from '../assets/images/clients.svg'
import shopping from '../assets/images/shopping.svg'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function Demande() {
   return (
      <>
         <Navbar />
         <section className='container mx-auto flex flex-col items-center justify-center mt-28'>
            <h2 className="max-w-xl text-gray-900 text-xl">Suivez les étapes suivantes pour finaliser votre etp</h2>
            <div className="flex flex-col items-center justify-center space-y-16 my-12">
               <div className="flex flex-col items-center justify-center space-y-6">
                  <h2 className="text-gray-800 text-xl font-medium">
                     Etape 1: Définissez les caractéristiques des catégories produits
                  </h2>
                  <div className="flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-lg">
                     <span className="text-gray-700 p-6 bg-gray-200 rounded-t-lg">Vos catégories de produit</span>
                     <div className="flex flex-row items-center justify-evenly p-6">
                        <img className='w-48' src={categories} alt="" srcset="" />
                        <div className=" flex flex-col items-center justify-center space-y-3">
                           <p className="text-gray-700 text-lg text-center max-w-sm">Cliquer sur le bouton pour définir les attributs qui décriront vos catégories de produits.</p>
                           <img width={50} src={checkmark} alt="" srcset="" />
                        </div>
                     </div>
                  </div>
               </div>
               <div className="flex flex-col items-center justify-center space-y-6">
                  <h2 className="text-gray-800 text-xl font-medium">
                     Etape 2: Définition des attributs des produits
                  </h2>
                  <div className="flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-lg">
                     <span className="text-gray-700 p-6 bg-gray-200 rounded-t-lg">Vos produits</span>
                     <div className="flex flex-row items-center justify-evenly p-6">
                        <img className='w-48' src={shopping} alt="" srcset="" />
                        <div className=" flex flex-col items-center justify-center space-y-3">
                           <p className="text-gray-700 text-lg text-center max-w-sm">Cliquer sur le bouton check pour définir la caractéristiques qui décriront vos produits.</p>
                           <Link to={'/products'} className='py-3 px-6 bg-gray-800 text-gray-50 rounded-full'>Cliquer ici</Link>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="flex flex-col items-center justify-center space-y-6">
                  <h2 className="text-gray-800 text-xl font-medium">
                     Etape 3: Définition des attributs des clients
                  </h2>
                  <div className="flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-lg">
                     <span className="text-gray-700 p-6 bg-gray-200 rounded-t-lg">Vos clients</span>
                     <div className="flex flex-row items-center justify-evenly p-6">
                        <img className='w-48' src={clients} alt="" srcset="" />
                        <div className=" flex flex-col items-center justify-center space-y-3">
                           <p className="text-gray-700 text-lg text-center max-w-sm">Cliquer sur le bouton check pour définir la caractéristiques qui décriront vos catégories de produits.</p>
                           <Link to={'/clients'} className='py-3 px-6 bg-gray-800 text-gray-50 rounded-full'>Cliquer ici</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <button className='py-3 px-6 bg-green-500 text-gray-50 rounded-lg'>Valider</button>
         </section>
         <Footer />
      </>
   )
}

export default Demande