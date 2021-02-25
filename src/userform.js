import React from "react";
import './userform.css';
//ES6
export default class Userform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: this.props.firstname,
            age: this.props.age || 10,
            users: []
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
                        <tr><th>firstname</th><th>Age</th>
                        <th>gender</th>
                        <td></td></tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((user, index) => {
                            return <tr>
                                <td>{user.firstname}</td>
                                <td>{user.age}</td>
                                <td>{user.gender}</td>
                                <td><button onClick={this.deleteRow.bind(this, index)}>Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
    deleteRow=(selectedRow)=> {
        if(!window.confirm('Are you sure?')){
            return;
        }
        console.log(selectedRow);//splice
        this.state.users.splice(selectedRow, 1);
        this.setState({
            users: this.state.users
        });
    }
    handleEvent = (event) => {
        this.setState({ //tells react to update UI 
            // Object.assign(this.state, { [event.target.name]:event.target.value })
            ...this.state, [event.target.name]: event.target.value   //destructuring, spread operator
        });
    }

    save = () => {  //event handler for button
        console.log(this.state);
        this.state.users.push({
            firstname:this.state.firstname,
            age:this.state.age,
            gender:this.state.gender
        });
        this.setState({
            users:this.state.users
        })
    }
} //ALT+SHIFT+F