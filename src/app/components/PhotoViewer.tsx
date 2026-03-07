import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import React from 'react';
interface PhotoViewerProps {
  images: string[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
  centreName?: string;
}

export function PhotoViewer({ images, initialIndex = 0, isOpen, onClose, centreName }: PhotoViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setIsZoomed(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setIsZoomed(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all group"
        aria-label="Close photo viewer"
      >
        <X className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Header - Photo Counter */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full bg-black/60 backdrop-blur-sm">
        <div className="text-white text-sm font-semibold">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Centre Name */}
      {centreName && (
        <div className="absolute top-20 left-1/2 -translate-x-1/2 z-50 px-6 py-2 rounded-lg bg-black/60 backdrop-blur-sm">
          <div className="text-white text-base font-semibold">
            {centreName}
          </div>
        </div>
      )}

      {/* Previous Button */}
      {images.length > 1 && (
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all group"
          aria-label="Previous photo"
        >
          <ChevronLeft className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
        </button>
      )}

      {/* Next Button */}
      {images.length > 1 && (
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all group"
          aria-label="Next photo"
        >
          <ChevronRight className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
        </button>
      )}

      {/* Zoom Toggle */}
      <button
        onClick={() => setIsZoomed(!isZoomed)}
        className="absolute bottom-24 right-4 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all group"
        aria-label={isZoomed ? "Zoom out" : "Zoom in"}
      >
        {isZoomed ? (
          <ZoomOut className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        ) : (
          <ZoomIn className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        )}
      </button>

      {/* Main Image */}
      <div className="w-full h-full flex items-center justify-center p-4 md:p-8">
        <img
          src={images[currentIndex]}
          alt={`Photo ${currentIndex + 1} of ${images.length}`}
          className={`max-w-full max-h-full object-contain transition-all duration-300 ${
            isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        />
      </div>

      {/* Thumbnail Strip - Bottom */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 z-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-black/60 backdrop-blur-sm rounded-xl p-3">
              <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setIsZoomed(false);
                    }}
                    className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden transition-all ${
                      index === currentIndex
                        ? 'ring-4 ring-white scale-105'
                        : 'opacity-50 hover:opacity-100 hover:scale-105'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Background overlay - click to close */}
      <div
        className="absolute inset-0 -z-10"
        onClick={onClose}
      />
    </div>
  );
}
