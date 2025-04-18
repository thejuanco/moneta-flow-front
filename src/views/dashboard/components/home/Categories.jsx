import React from "react";

const Categories = () => {
  const categories_dash = [
    { name: "Saldo Total", saldo: 45000, porcentaje: 20.1 },
    { name: "Gastos Totales" },
    { name: "Presupuesto Restante" },
    { name: "Mayor Categoría" },
  ];

  return (
    <>
      {categories_dash.map((category, index) => (
        <div
          key={index}
          className="flex flex-col p-3 border space-y-2 border-gray-200 rounded-lg bg-white hover:scale-105 transition-transform duration-300 transform"
        >
          <h2 className="text-md font-normal text-gray-800">{category.name}</h2>
          <span className="text-2xl font-semibold">$ {category.saldo}</span>
          <p className="text-gray-400 text-xs">+ {category.porcentaje}% desde el mes pasado</p>
        </div>
      ))}
    </>
  );
};

export default Categories;
