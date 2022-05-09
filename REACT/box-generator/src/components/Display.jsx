// import React, {useState} from 'react';

const Display =(props) => {

    const {allColors} = props
    



    return (
        <div>
            {
                allColors.map((colors, index) => {
                    return(
                        // when inline styling use double brakcets
                        <div style = {{backgroundColor : colors}} className="colorbox" key={index}  >
                            
                        </div>
                    )
                } )
            }

        </div>
    )
}

export default Display