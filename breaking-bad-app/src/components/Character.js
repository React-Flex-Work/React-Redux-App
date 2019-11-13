import React from 'react';
import { connect } from 'react-redux';
import { deleteCharacter } from '../actions';

const Character = ({ character, deleteCharacter, characters }) => {
    const { char_id, name, nickname, img, occupation, birthday, portrayed, status } = character;

    const handleDelete = e => {
        e.preventDefault();
        deleteCharacter(char_id, characters)
    }

    return (
        <div className="whole-char">
            <h2>{name}</h2>
            <h4>AKA</h4>
            <h3>{nickname}</h3>
            <img src={img} alt={'breaking bad character'} />
            <div className="char-details">
                <p>Occupation: {occupation}</p>
                <p>Birthday: {birthday}</p>
                <p>Portrayed by: {portrayed}</p>
            </div>
            <div>Spoiler Alert!: {status}</div>
            <button onClick={handleDelete}>Delete Character</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        characters: state.characters
    }
}

export default connect(
    mapStateToProps,
    { deleteCharacter })(Character);