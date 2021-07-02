import {useParams, useHistory, useRouteMatch, useLocation} from 'react-router-dom';

function Movie () {
    const {title} = useParams();
    const {goBack} = useHistory();
    const value = 
    return(
        <>
        <h1>Some move {title}</h1>
        <button onClick = {goBack} className = 'btn'>Go back</button>
        </>
    )
}

export {Movie}