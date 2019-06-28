import axios from 'axios';
import './App.css';
import Friendslist from '../src/Components/friendslist';
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';
import React, { Component } from 'react';
import AddFriend from '../src/Components/addfriend';
import Edit from '../src/Components/edit'

const TopNav = styled.div`
      width:100%;
      height:50px;
      border:2px solid red;
  `;
const NavContainer = styled.div`
      width:50%;
      height:100%;
      border:2px solid blue;
      display:flex;
      align-items:flex-end;
          a{
          text-decoration:none;
          margin-left:20px;
          }      

`;

const FriendsListContainer = styled.div`
      width: 100%;
      height:500px;
      border:2px solid black;

`;

const FriendsList = styled.div`
margin-left:10px;

`;

class App extends Component {
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
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data })
      })
      .catch(err => {
        console.log('Error', err);

      }, () => console.log('JB Vapes to much'))

  }

  deleteHandler = (id) => {
    // e.preventDefault();
    axios.delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({ friends: response.data })



      })
      .catch(error => {
        console.log(error);
      })



  }


  changeHandler = (e) => {

    this.setState({ [e.target.name]: e.target.value })

  }
  addfriend = (e) => {
    e.preventDefault();
    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }
    axios.post('http://localhost:5000/friends', newFriend)
      .then(response => {
        console.log(response);
        this.setState({ friends: response.data, name: '', age: '', email: '' })


      })
      .catch(err => console.log('error', err));


  }

  updateState = (friends) => {
    this.setState({ friends })

  }

  render() {
    return (

      <TopNav>
        <NavContainer>
          <nav>
            <Link to="/" className='NavLink'>Home</Link>
            <Link to="/friendsAdd" className='NavLink'>Add Friend</Link>
            {/* <Link to="/Edit" className='NavLink'>Edit Friend</Link> */}
          </nav>

        </NavContainer>
        <FriendsListContainer>

          <Route exact path="/" render={(props) => {
            return (

              <FriendsList>
                <Friendslist {...props} friends={this.state.friends} deleteHandler={this.deleteHandler} />
              </FriendsList>

            )
          }} />
          <Route exact path="/friendsAdd" render={(props) => {
            return (
              <AddFriend {...props} name={this.state.name} age={this.state.age} email={this.state.email} changeHandler={this.changeHandler} addfriend={this.addfriend} />
            )
          }} />
          <Route exact path='/edit/:id' render={(props) => {
            return (
              <Edit {...props} updateState={this.updateState} />
            )
          }} />
        </FriendsListContainer>



      </TopNav>

    )



  }
}
export default App;
