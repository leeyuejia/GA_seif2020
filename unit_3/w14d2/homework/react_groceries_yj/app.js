
class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            groceries: groceries,
            doneList: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.addToDoneList = this.addToDoneList.bind(this)
        this.deleteItem = this.deleteItem.bind(this)

    }
    handleSubmit = (event) => {
        event.preventDefault()
        const newInput = event.target
        const newItem = {
            item: newInput.item.value,
            brand: newInput.brand.value,
            quantity: parseInt(newInput.quantity.value),
            units: newInput.units.value,
            note: newInput.note.value ? newInput.note.value : '',
            isPurchased: false
        }
        this.setState({
            groceries: [newItem, ...this.state.groceries]
        })
    }
    addToDoneList = (item) => {
        event.preventDefault()
        item.datePurchased = new Date().toString()
        item.isPurchased = !item.isPurchased
        this.setState({
            doneList: [item, ...this.state.doneList]
        })
    }
    deleteItem = (item, index) => {
        event.preventDefault()
        const array = [...this.state.groceries]
        array.splice(index, 1)
        this.setState({ groceries: array })
    }
    deleteHistoryItem = (item, index) => {
        event.preventDefault()
        const array = [...this.state.doneList]
        array.splice(index, 1)
        this.setState({ doneList: array })
    }
    render() {
        return (
            <div>
                <Title title='Shopping List' />

                <div style={{ 'width': '50%' }} className='mx-auto newItem my-3'>
                    <h2>Add new shopping item</h2>
                    <Input handleSubmit={this.handleSubmit} />
                </div>

                <div className='main-container'>
                    <div className='m-3 list'>
                    <h2 className='text-center'>Purchase item</h2>
                        {this.state.groceries.map((item, index) => {
                            return (
                                <GroceriesList grocery={item} index={index} handleDeleteItem={this.deleteItem} handleDone={this.addToDoneList} />
                            )
                        })}
                    </div>
                    <div className='m-3 doneList'>
                        <h2 className='text-center'>Purchase History</h2>
                        <div className='table'>
                            <thead>
                                <tr>
                                    <th scope='col'>#</th>
                                    <th scope='col'>item</th>
                                    <th scope='col'>brand</th>
                                    <th scope='col'>quantity</th>
                                    <th scope='col'>Date of Purchase</th>
                                    <th scope='col'>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.doneList.map((item, index) => {
                                    return (
                                        <DoneList doneList={item} index={index} HandleDeleteHistoryItem={this.deleteHistoryItem} />
                                    )
                                })
                                }
                            </tbody>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
ReactDOM.render(
    <App />,
    document.querySelector('.head-container')
)
