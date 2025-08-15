import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Socialmedia = () => {
  return (
    <div className="d-flex gap-3 justify-content-center">
      <a href="#" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-white">
        <FontAwesomeIcon icon={faInstagram} size="lg" />
      </a>
      <a href="#" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-white">
        <FontAwesomeIcon icon={faFacebookF} size="lg" />
      </a>
      <a href="#" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-white">
        <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
      </a>
    </div>
  );
};

export default Socialmedia;
