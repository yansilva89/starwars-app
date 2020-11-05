import React from 'react';
// Router Imports
import { Link } from 'react-router-dom';
// Styles
import styles from './People.module.scss';

const People = () => {
  const [people, setPeople] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function fetchListOptions(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setPeople(json);
      } catch (erro) {
        setError('Erro de requisição.');
      } finally {
        setLoading(false);
      }
    }
    fetchListOptions(`https://swapi.dev/api/people`);
  }, []);

  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (people === null) return null;
  return (
    <div className={`${styles.people} animeLeft`}>
      {people.results.map((person, i) => (
        <Link className={`${styles.nome} card`} to={`/people/person/${i + 1}/`} key={person.name}>
          {person.name}
        </Link>
      ))}
    </div>
  );
};

export default People;
