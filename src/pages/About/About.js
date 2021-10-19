import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import { Header, Border, TopBanner } from './About.elements';

import artWork from '../../images/artwork.png';
import { Card } from 'react-bootstrap';

const About = () => {
  return (
    <>
      <TopBanner>
        <h3 style={{ width: '20vw' }}>
          Europe’s largest wholesale platform for used cars
        </h3>
        <img src={artWork} alt="fd" />
      </TopBanner>
      <Card className="px-3 mx-2 shadow-lg my-3">
        <Card.Body>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae magni
          temporibus aliquid natus. Eos animi voluptate, ullam soluta officia
          commodi fugiat unde quis labore suscipit pariatur veritatis nulla
          reiciendis. Qui! Atque reprehenderit, ipsam autem vero asperiores
          perspiciatis pariatur magnam esse officia. Sequi est, quis nam ullam,
          at voluptates voluptas officiis id quidem placeat pariatur rem autem
          cupiditate dolores modi velit. Ullam accusantium, suscipit ut
          voluptatem ipsum consequuntur vero architecto soluta a, eius ex
          doloremque maxime deserunt. Incidunt voluptates molestiae atque
          architecto laborum eligendi, quia vero possimus? Nulla hic fugiat
          nobis. Nostrum commodi nisi culpa cum assumenda. Exercitationem error,
          nesciunt id atque fugiat laborum vitae iste rem velit dolorum.
          Delectus ad, quis voluptatibus rerum fugit vitae totam ab repellendus
          deleniti dolor? Nulla illo eius eveniet molestiae quis impedit enim
          aperiam doloremque recusandae debitis! Voluptatibus accusamus, nisi
          voluptate totam quaerat eos, optio blanditiis, saepe incidunt deserunt
          nam non cupiditate reiciendis dolorum aliquam!
        </Card.Body>
      </Card>
      {/* <Link style={{ marginTop: '10px' }} to="/">
        Turn back to homes
      </Link> */}
      <Footer />
    </>
  );
};

export default About;
