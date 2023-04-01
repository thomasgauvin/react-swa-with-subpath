import { Links } from '../components/Links'
import { useLocation, useHref } from 'react-router-dom'

export function Home(){
    const location = useLocation();
    const fullPath = useHref(location.pathname);

    return(
        <>
            <Links />

            <h1>Home</h1>
            <div>React router location: <b>{location.pathname}</b></div>
            <div>Full path: <b>{fullPath}</b></div>
        </>
    )
}