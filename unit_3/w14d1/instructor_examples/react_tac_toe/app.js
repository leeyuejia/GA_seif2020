// class Square extends React.Component {
//   render () {
//     return (
//       <div>
//         <h4>square</h4>
//       </div>
//     )
//   }
// }

// class Board extends React.Component {
//   render () {
//     return (
//       <div className='board'>
//         <Square />
//         <Square />
//         <Square />
//         <Square />
//         <Square />
//         <Square />
//         <Square />
//         <Square />
//         <Square />
//       </div>
//     )
//   }
// }

// class Player extends React.Component {
//   render () {
//     return (
//       <div className={this.props.whichPlayer}>
//         <h2>Player {this.props.whichPlayer} </h2>
//         <h3>Wins: </h3>
//       </div>
//     )
//   }
// }

// class Header extends React.Component {
//   render () {
//     return (
//       <h1> React Tac Toe </h1>
//     )
//   }
// }

// class App extends React.Component {
//   render () {
//     return (
//       <div>
//         <Header />
//         <Player whichPlayer='X' />
//         <Player whichPlayer='O' />
//         <Board />
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <App />,
//   document.querySelector('.container')
// )
/*
class Square extends React.Component {
  render() {
    return (
      <div>
        <h4>square</h4>
      </div>
    );
  }
}

class Board extends React.Component {
  render() {
    return (
      <div className="board">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    );
  }
}

class Player extends React.Component {
  render() {
    return (
      <div className={this.props.whichPlayer}>
        <h2>Player {this.props.whichPlayer}</h2>
        <h3>Wins: </h3>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Player whichPlayer="X" />
        <Player whichPlayer="O" />
        <Board />
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return <h1> Header - React Tac Toe </h1>;
  }
}

ReactDOM.render(<App></App>, document.querySelector(".container"));
*/
////////////////  WRITING IN CLASS COMPONENT
// class Header extends React.Component{
//   render() {
//     return (
//       <h1> React Tac Toe</h1>
//     )
//   }
// }

////////////////   WRITING in FUNCTION COMPONENT
const Header = (prop) => {
  return <h1 id={prop.hello}> REACT TAC TOE {prop.hello}</h1>
}

class Player extends React.Component {
  render () {
    return (
      <div className={this.props.whichPlayer}>
        <h2>Player {this.props.whichPlayer} </h2>
        <h3>Wins: </h3>
      </div>
    )
  }
}

class Square extends React.Component{
  render() {
    return (
      <div>
        <h4>Square</h4>
      </div>
    )
  }
}



class Board extends React.Component {
  render() {
    return(
      <div>
           <h1 className='board-title'>the Board!</h1>
        <div className='board'>
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    )
  }
}



class App extends React.Component {
  render() {
    return <div>
      <Header hello ="world"/>
      <Player whichPlayer = 'X'/>
      <Player whichPlayer = 'O'/>
      <Board />
    </div>
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)
