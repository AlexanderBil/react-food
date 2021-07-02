import {getAllCategories} from '../api';
import {useState, useEffect} from 'react';
import {Preloader} from '../components/Preloader'

function Home () {
    const [catalog, setCatalog] = useState([]);

    useEffect(() => {
        getAllCategories().then(data => {
            setCatalog(data.categories)
        })
    }, [])
    return(
        <h1>Hello</h1>
    )
}

export {Home}