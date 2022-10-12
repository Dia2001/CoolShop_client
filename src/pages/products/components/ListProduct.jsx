import React from 'react'
import { NavLink } from 'react-router-dom';
import CardProductV1 from '../../../components/CardProductV1';

const ListProduct = () => {
  const items=[];
  for(var i=0;i<14;i++){
      items.push(i);
  }
  return (
    <div className="col-span-10 ">
      <div className="flex justify-end m-2x gap-2 items-center">
          <h6 className="font-bold">Sắp xếp theo: </h6>
          <select className="p-2 border border-Black25" name="sortby">
            <option value="default">Theo mặc định</option>
            <option value="az">Từ A-Z</option>
            <option value="za">Từ Z-A</option>
            <option value="cheap">Rẻ nhất</option>
            <option value="decrease">Giá giảm dần</option>
            <option value="newer">Mới nhất</option>
          </select>
      </div>
      <div className="grid grid-cols-10 gap-3 m-2x min-h-[768px]">
       {items.map((index, item) =>(
        <div key={index} className="col-span-2 shadow-sm hover:shadow-md">
          <NavLink to="/san-pham/chi-tiet-san-pham">
           <CardProductV1/>
          </NavLink>
        </div>
       ))}
      </div>
    </div>
    )
}

export default ListProduct