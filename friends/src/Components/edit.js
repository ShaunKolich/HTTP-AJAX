import React, { Component } from "react"
import axios from "axios";

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [],
            email: "",
            age: "",
            name: ""
        }

    }
    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`http://localhost:5000/friends`)
            .then(response => {
                // const { name, age, email } = response.date;
                // this.setState ({name, age, email})
                let friend = response.data;
                friend = friend.filter((item) => item.id === Number(id))
                const { name, age, email } = friend[0];
                this.setState ({name, age, email})
                console.log(friend,id)


            })
            .catch(error => {
                console.log(error);
            })

    }

    editHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    updateFriend = (e) => {
        e.preventDefault()
        const id = this.props.match.params.id
        const { name, age, email } = this.state
        const payload = { name, age, email }

        axios.put(`http://localhost:5000/friends/${id}`, payload)
            .then((response) => {
                this.setState({
                    errorMessage: null
                })
                this.props.updateState(response.data)
                this.props.history.push("/edit")
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {

        const { name, age, email } = this.state
        
        console.log(this.props.match.params.id);
        return (
            <div>
                <form onSubmit={this.updateFriend}>
                    <input type='text' onChange={this.editHandler} name='name' value={name} placeholder="Name"></input>
                    <input type='text' onChange={this.editHandler} name='age' value={age} placeholder='age'></input>
                    <input type='email' onChange={this.editHandler} name='email' value={email} placeholder='email'></input>
                    <button>Update</button>
                </form>
            </div>

        )

    }




}


export default Edit;