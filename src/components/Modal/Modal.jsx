// src/components/Modal/Modal.jsx
// VARAD's commit

import { useEffect } from "react";
import "./Modal.css";

function Modal({ property, onClose }) {
  // Close modal on Escape key - useEffect with cleanup
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!property) return null;

  return (
    <div className="modal__overlay" onClick={onClose}>
      <div className="modal__box" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close">✕</button>

        <div className="modal__gallery">
          <img
            className="modal__img modal__img--main"
            src={property.images[0]}
            alt={property.title}
          />
          {property.images[1] && (
            <img
              className="modal__img modal__img--side"
              src={property.images[1]}
              alt={property.title}
            />
          )}
        </div>

        <div className="modal__body">
          <div className="modal__left">
            <h2 className="modal__title">{property.title}</h2>
            <p className="modal__location">{property.location}</p>
            <div className="modal__meta">
              <span>{property.guests} guests</span>
              <span>·</span>
              <span>{property.beds} beds</span>
              <span>·</span>
              <span>{property.baths} baths</span>
            </div>

            <div className="modal__rating">
              <svg viewBox="0 0 32 32" aria-hidden="true">
                <path d="M15.1 1.58l-4.13 8.88-9.86 1.27a1 1 0 00-.54 1.74l7.3 6.57-1.97 9.9a1 1 0 001.48 1.06L16 26.4l8.62 4.6a1 1 0 001.48-1.06l-1.97-9.9 7.3-6.57a1 1 0 00-.54-1.74l-9.86-1.27z" />
              </svg>
              <strong>{property.rating}</strong>
              <span className="modal__reviews">({property.reviews} reviews)</span>
            </div>

            <hr className="modal__divider" />

            <div className="modal__host">
              <div className="modal__host-avatar">
                {property.host.charAt(0)}
              </div>
              <div>
                <p className="modal__host-name">Hosted by {property.host}</p>
                <p className="modal__host-sub">Superhost · 3 years hosting</p>
              </div>
            </div>

            <hr className="modal__divider" />

            <p className="modal__description">{property.description}</p>
          </div>

          <div className="modal__right">
            <div className="modal__booking">
              <div className="modal__price">
                <strong>₹{property.price.toLocaleString("en-IN")}</strong>
                <span> / night</span>
              </div>
              <div className="modal__booking-dates">
                <div className="modal__booking-field">
                  <label>CHECK-IN</label>
                  <input type="date" />
                </div>
                <div className="modal__booking-field">
                  <label>CHECKOUT</label>
                  <input type="date" />
                </div>
              </div>
              <div className="modal__booking-field modal__booking-field--full">
                <label>GUESTS</label>
                <input type="number" min="1" max={property.guests} placeholder={`1–${property.guests} guests`} />
              </div>
              <button className="modal__reserve-btn">Reserve</button>
              <p className="modal__no-charge">You won't be charged yet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
