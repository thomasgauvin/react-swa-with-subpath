import { Links } from '../components/Links'
import { useLocation, useHref } from 'react-router-dom'

export function Hello(props){
    let location = useLocation();
    const fullPath = useHref(location.pathname);          

    return(
        <>
            <Links />

            <h1>Hello!</h1>
            <div>React router location: <b>{location.pathname}</b></div>
            <div>Full path: <b>{fullPath}</b></div>
        </>
    )
}