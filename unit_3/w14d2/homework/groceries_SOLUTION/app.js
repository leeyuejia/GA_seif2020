//console.log(groceries);

class Grocery extends React.Component {
  handleClick = () => {
    this.props.togglePurchase(this.props.grocery);
  };

  render() {
    return (
      <li>
        {this.props.grocery.quantity} {this.props.grocery.units} of{" "}
        {this.props.grocery.brand} {this.props.grocery.item}
        <button onClick={this.handleClick}>Remove</button>
      </li>
    );
  }
}

// Example of React Arrow Function Component
const PurchaseList = ({ grocery }) => {
  //props.grocery
  // const handleClick = () => {
  //   props.togglePurchase(props.grocery);
  // };

  return (
    <li>
      {grocery.quantity} {grocery.units} of {grocery.brand} {grocery.item}
    </li>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: groceries,
      item: "",
      brand: "",
      units: "",
      quantity: 0,
      isPurchased: false
    };
  }

  handleChange = event => {
    console.log(event.target.value);
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("you prevented the default");
    const newItem = {
      item: this.state.item,
      brand: this.state.brand,
      units: this.state.units,
      quantity: this.state.quantity,
      isPurchased: this.state.isPurchased
    };
    this.setState({
      groceries: [newItem, ...groceries],
      item: "",
      brand: "",
      units: "",
      quantity: 0,
      isPurchased: false
    });
  };

  togglePurchase = grocery => {
    console.log(grocery);
    // toggle isPurchase of the grocery item
    const updatedGroceries = groceries.map(groceryItem => {
      if (groceryItem.item === grocery.item) {
        groceryItem.isPurchased = !groceryItem.isPurchased;
        return groceryItem;
      } else return groceryItem;
    });

    // update groceries in the state
    this.setState({ groceries: updatedGroceries });
  };

  render() {
    return (
      <div>
        <h1 className="grocerlist">Groceries</h1>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="item">Item</label>
            <input
              type="text"
              value={this.state.item}
              onChange={this.handleChange}
              id="item"
            />
            <br />
            <label htmlFor="brand">Brand</label>
            <input
              type="text"
              value={this.state.brand}
              onChange={this.handleChange}
              id="brand"
            />
            <br />
            <label htmlFor="units">Units</label>
            <input
              type="text"
              value={this.state.units}
              onChange={this.handleChange}
              id="units"
            />
            <br />
            <label htmlFor="quantity">Quantity</label>
            <input
              type="text"
              value={this.state.quantity}
              onChange={this.handleChange}
              id="quantity"
            />
            <input type="submit" />
          </form>
          <div class="preview">
            <h2>Preview our new item</h2>
            <h3>Item: {this.state.item}</h3>
            <h3>Brand: {this.state.brand}</h3>
            <h3>Units: {this.state.units}</h3>
            <h3>Quantity: {this.state.quantity}</h3>
            <h3>Is Purchased: {this.state.isPurchased ? "yes" : "no"}</h3>
          </div>
          <h2>Checklist</h2>
          <ul class="groceries">
            {this.state.groceries.map(grocery =>
              grocery.isPurchased ? (
                ""
              ) : (
                <Grocery
                  grocery={grocery}
                  togglePurchase={this.togglePurchase}
                />
              )
            )}
          </ul>
          <h2>Purchased</h2>
          <ul class="purchased">
            {this.state.groceries.map(grocery =>
              grocery.isPurchased ? <PurchaseList grocery={grocery} /> : ""
            )}
          </ul>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
