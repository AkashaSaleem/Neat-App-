import React from 'react';

function NeatTextAlert(props) {
    const capitalizeFirstLetter = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        <>
            <div style={{ height: '50px' }}>
                {/* Displaying general alert */}
                {props.appAlert && (
                    <div className={`alert alert-${props.appAlert.type} alert-dismissible fade show`} role="alert">
                        <strong>{capitalizeFirstLetter(props.appAlert.type)}</strong>: {props.appAlert.msg}
                    </div>
                )}
            </div>
        </>
    );
}

export default NeatTextAlert;

























