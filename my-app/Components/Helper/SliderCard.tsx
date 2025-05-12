import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

type Props = {
  name: string;
  image: string;
  role: string;
};

const SliderCard: React.FC<Props> = ({ image, name, role }) => {
  return (
    <div className="flex flex-wrap sm:flex-nowrap items-center space-x-10">
      <div className="h-full w-full">
        <Image 
          src={image}
          alt={`${name} profile image`}
          width={350}
          height={350}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="mt-6 mb-7">
        <div className="flex items-center">
          <FaStar className="xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-600" />
          <FaStar className="xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-600" />
          <FaStar className="xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-600" />
          <FaStar className="xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-600" />
          <FaStar className="xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-600" />
        </div>
        <p className="mt-6 text-gray-800/65 w-[95%] md:w-[80%] text-xs md:text-sm lg:text-base font-semibold">
          The Smart Road Mapper helped me understand exactly what steps to take to become a {role}. 
          The personalized learning path and flexible schedule made it easy to balance my studies with work.
          Highly recommend this platform to anyone serious about leveling up their career.
        </p>
        <div className="mt-7">
          <h1 className="text-xl text-black font-semibold">{name}</h1>
          <p className="text-lg text-black/60">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
