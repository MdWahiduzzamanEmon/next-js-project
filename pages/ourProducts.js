
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../Components/Navbar/Navbar';

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
    return {
        props: { data: data }
    };
}

const ourProducts = ({data}) => {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 ">
          {data?.map((user) => (
            <>
              <div className="max-w-md py-4 px-8 bg-white shadow-xl rounded-lg my-20 hover:translate-y-2 transform delay-100">
                <div>
                  <h2 className="text-gray-800 text-3xl font-semibold">
                    {user?.name}
                  </h2>
                  <h4 className="text-gray-800 text-xl font-semibold">
                    {user?.email}
                  </h4>
                </div>
                <div className="flex justify-center mt-4">
                  <Link href={`/foodDetails/${user?.id}`}>
                    <a className="text-xl font-medium text-indigo-500">
                      Details
                    </a>
                  </Link>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    );
};

export default ourProducts;