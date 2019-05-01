import React from 'react'

import '../App.css'

export default function DataDisplay(props) {
        const dataNumRef = props.dataList[props.dataNumToDisplay]
        const movieListDisplay = dataNumRef.favoriteMovies.map((val, i) => {
            return <li key={i}>{val}</li>
        })

        return (
            <div className="dataBox">
                <h2 className="dataNumText">{dataNumRef.id}/{props.dataList.length}</h2>
                <div className="dataDisplayText">
                    <div className="nameHolder">
                    <h2 className="dataName">{dataNumRef.name.first} {dataNumRef.name.last}</h2>
                    </div>
                    <div className="dataCountry One">
                        <h3>From:</h3>
                        <p className="startSmallText">{dataNumRef.city} </p>
                        <p>, {dataNumRef.country}</p>
                    </div>
                    <div className="dataCountry">
                        <h3>Job Title:</h3>
                        <p className="startSmallText">{dataNumRef.title}
                        </p>
                    </div>
                    <div className="dataCountry">
                        <h3>Employer:</h3>
                        <p className="startSmallText">{dataNumRef.employer}</p>
                    </div>
                    <div className="favMovies">
                        <h3>Favorite Movies:</h3>
                        <ol className="movieList">
                        {movieListDisplay}
                        </ol>
                    </div>
                </div>
            </div>
        )
    }