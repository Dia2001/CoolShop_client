import React from "react";
import imgArticle from "../../../assets/img-article.jpg";
import Article from "./Article";


const Promotions = () => {
  const articles = [
    {
      title: "Tên chương trình",
      img: imgArticle,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Tên chương trình",
      img: imgArticle,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },{
      title: "Tên chương trình",
      img: imgArticle,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
  return (
    <div className="mx-auto w-[1240px]">
      <h3 className="font-bold my-3x">Các chương trình khuyến mãi</h3>
      <div className="flex w-full gap-6 justify-center">
        {articles.map((item, index)=>(
          <Article key={index} data={item}/>
        ))}
      </div>
      <div className="flex justify-center my-2x">
        <h6 className="text-DarkBlue cursor-pointer underline underline-offset-4">
          Xem thêm...
        </h6>
      </div>
    </div>
  );
};

export default Promotions;
