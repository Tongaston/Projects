import { Link } from "../Link";

export default function Page404 () {
    return (
        <>
        <div>
            <h1>This is NOT fine</h1>
            <h3>404</h3>
                 <img src="https://i.imgur.com/mvenbqO.gif" 
                    alt="this is not fine" />
        </div>
        <Link to='/'>Ir al inicio</Link>
        </>
    )
}