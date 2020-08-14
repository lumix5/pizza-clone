import React from 'react';
import { Category, SortPopup, PizzaBlock } from '../components/';

function Home({ items }) {
  return (
    <div>
      <div className="container">
        <div className="content__top">
          <Category
            items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
            onClick={(name) => {
              console.log(name);
            }}
          />
          <SortPopup
            items={[
              { name: 'популярности', type: 'popular' },
              { name: 'цене', type: 'price' },
              { name: 'алфавит', type: 'alphabet' },
            ]}
          />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {items.map((obj, index) => (
            <PizzaBlock key={obj.id} {...obj} items={['Тонкое', 'Традиционное']} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
