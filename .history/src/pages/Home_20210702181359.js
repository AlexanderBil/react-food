import {useState, useEffect} from 'react';
import {getAllCategories} from '../api';
import {Preloader} from '../components/Preloader';
import {CategoryList} from '../components/CategoryList';
import {Search} from '../components/Search';

function Home () {
    const [catalog, setCatalog] = useState([]);

    useEffect(() => {
        getAllCategories().then(data => {
            setCatalog(data.categories)
        })
    }, [])
    return(
        <>
        <Search/>
        {!catalog.length ? (<Preloader/>) : (
            <CategoryList catalog ={catalog}/>
        )}
        <>
    )
        
}

export {Home}