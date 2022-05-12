import React from 'react'

const TabOne = (props) => {

    const {onClickHandler} = props



    return (
        <div>
            <div className='tab1' onClick={onClickHandler}>
                <h1>Tab 1</h1>
            </div>
            <div className='tab1' onClick={onClickHandler}>
                <h1>Tab 2</h1>
            </div>
            <div className='tab1' onClick={onClickHandler}>
                <h1>Tab 3</h1>
            </div>
        </div>
    )
}

export default TabOne