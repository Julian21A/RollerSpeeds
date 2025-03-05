import './mision.css'
import { MISION } from "../../constants/info.constants";
import Exposer from "../exposer/exposer";

export function Mision() {
  return (
    <div className='container'>
      <div className="mv-card">
        <h1 className="mv-title">Mision</h1>
        {MISION.map((str, index) => (
          <p className="mv-text" key={index}>{str}</p>
        ))}
      </div>
      <Exposer />
    </div>
  );
}

export default Mision;
