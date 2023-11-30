import { Link } from '../Link.jsx'

const i18n = {
  es: {
    title: 'Sobre mi',
    button: 'Ir a la home',
    description: 'Hola! Soy GMdev - Creando clon de React Router.' 
  },
  en: {
    title: 'About me',
    button: 'Go to Home',
    description: "Hi! I'm GMdev - Creating a clone of React Router."
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

 export default function AboutPage({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'es')
    return (
      <>
        <h1>{i18n.title}</h1>
        <div>
          <img
            src='https://media.licdn.com/dms/image/C4D03AQFvIz2B_bhbSg/profile-displayphoto-shrink_800_800/0/1518354907514?e=1706140800&v=beta&t=rbjcWBvIS0GRd3t7Rz3zQPiSExfgmAYeKgF3fNWJQsc'
            alt='GMdev'
          />
          <p>{i18n.description}</p>
        </div>
        <Link to='/'>{i18n.button}</Link>
      </>
    );
  }