'use client'
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { FaUser, FaChevronDown } from "react-icons/fa";
import Link from 'next/link'

const Nav = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false)
  
  // Datos de ejemplo para categorías
  const categories = [
    { name: 'Electrónica', subcategories: ['Smartphones', 'Laptops', 'Audio'] },
    { name: 'Hogar', subcategories: ['Muebles', 'Decoración', 'Cocina'] },
    { name: 'Moda', subcategories: ['Ropa Mujer', 'Ropa Hombre', 'Accesorios'] },
    { name: 'Deportes', subcategories: ['Fútbol', 'Fitness', 'Camping'] },
  ]

  return (
    <nav className="bg-black relative">
      <div className="mx-auto max-w-7xl py-5 px-4 sm:px-6">
        {/* Primera fila */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          
          <Link href="/" className="text-white text-2xl font-bold hover:text-gray-300 transition-colors">
            BrandStore
          </Link>

          <div className="flex-1 w-full max-w-2xl relative">
            <div className="flex items-center border-2 border-gray-300 rounded-lg focus-within:border-white transition-all bg-black/20">
              <input
                type="text"
                placeholder="Buscar productos..."
                className="w-full px-4 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none"
              />
              <button className="p-3 text-white hover:bg-gray-800 rounded-r-md transition-colors">
                <CiSearch className="text-xl" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/account" className="p-2.5 text-white hover:bg-gray-800 rounded-md transition-colors flex items-center gap-1">
              <FaUser className="text-lg" />
              <span className="hidden sm:inline">Mi Cuenta</span>
            </Link>
            
            <button className="p-2.5 text-white hover:bg-gray-800 rounded-md transition-colors relative flex items-center gap-1">
              <FiShoppingCart className="text-xl" />
              <span className="hidden sm:inline">Carrito</span>
              <span className="absolute -top-1 -right-1 bg-red-500 text-xs w-5 h-5 rounded-full flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        </div>

        {/* Barra de categorías */}
        <div className="mt-4 border-t border-gray-800 pt-4">
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <div 
              className="relative group"
              onMouseEnter={() => setIsCategoriesOpen(true)}
            >
              <button 
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Categorías
                <FaChevronDown className="ml-1 text-xs transition-transform group-hover:rotate-180" />
              </button>

              {/* Menú desplegable */}
              {isCategoriesOpen && (
                <div onMouseEnter={() => setIsCategoriesOpen(true)} 
                onMouseLeave={() => setIsCategoriesOpen(false)}
                className="absolute z-50 top-full left-0 w-[800px] bg-black border border-gray-800 rounded-lg shadow-xl p-6 mt-2">
                  <div className="grid grid-cols-2 gap-6">
                    {categories.map((category) => (
                      <div key={category.name} className="group">
                        <h3 className="text-white font-medium mb-2 border-b border-gray-700 pb-1">
                          {category.name}
                        </h3>
                        <ul className="space-y-2">
                          {category.subcategories.map((sub) => (
                            <li key={sub}>
                              <a href="#" className="text-gray-300 hover:text-white text-sm block transition-colors">
                                {sub}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-800">
                    <a href="#" className="text-white hover:text-gray-300 font-medium">
                      Ver todas las categorías →
                    </a>
                  </div>
                </div>
              )}
            </div>

            <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
              Ofertas
            </button>
            <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
              Nuevo
            </button>
            <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
              Colecciones
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav