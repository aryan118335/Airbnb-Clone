// src/App.jsx
// VARAD's commit

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import SearchBar from "./components/SearchBar/SearchBar";
import CategoryFilter from "./components/CategoryFilter/CategoryFilter";
import PropertyList from "./components/PropertyList/PropertyList";
import Modal from "./components/Modal/Modal";
import Footer from "./components/Footer/Footer";
import allProperties from "./data/properties";
import "./App.css";

function App() {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulate a data fetch using useEffect
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setProperties(allProperties);
      setFilteredProperties(allProperties);
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  // Filter by category whenever selectedCategory or properties change
  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredProperties(properties);
    } else {
      setFilteredProperties(
        properties.filter((p) => p.category === selectedCategory)
      );
    }
  }, [selectedCategory, properties]);

  function handleSearch({ location }) {
    const query = location.toLowerCase().trim();
    if (!query) {
      setFilteredProperties(
        selectedCategory === "all"
          ? properties
          : properties.filter((p) => p.category === selectedCategory)
      );
      return;
    }
    setFilteredProperties(
      properties.filter(
        (p) =>
          p.location.toLowerCase().includes(query) ||
          p.title.toLowerCase().includes(query)
      )
    );
  }

  function handleCategorySelect(category) {
    setSelectedCategory(category);
  }

  function handleCardClick(property) {
    setSelectedProperty(property);
  }

  function handleModalClose() {
    setSelectedProperty(null);
  }

  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <SearchBar onSearch={handleSearch} />
      <CategoryFilter
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />
      {loading ? (
        <div className="app__loading">
          <div className="app__spinner" />
          <p>Finding amazing places…</p>
        </div>
      ) : (
        <PropertyList
          properties={filteredProperties}
          onCardClick={handleCardClick}
        />
      )}
      {selectedProperty && (
        <Modal property={selectedProperty} onClose={handleModalClose} />
      )}
      <Footer />
    </div>
  );
}

export default App;
