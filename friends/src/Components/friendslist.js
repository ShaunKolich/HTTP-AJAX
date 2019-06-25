import React, { Component } from 'react';


function FriendsList (props){

        return (
            <div>
                {props.friends.map(friend =>
                    <div key={friend.id}>
                        {friend.id}
                        {friend.name}
                        {friend.email}
                    </div>
                )}

               
            </div>

        )
    

} 

export default FriendsList;