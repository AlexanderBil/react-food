import {useParams, useHistory} from 'react-router-dom';

function Movie () {
    const {title} = useParams();
    const {goBack} = useHistory();
    return(
        <>
        <h1>Some move {title}</h1>
        <button className = ''>Go back</button>
        </>
    )
}

export {Movie}