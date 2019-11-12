import React from 'react';

const Character = props => {
    console.log(props);
    return (
        <div className="whole-char">
            <h2>{props.name}</h2>
            <h3>{props.nickname}</h3>
            <img src={props.img} alt={'breaking bad character'} />
            <div className="char-details">
                <p>Occupation: {props.occupation}</p>
                <p>Birthday: {props.birthday}</p>
                <p>Portrayed by: {props.portrayed}</p>
            </div>
            <div>Spoiler Alert!: {props.status}</div>
        </div>
    )
}

export default Character;