const initialState = {
    moviesFavorites: [],
    moviesLoaded: [],
    movieDetail: {}
};

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case "ADD_MOVIE_FAVORITE":
            return{
                ...state,
                moviesFavorites: state.moviesFavorites.concat(action.payload)
            }
        case "GET_MOVIES":
            return{
                ...state,
                moviesLoaded: action.payload.Search
            }
        case "REMOVE_MOVIE_FAVORITE":
            return{
                ...state,
                moviesFavorites: state.moviesFavorites.filter(movie => movie.id !== action.id)
            }
        case "GET_MOVIE_DETAIL":
            return{
                ...state,
                movieDetail: action.payload
            }   
        default: 
            return {...state}
    }
    // if(action.type === "ADD_MOVIE_FAVORITE"){
    //     return{
    //         ...state,
    //         moviesFavorites: state.moviesFavorites.concat(action.payload)
    //     };
    // }
    // if (action.type === "GET_MOVIES") {
    //     return {
    //       ...state,
    //       moviesLoaded: action.payload.Search
    //     };
    // }
    // if(action.type === "REMOVE_MOVIE_FAVORITE"){
    //     return{
    //         ...state,
    //         moviesFavorites: state.moviesFavorites.filter((movie) => movie.id !== action.id)
    //     }
    // }
    // if(action.type === "GET_MOVIE_DETAIL"){
    //     return{
    //         ...state,
    //         movieDetail: action.payload
    //     }
    // }
    // return {...state};
}