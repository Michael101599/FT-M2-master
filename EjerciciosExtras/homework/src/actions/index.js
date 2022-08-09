export const GET_ALL_POSTS = '';
export const GET_ALL_USERS = '';
export const GET_ALL_USER_POSTS = '';
export const GET_ALL_COMMENTS_POST = '';

export function getAllPosts(){
    return function(dispatch){
        return fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => response.json())
        .then(posts => {dispatch({type: 'GET_ALL_POSTS', payload: posts})
        });
    };
}

export function getAllUsers(){
    return function(dispatch){
        return fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(users => {dispatch({type: 'GET_ALL_USERS', payload: users})
        });
    };
}

export function getAllCommentsPost(id){
    return function(dispatch){
        return fetch(`https://jsonplaceholder.typicode.com/comments?userId=${id}`)
        .then(response => response.json())
        .then(comments => {dispatch({type: 'GET_ALL_COMMENTS_POST', payload: comments})})
    }
}

export function getAllUserPosts(id){
    return function(dispatch){
        return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(response => response.json())
        .then(post => {dispatch({type: 'GET_ALL_USER_POSTS', payload: post})})
    }
}