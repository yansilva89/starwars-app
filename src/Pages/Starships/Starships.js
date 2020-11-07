import React from 'react';
// Title Page
import HeadTitle from '../HeadTitle/HeadTitle';
// Services
import api from '../../Service/ApiUrl';
// Components
import Lists from '../../Components/Lists/Lists';

const Starships = () => {
  const [starships, setStarships] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const toExactRoute = '/starships/starship/'; // Exact route in list component

  React.useEffect(() => {
    async function getStarships() {
      try {
        setLoading(true);
        const { data } = await api.get('/starships');
        setStarships(data);
      } catch (error) {
        setError('Erro de requisição.');
      } finally {
        setLoading(false);
      }
    }
    getStarships();
  }, []);

  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (starships === null) return null;
  return (
    <ul className={`grid-list animeLeft`}>
      <HeadTitle
        title={`StarWars App | Starships`}
        description={`StarWars App | See Starships list`}
      />
      <Lists data={starships} comeTo={toExactRoute} />
    </ul>
  );
};

export default Starships;
