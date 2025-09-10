import { useState } from "react";
import {
  MdClose,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

function GalleryImage({
  src,
  alt,
  onClick,
}: {
  src: string;
  alt: string;
  onClick?: () => void;
}) {
  const isGalery = src.includes("galery-");

  return (
    <div
      className="relative cursor-pointer group"
      onClick={!isGalery ? onClick : undefined}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />

      {/* overlay untuk galery- */}
      {isGalery && <div className="absolute inset-0 bg-black/60" />}

      {/* hover overlay untuk image- */}
      {!isGalery && (
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition duration-300" />
      )}
    </div>
  );
}

export default function Gallery() {
  // Kumpulan foto yg boleh masuk popup (image-...)
  const imagePhotos = [
    "/assets/images/image-1.webp",
    "/assets/images/image-2.webp",
    "/assets/images/image-3.webp",
    "/assets/images/image-4.webp",
    "/assets/images/image-5.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openPopup = (index: number) => {
    setCurrentIndex(index);
  };

  const closePopup = () => {
    setCurrentIndex(null);
  };

  const prevImage = () => {
    if (currentIndex !== null) {
      setCurrentIndex(
        (currentIndex - 1 + imagePhotos.length) % imagePhotos.length
      );
    }
  };

  const nextImage = () => {
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex + 1) % imagePhotos.length);
    }
  };

  return (
    <div className="bg-secondary">
      <h1
        data-aos="fade-right"
        data-aos-delay={10}
        className="text-center font-Sacramneto text-5xl sm:text-6xl font-bold text-neutral my-16 z-20"
      >
        Gallery
      </h1>

      <div className="grid grid-cols-3 p-4 gap-1">
        <GalleryImage
          src="/assets/images/image-5.webp"
          alt="image"
          onClick={() => openPopup(0)}
        />

        <div
          data-aos="fade-down"
          data-aos-delay={10}
          className="h-full flex flex-col justify-between gap-1"
        >
          <GalleryImage
            src="/assets/images/image-2.webp"
            alt="image"
            onClick={() => openPopup(1)}
          />
          <GalleryImage src="/assets/images/galery-2.jpg" alt="image" />
        </div>

        <GalleryImage
          src="/assets/images/image-3.webp"
          alt="image"
          onClick={() => openPopup(2)}
        />

        <div
          data-aos="fade-up"
          data-aos-delay={10}
          className="flex flex-col justify-between gap-1"
        >
          <GalleryImage
            src="/assets/images/image-2.webp"
            alt="image"
            onClick={() => openPopup(1)}
          />
          <GalleryImage src="/assets/images/galery-4.jpg" alt="image" />
        </div>

        <GalleryImage
          src="/assets/images/image-4.webp"
          alt="image"
          onClick={() => openPopup(3)}
        />

        <div
          data-aos="fade-up"
          data-aos-delay={10}
          className="flex flex-col justify-between gap-1"
        >
          <GalleryImage src="/assets/images/galery-3.jpg" alt="image" />
          <GalleryImage src="/assets/images/galery-5.jpg" alt="image" />
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay={10}
          className="h-full flex flex-col justify-between gap-1"
        >
          <GalleryImage src="/assets/images/galery-1.jpg" alt="image" />
          <p
            data-aos="fade-right"
            data-aos-delay={10}
            className="text-center text-neutral font-Chalisa text-xl "
          >
            Ebot & Nina
          </p>
          <GalleryImage
            src="/assets/images/image-1.webp"
            alt="image"
            onClick={() => openPopup(0)}
          />
        </div>

        <div data-aos="fade-up" data-aos-delay={10} className="col-span-2">
          <GalleryImage
            src="/assets/images/image-5.webp"
            alt="image"
            onClick={() => openPopup(4)}
          />
        </div>
      </div>

      {/* Popup Modal */}
      {currentIndex !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <button
            onClick={closePopup}
            className="absolute top-12 right-4 text-white text-2xl  bg-white/20 rounded-full p-1 "
          >
            <MdClose />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 text-white text-3xl  bg-white/20 rounded-lg px-2 py-1 "
          >
            <MdKeyboardDoubleArrowLeft />
          </button>

          <img
            src={imagePhotos[currentIndex]}
            alt="popup"
            className="max-h-[90%] max-w-[90%] object-contain"
          />

          <button
            onClick={nextImage}
            className="absolute right-4 text-white text-3xl bg-white/20 rounded-lg px-2 py-1 "
          >
            <MdKeyboardDoubleArrowRight />
          </button>
        </div>
      )}
    </div>
  );
}
