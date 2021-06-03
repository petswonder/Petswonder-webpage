import React from 'react'


const Notification = ({text, type}) => {


    return (
        <div className="position-fixed">
        <div className={`alert alert-${type}`} role="alert">
            {text}
        </div>
        </div>

    )
}

export default Notification
