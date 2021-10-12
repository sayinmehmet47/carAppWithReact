import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

const About = () => {
  return (
    <>
      <fieldset>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
          nesciunt sapiente sed exercitationem molestias cumque perferendis,
          sequi atque quia corporis!
        </p>
        <Link to="/">Turn back to homes</Link>
      </fieldset>
      <Footer />
    </>
  );
};

export default About;
