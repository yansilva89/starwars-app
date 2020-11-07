import React from 'react';
// Title Page
import HeadTitle from '../../Components/HeadTitle/HeadTitle';
// Services
import api from '../../Service/ApiUrl';
// Components
import Lists from '../../Components/Lists/Lists';

const Planets = () => {
  const [planets, setPlanets] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const toExactRoute = '/planets/planet/' // Exact route in list component

  React.useEffect(() => {
    async function getPlanets() {
      try {
        setLoading(true);
        const { data } = await api.get('/planets');
        setPlanets(data);
      } catch (error) {
        setError('Erro de requisição.');
      } finally {
        setLoading(false);
      }
    }
    getPlanets();
  }, []);

  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (planets === null) return null;
  return (
    <ul className={`grid-list animeLeft`}>
      <HeadTitle
        title={`StarWars App | Planets`}
        description={`StarWars App | See Planets list`}
      />
      <Lists data={planets} comeTo={toExactRoute}  />
    </ul>
  );
};

export default Planets;
