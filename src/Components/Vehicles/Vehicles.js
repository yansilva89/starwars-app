import React from 'react'
// Router Imports
import { useParams, useNavigate } from 'react-router-dom';

const Vehicles = () => {
  const [vehicles, setVehicles] = React.useState(null);
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
        setVehicles(json);
        console.log(json);
      } catch (erro) {
        setError('Erro de requisição.');
      } finally {
        setLoading(false);
      }
    }
    fetchProduto(`https://swapi.dev/api/vehicles/${id}`);
  }, [id]);

  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (vehicles === null) return null;
  return (
    <div className={`animeLeft infoComponent`}>
      {Object.keys(vehicles).map(key => {
        if (!Array.isArray(vehicles[key])) {
          return <p><span>{formatTitle(key)}</span>{vehicles[key]}</p>;
        } else {
          return (
            <div className={`lists`}>
              <h3>{formatTitle(key)}</h3>
              {vehicles[key].map((value) => (
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

export default Vehicles
