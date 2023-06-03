import React, { useState } from "react";

function CategoryFilter({ categories, setFilter }) {
  function handleClick(e) {
    setFilter(e.target.innerText);
    setCategoryButtons(
      categories.map((cat) => {
        let className = cat === e.target.innerText ? "selected" : "";
        return (
          <button key={cat} className={className} onClick={handleClick}>
            {cat}
          </button>
        );
      })
    );
  }

  const [categoryButtons, setCategoryButtons] = useState(
    categories.map((cat) => {
      return (
        <button key={cat} onClick={handleClick}>
          {cat}
        </button>
      );
    })
  );

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
