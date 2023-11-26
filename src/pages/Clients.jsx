import React from 'react'
import Navbar from '../components/Navbar'
import editsvg from '../assets/images/edit-ss.svg'
import taki from '../assets/images/delete-ss.svg'
import raouf from '../assets/images/add-user.svg'

function Clients() {
   return (
      <>
         <Navbar />
         <section className='h-screen bg-gray-200 mt-16 py-12'>
            <div className="mx-auto flex flex-row justify-around items-center px-20">
               <span className='text-gray-800 text-xl mt-12'>Vous pouvez ajouter un utilisateur en cliquant simplement sur l'icone a droite de votre ecran.</span>
               <img width={50} src={raouf} alt="" />
            </div>
            <div class="flex flex-col space-y-12 relative overflow-x-auto sm:rounded-lg mt-24 mx-20">
               <h2 className="text-gray-800 text-3xl font-medium">Vos Utilisateurs</h2>
               <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-lg text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                     <tr>
                        <th scope="col" class="p-4">
                           <div class="flex items-center">
                              <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                              <label for="checkbox-all-search" class="sr-only">checkbox</label>
                           </div>
                        </th>
                        <th scope="col" class="px-6 py-3">
                           Nom d'utilisateur
                        </th>
                        <th scope="col" class="px-6 py-3">
                           Prénom d'utilisateur
                        </th>
                        <th scope="col" class="px-6 py-3">
                           Email
                        </th>
                        <th scope="col" class="px-6 py-3">
                           Role
                        </th>
                        <th scope="col" class="px-6 py-3">
                           Modifier
                        </th>
                        <th scope="col" class="px-6 py-3">
                           Supprimer
                        </th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr class="text-lg bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td class="w-4 p-4">
                           <div class="flex items-center">
                              <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                              <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                           </div>
                        </td>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                           nameuser2
                        </th>
                        <td class="px-6 py-4">
                           user2
                        </td>
                        <td class="px-6 py-4">
                           user2@example.com
                        </td>
                        <td class="px-6 py-4">
                           Stock
                        </td>
                        <td class="px-6 py-4">
                           <img width={25} src={editsvg} alt="" srcset="" />
                        </td>
                        <td class="px-6 py-4">
                           <img width={25} src={taki} alt="" srcset="" />
                        </td>
                     </tr>
                     <tr class="text-lg bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td class="w-4 p-4">
                           <div class="flex items-center">
                              <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                              <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                           </div>
                        </td>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                           nameuser3
                        </th>
                        <td class="px-6 py-4">
                           user3
                        </td>
                        <td class="px-6 py-4">
                           user3@example.com
                        </td>
                        <td class="px-6 py-4">
                           CRM
                        </td>
                        <td class="px-6 py-4">
                           <img width={25} src={editsvg} alt="" srcset="" />
                        </td>
                        <td class="px-6 py-4">
                           <img width={25} src={taki} alt="" srcset="" />
                        </td>
                     </tr>
                     <tr class="text-lg bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td class="w-4 p-4">
                           <div class="flex items-center">
                              <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                              <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                           </div>
                        </td>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                           nameuser4
                        </th>
                        <td class="px-6 py-4">
                           user4
                        </td>
                        <td class="px-6 py-4">
                           user4@example.com
                        </td>
                        <td class="px-6 py-4">
                           Stock
                        </td>
                        <td class="px-6 py-4">
                           <img width={25} src={editsvg} alt="" srcset="" />
                        </td>
                        <td class="px-6 py-4">
                           <img width={25} src={taki} alt="" srcset="" />
                        </td>
                     </tr>
                     <tr class="text-lg bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td class="w-4 p-4">
                           <div class="flex items-center">
                              <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                              <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                           </div>
                        </td>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                           nameuser5
                        </th>
                        <td class="px-6 py-4">
                           user5
                        </td>
                        <td class="px-6 py-4">
                           user5@example.com
                        </td>
                        <td class="px-6 py-4">
                           Stock
                        </td>
                        <td class="px-6 py-4">
                           <img width={25} src={editsvg} alt="" srcset="" />
                        </td>
                        <td class="px-6 py-4">
                           <img width={25} src={taki} alt="" srcset="" />
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </section>
      </>
   )
}

export default Clients