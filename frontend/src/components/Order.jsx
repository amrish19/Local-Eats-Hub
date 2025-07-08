import React from "react";
import { useParams } from "react-router-dom";
import { storage } from "../config/appwriteconfig";
import axios from "axios";
import { useState, useEffect } from "react";
import { account } from "../config/appwriteconfig";
import { database } from "../config/appwriteconfig";

import { useLocation } from "react-router-dom";
import queryString from "query-string";

function Order() {
  const [user, setuser] = useState();
  const [flag, setflag] = useState(3);
  const [data, setdata] = useState();

  const { id } = useParams();
  console.log("Param =", id);

  const res = id.split("&").reduce((acc, param) => {
    // "res"  Contain response from preview page image id and email of restutant
    const [key, value] = param.split("=");
    acc[decodeURIComponent(key)] = decodeURIComponent(value);
    return acc;
  }, {});

  console.log(res);

  useEffect(() => {
    const info = account.get();

    info.then(function (res) {
      setuser(res);

      console.log(" Current user=", res);
    });
  }, []);

  const fun = async (Email) => {
    setflag(0);

    //console.log("email:",res.Email);

    const email = Email;

    // function for sendind backend data fro email

    let data = {
      Email: email,
      Subject: `Order Recieved from ${user.$id}`,
      text: `I would like to place an order for delivery: Delivery address: 123 Main Street, Apartment 4B, Springfield. Preferred delivery time: 7:00 PM. Contact information: ${user.$id}, You can Contact Me At ${user.email}, (123) 456-7890. Payment will be made by credit card. Thank you.`,
    };

    const res = await fetch("http://localhost:4000/api/data", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        //alert("now Confirmed sucessfully ");
        setflag(1); // Sucessfully ordered ;

        if (res.status > 199 && res.status < 300) {
          // alert("send Sucessfully !");
        }
      })

      .catch((err) => {
        console.log(err);
        alert("Something went wrong, Please try again later");
        setflag(2); // Server down or error occured
      });
  };

  let content;

  if (flag === 1) {
    content = (
      <div className="ml-10">
        <p className="text-2xl font-bold">Order Placed Sucessfully ! 🍔</p>
        <p>......Please Rate Us if You Like our Service...... </p>
      </div>
    );
  }
  if (flag == 0) {
    content = (
      <div className="ml-10">
        <div className="m-auto  animate-spin rounded-full  h-20 w-20 border-t-8  border-b-8 border-red-400"></div>{" "}
        <h3 className="text-xl font-bold text-gray-500 mt-5">
          Processing Your Order
        </h3>{" "}
      </div>
    );
  }

  if (flag == 2) {
    content = (
      <div className="ml-10">
        <p className="text-2xl font-bold"> Server Down Please Again Later</p>
        <p> Sry For the Inconvinience </p>
      </div>
    );
  }

  return (
    <>
      <div className=" mt-20 ml-20  inline-flex">
        <img
          width="40%"
          height="40%"
          src={storage.getFileView("664786d100198bc9a452", res.img_id)}
          alt=""
        />

        <button
          onClick={() => fun(res.Email)}
          className=" h-10 w-30  ml-24 px-6 py-2 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transform hover:-translate-y-1 hover:scale-105 transition duration-300 ease-in-out"
        >
          {" "}
          Order now{" "}
        </button>

        <button className=" h-10 w-30 ml-10 flex items-center px-6 py-2 bg-green-400 text-white font-bold rounded-full shadow-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75 transform hover:-translate-y-1 hover:scale-105 transition duration-300 ease-in-out">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.21c.969 0 1.371 1.24.588 1.81l-3.41 2.47a1 1 0 00-.364 1.118l1.287 3.971c.3.921-.755 1.688-1.54 1.118l-3.412-2.47a1 1 0 00-1.175 0l-3.412 2.47c-.784.57-1.84-.197-1.54-1.118l1.287-3.971a1 1 0 00-.364-1.118L2.115 9.397c-.783-.57-.38-1.81.588-1.81h4.21a1 1 0 00.95-.69l1.286-3.97z" />
          </svg>
          Rate Us
        </button>

        {content}
      </div>
    </>
  );
}

export default Order;
