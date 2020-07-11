// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       products: products,
//       name: "",
//       price: 0,
//       description: "Describe this item",
//       isHiring: true
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.toggleHiring = this.toggleHiring.bind(this);
//   }
//   handleChange(event) {
//     this.setState({ [event.target.id]: event.target.value });
//   }
//   handleSubmit(event) {
//     event.preventDefault();
//     const newItem = {
//       name: this.state.name,
//       price: this.state.price,
//       description: this.state.description
//     };
//     this.setState({
//       products: [newItem, ...products],
//       name: "",
//       price: 0,
//       description: "Describe this item"
//     });
//   }
//   toggleHiring() {
//     this.setState({ isHiring: !this.state.isHiring });
//     console.log(this.state.isHiring);
//   }
//   render() {
//     return (
//       <div>
//         <h1 onClick={this.toggleHiring}> Big Time Shopping </h1>
//         {!this.state.isHiring ? (
//           <h2>Yes, we are hiring </h2>
//         ) : (
//           <h2>Sorry, try again tomorrow</h2>
//         )}
//         <form onSubmit={this.handleSubmit}>
//           <label for="name">Name</label>
//           <input
//             type="text"
//             value={this.state.name}
//             onChange={this.handleChange}
//             id="name"
//           />
//           <br />
//           <label for="price">Price</label>
//           <input
//             type="number"
//             value={this.state.price}
//             onChange={this.handleChange}
//             id="price"
//           />
//           <br />
//           <label for="description">Description</label>
//           <textarea
//             value={this.state.description}
//             onChange={this.handleChange}
//             id="description"
//           />
//           <input type="submit" />
//         </form>
//         <div>
//           <h2>Preview our new item</h2>
//           <h3>{this.state.name}</h3>
//           <h4>{this.state.price}</h4>
//           <h5>{this.state.description}</h5>
//         </div>
//         <ul>
//           {this.state.products.map(product => {
//             return (
//               <li>
//                 {product.name} {product.price}
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       products: products,
//       name: "",
//       price: 0,
//       description: "Describe this item"
//     };
//   }
//   // handleChange = event => {
//   //   console.log(event.target.value);
//   //   this.setState({ value: event.target.value });
//   // };

//   handleChange = event => {
//     this.setState({ [event.target.id]: event.target.value });
//   };

//   handleChangeName = event => {
//     this.setState({ name: event.target.value });
//   };

//   handleChangePrice = event => {
//     this.setState({ price: event.target.value });
//   };

//   handleChangeDescription = event => {
//     this.setState({ description: event.target.value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     const newItem = {
//       name: this.state.name,
//       price: this.state.price,
//       description: this.state.description
//     };

//     this.setState({
//       products: [newItem, ...this.state.products],
//       name: "",
//       price: 0,
//       description: "Describe this item"
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h1> Big Time Shopping </h1>
//         <form onSubmit={this.handleSubmit}>
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             value={this.state.name}
//             onChange={this.handleChangeName}
//             id="name"
//             placeholder="name of product"
//           />
//           <br />
//           <label htmlFor="price">Price</label>
//           <input
//             type="number"
//             value={this.state.price}
//             onChange={this.handleChangePrice}
//             id="price"
//           />
//           <br />
//           <label htmlFor="description">Description</label>
//           <input
//             type="textarea"
//             value={this.state.description}
//             onChange={this.handleChangeDescription}
//             id="description"
//           />
//           <input type="submit" />
//         </form>
//         {this.state.products.map(item => (
//           <li>
//             {item.name} {item.price}
//           </li>
//         ))}
//       </div>
//     );
//   }
// }


// class App extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       products: products,
//       name: '',
//       price: 0,
//       description: '',
//       isHiring: true
//     }

//     this.toggleHiring = this.toggleHiring.bind(this);
//   }
//   handleChange = (event) => {
//     this.setState({ [event.target.id]: event.target.value }, () => {
//       console.log(this.state)
//     });
//   }
//   handleSubmit = (event) => {
//     event.preventDefault();
//     const newItem = {
//       name: this.state.name,
//       price: parseInt(this.state.price),
//       description: this.state.description
//     };
//     this.setState({
//       products: [
//         newItem,
//         ...this.state.products
//       ],
//       price: 0,
//       description: '',
//       name: ''
//     })
//   }

//   toggleHiring () {
//     this.setState({isHiring: !this.state.isHiring})
//   }
//   render() {
//     return (
//       <div>
//         <h1 onClick={this.toggleHiring}> Big Time Shopping </h1>
//         {!this.state.isHiring ? <h2>Yes, we are hiring </h2>: <h2>Sorry, try again tomorrow</h2>}
//         <form onSubmit={this.handleSubmit}>
//           <label htmlFor="name">Name</label>
//           <input type='text' value={this.state.name} onChange={this.handleChange} id='name' placeholder='name of product' />
//           <label htmlFor='price'>Price</label>
//           <input type='number' value={this.state.price} onChange={this.handleChange} id='price' />
//           <br />
//           <label htmlFor='description'>Description</label>
//           <input type='textarea' value={this.state.description} onChange={this.handleChange} id='description' />
//           <input type="submit" />
//         </form>
//         <div>
//           <h2>Preview our new item</h2>
//           <h3>{this.state.name}</h3>
//           <h4>{this.state.price}</h4>
//           <h5>{this.state.description}</h5>
//         </div>
//         <ul>
//           {this.state.products.map(product => {
//             return (
//               <li>{product.name}  {product.price}</li>)
//           }
//           )
//           }
//         </ul>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<App />, document.querySelector('.container'))
const receipts = [
  {
    person: 'Karolin',
    order: {
      main: 'Burrito',
      protein: 'Organic Tofu',
      rice: 'Purple Rice',
      sauce: 'Green Crack',
      toppings: [
        'Baby Bok Choy', 'Cucumber Kimchi'
      ],
      drink: 'Korchata',
      cost: 22
    },
    paid: false
  },
  {
    person: 'Mark',
    order: {
      main: 'Rice Bowl',
      protein: 'Ginger Soy Chix',
      rice: 'Sticky Rice',
      sauce: 'Korilla',
      toppings: [
        'Yuzu Pickled Sweet Pepper', 'Kale'
      ],
      drink: 'Korchata',
      cost: 19
    },
    paid: false
  },
  {
    person: 'Matt',
    order: {
      main: 'Salad Bowl',
      protein: 'Organic Tofu',
      rice: 'none',
      sauce: "K'lla",
      toppings: [
        'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'
      ],
      drink: 'Sparkling Blood Orange Soda',
      cost: 20
    },
    paid: true
  }
]
class Order extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          orderCategories: ['main', 'protein', 'rice', 'sauce', 'drink', 'cost'],
      }
  }

  formatCategoryName (categoryName) {
      return categoryName[0].toUpperCase() + categoryName.slice(1);
  }

  handlePaid = (e) => {
      e.target.checked && this.props.setPaid(this.props.index);
  }

  render() {
      return (
          <div className="order-container">
              <div className="order-content-container">
                  <h3>{name}</h3>
                  { this.state.orderCategories.map(category => {
                      return <p><span>{this.formatCategoryName(category)}: </span>{this.props.order[category]}</p>
                  }) }
                  <label>Paid?
                      <input
                          type="checkbox"
                          onChange={this.handlePaid}
                      />
                  </label>
              </div>
          </div>
      )
  }
}

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          receipts,
      };
  }

  setPaid = (receiptIndex) => {
      const newReceipts = this.state.receipts.map((receipt, index) =>{
          if (index === receiptIndex) receipt.paid = true;
          return receipt;
      });
      this.setState({ receipts: newReceipts });
  }

  render() {
      return (
          <div>
              <h1>Korilla</h1>
              <div className="flex-container">
                  {
                      this.state.receipts.map((receipt, index) => {
                          return !receipt.paid
                              && <Order
                                  index={index}
                                  name={receipt.name}
                                  order={receipt.order}
                                  setPaid={this.setPaid}
                              />
                      })
                  }
              </div>
          </div>
      );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));