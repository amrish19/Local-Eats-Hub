import React, { useEffect } from 'react'
import { useState } from 'react'
import { storage } from '../config/appwriteconfig';
import { account } from '../config/appwriteconfig';
import { useNavigate } from 'react-router-dom';
import { database } from '../config/appwriteconfig';

function Upload() {

    const navigate=useNavigate();


    const [x,setx]=useState(0);

    const [pic,setpic]=useState();

    const [flag,setflag]=useState(0);

    const[images,setimages]=useState();

    const[user,setuser]=useState([]);

    const [data,setdata]=useState();


    const[res,setres]=useState(0);


    useEffect(()=>{            // use to get cuurent login user seesion for unique id logic 

        const info= account.get();
 
        info.then(function(res){
         setuser(res);
        
         console.log(res.$id);
        },function(err){
         navigate("/login");
        })
        
     },[])


     const create=()=>{
        const x=Math.floor(Math.random()*10000+1);
        console.log(user.$id+x);
     }


     
 
     const getdata= async ()=>{
       
      try{
      var x=await database.listDocuments("66263f3141d8bdc69c8c","6627ac159d84c9c9b305")
      console.log(x.documents);
      setdata(x.documents);
      
      

      
  }

  catch(err){
       console.log(err);
  }



  
  
  }


  useEffect(()=>{          // checking user is rehister as resturant or not 
    for(const k in data){
      console.log(data[k].Name);
   
      if(data[k].Name==user.$id){
       setres(1);
       console.log("yes");
       break;
      }
     }
   //filter();
  })

 
    


const fun= async (e)=>{     // upload a picture 
    e.preventDefault();

    setflag(1);

    if(pic!=null){

        try{
          const y=Math.floor(Math.random()*10000+1);
          const x= await  storage.createFile("664786d100198bc9a452",user.$id+y,pic);
          console.log(x);

          setflag(0);
        }


        catch(err){
            console.log(err);
        }
    }



}


useEffect(()=>{

 

    try{

const getimage=async ()=>{


    
    const x=await storage.listFiles("664786d100198bc9a452");
    console.log(x.files);
    setimages(x.files);
    //filter();
    }
   getimage();
  getdata();
  //filter();
}
    catch(err){
        console.log(err);
    }

  
    

  


},[])









  //console.log("upate ", images);

  //console.log("data",data,"user",user.$id);
  

  



// 664786d100198bc9a452  bucket id 





const filter=()=>{

  if(images){
  console.log("yes Called");
  console.log(user.$id);

  console.log("hello in Filter function ");
  let newarray=images.filter((i)=>i.$id.includes(user.$id)===true);
  setimages(newarray);
  setx(1);
  }
  
 
 }

 


 const remove=async(e)=>{


  try{
    const x=await storage.deleteFile("664786d100198bc9a452", e);
    alert("Removed Sucessfully");
    //getdata();
  }
  catch(err){
    console.log(err);
  }
  
 }







  if(flag==1){
    return (
        <div className="flex items-center justify-center h-screen">
      <div className="flex space-x-4">
        <div className="w-8 h-8 bg-gray-400 rounded-full animate-bounce"></div>
        <div className="w-8 h-8 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
        <div className="w-8 h-8 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
      </div>
    </div>
    )
  }

  else if(res==0){
    return(
      <div class="py-10">
  <div class="text-center">
    <p class="text-base font-semibold text-black">404</p>
    <h1 class="mt-2 text-3xl font-bold tracking-tight text-black sm:text-5xl">
    No Registered Resturant Found On current login Session
    </h1>
    <p class="mt-4 text-base leading-7 text-gray-600">
       Register Resturant First
    </p>
    <div class="mt-4 flex items-center justify-center gap-x-3">
      <button
        onClick={()=>navigate("/home")}
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
        onClick={()=> navigate("/register") }
        type="button"
        class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
       Register a Resturant 
      </button>
    </div>
  </div>
</div>

    )
  }



if(res==1){
  
 
  
  return (
    <>

    

    <h1 className=' mt-7  md-4 text-center gradient-text text2xl sm:text-2xl lg:text-4xl font-extrabold tracking-tight  transform transition  duration-100 hover:scale-100 ease-in-out animate-bounce'>Welcome "{user.$id}"  Resturant this your Admin page</h1>

        <div className=' inline-flex mt-10'>

        <input type="file" name="File" recquired  onChange={(e)=>{
            setpic(e.target.files[0]);
        }}/>


        <button className='bg-green-200 flex mr-3' type="submit" onClick={fun}>Upload file</button>
        
        <button onClick={()=>filter()}>Show Only Resturant uploaded Photos</button>

        

        </div>
        
        
         <h1 className='text-xl text-center mt-10'>Your recently Uploaded Photos </h1>


         

        {
     
     images ?   images.map(data=>(
 
 
     <div class="inline-flex w-70 h-70 ">
    
       <div class="rounded-md border ml-10 mt-10">
         <img
           src={storage.getFilePreview("664786d100198bc9a452", data.$id)}
           alt="Victória Silva"
           class="h-[350px] w-full rounded-lg object-cover "
         />
         <button className='bg-green-300' onClick={(e)=>remove(e.target.value)} value={data.$id}>
          Remove Item 
         </button>
         <p class="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
          View Rating  
         </p>
       </div>
       
       
       
       
       
      
     
       
     </div>
     ))
 
 
     :
 
 
     <div className="flex items-center justify-center h-screen">
     <div className="flex space-x-4">
       <div className="w-8 h-8 bg-gray-400 rounded-full animate-bounce"></div>
       <div className="w-8 h-8 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
       <div className="w-8 h-8 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
     </div>
   </div>
 
 
 
 }
        



         



        
    
    </>
  )
}


}

export default Upload