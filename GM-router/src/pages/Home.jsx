import { Link } from '../Link.jsx';

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <h4>GM - Router</h4>
      <p>Pagina de practica creando un clon de React Router</p>
      <Link to='/about'>Saber Mas</Link>
    </>
  );
}
