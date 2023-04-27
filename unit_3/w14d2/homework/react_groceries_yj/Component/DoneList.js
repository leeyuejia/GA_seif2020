class DoneList extends React.Component {
    constructor(props) {
        super(props)
    }
    deleteHistoryItem = (event) => {
        event.preventDefault()
        console.log(event.target)
        this.props.HandleDeleteHistoryItem(this.props.doneList, this.props.index)
    }
    render() {
        return (
            <tr>
                <th scope='row'>{this.props.index + 1} </th>
                <th>{this.props.doneList.item} </th>
                <th>{this.props.doneList.brand} </th>
                <th>{this.props.doneList.quantity} {this.props.doneList.units} </th>
                <th>{this.props.doneList.datePurchased} </th>
                <th><button className='btn btn-danger' onClick={this.deleteHistoryItem}>delete</button> </th>
            </tr>
        )
    }
}