import { MapPin } from "lucide-react";
import { KeyRound } from "lucide-react";
import Image from "next/image";

type AgentCardProps = {
  name: string;
  rating: number;
  role: string;
  city: string;
  propertiesSold: number;
  image: string;
};

export default function AgentCard({
  name,
  rating,
  role,
  city,
  propertiesSold,
  image,
}: AgentCardProps) {
  return (
    <div className="flex flex-col gap-2 bg-white  rounded-[10px]  max-w-[300px] w-full mx-auto">
      {/* AGENT IMAGE BLOCK */}
      <div className="relative overflow-hidden rounded-[10px] min-w-[300px] min-h-[315px]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          // sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>

      {/* AGENT NAME AND RATING BLOCK */}
      <div className="flex items-start mt-1 justify-between ">
        <p className="h7 font-semibold text-[#090C1B]">{name}</p>
        <span className="text-5 font-medium flex items-center gap-1">
          <Image
            src="\images\icons\star.svg"
            alt="star"
            width={20}
            height={20}
            className="inline"
          />
          {rating}
        </span>
      </div>

      {/* AGENT ROLE AND CITY BLOCK — выравнивание по левому краю */}
      <div className="mt-1 flex flex-col items-start text-5 font-regular text-gray-500">
        <p>{role}</p>
      </div>

      {/* AGENT'S PROPERTIES SOLD BLOCK */}
      <div className="mt-2 flex flex-col items-start text-6 font-regular text-gray-400">
        {/* Добавляем flex и items-center для выравнивания в одну строку */}
        <div className="flex items-center gap-1 mb-2">
          <MapPin className="h-5 w-5 " />
          <p>{city}</p>
        </div>
        <div className="flex items-center gap-1">
          <KeyRound className="h-5 w-5 " />
          <p>{propertiesSold} properties sold</p>
        </div>
      </div>

      {/* CONTACT AGENT BUTTON BLOCK */}
      <div className="flex w-full  mt-2">
        <button className="flex-1 rounded-full border border-black bg-white py-[6px] text-6 font-semibold text-black">
          Contact Agent
        </button>
      </div>
    </div>
  );
}
