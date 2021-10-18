import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import { Header, Border } from './About.elements';

const About = () => {
  return (
    <>
      <h2>Lorem ipsum dolor sit amet.</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt nesciunt
        sapiente sed exercitationem molestias cumque perferendis, sequi atque
        quia corporis!
      </p>
      <Border>
        <Header>fdsafd</Header>
      </Border>

      <p>fdsajkfhsdji</p>

      {/* <Link style={{ marginTop: '10px' }} to="/">
        Turn back to homes
      </Link> */}
      <Footer />
    </>
  );
};

export default About;
