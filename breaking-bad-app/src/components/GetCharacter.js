import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Character from './Character';

import { fetchCharacters } from '../actions';

const GetCharacter = ({ characters, isFetching, error, fetchCharacters }) => {
    console.log(characters);
    useEffect(() => {
        fetchCharacters();
    }, []);
    if (isFetching) {
        return <h2>I am the one who Loads...</h2>
    }
    return (
        <div>
            {error && <p>{error}</p>}
            {characters.map(character =>
                <Character key={character.char_id} character={character} />
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        characters: state.characters,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { fetchCharacters }
)(GetCharacter);