import {
  faCog,
  faArrowCircleRight,
  faArrowCircleLeft
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
  return library.add(
    faCog,
    faArrowCircleRight,
    faArrowCircleLeft
  );
};

export default Icons;