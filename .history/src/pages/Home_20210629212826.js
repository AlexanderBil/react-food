import {getAllCategories} from '../api';
import {useState, useEffect} from 'react';
import {Preloader} from '../components/Preloader';
import {} from './'

function Home () {
    const [catalog, setCatalog] = useState([]);

    useEffect(() => {
        getAllCategories().then(data => {
            setCatalog(data.categories)
        })
    }, [])
    return(
        <>
        {!catalog.length ? <Preloader/> : (
            <CategoryList catalog ={catalog}/>
        )}
        </>
    )
        
}

export {Home}