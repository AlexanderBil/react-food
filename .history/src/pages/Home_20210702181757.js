import {useState, useEffect} from 'react';
import {getAllCategories} from '../api';
import {Preloader} from '../components/Preloader';
import {CategoryList} from '../components/CategoryList';
import {Search} from '../components/Search';

function Home () {
    const [catalog, setCatalog] = useState([]);
    const [filteredcatalog, setFilteredCatalog] = useState([]);

    useEffect(() => {
        getAllCategories().then(data => {
            setCatalog(data.categories)
            setFilteredCatalog(data.cate)
        })
    }, [])
    return(
        <>
        <Search cb = {}/>
        {!catalog.length ? (<Preloader/>) : (
            <CategoryList catalog ={filteredcatalog}/>
        )}
        </>
    )
        
}

export {Home}