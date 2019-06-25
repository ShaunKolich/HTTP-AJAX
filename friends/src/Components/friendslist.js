import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import AddFriend from '../Components/addfriend';


export default class Friendslist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            friends: [],
            friend: "",
            email: "",
            age: ""
        }
    }

    changeHandler = (e) => {

        this.setState({ [e.target.name]: e.target.value })

    }
    addfriend = (e) => {
        e.preventDefault();
        const newFriend = {
            name: this.state.friend,
            age: this.state.age,
            email: this.state.email
        }
        axios.post('http://localhost:5000/friends', newFriend)
            .then(response => {
                console.log(response);

            })
            .catch(err => console.log('error', err));


    }


    componentDidMount() {
        axios
            .get('http://localhost:5000/friends')
            .then(response => {
                this.setState({ friends: response.data })
            })
            .catch(err => {
                console.log('Error', err);
            })



    }
    render() {
        return (
            <div>
                {this.state.friends.map(friend =>
                    <div key={friend.id}>
                        {friend.id}
                        {friend.name}
                        {friend.email}
                    </div>
                )}

                <Route exact path="/friendsAdd" render={() => {
                    return (
                    <AddFriend />
                    )
                }} />
            </div>

        )
    }

} 