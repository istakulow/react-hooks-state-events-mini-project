import React from "react";

function CategoryFilter({ categories, onSelect, selected }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button key={category} onClick={() => onSelect(category)} className={selected === category ? "selected" : ""}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;