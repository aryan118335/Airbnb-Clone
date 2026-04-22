// src/components/CategoryFilter/CategoryFilter.jsx
// JAYRAJ's commit

import { useState } from "react";
import "./CategoryFilter.css";

const CATEGORIES = [
  { id: "all", label: "All", icon: "🏠" },
  { id: "Beachfront", label: "Beachfront", icon: "🏖️" },
  { id: "Amazing views", label: "Amazing views", icon: "🏔️" },
  { id: "Cabins", label: "Cabins", icon: "🪵" },
  { id: "Treehouses", label: "Treehouses", icon: "🌳" },
  { id: "Boats", label: "Boats", icon: "⛵" },
  { id: "Camping", label: "Camping", icon: "⛺" },
  { id: "Islands", label: "Islands", icon: "🏝️" },
];

function CategoryFilter({ selectedCategory, onSelectCategory }) {
  return (
    <div className="category-filter">
      <div className="category-filter__scroll">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={
              "category-filter__btn" +
              (selectedCategory === cat.id ? " category-filter__btn--active" : "")
            }
            onClick={() => onSelectCategory(cat.id)}
          >
            <span className="category-filter__icon">{cat.icon}</span>
            <span className="category-filter__label">{cat.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;
