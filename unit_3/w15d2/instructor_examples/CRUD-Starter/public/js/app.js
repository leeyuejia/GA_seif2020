class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      todos: []
    };
  }

  componentDidMount() {
    console.log("component did mount");
    fetch("/todos")
      .then(response => response.json())
      .then(todos => {
        this.setState({
          todos: todos
        });
      });
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // fetch("/todos", {
    //   body: JSON.stringify({ description: this.state.description }),
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json, text/plain, */*",
    //     "Content-Type": "application/json"
    //   }
    // })
    //   .then(createdToDo => {
    //     return createdToDo.json();
    //   })
    //   .then(jsonedToDo => {
    //     // reset the form
    //     // add person to list
    //     this.setState({
    //       description: "",
    //       todos: [jsonedToDo, ...this.state.todos]
    //     });
    //     console.log(jsonedToDo);
    //   })
    //   .catch(error => console.log(error));

    // Go to axios github for more info -> https://github.com/axios/axios
    //   axios({
    //     method: "post",
    //     url: "/todos",
    //     data: {
    //       description: this.state.description
    //     }
    //   }).then(response => {
    //     console.log(response.data);
    //     const jsonedToDo = response.data;
    //     this.setState({
    //       description: "",
    //       todos: [jsonedToDo, ...this.state.todos]
    //     });
    //   });
    // };
    axios
      .post("/todos", {
        description: this.state.description
      })
      .then(response => {
        console.log(response.data);
        const jsonedToDo = response.data;
        this.setState({
          description: "",
          todos: [jsonedToDo, ...this.state.todos]
        });
      });
  };

  render() {
    return (
      <div>
        <h1> To Dos </h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            value={this.state.description}
            onChange={this.handleChange}
            id="description"
          />
          <input type="submit" />
        </form>
        <table>
          <tbody>
            {this.state.todos.map(todo => {
              return (
                <tr>
                  <td> {todo.description} </td>
                  <td> X </td>
                  <td> complete </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
