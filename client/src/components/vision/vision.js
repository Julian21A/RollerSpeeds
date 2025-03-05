import { VISION } from "../../constants/info.constants";
import Exposer from "../exposer/exposer";

export function Vision() {
  return (
    <div className="container">
      <Exposer />
      <div className="mv-card">
        <h1 className="mv-title">Vision</h1>
        {VISION.map((str, index) => (
          <p className="mv-text" key={index}>
            {str}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Vision;
