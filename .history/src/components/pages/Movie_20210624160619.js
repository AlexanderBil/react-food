import {useParams, use} from 'react-router-dom';

function Movie () {
    const {title} = useParams();
    return(
        <h1>Some move {title}</h1>
    )
}

export {Movie}