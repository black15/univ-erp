import React from 'react'
import Navbar from '../components/Navbar'

function AddProduct() {
   return (
      <>
         <Navbar />
         <div class="bg-gray-100 py-32 px-10 min-h-screen">
            <div class="bg-white p-10 md:w-3/4 lg:w-1/2 mx-auto">

               <form action="">

                  <div class="flex items-center mb-5">
                     <label for="name" class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600">Produit</label>
                     <input type="text" id="name" name="name" placeholder="Name"
                        class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none" />
                  </div>

                  <div class="flex items-center mb-5">
                     <label for="conditionement" class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600">Condition</label>
                     <input type="text" id="conditionement" name="conditionement" placeholder="Unité"
                        class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"/>
                  </div>

                  <div class="flex items-center mb-5">
                     <label for="prix" class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600">Prix</label>
                     <input type="number" id="prix" name="prix" placeholder="100 dzd"
                        class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"/>
                  </div>

                  <div class="flex items-center mb-5">
                     <label for="tva" class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600">TVA</label>
                     <input type="number" id="tva" name="tva" placeholder="%"
                        class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"/>
                  </div>

                  <div class="flex items-center mb-5">
                     <label for="stock" class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600">Stock</label>
                     <input type="number" id="stock" name="stock" placeholder="500"
                        class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"/>
                  </div>

                  <div class="flex items-center mb-5">
                     <label for="disponible" class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600">Disponible</label>
                     <div className='flex flex-row space-x-12'>
                        <div className="flex flex-row space-x-2">
                           <input type="radio" id="oui" name="dispo" value="1" />
                           <label for="oui">Oui</label>
                        </div>
                        <div className="flex flex-row space-x-2">
                           <input type="radio" id="non" name="dispo" value="0" />
                           <label for="non">Non</label>
                        </div>
                     </div>
                  </div>

                  <div class="flex items-center mb-5">
                     <label for="categorie" class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600">Categorie</label>
                     <select id='categorie' class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none">
                        <option>Légumes</option>
                        <option>Cat2</option>
                        <option>Cat3</option>
                        <option>Cat4</option>
                     </select>
                  </div>

                  <div class="text-right">
                     <button class="py-3 px-8 bg-blue-500 text-white font-bold">Valider</button>
                  </div>

               </form>
            </div>
         </div>
      </>
   )
}

export default AddProduct