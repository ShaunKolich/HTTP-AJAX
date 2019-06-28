import React from 'react';
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';
import Edit from '../Components/edit';

const Items = styled.div`
margin-left:10px;
span{
    margin-left:10px;
}
`;

function FriendsList(props) {

    return (
        <div>
            {props.friends.map(friend =>

                <Items key={friend.id}>
                    <span>{friend.id}</span>
                    <span>{friend.age}</span>
                    <span>{friend.name}</span>
                    <span>{friend.email}</span>


                    <button onClick={() => {
                        props.history.push('/edit')
                    }}>Edit</button>


                    <button onClick={() => {
                        props.deleteHandler(friend.id)

                    }}>Delete</button>
                </Items>

            )}

            <Route exact path='/edit' render={(props) => {
                return (
                    <Edit {...props}  />
                )
            }} />
        </div>

    )


}

export default FriendsList;