import { exp } from "prelude-ls";
import { useState } from "react";

function Search({cb = Function.prototype}) {
 const [value, setValue] = useState('');

 return <div className = "row">
     <div className = 'input-field col s12'></div>
 </div>
}


export {Search}