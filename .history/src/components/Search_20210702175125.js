import { exp } from "prelude-ls";
import { useState } from "react";

function Search({cb = Function.prototype}) {
 const [value, setValue] = useState('');

 return <div className = "row">
     <div className = 'input-field col s12'>
         <input 
              type="search" 
              name="" 
              id="search-field" 
              placeholder = "search" 
              onKeyDown = {}
              onChange = {}
              value = {value}
               />
               <button></button>
     </div>
 </div>
}


export {Search} 