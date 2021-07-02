import {useState, useEffect} from 'react';
import {useLocation, useHistory} from 'react-router-dom';
import {getAllCategories} from '../api';
import {Preloader} from '../components/Preloader';
import {CategoryList} from '../components/CategoryList';
import {Search} from '../components/Search';
import { data } from 'browserslist';

function Home () {
    const [catalog, setCatalog] = useState([]);
    const [filteredcatalog, setFilteredCatalog] = useState([]);
    const {pathname, search} = useLocation();
    const {push} = useHistory();


   const handleSearch = (str) => {
    setFilteredCatalog(
        catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase()))
    )
    push({
        pathname,
        search: `?search=${str}`
    })
   }


    useEffect(() => {
        getAllCategories().then(data => {
            setCatalog(data.categories)
            setFilteredCatalog(search ? 
                data.categories.filter(item => item.strCategory.toLowerCase().includes(search.split('=')[1].toLowerCase()))
                : data.categories;
         )
        })  
    }, [])
    return(
        <>
        <Search cb = {handleSearch}/>
        {!catalog.length ? (<Preloader/>) : (
            <CategoryList catalog ={filteredcatalog}/>
        )}
        </>
    )
        
}

export {Home}