import Carousel from "./components/Carousel";
import Image from "next/image";
import Products from "./components/Products"

export default function Home() {
  const images = [
    { id: 1, src: "1.webp", type: 'vertical' },
    { id: 2, src: "2.webp", type: 'vertical' },
    { id: 3, src: "5.webp", type: 'vertical' },
    { id: 4, src: "8.webp", type: 'vertical'},
    { id: 5, src: "6.webp", type: 'wide' },
    { id: 6, src: "7.webp", type: 'wide'},

  ];
  return (
    <div>
      <div className="p-4">
      <Carousel/>
       <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(200px,auto)]">
        {images.map((image) => (
          <div
            key={image.id}
            className={`
              bg-slate-400
              relative
              ${image.type === 'wide' ? 'md:col-span-2' : ''}
              ${image.type === 'vertical' ? 'md:row-span-2' : ''}
              ${!image.type ? 'md:col-span-1' : ''}
            `}
          >
            <Image
                  src={`/${image.src}`} // Añadí barra inicial si las imágenes están en public/
                  alt={`Imagen ${image.id}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  quality={80}
                />
          </div>
        ))}

      </div>
    </div>

    <Products/>
    </div>
    </div>
  );
}
