
const Banner = () => {
    return (
      <div className="bgImage">
        <div className="flex md:justify-center flex-col md:items-start container mx-auto py-24 space-y-5">
          <h3 className="lg:text-4xl text-2xl font-bold text-blue-700">
            One Stop Destination
          </h3>
          <h1 className="lg:text-5xl text-3xl  md:w-8/12 font-bold text-green-700 leading-relaxed">
            Provides Quality Products, Superior Service & Innovative Solutions{" "}
          </h1>
          <button className="bg-green-700 text-sky-50 font-bold  lg:px-14 lg:text-xl lg:py-4 py-2 px-8 hover:translate-x-6 transition-all ease-in delay-150 rounded-full shadow-lg shadow-green-500/50 sm:">
            <span> Know More</span>
          </button>
        </div>
      </div>
    );
};

export default Banner;