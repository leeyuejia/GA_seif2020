
class App extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            groceries: groceries
             
        }
    }
    render () {
        return (
            <div>
                <Title title='Shopping List'/>
                
                <GroceriesList groceries={this.state.groceries} />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.container')
)
    