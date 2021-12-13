import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../Components/Navbar/Navbar';
export const getStaticPaths = async () => {
     const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    const paths = data.map((item) => {
        return {
            params: {
            id: item?.id.toString(),
        }
        }
    });
    return {
        paths,
        fallback: false
    };
}


export const getStaticProps = async (context) => { 
    const id = context.params.id;
    console.log(id)
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const data = await res.json();
    console.log(data);
    return {
        props: {
            data,
        }
    };
}
const FoodDetails = ({ data }) => {
    
    return (
      <div>
        <Navbar />
        <div className="container mx-auto text-center mt-10 flex justify-center  ">
          <div className="max-w-md py-4 px-8 bg-white shadow-xl rounded-lg my-20 hover:translate-y-2 transform delay-100 bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:bg-gradient-to-l">
            <div className="space-y-5">
              <h2 className=" text-3xl font-semibold">Name: {data?.name}</h2>
              <h4 className=" text-xl font-semibold">
                UserName: {data?.username}
              </h4>
              <h4 className=" text-xl font-semibold">
                Address:
                <h4>
                  {data?.address?.street}
                  {data?.address?.suite}
                  {data?.address?.city}
                  {data?.address?.zipcode}
                </h4>
              </h4>
              <h4 className=" text-xl font-semibold">
                Phone:
                <h4>{data?.phone}</h4>
              </h4>
              <h4 className=" text-xl font-semibold">
                Web-Site:
                <span>{data?.website}</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
};

export default FoodDetails;