function Movie () {
    const {title} = useParams();
    const {goBack} = useHistory();
    const value = useRouteMatch();
    const value2 = useLocation();
    
    return(
        <>
        <h1>Some move {title}</h1>
        <button onClick = {goBack} className = 'btn'>Go back</button>
        </>
    )
}

export {Movie}