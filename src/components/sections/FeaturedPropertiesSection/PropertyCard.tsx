type PropertyCardProps = {
  title: string;
  price: string;
  address: string;
  beds: number;
  baths: number;
  area: string;
  image: string;
  type: string;
};

export default function PropertyCard({
  title,
  price,
  address,
  beds,
  baths,
  area,
  image,
  type,
}: PropertyCardProps) {
  return (
    <div className="group cursor-pointer flex flex-col gap-4 transition-transform duration-300 hover:-translate-y-1 ">
      {/* IMAGE */}
      <div className="relative overflow-hidden rounded-[15px]">
        <img
          src={image}
          alt={title}
          className="h-[425px] w-full object-cover transition-transform duration-500 group-hover:scale-105 "
        />

        {/* BADGE */}
        <div className="absolute top-4 left-4 rounded-full bg-[#090C1B] px-4 py-2 text-5 font-medium text-white">
          {type}
        </div>
      </div>

      {/* TEXT */}
      <div className="space-y-2">
        <h5 className="font-semibold">{price}</h5>

        <p className="font-medium text-2">{title}</p>

        <p className="text-4 text-regular text-gray-500">{address}</p>

        <p className="text-5 text-regular text-gray-500">
          {beds} beds • {baths} bath • {area}
        </p>
      </div>
    </div>
  );
}
