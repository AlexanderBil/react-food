import { exp } from "prelude-ls";
import { useState } from "react";

function Search({cb = Function.prototype}) {
 const [value, setValue] = useState('');

 const handleKey = (e) => {
     if(e.key === )
 }

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
               <button 
               className = "btn"
               style = {{
                   position: "absolute",
                   top: 0,
                   right: 0,
               }}
               onClick = {}
               >Search</button>
     </div>
 </div>
}


export {Search} 