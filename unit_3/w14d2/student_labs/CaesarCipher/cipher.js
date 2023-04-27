const caesarShift = (str, amount) => {
    // Wrap the amount, deals with negatives
    if (amount < 0) {
      return caesarShift(str, amount + 26)
    }
    // go over each character
    let output = str.split('').map(c => {
      // check if it is a letter
      if (c.match(/[a-z]/i)) {
        // convert to number code
        let code = c.charCodeAt(0)
        // shift by number code uppercase
        if ((code >= 65) && (code <= 90)) {
          return String.fromCharCode(((code - 65 + amount) % 26) + 65)
        // shift by number lowercase
        // could just be else, but more readable to write another if statement
        } else if ((code >= 97) && (code <= 122)) {
          return String.fromCharCode(((code - 97 + amount) % 26) + 97)
        }
      // other character? Don't shift it
      } else {
        return c
      }
    })
    return output.join('')
  }

class Title extends React.Component {
    render() {
        return (
            <h1>{this.props.title}</h1>
        )
    }
}
class Amount extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <label htmlFor='amount'>Amount to shift</label>
                <input type='number' id='amount' onChange={this.props.changeAmount}></input>
            </div>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            encode : '',
            decode : '',
            encoded : this.encode,
            decoded : this.decode,
            amount: 3
        }
    }
    encode = event => {
        event.preventDefault();
        let str = event.target.value
        let amount = this.state.amount
        const result = caesarShift(str, amount)
        this.setState ({encoded : result}, () => {
            console.log(this.state)
        })
        return result
    }
    decode = event => {
        event.preventDefault();
        let str = event.target.value
        let amount = - this.state.amount
        const result = caesarShift(str, amount)
        this.setState ({decoded : result}, () => {
            console.log(this.state)
        })
        return result
    }
    setAmount = event => {
        const newAmount = parseInt(event.target.value)
        this.setState({amount:newAmount})
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <Title title='Ceaser Cipher' />
                <Amount amount={this.state.amount} changeAmount= {this.setAmount}/>
                <div className="container">
                    <div className='encode card text-center m-2 p-2'>
                        <h2>ENCODE</h2>
                        <label htmlFor='textarea'> Message </label>
                        <textarea className='textarea' id='encode' onChange={this.encode}>{this.state.encode}</textarea>
                        <h3>Encrypted Message</h3>
                        <h4>{this.state.encoded}</h4>
                    </div>
                    <div className='decode card text-center m-2 p-2'>
                        <h2>DECODE</h2>
                        <label htmlFor='textarea'> Message </label>
                        <textarea className='textarea' onChange={this.decode}>{this.state.decode}</textarea>
                        <h3>Decrypted Message</h3>
                        <h4>{this.state.decoded}</h4>
                    </div>
                </div>
            </div>
        )
    }
}
ReactDOM.render(<App />, document.querySelector("body"));