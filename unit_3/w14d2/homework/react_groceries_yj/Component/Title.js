// import React from 'react'

// export class Title extends Component {
//     render() {
//         return(
//             <div>
//                 <h1>{this.props.title}</h1>
//             </div>
//         )
//     }
// }

// export default Title

class Title extends React.Component {
    render() {
        return(
                <h1 className='text-center'>{this.props.title}</h1>
        )
    }
}