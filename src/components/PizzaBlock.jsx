import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function PizzaBlock({ name, price, imageUrl, items, types, sizes }) {
  const [tallOrTraditional, setTallOrTraditional] = useState(0);
  const [avaibleSizes, setAvaibleSizes] = useState(0);
  return (
    <div>
      <div className="pizza-block">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{name}</h4>
        <div className="pizza-block__selector">
          <ul>
            {items.map((nameTOT, index) => (
              <li
                onClick={() => setTallOrTraditional(index)}
                className={classNames({
                  active: tallOrTraditional === index,
                  disabled: !types.includes(index),
                })}
                key={`${nameTOT}__${index}`}>
                {nameTOT}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size, index) => (
              <li
                onClick={() => setAvaibleSizes(index)}
                key={size}
                className={classNames({
                  active: avaibleSizes === index,
                })}>
                {size} см
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} ₽</div>
          <div className="button button--outline button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            <i>1</i>
          </div>
        </div>
      </div>
    </div>
  );
}

PizzaBlock.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  types: PropTypes.arrayOf(PropTypes.number).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default PizzaBlock;
