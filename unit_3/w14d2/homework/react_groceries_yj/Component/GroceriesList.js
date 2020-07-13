class GroceriesList extends React.Component {
    render() {
        return (
            <div>
                {this.props.groceries.map((item,index)=> {
                   return (
                   <div className= 'card' id={index}>
                        <ul>
                            <li> Item Name: {item.item}</li>
                            <li> Brand: {item.brand}</li>
                            <li> Amount to buy: {item.quantity} {item.units}</li>
                            {item.note? <li> Note: {item.item}</li> : <li>Note: No notes</li>}
                            {item.isPurchased? <li>Bought! <button>Delete</button></li>: <li>need to buy <button>Done</button></li>}
                        </ul>
                    </div>
                )})}
            </div>
        )
    }
    
}