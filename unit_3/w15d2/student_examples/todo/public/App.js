class List extends React.Component {
    constructor(props){
        super(props)
    }
    deleteThis (id, index) {
        return this.props.deleteToDo(id, index)
    }
    updateThis (todo, index) {
        return this.props.updateToDo(todo, index)
    }
    render() {
        const todo = this.props.todo
        const index = this.props.index
        return (
            <tr className = {this.props.class}>
                <td> item: {index + 1}</td>
                <td> {todo.description} </td>
                <td onClick={() => this.deleteThis(todo._id,index)}> X </td>
                <td> <button onClick ={()=> this.updateThis(todo._id,index)}>Edit</button> </td>
                <td>
                    <input type ='checkbox' name ='complete' onClick = {()=> this.updateThis(todo,index)}></input>
                </td>
            </tr>
        ) 
    }
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            description: '',
            todos: []
        }

    }
    // Can write in a async function way? 
    updateToDo = (todo, index) => {
        todo.complete = !todo.complete
        fetch('todos/' + todo._id, {
          body: JSON.stringify(todo),
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(updatedToDo => updatedToDo.json())
          .then(jsonedToDo => {
            fetch('/todos')
              .then(response => response.json())
              .then(todos => {
                this.setState({ todos: todos })
              })
          })
      }

    deleteToDo = (id,index) => {
        fetch('todos/' + id,{
            method :'DELETE'
        })
        .then(data => {
            this.setState({
                todos:[
                    ...this.state.todos.slice(0,index),
                    ...this.state.todos.slice(index +1)
                ]
            })
        })
    }

    componentDidMount() {
        fetch('/todos')
            .then(response => response.json())
            .then(todos => {
                this.setState({
                    todos: todos
                })
            })
    }
    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        fetch('/todos', {
            body: JSON.stringify({ description: this.state.description }),
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(createdToDo => {
            return createdToDo.json();
        }).then(jsonedToDo => {
            this.setState({
                description: '',
                todos: [jsonedToDo, ...this.state.todos]
            })
        }).catch(err => {
            console.log(err)
        })
    }
    render() {
        return (
            <div>
                <h1> To Dos </h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='description'>Description</label>
                    <input type='text' value={this.state.description} onChange={this.handleChange} id='description' />
                    <input type='submit' />
                </form>
                <h2>{this.state.description}</h2>

                <table>
                    <tbody>
                        {this.state.todos.map((todo, index) => {
                             return (
                                <List 
                                class = {todo.complete? 'complete': ''}
                                todo ={todo} 
                                index = {index} 
                                deleteToDo= {this.deleteToDo}
                                updateToDo = {this.updateToDo}></List>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.querySelector('.container')
)