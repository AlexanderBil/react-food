import {useState, useEffect} from 'react';
import {getAllCategories} from '../ap';
import {Preloader} from '../components/Preloader';
import {CategoryList} from '../components/CategoryList';

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