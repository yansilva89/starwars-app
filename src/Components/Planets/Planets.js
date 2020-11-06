import React from 'react'
// Router Imports
import { Link } from 'react-router-dom';
// Styles
import styles from './Planets.module.scss';
//
import HeadTitle from '../HeadTitle/HeadTitle';
// Api
import apiUrl from '../../Service/BaseUrl'

const Planets = () => {
  const [planets, setPlanets] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function fetchListOptions(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setPlanets(json);
      } catch (erro) {
        setError('Erro de requisição.');
      } finally {
        setLoading(false);
      }
    }
    fetchListOptions(`${apiUrl}planets`);
  }, []);

  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (planets === null) return null;
  return (
    <div className={`${styles.planets} animeLeft`}>
      <HeadTitle 
        title={`StarWars App | Planets`}
        description={`StarWars App | See Planets list`}
      />
      {planets.results.map((planet, i) => (
        <Link className={`${styles.nome} card`} to={`/planets/planet/${i + 1}/`} key={planet.name}>
          {planet.name}
        </Link>
      ))}
    </div>
  )
}

export default Planets
