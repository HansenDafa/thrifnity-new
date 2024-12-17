"use client"
import { useState } from "react";
import Image from "next/image";
import LikeButton from "../button/LikeButton";

const ProductCard = ({
  imageSrc,
  title,
  description,
  seller,
  location,
  price,
  distance,
}) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="h-fit w-full p-3 bg-white rounded-xl flex gap-6 shadow-lg">
      <div className="rounded-xl overflow-hidden h-fit w-1/4 aspect-square">
        <Image
          src={imageSrc}
          alt=""
          className="scale-110 h-fit w-fit object-cover"
        />
      </div>
      <div className="flex flex-col gap-1 w-3/4">
        <h3 className="font-bold text-lg truncate overflow-hidden text-ellipsis whitespace-nowrap">
          {title}
        </h3>
        <p className="text-sm tracking-wider font-thin truncate overflow-hidden text-ellipsis whitespace-nowrap">
          {description}
        </p>
        <p className="font-semibold truncate overflow-hidden text-ellipsis whitespace-nowrap">
          {seller}
        </p>
        <p className="text-sm font-thin truncate overflow-hidden text-ellipsis whitespace-nowrap">
          {location} - <span className="font-bold">{distance}</span>
        </p>
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold text-custom-sage">{price}</p>
          <LikeButton liked={liked} onToggle={toggleLike} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
