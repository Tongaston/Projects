import { Link } from '../Link.jsx'

 export default function AboutPage() {
    return (
      <>
        <h1>About me</h1>
        <div>
          <img
            src='https://media.licdn.com/dms/image/C4D03AQFvIz2B_bhbSg/profile-displayphoto-shrink_800_800/0/1518354907514?e=1706140800&v=beta&t=rbjcWBvIS0GRd3t7Rz3zQPiSExfgmAYeKgF3fNWJQsc'
            alt='GMdev'
          />
          <p> Hola! Soy GMdev - Creando clon de React Router</p>
        </div>
        <Link to='/'>Ir a Home Page</Link>
      </>
    );
  }