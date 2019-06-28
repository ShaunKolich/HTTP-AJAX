import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Edit from '../edit';

const Items = styled.div`
margin-left:10px;
span{
    margin-left:10px;
}
`;

function FriendsList (props){

        return (
            <div>
                {props.friends.map(friend =>
                   
                    <Items key={friend.id}>
                        <span>{friend.id}</span>
                        <span>{friend.age}</span>
                        <span>{friend.name}</span>
                        <span>{friend.email}</span>
                        
                        <Link to = {`/edit/${friend.id}`}>
                            <button>Edit</button>
                            <Edit></Edit>
                        </Link>
                        <button onClick={() => {
                            props.deleteHandler(friend.id)
                            
                        }}>Delete</button>
                    </Items>
                    
                )}
            </div>

        )
    

} 

export default FriendsList;