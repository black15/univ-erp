import React from 'react'
import Navbar from '../components/Navbar'

function Products() {
   return (
      <>
         <Navbar />
         <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-24 mx-20">
            <table class="w-full text-md text-left rtl:text-right text-gray-500 dark:text-gray-400">
               <thead class="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                     <th scope="col" class="p-4">
                        <div class="flex items-center">
                           <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                           <label for="checkbox-all-search" class="sr-only">checkbox</label>
                        </div>
                     </th>
                     <th scope="col" class="px-6 py-3">
                        Produit
                     </th>
                     <th scope="col" class="px-6 py-3">
                        Conditionement
                     </th>
                     <th scope="col" class="px-6 py-3">
                        Prix
                     </th>
                     <th scope="col" class="px-6 py-3">
                        TVA
                     </th>
                     <th scope="col" class="px-6 py-3">
                        Stock
                     </th>
                     <th scope="col" class="px-6 py-3">
                        Stock Illimité
                     </th>
                     <th scope="col" class="px-6 py-3">
                        Details
                     </th>
                     <th scope="col" class="px-6 py-3">
                        Dispo
                     </th>
                  </tr>
               </thead>
               <tbody>
                  <tr class="text-md bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                     <td class="w-4 p-4">
                        <div class="flex items-center">
                           <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                           <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                        </div>
                     </td>
                     <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Echalote langue
                     </th>
                     <td class="px-6 py-4">
                        500g
                     </td>
                     <td class="px-6 py-4">
                        2.40$
                     </td>
                     <td class="px-6 py-4">
                        5.50%
                     </td>
                     <td class="px-6 py-4">
                        50
                     </td>
                     <td class="px-6 py-4">
                        Oui
                     </td>
                     <td class="px-6 py-4">

                     </td>
                     <td class="flex items-center px-6 py-4">
                        Oui
                     </td>
                  </tr>
                  <tr class="text-md bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                     <td class="w-4 p-4">
                        <div class="flex items-center">
                           <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                           <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                        </div>
                     </td>
                     <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Pomme de terre
                     </th>
                     <td class="px-6 py-4">
                        1 kg
                     </td>
                     <td class="px-6 py-4">
                        1.75$
                     </td>
                     <td class="px-6 py-4">
                        5.50%
                     </td>
                     <td class="px-6 py-4">
                        11
                     </td>
                     <td class="px-6 py-4">
                        Non
                     </td>
                     <td class="px-6 py-4">

                     </td>
                     <td class="flex items-center px-6 py-4">
                        Oui
                     </td>
                  </tr>
                  <tr class="text-md bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                     <td class="w-4 p-4">
                        <div class="flex items-center">
                           <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                           <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                        </div>
                     </td>
                     <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Courge pomme d'or
                     </th>
                     <td class="px-6 py-4">
                        1kg
                     </td>
                     <td class="px-6 py-4">
                        2.60$
                     </td>
                     <td class="px-6 py-4">
                        5.50%
                     </td>
                     <td class="px-6 py-4">
                        0
                     </td>
                     <td class="px-6 py-4">
                        Non
                     </td>
                     <td class="px-6 py-4">

                     </td>
                     <td class="flex items-center px-6 py-4">
                        Non
                     </td>
                  </tr>
                  <tr class="text-md bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                     <td class="w-4 p-4">
                        <div class="flex items-center">
                           <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                           <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                        </div>
                     </td>
                     <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Biettes
                     </th>
                     <td class="px-6 py-4">
                        0.5kg
                     </td>
                     <td class="px-6 py-4">
                        1.6$
                     </td>
                     <td class="px-6 py-4">

                     </td>
                     <td class="px-6 py-4">
                        0
                     </td>
                     <td class="px-6 py-4">
                        Non
                     </td>
                     <td class="px-6 py-4">

                     </td>
                     <td class="flex items-center px-6 py-4">
                        Non
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </>
   )
}

export default Products