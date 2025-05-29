// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',       // El protocolo de tu API
        hostname: '127.0.0.1',  // La IP o dominio de tu API
        port: '8000',           // El puerto de tu API
        pathname: '/imagenes/**', // La ruta específica donde están tus imágenes.
                                   // '/**' significa cualquier subruta dentro de '/imagenes/'.
                                   // Si tus imágenes pudieran estar en otras carpetas de tu API,
                                   // podrías usar solo '/**' para cualquier path, pero '/imagenes/**' es más seguro.
      },
    ],
  },
};

module.exports = nextConfig;