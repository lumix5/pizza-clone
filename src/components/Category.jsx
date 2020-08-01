import React from 'react';

function Category(props) {
  let { items } = props;
  const [activeItem, changeItemOnClick] = React.useState(0);

  return (
    <div className="categories">
      <ul>
        {items.map((name, index) => (
          <li
            className={activeItem === index ? 'active' : ''}
            key={`${name}__${index}`}
            onClick={() => changeItemOnClick(index)}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

// class Category extends React.Component {
//   state = {
//     activeItem: 3,
//   };

//   onSelectItem = (index) => {
//     this.setState({
//       activeItem: index,
//     });
//   };
//   render() {
//     let { items } = this.props;
//     return (
//       <div className="categories">
//         <ul>
//           <li>Все</li>
//           {items.map((name, index) => (
//             <li
//               className={this.state.activeItem === index ? 'active' : ''}
//               key={`${name}__${index}`}
//               onClick={() => this.onSelectItem(index)}>
//               {name}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }
export default Category;
