import React from 'react'
import { useState } from 'react'

import { account } from '../config/appwriteconfig';

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



function Signin() {

   const [name,setname]=useState("");
   const[email,setemail]=useState("");
   const[password,setpassword]=useState("");

   const navigate=useNavigate();

   const fun=()=>{
    //console.log(name,email,password);


    const signupPromise= account.create(
      name,
      email,
      password,
    )

    signupPromise
                .then(
                  
                  function (res){
                    console.log(res);
                    navigate("/login");
                  },
                
                 function(err){
                  alert(err);
                }
              
              )




   }






  return (
    <section>
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <div class="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
        <div class="absolute inset-0">
          <img
           class="  rounded-md object-cover  mt-32 ml-20"
            src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        
      </div>
      <div class="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div class="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl">
            Sign up
          </h2>
          <p class="mt-2 text-base text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className=' text-blue-400 underline'>
             Login
            </Link>
          </p>

          <form action="#" method="POST" class="mt-8">

            <div class="space-y-5">
              <div>
                <label for="name" class="text-base font-medium text-gray-900">
                  {" "}
                  Full Name / Resturant Name (For Creating Seller Account  ) {" "}
                </label>
                <div class="mt-2">
                  <input
                    class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Full Name"
                    id="name"

                    onChange={(e) => setname(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label for="email" class="text-base font-medium text-gray-900">
                  {" "}
                  Email address{" "}
                </label>
                <div class="mt-2">
                  <input
                    class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                    id="email"
                    onChange={(e) => setemail(e.target.value)}

                    
                  />
                </div>
              </div>
              <div>
                <div class="flex items-center justify-between">
                  <label
                    for="password"
                    class="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Password{" "}
                  </label>
                </div>
                <div class="mt-2">
                  <input
                    class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    id="password"
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </div>
              </div>


              <div>
                <button
                  type="button"
                  class="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  onClick={fun}
                >
                  Create Account{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="ml-2"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  </section>
  

  )
}

export default Signin