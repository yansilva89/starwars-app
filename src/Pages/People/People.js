import React from 'react';
// Title Page
import HeadTitle from '../../Components/HeadTitle/HeadTitle';
// Services
import api from '../../Service/ApiUrl'
// Components
import Lists from '../../Components/Lists/Lists';

const People = () => {
  const [people, setPeople] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const toExactRoute = '/people/person/' // Exact route in list component

  React.useEffect(() => {
    async function getPeople() {
      try {
        setLoading(true);
        const { data } = await api.get("/people");
        setPeople(data);
      } catch (error) {
        setError('Erro de requisição.');
      } finally {
        setLoading(false);
      }
    }
    getPeople();
  }, []);

  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (people === null) return null;
  return (
    <ul className={`grid-list animeLeft`}>
      <HeadTitle
        title={`StarWars App | People`}
        description={`StarWars App | See People list`}
      />
      <Lists data={people} comeTo={toExactRoute} />
    </ul>
  );
};

export default People;
