import React from 'react'
// Router Imports
import { Link } from 'react-router-dom';
// Styles
import styles from './Starships.module.scss';

const Starships = () => {
  const [starships, setStarships] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function fetchListOptions(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setStarships(json);
      } catch (erro) {
        setError('Erro de requisição.');
      } finally {
        setLoading(false);
      }
    }
    fetchListOptions(`https://swapi.dev/api/starships`);
  }, []);

  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (starships === null) return null;
  return (
    <div className={`${styles.starships} animeLeft`}>
      {starships.results.map((starship, i) => (
        <Link className={`${styles.nome} card`} to={`/starships/starship/${i + 1}/`} key={starship.name}>
          {starship.name}
        </Link>
      ))}
    </div>
  )
}

export default Starships
