import React from 'react';
import './App.css';
import Friendslist from '../src/Components/friendslist';
import styled from 'styled-components';
import { Link, Route, Switch } from 'react-router-dom';

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


function App() {

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
          return(
            <Friendslist />
          )
        }} />
        {/* <Route exact path="/friendsAdd" render={() => {
          return(
            <AddFriend/>
          )
        }} /> */}
        
      </FriendsListContainer>



    </TopNav>




  );
}

export default App;
