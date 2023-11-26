import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import loginbg from '../assets/images/loginbg.jpg'

function Register() {
   return (
      <>
         <Navbar />
         <section class="relative flex flex-col-reverse md:flex-row flex-wrap lg:h-screen lg:items-center">
            <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
               <div class="mx-auto max-w-lg text-center">
                  <h1 class="text-2xl font-bold sm:text-3xl">Get started today!</h1>

                  <p class="mt-4 text-gray-500">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
                     eaque error neque ipsa culpa autem, at itaque nostrum!
                  </p>
               </div>

               <form action="" class="mx-auto mb-0 mt-8 max-w-lg space-y-4">
                  <div className="flex flex-row items-center justify-between">
                     <div>
                        <label for="Non" class="sr-only">Nom</label>
                        <div class="relative">
                           <input
                              type="text"
                              class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                              placeholder="Nom d'utilisateur"
                           />
                        </div>
                     </div>
                     <div>
                        <label for="prenom" class="sr-only">Prénom</label>

                        <div class="relative">
                           <input
                              type="text"
                              class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                              placeholder="Prénom d'utilisateur"
                           />
                        </div>
                     </div>
                  </div>
                  <div>
                     <label for="email" class="sr-only">Email</label>

                     <div class="relative">
                        <input
                           type="email"
                           class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                           placeholder="Enter email"
                        />

                        <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-4 w-4 text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                           >
                              <path
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 stroke-width="2"
                                 d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                              />
                           </svg>
                        </span>
                     </div>
                  </div>

                  <div>
                     <label for="password" class="sr-only">Password</label>

                     <div class="relative">
                        <input
                           type="password"
                           class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                           placeholder="Enter password"
                        />

                        <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-4 w-4 text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                           >
                              <path
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 stroke-width="2"
                                 d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 stroke-width="2"
                                 d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                           </svg>
                        </span>
                     </div>
                  </div>

                  <div className="flex flex-row items-center space-x-24 py-3">
                     <span className="text-gray-500 text-sm">Role</span>
                     <div className='flex flex-row space-x-12'>
                        <div className="flex flex-row space-x-2">
                           <input type="radio" id="crm" name="role" value="crm" />
                           <label for="crm">CRM</label>
                        </div>
                        <div className="flex flex-row space-x-2">
                           <input type="radio" id="stock" name="role" value="stock" />
                           <label for="stock">Stock</label>
                        </div>
                     </div>

                  </div>

                  <div class="flex items-center justify-between">
                     <p class="text-sm text-gray-500">
                        Already have an account?
                        <Link className="underline ml-2" to={'/login'}>Sign in</Link>
                     </p>

                     <button
                        type="submit"
                        class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                     >
                        Sign up
                     </button>
                  </div>
               </form>
            </div>

            <div class="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
               <img
                  alt="Welcome"
                  src={loginbg}
                  class="absolute inset-0 h-full w-full object-cover"
               />
            </div>
         </section>
      </>
   )
}

export default Register