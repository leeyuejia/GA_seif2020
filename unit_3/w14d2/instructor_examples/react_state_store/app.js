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

console.log(products);


////////// RENDER DYNAMICALLY ///////
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products,
      value: ''
    }
  }
  handleChange = event => {
    console.log(event.target.id);
    this.setState({ [event.target.id]: event.target.value }, () => {
      console.log(this.state)
    });
  };

    handleSubmit = event => {
    event.preventDefault();
    const newItem = {
      name: this.state.name,
      price: this.state.price,
      description: this.state.description
    }
    this.setState ({
      products: [
        newItem , 
        ...this.state.products
      ],
      price: '',
      description: '',
      name: ''
    })
  };

  /// cannot use .forEach as it returns undefined
  render() {
    return (
      <div>
        <h1>Big Time Shopping</h1>
        <h2> Prview our new item</h2>
        <h3>{this.state.name}</h3>
        <h3>{this.state.price}</h3>
        <h3>{this.state.description}</h3>
        <form onSubmit = {this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" value={this.state.name} onChange={this.handleChange} id="name" placeholder = 'name of product'/>
          <label htmlFor="price">Price</label>
          <input type="number" value={this.state.price} onChange={this.handleChange} id="price" />
          <br />
          <label htmlFor="description">Description</label>
          <input type="textarea" value={this.state.description} onChange={this.handleChange} id="description" />
          <input type = "submit"/>
        </form>

        <ul>
          {this.state.products.map(product =>
            <li>{product.name} ____ SGD{product.price} ___{product.description}</li>)}
        </ul>

      </div>
    )
  }
}

class Greet extends React.Component {
  render() {
    this.props.Name = "superman"
    return (
      <div>
        hello {this.props.Name}, a.k.a {this.props.heroName}
        <p>{this.props.children}</p>
      </div>
    )
  }
}

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Greet Name="Bruce" heroName="Batman">
//         </Greet>
//       </div>
//     )
//   }
// }
////////// RENDER DYNAMICALLY ///////


////////// ADDING EVENT HANDLER ///////

// class App extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       price: 8,
//     }
//   }
//   clickHandler = async () => {
//     /// to change the price value, 
//     this.state.price = 10;
//     console.log(this.state.price)
//     /// OR
//     await this.setState({price: this.state.price +2})
//     console.log(this.state.price)
//   }

//   render() {
//     return (
//       <div>
//         <button onClick ={this.clickHandler} >click me!</button>
//         Hello World
//         <p>{this.state.price}</p>
//       </div>
//     )
//   }
// }

////////// ADDING EVENT HANDLER ///////




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
// handleChange = event => {
//   console.log(event.target.value);
//   this.setState({ value: event.target.value });
// };

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

ReactDOM.render(<App />, document.querySelector(".container"));
