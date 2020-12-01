import React, {createContext, useReducer, useEffect} from 'react';
import AppReducer from './AppReducer';
const initialState = {
    watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : [],
    watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [],
}


export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() =>{
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
        localStorage.setItem('watched', JSON.stringify(state.watchlist));
    }, [state])

    const addMovieToWatchList = (movie) => (
        dispatch({type: "ADD_MOVIE_TO_WATCHLIST", payload: movie})
    );

    return(
        <GlobalContext.Provider value={{
            watchlist: state.watchlist,
            watched: state.watched,
            addMovieToWatchList,
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}