class Input extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                    <label htmlfor='item'>Name of item</label>
                    <input type='text' id='item'/>

                    <label htmlfor='brand'>Brand</label>
                    <input type='text' id='brand'/>

                    <label htmlfor='quantity'>Quantity</label>
                    <input type='number' id='quantity'/>

                    <label htmlfor='units'>Units</label>
                    <select id='units' name='units'>
                        <option value='grams'>grams</option>
                        <option value='pkts'>pkts</option>
                        <option value='qty'>qty</option>
                        <option value='litres'>litres</option>
                    </select>
                    <label htmlfor='note'>Note</label>
                    <textarea id='note' name='note' placeholder='take note'></textarea>
                    <input type='submit'/>
            </form>
        )
    }
}
class App extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            groceries: groceries
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const newInput = event.target
        const newItem = {
            item: newInput.item.value,
            brand: newInput.brand.value,
            quantity: parseInt(newInput.quantity.value),
            units: newInput.units.value,
            note: newInput.note.value? newInput.note.value : '',
            isPurchased: false
        }
        console.log(newItem)
        this.setState({
            groceries: [newItem, ...this.state.groceries]
        })
    }
    render () {
        return (
            <div>
                <Title title='Shopping List'/>
                <Input handleSubmit={this.handleSubmit}/>

                {/* <form onSubmit={this.handleSubmit}>
                    <label htmlfor='item'>Name of item</label>
                    <input type='text' id='item'/>

                    <label htmlfor='brand'>Brand</label>
                    <input type='text' id='brand'/>

                    <label htmlfor='quantity'>Quantity</label>
                    <input type='number' id='quantity'/>

                    <label htmlfor='units'>Units</label>
                    <select id='units' name='units'>
                        <option value='grams'>grams</option>
                        <option value='pkts'>pkts</option>
                        <option value='qty'>qty</option>
                        <option value='litres'>litres</option>
                    </select>
                    <label htmlfor='note'>Note</label>
                    <textarea id='note' name='note' placeholder='take note'></textarea>
                    <input type='submit'/>
                </form> */}
                
                <GroceriesList groceries={this.state.groceries} />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.container')
)
    