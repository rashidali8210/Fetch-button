import React from "react";
import './App.css';
import { Link } from "react-router-dom";
const FirstPage=()=>
{
    return(
        <header className="App-header">  
          <Link to={`/NextPage`}> <button type="button" class="btn btn-success">Fetch</button> </Link>
          </header>
    
    )
}
export default FirstPage;