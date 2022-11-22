import React, { useState } from 'react'
import { MdOutlineFavoriteBorder as FavoriteBorder, MdFavorite as Favorite } from "react-icons/md"
import { Link } from 'react-router-dom';
import config from '../../../config';

const Items = ({ item }) => {
  const [showName, setShowName] = useState(false);

  if (item)
    return (
      <Link to={config.routes.product + "/" + item.slug} >
        <div className="relative w-[150px] overflow-y-visible">
          <div
            onMouseLeave={() => setShowName(false)}
            className={`${!showName && "hidden"} absolute bg-BlackCool/25 text-white top-0 left-0 w-full h-full px-2x rounded-[6px] flex justify-center items-center `}>
          </div>
          <p>{item.productNamej}</p>
          <FavoriteBorder size={25} className="absolute left-2 top-2 text-white font-bold z-10" />
          <img
            onMouseEnter={() => setShowName(true)}
            src={config.urlImageProduct + item.image}
            className="object-cover w-[150px] h-[150px] object-center shadow-md rounded-[6px]"
            alt={item.productName}
          />
          <p className="text-ellipsis whitespace-nowrap overflow-hidden w-full">
            {item.productName}
          </p>
        </div>
      </Link>
    )
  return ''
}

export default Items
