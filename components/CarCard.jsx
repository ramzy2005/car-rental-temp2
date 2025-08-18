

export default function CarCard({ car }) {
  return (
    <div className="bg-white rounded-xl  overflow-hidden flex flex-col items-center ">
      <img
        src={car.image}
        alt={car.name}
       
        className="object-cover rounded-md h-[300px] w-full "
      />
      <p className="text-base  py-2">{car.name}</p>
    </div>
  );
}
