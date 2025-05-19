import { useState } from "react";
import "../styles/components/slider.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Slider = () => {
  return (
    <div className="container">
      <div className="arrow left" onClick={()=>handleClick("left")}>
        <ArrowBackIosIcon  />
      </div>
      <div class="wrapper">
        <div class="slide">
          <div class="imageContainer">
            <img
              class="imgItem"
              src="https://doppio.ua/content/images/33/1500x1500l80mc0/ethiopia-jimma-1000-80790518040405.webp"
              alt="coffee"
            />
          </div>
          <div class="infoContainer">
            <h1>Ефіопія</h1>
            <div class="desc">Простий і не дорогий сорт кави, але повірте, він заслуговує на Вашу увагу.
            </div>
            <button>Показати</button>
          </div>
        </div>

        <div class="slide">
          <div class="imageContainer">
            <img
              class="imgItem"
              src="https://doppio.ua/content/images/13/1500x1500l80mc0/guatemala-maragogype-1000-77097023045941.webp"
              alt="coffee"
            />
          </div>
          <div class="infoContainer">
            <h1>Гватемала</h1>
            <div class="desc">Високоякісний сорт, який у чашці дає напій з м'якою кислотністю та свіжим ароматом фруктів.
            </div>
            <button>Показати</button>
          </div>
        </div>
      </div>
      <div className="arrow right" onClick={()=>handleClick("right")}>
        <ArrowForwardIosIcon />
      </div>
    </div>
  );
};

// const [slideIndex, setSlideIndex] = useState(0);
const handleClick = (direction) => {

};



export default Slider;
