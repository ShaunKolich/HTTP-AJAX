import axios from 'axios';
import './App.css';
import Friendslist from '../src/Components/friendslist';
import styled from 'styled-components';
import { Link, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import AddFriend from '../src/Components/addfriend';

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


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      friends: [],
      friend: "",
      email: "",
      age: "",
      name: ""
    }
  }
  changeHandler = (e) => {

    this.setState({ [e.target.name]: e.target.value })

  }
  addfriend = (e) => {
    e.preventDefault();
    const newFriend = {
      names: this.state.name,
      ages: this.state.age,
      emails: this.state.email
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
    
      <TopNav>
        <NavContainer>
          <nav>
            <Link to="/" className='NavLink'>Home</Link>
            <Link to="/friendsAdd" className='NavLink'>Add Friend</Link>
            {/* <Link to="/deleteFriend" className='NavLink'>Delete Friend</Link> */}
          </nav>

        </NavContainer>
        <FriendsListContainer>
       
          <Route exact path="/" render={() => {
            return (
              <Friendslist friends = {this.state.friends} />
            )
          }} />
           <Route exact path="/friendsAdd" render={() => {
                    return (
                      <AddFriend names={this.state.friend}  ages={this.state.age} emails={this.state.email} changeHandler={this.state.changeHandler} addfriend={this.state.addfriend}/>
                    )
                }} />
        
        
        </FriendsListContainer>



      </TopNav>

    )


  
  }
}
export default App;
