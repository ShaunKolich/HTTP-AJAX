import React, { Component } from 'react';
import styled from 'styled-components';


const AddFriend= (props) =>{
    return (
        <div>
            <form onSubmit={props.addfriend}>
                <input type='text' onChange={props.changeHandler} name='name' value={props.name} placeholder = "Name"></input>
                <input type='text' onChange={props.changeHandler} name='age' value={props.age} placeholder='age'></input>
                <input type='email' onChange={props.changeHandler} name='email' value={props.email} placeholder='email'></input>
                <button>Submit</button>
            
            </form>
        </div>
        

)


}

export default AddFriend;