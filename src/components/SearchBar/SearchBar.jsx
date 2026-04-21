// src/components/SearchBar/SearchBar.jsx
// ARYAN's commit

import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch({ location, checkIn, checkOut, guests });
  }

  return (
    <div className="searchbar">
      <form className="searchbar__form" onSubmit={handleSubmit}>
        <div className="searchbar__field">
          <label className="searchbar__label">Where</label>
          <input
            className="searchbar__input"
            type="text"
            placeholder="Search destinations"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="searchbar__divider" />
        <div className="searchbar__field">
          <label className="searchbar__label">Check in</label>
          <input
            className="searchbar__input"
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </div>
        <div className="searchbar__divider" />
        <div className="searchbar__field">
          <label className="searchbar__label">Check out</label>
          <input
            className="searchbar__input"
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>
        <div className="searchbar__divider" />
        <div className="searchbar__field searchbar__field--last">
          <label className="searchbar__label">Who</label>
          <input
            className="searchbar__input"
            type="number"
            min="1"
            placeholder="Add guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />
        </div>
        <button className="searchbar__btn" type="submit" aria-label="Search">
          <svg viewBox="0 0 32 32" aria-hidden="true">
            <path d="M13 0C5.82 0 0 5.82 0 13s5.82 13 13 13c3.14 0 6.01-1.12 8.26-2.95L28.59 30.6a2 2 0 002.83-2.83l-7.33-7.33A12.93 12.93 0 0026 13C26 5.82 20.18 0 13 0zm0 4a9 9 0 110 18A9 9 0 0113 4z" />
          </svg>
          <span>Search</span>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
