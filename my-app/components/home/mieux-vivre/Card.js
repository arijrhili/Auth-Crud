// ArticlsCard.jsx
import React from "react";

const ArticlsCard = ({ img, title, createAt }) => {
  return (
    <div className="px-4 border border-gray-200 rounded-xl max-w-[400px]">
      <div>
        <img
          className="w-full h-auto"
          src={img}
          width={200}
          height={300}
          alt={title}
        />
      </div>

      <div className="space-y-2 py-2">
        <h2 className="text-accent font-medium uppercase">{title}</h2>
        <p className="text-gray-500">{createAt}</p>
      </div>
    </div>
  );
};

export default ArticlsCard;
