import "./exposer.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextImage } from "../../redux/Reducer/exposerSlice";

const Exposer = () => {
  const dispatch = useDispatch();
  const { currentIndex, images } = useSelector((state) => state.exposer);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(nextImage());
    }, 5000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="exposer">
      <div className="exposer-container">
        <img
          className="exposer-image"
          src={images[currentIndex]}
          alt={`Imagen ${currentIndex + 1}`}
        />
      </div>
    </div>
  );
};

export default Exposer;
