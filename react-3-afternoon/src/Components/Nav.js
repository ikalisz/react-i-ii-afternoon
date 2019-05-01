import React from 'react'
import '../App.css'

export default function Nav (props) {
    return (
        <div className="navBar parentNav">
            <button className="navButton" onClick={() => props.dataNumMinus()}>{'< Previous'}</button>
            <div className="navBar utilityButtons">
            <button className="fnButtons">Edit</button>
            <button className="fnButtons">Delete</button>
            <button className="fnButtons" >Add</button>
            </div>
            <button className="navButton" onClick={() => props.dataNumPlus()}>{'Next >'}</button>
        </div>
    )
}