import React from "react";
import Qcard from "./Qcard";

const questionsData = [
  {
    img: "img/covid.jpg",
    title: "Covid long : une prise de sang permet de savoir si vous êtes atteint",
    desc: "Des médecins belges ont récemment observé que le Covid long, une forme prolongée de la pathologie infectieuse, pourrait être identifié par le biais d’un prélèvement",
  },
  {
    img: "img/bacterie.jpg",
    title: "Les IST bactériennes sont fortement en hausse en France depuis 2020",
    desc: "De 2020 à 2022, les taux d’incidence de chlamydiose, de gonorrhée ainsi que de syphilis ont bondi en France métropolitaine...En savoir plus",   
  },
  {
    img: "img/grossese.jpg",
    title: "Post-partum : 10 symptômes qui doivent vous alerter selon une gynécologue",
    desc: "Divers symptômes peuvent apparaître dans les semaines qui suivent l’accouchement, cette période appelée post-partum. Si certains sont normaux, d’autres nécessitent un avis médical",
  },
  {
    img: "img/crise.jpg",
    title: "Crise cardiaque : on sait comment des bactéries de la bouche impactent le cœur",
    desc: "Des chercheurs japonais ont découvert comment la bactérie orale Porphyromonas gingivalis impactait la santé du cœur et augmentait les risques de crise cardiaque",

  },
  {
    img: "img/cacao.jpg",
    title: "Le cacao peut aider à préserver les capacités cognitives",
    desc: "Les suppléments d'extrait de cacao boostent les capacités cognitives des seniors qui ont une alimentation de mauvaise qualité, selon une nouvelle étude",

  },
  {
    img: "img/Nitazene.jpg",
    title: "Nitazènes : attention à ces nouveaux opioïdes surpuissants qui circulent",
    desc: "L’association Addictovigilance met en garde contre l’émergence en France de nitazènes, une nouvelle classe d’opioïdes de synthèse à fort risque d’overdose",

  },

];

const Newquestions = () => {
  return (
    <div>
      <div>
      <h2 className="font-medium text-2xl pb-8 relative text-center p-8 mb-4">
  <    span className="border-b-4 border-red-500 font-bold">QUESTION D'ACTU</span>
      </h2>

        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {questionsData.map((item, index) => (
            <Qcard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Newquestions;
