import React from 'react';

function Category(props) {
  let { items } = props;
  return (
    <div className="categories">
      <ul>
        <li className="active">Все</li>
        {items.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
