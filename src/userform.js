import React from "react";
//ES6
export default class Userform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: this.props.firstname,
            age: this.props.age || 10,
            users: [{
                firstname: 'Pariwesh',
                age: 10,
            }]
        }
    }
    render = () => {
        return (
            <div>
                <input value={this.state.firstname} name='firstname' onChange={this.handleEvent}></input>
                <input value={this.state.age} name='age' onChange={this.handleEvent}></input>
                Male:<input name='gender' value='Male' type='radio' onChange={this.handleEvent}></input>
                feMale:<input name='gender' value='Female' type='radio' onChange={this.handleEvent}></input>
                <button onClick={this.save}> Save</button>
                <table>
                    <thead>
                        <tr><th>firstname</th> <th>Age</th></tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((user, index) => {
                            return <tr>
                                <td>{user.firstname}</td>
                                <td>{user.age}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
    handleEvent = (event) => {
        this.setState({ //tells react to update UI 
            // Object.assign(this.state, { [event.target.name]:event.target.value })
            ...this.state, [event.target.name]: event.target.value   //destructuring, spread operator
        });
    }

    save = () => {  //event handler for button
        console.log(this.state);
    }
} //ALT+SHIFT+F