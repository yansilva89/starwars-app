import React from 'react';
// Styles
import styles from './Person.module.scss';
// Router Imports
import { useParams, useNavigate } from 'react-router-dom';
//
import HeadTitle from '../HeadTitle/HeadTitle'
// Api
import apiUrl from '../../Service/BaseUrl'

const Person = () => {
  const [person, setPerson] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { id } = useParams();
  const itemRouterNavigate = useNavigate();

  function getItemList({ target }) {
    const value = target.innerText;
    // Get a number from string api link 
    let number = value.match(/\d/g);
    number = number.join("");
    if(value.includes('/people/')) {
      itemRouterNavigate(`/people/person/${number}/`)
    } else if(value.includes('/planets/')) {
      itemRouterNavigate(`/planets/planet/${number}/`)
    } else if(value.includes('/starships/')) {
      itemRouterNavigate(`/starships/starship/${number}/`)
    } else if(value.includes('/films/')) {
      itemRouterNavigate(`/films/${number}/`)
    } else if(value.includes('/vehicles/')) {
      itemRouterNavigate(`/vehicles/${number}/`)
    } else if(value.includes('/species/')) {
      itemRouterNavigate(`/species/${number}/`)
    } else {
      console.log('Não tem');
    }
  }

  const formatTitle = (key) => {
    return key.replace(/_/g, ' ').toUpperCase();
  }

  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setPerson(json);
        console.log(json);
      } catch (erro) {
        setError('Erro de requisição.');
      } finally {
        setLoading(false);
      }
    }
    fetchProduto(`${apiUrl}people/${id}`);
  }, [id]);

  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (person === null) return null;
  return (
    <div className={`${styles.Person} animeLeft infoComponent`}>
      <HeadTitle
        title={`StarWars App | ${person.name}`}
        description={`StarWars App | ${person.descricao}`}
      />
      {Object.keys(person).map(key => {
        if (!Array.isArray(person[key])) {
          return <p><span>{formatTitle(key)}</span>{person[key]}</p>;
        } else {
          return (
            <div className={`lists`}>
              <h3>{formatTitle(key)}</h3>
              {person[key].map((value) => (
                <p className={`linkItem`} onClick={getItemList} key={value}>
                  {value}
                </p>
              ))}
            </div>
          )
        }
      })}
    </div>
  )};

export default Person;
