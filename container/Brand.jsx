function Brand() {
  return (
    <div className="bg-gray-100  px-6 py-5 opacity-80">
      <div className="flex flex-wrap justify-center items-center gap-8">
        <img src="./audi-svgrepo-com.svg" alt="Audi" className="h-16 object-contain" />
        <img src="./chevrolet-svgrepo-com.svg" alt="Chevrolet" className="h-12 md:h-16 object-contain" />
        <img src="./mitsubishi-svgrepo-com.svg" alt="Mitsubishi" className="h-10 object-contain" />
        <img src="./land-rover-svgrepo-com.svg" alt="Land Rover" className=" h-14 object-contain" />
        <img src="./tesla.svg" alt="Tesla" className="h-10 object-contain" />
      </div>
    </div>
  );
}

export default Brand;
