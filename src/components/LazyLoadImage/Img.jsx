import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Img = ({ src, className }) => {
  return (
    <LazyLoadImage effect="blur" className={className || ""} alt="" src={src} />
  );
};

export default Img;
