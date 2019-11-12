import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Character from './Character';

import { fetchCharacters } from '../actions';

const GetCharacter = props => {
    console.log('GetCharacter props', props);
    useEffect(() => {
        props.fetchCharacters();
    }, []);
    if (props.isFetching) {
        return <h2>I am the one who Loads...</h2>
    }
    return (
        <div>
            {props.error && <p>{props.error}</p>}
            {props.getCharacter.map(character =>
                <Character key={character.char_id} name={character.name} nickname={character.nickname} img={props.img} occupation={props.occupation} birthday={props.birthday} portrayed={props.portrayed} status={props.status} />
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        getCharacter: state.getCharacter,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { fetchCharacters }
)(GetCharacter);