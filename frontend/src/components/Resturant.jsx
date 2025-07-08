import { database } from "../config/appwriteconfig";
import { useEffect, useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import { storage } from "../config/appwriteconfig";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import queryString from "query-string";

function Resturant() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [response, setResponse] = useState(null);
  const [data, setdata] = useState();

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await database.listDocuments(
          "66263f3141d8bdc69c8c",
          "6627ac159d84c9c9b305"
        );

        if (res) {
          let newarray = res.documents.filter((i) => i.Name === id);
          //console.log(newarray);
          setResponse(newarray);
        }
      };

      fetchData();
    } catch (error) {
      console.log(error);
    }

    //console.log("response", response);
  }, []);

  useEffect(() => {
    try {
      const getimage = async () => {
        const x = await storage.listFiles("664786d100198bc9a452");

        let newarray = x.files.filter((i) => i.$id.includes(id) === true);
        setdata(newarray);

        // console.log(x.files);
        // setdata(x.files);
      };
      getimage();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const filter = () => {
    let newarray = data.filter((i) => i.$id.includes(id) === true);
    setdata(newarray);
  };

  const Order = (id) => {
    const user = {
      Email: response[0].Email,
      img_id: id,
    };

    const user_data = queryString.stringify(user);

    navigate(`/order/${user_data}`);
  };

  console.log("response", response);

  // response.name;

  return (
    <div>
      <h1>
        {response ? (
          //   <div className="relative bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 duration-300">
          //   <div className="h-40 bg-cover bg-center" style={{ backgroundImage: 'url(https://source.unsplash.com/600x400/?restaurant)' }}></div>
          //   <div className="p-4">
          //     <h3 className="text-2xl font-bold mb-2 text-indigo-600">{response[0].Name}</h3>
          //     <p className="text-gray-600 mb-1">Location: {response[0].Location}</p>
          //     <p className="text-gray-600">Type: {response[0].description}</p>
          //   </div>
          // </div>

          <div>
            <div class="mx-auto max-w-7xl px-3">
              <div class="mt-1 flex items-center">
                <div class="space-y-6 md:w-3/4 ">
                  <div class="max-w-max rounded-full border bg-gray-50 p-1 px-3"></div>
                  <p class="text-3xl font-bold text-red-500 md:text-4xl  ml-52 ">
                    {`🎉 Welcome to ${response[0].Name} Resturant 🎉`}
                  </p>
                  <p class="max-w-4xl text-base text-gray-700 md:text-xl">
                    Our Availaible Dishes Are Lested here
                  </p>
                  <div></div>
                </div>
              </div>

              {data ? (
                data.map((data) => (
                  <div
                    class="inline-flex w-70 h-70 "
                    onClick={() => Order(data.$id)}
                  >
                    <div class="rounded-md border ml-10 mt-10">
                      <img
                        src={storage.getFileView(
                          "664786d100198bc9a452",
                          data.$id
                        )}
                        alt="Victória Silva"
                        class="h-[350px] w-full rounded-lg object-cover "
                      />
                      <p class="mt-6 w-full px-2  font-semibold text-green-500 text-2xl">
                        Order
                      </p>
                      <p class="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
                        View Rating
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex items-center justify-center h-screen">
                  <div className="flex space-x-4">
                    <div className="w-8 h-8 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-8 h-8 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-8 h-8 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-screen">
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-400 rounded-full animate-bounce"></div>
              <div
                className="w-8 h-8 bg-gray-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="w-8 h-8 bg-gray-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </div>
          </div>
        )}
      </h1>
    </div>
  );
}

export default Resturant;
