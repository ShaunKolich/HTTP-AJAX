import React from "react"

const Edit = (props) => {

    return (
        <div>
            <form onSubmit={props.updateFriend}>
                <input type='text' onChange={props.editHandler} name='name' value={props.name} placeholder="Name"></input>
                <input type='text' onChange={props.editHandler} name='age' value={props.age} placeholder='age'></input>
                <input type='email' onChange={props.editHandler} name='email' value={props.email} placeholder='email'></input>
                <button>Update</button>
            </form>
        </div>


    )


}

export default Edit;