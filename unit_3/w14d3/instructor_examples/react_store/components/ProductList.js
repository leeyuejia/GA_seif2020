
class ProductList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      inShoppingCart: false
    }
    this.toggleCart = this.toggleCart.bind(this)
  }
  toggleCart () {
    this.setState({ inShoppingCart : !this.state.inShoppingCart })
  }
  render () {
    return (
      <li onClick={() => this.props.handleAdd(this.props.product)}>{this.props.product.name }  {this.props.product.price} {this.state.inShoppingCart ? <span> is in the shopping cart! </span> : ''}</li>
    )
  }
}
