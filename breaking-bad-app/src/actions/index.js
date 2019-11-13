import axios from 'axios';

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const DELETE = 'DELETE';

export const fetchCharacters = () => dispatch => {
    dispatch({ type: 'START_FETCHING' })
    axios
        .get('https://www.breakingbadapi.com/api/characters')
        .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};

export const deleteCharacter = (char_id, characters) => dispatch => {
    const newCharacters = characters.filter(character => {
        return character.char_id !== char_id
    })

    dispatch({ type: 'DELETE', payload: newCharacters })
}