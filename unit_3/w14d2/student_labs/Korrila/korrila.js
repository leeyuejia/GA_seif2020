
class Title extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title.toUpperCase()}</h1>
            </div>
        )
    }
}

class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            receipt1 : receipt1,
            receipt2 : receipt2,
            receipt3 : receipt3,
            receipts : [receipt1,receipt2,receipt3],
            displayStatus : "hidden"
        }
    }
    toggleTopping = event => {
        this.setState({ displayStatus : 'show'})
        console.log(event.target.id);
    }
    togglePaid = async (event) => {
        console.log('hi')
        this.state.receipts.forEach( receipt => {
            console.log(event.target.name)
            console.log(receipt)
            if(receipt.person === event.target.name) {
             return this.setState({[receipt.paid] : true })
            }
        })
        /// need to use the name to find that person and set it "paid" as true or false
        console.log(event.target.name)
    }
    render() {
        return (
            <div>
                    <Title title='Korrila'/>
                <div class='receipt-container'>
                {this.state.receipts.map (receipt => 
                    <div class= 'receipt card m-3'id={receipt.person}>
                        <div class= 'card-body'>
                            <h5>{receipt.person}</h5>
                        </div>
                        <div class="card-header">
                            Order
                        </div>
                        <ul class = 'list-group list-group-flush'>
                            <li class='list-group-item'><b>Main:</b> {receipt.order.main}</li>
                            <li class='list-group-item'><b>Protein:</b>{receipt.order.protein}</li>
                            <li class='list-group-item'><b>Rice:</b>{receipt.order.rice}</li>
                            <li class='list-group-item'><b>Sauce:</b>{receipt.order.sauce}</li>
                            <li class='list-group-item'id={receipt.order.main}>
                                <b>Toppings:</b><br/>
                                <button id="button" onClick ={this.toggleTopping}>Click here to show more</button>
                                <div class= {this.state.displayStatus}>
                                    {receipt.order.toppings.map(topping => 
                                        <p class='text-muted'>{topping}</p>
                                    )}
                                </div>
                            </li>
                            <li class='list-group-item'><b>Drinks:</b>{receipt.order.drink}</li>
                        </ul>
                        <div class="card-header border-top totalBill mt-2">
                            {receipt.paid ? <p class="green" >Paid</p> : <button name={receipt.person} type='button' onClick= {this.togglePaid} class= "btn btn-danger">Pay now</button>}
                            <p class="cost"> <b>Total Bill:</b>${receipt.order.cost} </p>
                        </div>
                    </div>
                )}
                </div>
            </div>
        )
    }

}

ReactDOM.render(<App />, document.querySelector(".container"));
