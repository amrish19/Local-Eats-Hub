import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { database } from '../config/appwriteconfig';
import { Query } from 'appwrite';
import { NavLink } from 'react-router-dom';
import { account } from '../config/appwriteconfig';
import { useNavigation } from 'react-router-dom';


function Test() {

    const navigate=useNavigate();
    

    const[location,setLocation]=useState("");
    const[type,settype]=useState("Veg");

    const[flag,setflag]=useState(0);


    const[user,setuser]=useState([]);

    const [data,setdata]=useState([]);

    const[res,setres]=useState(0);

  
   





    const fun= async ()=>{

      try{
      var x=await database.listDocuments("66263f3141d8bdc69c8c","6627ac159d84c9c9b305")
      console.log(x.documents);
      setdata(x.documents);
      setflag(1);
      //check();

      
  }

  catch(err){
       console.log(err);
  }

  
  
  }


    useEffect(()=>{

       const info= account.get();

       info.then(function(res){
        setuser(res);
        
        fun();
        console.log(res.$id);
       },function(err){
        navigate("/");
       })
    },[])
    

    const logout=async ()=>{
       try{
           var y=await account.deleteSession("current");
           navigate("/");
       }

       catch(err){
         alert(err);
       }
    }


    const filterItem_loaction=(val)=>{
      setLocation(val);
      let newarray=data.filter((i)=>i.Location===val);
      console.log(newarray);
      setdata(newarray);

    //   let newarray1=newarray.filter((i)=>i.Type===type);

    //  setdata(newarray1);


      if(newarray.length==0){
        setflag(21);
      }
      console.log(newarray);
    }


    const filterItem_type=(val)=>{
      console.log(val);
      //setLocation(val);
      let newarray=data.filter((i)=>i.type===val);
      console.log(newarray);
      setdata(newarray);

    //   let newarray1=newarray.filter((i)=>i.Type===type);

    //  setdata(newarray1);


      if(newarray.length==0){
        setflag(21);
      }
      console.log(newarray);
    }  
    
    

    const back=()=>{
      console.log("OKh");
    }


   


   




 // 121 here refers to state whwere object of data have no data 

 if(flag==21){
  return(
    <div class="py-10">
  <div class="text-center">
    <p class="text-base font-semibold text-black">404</p>
    <h1 class="mt-2 text-3xl font-bold tracking-tight text-black sm:text-5xl">
      No Resturant Found
    </h1>
    <p class="mt-4 text-base leading-7 text-gray-600">
      Sorry, we couldn&amp;apos:t find the page you&#x27;re looking for.
    </p>
    <div class="mt-4 flex items-center justify-center gap-x-3">
      <button
        onClick={fun}
        type="button"
        class="inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
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
          class="mr-2"
        >
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Go back
      </button>
      <button
        onClick={()=>navigate("/register")}
        type="button"
        class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Contact us
      </button>
    </div>
  </div>
</div>

  )
 }

 if(data.length==0){
  return(
    <div className="flex items-center justify-center h-screen">
      <div className="flex space-x-4">
        <div className="w-8 h-8 bg-gray-400 rounded-full animate-bounce"></div>
        <div className="w-8 h-8 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
        <div className="w-8 h-8 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
      </div>
    </div>
  )
 }
 
 else{
 
 return (

    <>

   

    

<div class="relative w-full bg-white">
  <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
    <div class="inline-flex items-center space-x-2">
      <span>
        <img width="70" height="100"src="data:image/png;base64,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" alt="" />
         
        
      </span>
      <span class="font-bold">Food App</span>
    </div>
    <div class="hidden grow items-start lg:flex">
      <ul class="ml-12 inline-flex space-x-8">
        <li>
          <NavLink 
            to="/home"
            
            
            className={({isActive})=>
          `
           ${isActive ? " text-red-600":" text-gray-800 text-xm font-bold"}
          `
        
        }
          >
            Home
          </NavLink>


        </li>

        
        <li>

          
        <NavLink 
            to="/about"
            

            className={({isActive})=>
          `
           ${isActive ? " text-red-600":" text-gray-800 text-xm font-bold"}
          `
        
        }
          >
            About
          </NavLink>


        </li>

        
       
         <li>
         <NavLink to={"/upload"}>
          Manage Hotel
        </NavLink>
        </li>
      

    

        

      


        <li
        className='text-xm font-bold'
        >
            <button onClick={logout}>Logout</button>
        </li>



        



          



       

      </ul>
    </div>
    <div class="hidden lg:block">
      <button
        onClick={logout}
        type="button"
        class=" ml-80 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Logout
      </button>
    </div>


    <div className=' ml-40 inline justify-items-center'>
      <img width="30%" height="30%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ80qxyaxn1HJyX0qkWjRI5oE1MBDl3XZsimhs_fn647Q&s" alt="" />
      <p>{user.$id}</p>
    </div>



    <div class="lg:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-6 w-6 cursor-pointer"
      >
        <line x1="4" y1="12" x2="20" y2="12"></line>
        <line x1="4" y1="6" x2="20" y2="6"></line>
        <line x1="4" y1="18" x2="20" y2="18"></line>
      </svg>
    </div>
  </div>
</div>






        <h1 className='text-center text-xl bg-gray-200 text-red-600'>Welcome ...{user.$id}...</h1>
       

   

    

    <section class="mx-auto w-full max-w-7xl px-4 py-4">
  <div class="flex flex-col space-y-4  md:flex-row md:items-center md:justify-between md:space-y-0">
    <div>
      <h2 class="text-xl font-semibold">Resturants List</h2>
      <p class="mt-1 text-sm text-gray-700">
        This is a list of all Rseturants. All are verified and nearby you are present 
      </p>
    </div>
    
    
    <select id="option" name="option" onChange={(e)=>filterItem_type(e.target.value)} className='bg-gray-200'>
        <option value="Veg">Select Type</option>
        <option value="veg">Veg</option>
        <option value="Non-Veg">Non-Veg</option>
        <option value="vegan">Vegan</option>
    </select>


    <select id="option" name="option" className='bg-gray-200'  onChange={(e)=>filterItem_loaction(e.target.value)}>
      {
      data.map(data=>(
        
        <option value={data.Location} >{data.Location}</option>
        
      ))
      }
        
    </select>


    <div>
      <button
        onClick={()=>fun()}
        type="button"
        class="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Show All Resturants
      </button>
    </div>

   
  </div>
  <div class="mt-6 flex flex-col">
    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div class="overflow-hidden border border-gray-200 md:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                >
                  <span>Resturants</span>
                </th>
                <th
                  scope="col"
                  class="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                >
                  Location
                </th>
                <th
                  scope="col"
                  class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                >
                  
                </th>
                <th
                  scope="col"
                  class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                >
                  Type
                </th>
                <th scope="col" class="relative px-4 py-3.5">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>

              
            </thead>
            {
            data.map(data=>(

            <tbody class="divide-y divide-gray-200 bg-white">
              <tr>
                <td class="whitespace-nowrap px-4 py-4">
                  <div class="flex items-center">
                    <div class="h-10 w-10 flex-shrink-0">
                      <img
                        class="h-10 w-10 rounded-full object-cover"
                        src="data:image/jpeg;base64,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"
                        alt=""
                      />
                    </div>
                    <div class="ml-4">
                      <button>
                      <div class="clickable-div text-sm font-medium text-gray-900 " onClick={()=>navigate(`/resturant/${data.Name}`)}>
                        {data.Name}
                      </div>
                      </button>
                      <div class="text-sm text-gray-700"></div>
                    </div>
                  </div>
                </td>
                <td class="whitespace-nowrap px-12 py-4">
                  <div class="text-sm text-gray-900 ">{data.Location}</div>
                  <div class="text-sm text-gray-700"></div>
                </td>
                <td class="whitespace-nowrap px-4 py-4">
                  <span class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                    {data.Loaction}
                  </span>
                </td>
                <td class="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                  {data.type}
                </td>
                
                <td class="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                  <a href="#" class="text-gray-700">
                    {data.description}
                  </a>
                </td>
              </tr>
            </tbody>
              ))
              }
          </table>
        </div>
      </div>
    </div>
  </div>
  
</section>





    
    
    </>
  )

}
}

export default Test