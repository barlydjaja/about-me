import HomeHero from './components/HomeHero';
import HomeProjects from './components/HomeProjects';
import HomeSkills from './components/HomeSkills';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HomeHero />
      <HomeProjects />
      <HomeSkills />
    </div>
  );
};

export default Home;
