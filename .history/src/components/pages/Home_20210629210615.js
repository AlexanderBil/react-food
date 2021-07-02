import {getAllCategories} from '../api';
import {useState, useEffect} from 'react';

function Home () {
    const [catalog, setCatalog] = useState([]);

    useEffect(() => {
        getAllCategories().th
    }, [])
    return(
        <h1>Hello</h1>
    )
}

export {Home}