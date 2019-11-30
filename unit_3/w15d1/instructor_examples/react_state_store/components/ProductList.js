class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inShoppingCart: false
    };
  }

  toggleCart = () => {
    this.setState({ inShoppingCart: !this.state.inShoppingCart });
  };

  handleClick = () => {
    // call handleAdd function from parent
    if (!this.state.inShoppingCart) {
      this.props.addToCart(this.props.product);
      this.toggleCart();
    } else {
      this.props.removeFromCart(this.props.product);
      this.toggleCart();
    }
  };

  render() {
    return (
      <li onClick={this.handleClick}>
        {this.props.product.name} {this.props.product.price}
        {this.state.inShoppingCart ? (
          <span> is in the shopping cart! </span>
        ) : (
          ""
        )}
      </li>
    );
  }
}
