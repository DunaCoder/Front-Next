'use client';
import React from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation'; // Para obtener el ID de la URL
import data from '../../data/data.json'; // Importa tu JSON
import Error from "../../not-found"

const ProductDetailPage: React.FC = () => {
  // Obtén el ID de la URL
  const params = useParams();
  const productId = params.id; // Asume que la ruta es "producto/[id]"

  // Busca el producto en el JSON
  const product = data.productos.find((p) => p.ID_productor.toString() === productId);

  // Si no se encuentra el producto, muestra un mensaje
  if (!product) {
    return (
      <Error></Error>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid para imagen y detalles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sección de la imagen */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Image
              src={product.Imagen}
              alt={product.Nombre}
              width={800} // Ancho máximo esperado de la imagen
              height={600} // Alto máximo esperado de la imagen
              className="w-full h-auto rounded-lg"
              style={{
                objectFit: 'contain', // Asegura que la imagen se ajuste sin recortarse
              }}
              priority={false} // O true si es una imagen importante
            />
          </div>

          {/* Sección de detalles del producto */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.Nombre}</h1>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{product.Categoría}</h2>
            <h3 className="text-md font-bold text-gray-900 mb-4">Producto de: {product.Nombre_Prov}</h3>
            <p className="text-gray-600 mb-6">{product.Descripción}</p>

            {/* Precio y Stock */}
            <div className="mb-6">
              <span className="text-2xl font-bold text-black">${product.Precio.toFixed(2)}</span>
              <span className="text-sm text-gray-500 ml-2">({product.Stock} disponibles)</span>
            </div>

            {/* Características del producto */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Características:</h2>
              <ul className="list-disc list-inside text-gray-600">
                {product.caracteristicas.map((feature, index) => (
                  <li key={index} className="mb-2">{feature}</li>
                ))}
              </ul>
            </div>

            {/* Botón de compra */}
            <button
              className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
            >
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;