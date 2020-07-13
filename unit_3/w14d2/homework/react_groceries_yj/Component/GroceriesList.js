// class OneItem extends React.Component
class GroceriesList extends React.Component {
    constructor(props) {
        super(props)
    }
    donePurchase = () => {
        this.props.handleDone(this.props.grocery)
    }
    deleteItem = () => {
        this.props.handleDeleteItem(this.props.grocery, this.props.index)
    }
    render() {
        return (
            <div className='card my-3' id={this.props.index}>
                <div className='card-body'>
                    <h5 className='card-title'>{this.props.grocery.item}</h5>
                </div>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'> Brand: {this.props.grocery.brand}</li>
                    <li className='list-group-item'> Amount to buy: {this.props.grocery.quantity} {this.props.grocery.units}</li>
                    {this.props.grocery.note ? <li className='list-group-item'> Note: {this.props.grocery.note}</li> : <li className='list-group-item'>Note: No notes</li>}
                    {this.props.grocery.isPurchased ? <li className='list-group-item'><button className='btn btn-danger' onClick ={this.deleteItem}>Delete</button></li>
                     : 
                     <li className='list-group-item'><button button className='btn btn-primary'  onClick={this.donePurchase}>Done</button></li>}
                </ul>
            </div>
        )
    }
}