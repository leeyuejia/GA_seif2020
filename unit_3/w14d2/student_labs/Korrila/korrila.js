
class Title extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title.toUpperCase()}</h1>
            </div>
        )
    }
}

class Topping extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            receipts: receipts
        }
    }
    render() {
        return (
            <ul>
                <button id={this.props.index} type='button' onClick={this.props.toggleTopping}>Close</button>
                {receipts.map((receipt, index) => {
                    if (index == this.props.index) {
                        return receipt.order.toppings.map(topping =>
                            <li class='text-muted'>{topping}</li>
                        )
                    }
                })}
            </ul>
        )
    }
}
class Receipt extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            receipts: receipts
        }
    }
    togglePaid = (event) => {
        console.log('hi')
        const update = this.state.receipts.map((receipt, index) => {
            if (index == event.target.id) receipt.paid = true;
            return receipt;
        });
        this.setState({ receipts: update })
        console.log(this.state.receipts[event.target.id])
    }
    toggleTopping = (event) => {
        console.log(event.target.id)
        const update = this.state.receipts.map((receipt, index) => {
            if (index == event.target.id) {
                receipt.toppingShow = receipt.toppingShow ? false : true
                return receipt
            }
        })
        this.setState({ receipt: update })
    }
    render() {
        return (
            <div class='receipt-container'>
                {this.state.receipts.map((receipt, index) => {
                    return <div class='receipt card m-3' id={index}>
                        <div class='card-body' style={{ height: "150px", "flex": "1 0 150px" }}>
                            <h5>{receipt.person}</h5>
                        </div>
                        <div class="card-header">
                            Order
                        </div>
                        <ul class='list-group list-group-flush'>
                            <li class='list-group-item'><b>Main:</b> {receipt.order.main}</li>
                            <li class='list-group-item'><b>Protein:</b>{receipt.order.protein}</li>
                            <li class='list-group-item'><b>Rice:</b>{receipt.order.rice}</li>
                            <li class='list-group-item'><b>Sauce:</b>{receipt.order.sauce}</li>
                            <li class='list-group-item' id={receipt.order.main}>
                                <b>Toppings:</b><br />
                                {receipt.toppingShow ?
                                    <Topping index={index} toggleTopping={this.toggleTopping}></Topping>
                                    :
                                    <button id={index} type='button' onClick={this.toggleTopping}>Click to see more</button>
                                }
                            </li>
                            <li class='list-group-item'><b>Drinks:</b>{receipt.order.drink}</li>
                        </ul>
                        <div class="card-header border-top totalBill mt-2">
                            {receipt.paid ? <p className="green" >Paid</p> : <button id={index} type='button' onClick={this.togglePaid} className="btn btn-danger">Pay now</button>}
                            <p class="cost"> <b>Total Bill:</b>${receipt.order.cost} </p>
                        </div>
                    </div>
                })}
            </div>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            receipts: receipts,
        }
    }
    render() {
        return (
            <div>
                <Title title='Korrila' />
                <Receipt />
            </div>
        )
    }

}

ReactDOM.render(<App />, document.querySelector(".container"));
