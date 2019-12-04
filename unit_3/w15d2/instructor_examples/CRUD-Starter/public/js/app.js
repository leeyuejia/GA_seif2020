class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      todos: []
    };
  }

  // on first load
  componentDidMount() {
    console.log("componentDidMount");
    fetch("/todos")
      .then(response => response.json())
      .then(todos => {
        console.log(todos);
        this.setState({
          todos: todos
        });
      });
  }

  deleteToDo = (id, index) => {
    axios.delete("/todos/" + id).then(data => {
      axios.get("/todos").then(response => {
        console.log(response.data);
        this.setState({
          todos: response.data
        });
      });
    });

    /*
    fetch("todos/" + id, {
      method: "DELETE"
    }).then(data => {
      // this.setState({
      //   todos: [
      //     ...this.state.todos.slice(0, index),
      //     ...this.state.todos.slice(index + 1)
      //   ]
      // })

      // const updatedTodos = this.state.todos.filter(todo => {
      //   if (todo._id !== id) return todo;
      // });

      // this.setState({
      //   todos: updatedTodos
      // });

      fetch("/todos")
        .then(response => response.json())
        .then(todos => {
          console.log(todos);
          this.setState({
            todos: todos
          });
        });
        
    });*/
  };

  updateToDo = (todo, index) => {
    todo.complete = !todo.complete;

    axios
      .put("todos/" + todo._id, {
        description: todo.description,
        complete: todo.complete
      })
      .then(response => {
        fetch("/todos")
          .then(response => response.json())
          .then(todos => {
            this.setState({ todos: todos });
          });
      });
    /*
    fetch("todos/" + todo._id, {
      body: JSON.stringify(todo),
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(updatedToDo => updatedToDo.json())
      .then(jsonedToDo => {
        fetch("/todos")
          .then(response => response.json())
          .then(todos => {
            this.setState({ todos: todos });
          });
      });
      */
  };

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
            {this.state.todos.map((todo, index) => {
              return (
                <tr>
                  <td className={todo.complete ? "complete" : ""}>
                    {" "}
                    {todo.description}{" "}
                  </td>
                  <td onClick={() => this.deleteToDo(todo._id, index)}> X </td>
                  <td onClick={() => this.updateToDo(todo, index)}>
                    {" "}
                    complete{" "}
                  </td>
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
