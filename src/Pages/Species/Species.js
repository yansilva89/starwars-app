import React from 'react';
// Router Imports
import { useParams, useNavigate } from 'react-router-dom';
// Title Page
import HeadTitle from '../HeadTitle/HeadTitle'
// Services
import api from '../../Service/ApiUrl'
// Components
import ItemInfo from '../../Components/ItemInfo/ItemInfo';

const Species = () => {
  const [species, setSpecies] = React.useState(null);
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

  React.useEffect(() => {
    async function getSpeciesInfo(url) {
      try {
        setLoading(true);
        const { data } = await api.get(`/species/${url}`);
        setSpecies(data);
      } catch (error) {
        setError('Erro de requisição.');
      } finally {
        setLoading(false);
      }
    }
    getSpeciesInfo(id);
  }, [id]);

  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (species === null) return null;
  return (
    <ul className={`animeLeft infoComponent`}>
      <HeadTitle
        title={`StarWars App | ${species.name}`}
        description={`StarWars App | ${species.descricao}`}
      />
      <ItemInfo data={species} verifyLinkList={getItemList} />
    </ul>
  )};

export default Species
