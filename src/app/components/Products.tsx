import React from 'react';
import Image from 'next/image';
import data from "@/app/data/data.json";
import Link from 'next/link';

// Datos de ejemplo (puedes reemplazar con tu JSON o API)
const products = data.productos

const Products = () => {
  return (
    <div className="container mx-auto p-4">
        <div className='my-10 mx-0 text-center text-xl capitalize font-bold '>
            <h2>Seguro que te gusta</h2>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {products.map((product) => (
  <div
    key={product.ID_productor}
    className="group w-full relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
  >
    <Link href={`/productos/${product.ID_productor}`} className="block h-full w-full">
      {/* Contenedor de la imagen con relación de aspecto */}
      <div className="relative m-2  transition-transform duration-300 group-hover:scale-105 aspect-square">
        <Image
          src={product.Imagen}
          alt={product.Nombre}
          fill
          className="object-contain" // Cambiado a object-contain
          quality={85}
        />

        {/* Badge de descuento (opcional) */}
        {/* {product.discount && (
          <div className="absolute right-2 top-2 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
            -{product.discount}%
          </div>
        )} */}
      </div>

      {/* Información del producto */}
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold text-gray-800">{product.Nombre}</h3>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900">${product.Precio}</p>
          {product.Precio && (
            <p className="text-sm text-gray-500 line-through">${product.Precio}</p>
          )}
        </div>
        <button className="mt-3 w-full rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:text-gray-300">
          Ver Detalles
        </button>
      </div>
    </Link>
  </div>
))}
      </div>
    </div>
  );
};

export default Products;