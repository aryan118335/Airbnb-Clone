// src/components/PropertyCard/PropertyCard.jsx
// JAYRAJ's commit

import { useState } from "react";
import "./PropertyCard.css";

function PropertyCard({ property, onClick }) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  function handleFavorite(e) {
    e.stopPropagation();
    setIsFavorited(!isFavorited);
  }

  function handleNextImg(e) {
    e.stopPropagation();
    setImgIndex((imgIndex + 1) % property.images.length);
  }

  function handlePrevImg(e) {
    e.stopPropagation();
    setImgIndex(
      (imgIndex - 1 + property.images.length) % property.images.length
    );
  }

  return (
    <div className="property-card" onClick={() => onClick(property)}>
      <div className="property-card__image-wrap">
        <img
          className="property-card__image"
          src={property.images[imgIndex]}
          alt={property.title}
          loading="lazy"
        />
        <button
          className={"property-card__heart" + (isFavorited ? " property-card__heart--active" : "")}
          onClick={handleFavorite}
          aria-label="Save to wishlist"
        >
          <svg viewBox="0 0 32 32" aria-hidden="true">
            <path d="M16 28c-.3 0-.6-.1-.8-.3C8 20.9 3 16.6 3 11c0-4 3.1-7 7-7 2 0 3.9.9 5.2 2.3.3.3.5.5.8.5s.5-.2.8-.5C18.1 4.9 20 4 22 4c3.9 0 7 3.1 7 7 0 5.7-5 9.9-12.2 16.8-.2.1-.5.2-.8.2z" />
          </svg>
        </button>
        {property.images.length > 1 && (
          <>
            <button className="property-card__nav property-card__nav--prev" onClick={handlePrevImg} aria-label="Previous image">&#8249;</button>
            <button className="property-card__nav property-card__nav--next" onClick={handleNextImg} aria-label="Next image">&#8250;</button>
            <div className="property-card__dots">
              {property.images.map((_, i) => (
                <span key={i} className={"property-card__dot" + (i === imgIndex ? " property-card__dot--active" : "")} />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="property-card__info">
        <div className="property-card__top">
          <p className="property-card__location">{property.location}</p>
          <div className="property-card__rating">
            <svg viewBox="0 0 32 32" aria-hidden="true">
              <path d="M15.1 1.58l-4.13 8.88-9.86 1.27a1 1 0 00-.54 1.74l7.3 6.57-1.97 9.9a1 1 0 001.48 1.06L16 26.4l8.62 4.6a1 1 0 001.48-1.06l-1.97-9.9 7.3-6.57a1 1 0 00-.54-1.74l-9.86-1.27z" />
            </svg>
            <span>{property.rating}</span>
          </div>
        </div>
        <p className="property-card__title">{property.title}</p>
        <p className="property-card__beds">{property.beds} beds · {property.guests} guests</p>
        <p className="property-card__price">
          <strong>₹{property.price.toLocaleString("en-IN")}</strong> night
        </p>
      </div>
    </div>
  );
}

export default PropertyCard;
