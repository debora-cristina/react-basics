import * as actionTypes from './actions.js';

const initialState = {
    persons: []
};

const reducerPerson = (state= initialState, action) => {
    console.log(state.persons);
    switch (action.type){
     case actionTypes.ADD:
     console.log('add');
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: action.personData.name,
            age: action.personData.age
        }
        return {
            ...state,
            persons: state.persons.concat(newPerson)
        }
     case(actionTypes.DELETE):
        return { 
            ...state, 
            persons: state.persons.filter(person => person.id !== action.id)}
     default:
     return state;
    }
};

export default reducerPerson;