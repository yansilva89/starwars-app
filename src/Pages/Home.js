import React from 'react';
// Styles
import './Home.scss';
// Img
import swbanner from '../assets/img/swbanner.png';
import swbanner2 from '../assets/img/swbanner2.jpg';
//
import HeadTitle from '../Components/HeadTitle/HeadTitle';

const Home = () => {
  return (
    <div className="home animeLeft">
      <HeadTitle
        title={`StarWars App`}
        description={`StarWars App | Bem vindo ao StarWars App`}
      />
      <h1>
        <span>SWAPI</span> | Explore o universo Star Wars
      </h1>
      <img src={swbanner} alt="Star Wars Banner" />
      <p>
        Escolha as opções disponíveis no menu acima e visualize informações de
        todo o universo Star Wars.
      </p>
      <img src={swbanner2} alt="Star Wars Banner" />
      <p>Explore e divirta-se!</p>
    </div>
  );
};

export default Home;
