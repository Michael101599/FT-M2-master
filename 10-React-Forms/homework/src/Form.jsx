import React from 'react';

export function validate(input){

  let error = {};
  if(!input.username){
    error.username = 'Username is required';
  }else if (!/\S+@\S+\.\S+/.test(input.username)){
    error.username = 'Username is invalid';
  }

  if(!input.password){
    error.password = "Password is required";
  }else if(!/(?=.-*[0 - 9])/.test(input.password)){
    error.password = "Password is invalid";
  }
  return error;
}

export default function Form() {
  let [input, setInput] = React.useState({
    username: "",
    password: ""
  });

  let [error, setError] = React.useState({})
  
  let handleInputChange = function(e){
    setInput({...input, [e.target.name]: e.target.value})
    
    let objError = validate({...input, [e.target.name]: e.target.value});
    setError(objError);
  }

  return (
    <form>
      <div>
          <label>Username:</label>
          <input  
          type={"text"} 
          name='username' 
          value={input.username} 
          onChange={handleInputChange}
          className={error.username && 'danger'} />
          {
          error.username && (<p className='danger'>{error.username}</p>)
          }
      </div>
      <div>
          <label>Password:</label>      
          <input 
          type="password" 
          name="password"
          value={input.password} 
          onChange={handleInputChange}
          className={error.password}/>
          {
          error.password && (<p className='danger'>{error.password}</p>)
          }
      </div>
      <div>
          <input 
          type="submit" 
          value="Agregar" />
      </div>
    </form>
  )
}
