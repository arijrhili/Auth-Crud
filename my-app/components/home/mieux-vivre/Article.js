// Articles.jsx
import React from "react";
import ArticlsCard from "./Card";
import Slider from "react-slick";

const ArticlesData = [
    {
        img: "/img/1.jpg",
        title: "Etre célibataire dans la vingtaine permet d'être plus heureux ensuite",
        createAt: "Publié le 25.11.2023 ",
      },
      {
        img: "/img/2.jpg",
        title: "12 astuces pour éviter le coup de barre",
        createAt: "Publié le 13.11.2023",   
      },
      {
        img: "/img/3.jpg",
        title: "L'attachement aux deux parents favorise le bon développement de l'enfant",
        createAt: "Publié le 08.11.2023",
      },
      {
        img: "/img/4.jpg",
        title: "Pour atteindre votre objectif, mettez-vous en colère",
        createAt: "Publié le 05.11.2023",
    
      },
      {
        img: "/img/5.jpg",
        title: "Psycho : les hommes ont plus de mal à dire les mauvaises nouvelles",
        createAt: "Publié le 05.11.2023",
    
      },
      {
        img: "/img/6.jpg",
        title: "Travail, amitié, famille : comment surmonter les « petits traumatismes » du quotidien ?",
        createAt: "Publié le 05.11.2023 ",
    
      },
    
];
const Articles = () => {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: false,
    };
  
    return (
      <div>
        <div>
        <h2 className="font-medium text-2xl pb-4 text-center relative p-8 mb-4">
  <span className="border-b-4 border-red-500 font-bold inline-block">MIEUX VIVRE SANTÉ</span>
</h2>

  
          <Slider {...settings}>
            {ArticlesData.map((item, index) => (
              <ArticlsCard
                key={index}
                img={item.img}
                title={item.title}
                createAt={item.createAt}
              />
            ))}
          </Slider>
        </div>
      </div>
    );
  };
  
  export default Articles;