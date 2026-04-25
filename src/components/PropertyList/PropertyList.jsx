// src/components/PropertyList/PropertyList.jsx
// JAYRAJ's commit

import PropertyCard from "../PropertyCard/PropertyCard";
import "./PropertyList.css";

function PropertyList({ properties, onCardClick }) {
  if (properties.length === 0) {
    return (
      <div className="property-list__empty">
        <p>No properties found. Try a different search or category.</p>
      </div>
    );
  }

  return (
    <div className="property-list">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
          onClick={onCardClick}
        />
      ))}
    </div>
  );
}

export default PropertyList;
