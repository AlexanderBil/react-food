import {useParams, useHistory} from 'react-router-dom';

function Movie () {
    const {title} = useParams();
    const {goBack}
    return(
        <h1>Some move {title}</h1>
    )
}

export {Movie}