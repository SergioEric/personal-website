import { useState, useEffect } from 'react';
import { cn } from '@lib/utils';

export interface GalleryImage {
  url: string;
  alt: string;
}

interface GalleryProps {
  images: GalleryImage[];
}

export default function Gallery({ images }: GalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextModalImage = () => {
    setModalImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevModalImage = () => {
    setModalImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openModal = () => {
    setModalImageIndex(currentImageIndex);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') prevModalImage();
      if (e.key === 'ArrowRight') nextModalImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  return (
    <>
      {/* Carousel */}
      <div className="w-full aspect-video rounded-xl md:rounded-2xl overflow-hidden shadow-2xl bg-surface-dark relative group">
        <div className="relative w-full h-full overflow-hidden">
          <div
            className="flex h-full transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          >
            {images.map((item, idx) => (
              <div
                key={idx}
                className="min-w-full h-full relative cursor-pointer"
                onClick={openModal}
              >
                <div className="absolute inset-0 bg-linear-to-t from-background-dark/80 to-transparent opacity-60 z-10"></div>
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url("${item.url}")` }}
                />
                {/* Overlay Info */}
                <div className="absolute bottom-6 left-6 z-20 hidden md:block">
                  <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                    <span className="material-symbols-outlined text-white text-sm">photo_camera</span>
                    <span className="text-white text-xs font-medium">{item.alt}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="grid absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white rounded-full p-3 transition-all opacity-0 group-hover:opacity-100"
                aria-label="Previous image"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="grid absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white rounded-full p-3 transition-all opacity-0 group-hover:opacity-100"
                aria-label="Next image"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </>
          )}

          {/* Dots Indicator */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    currentImageIndex === idx
                      ? "bg-white w-8"
                      : "bg-white/50 hover:bg-white/75"
                  )}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 animate-in fade-in duration-300"
          onClick={closeModal}
        >
          <div
            className="relative w-full h-full flex items-center justify-center p-4 md:p-8 animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="grid absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full p-3 transition-all"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 z-50 bg-white/10 backdrop-blur-sm text-white rounded-full px-4 py-2">
              <span className="text-sm font-medium">{modalImageIndex + 1} / {images.length}</span>
            </div>

            {/* Main Image */}
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={images[modalImageIndex].url}
                alt={images[modalImageIndex].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevModalImage}
                  className="grid absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full p-4 transition-all"
                  aria-label="Previous image"
                >
                  <span className="material-symbols-outlined text-2xl">chevron_left</span>
                </button>
                <button
                  onClick={nextModalImage}
                  className="grid absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full p-4 transition-all"
                  aria-label="Next image"
                >
                  <span className="material-symbols-outlined text-2xl">chevron_right</span>
                </button>
              </>
            )}

            {/* Image Description */}
            {images[modalImageIndex].alt && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 bg-white/10 backdrop-blur-sm text-white rounded-full px-6 py-3 max-w-2xl text-center">
                <span className="text-sm font-medium">{images[modalImageIndex].alt}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
