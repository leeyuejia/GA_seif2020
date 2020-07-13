class ProductList extends React.Component {
    constructor(props) {
        super(props);
    }

    toggleCart = () => {
        this.props.handleAdd(this.props.product);
    }
    
    render() {
        return (
            <li onClick={this.toggleCart}>{this.props.product.name}  {this.props.product.price}</li>
        )
    }
}