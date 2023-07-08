import React from "react";
import { Link } from "react-router-dom";
import style from "./AboutMe.module.css";
import foto from "../../img-pk/about/jesusre.jpeg";
import express from "../../img-pk/about/express.png";
import node from "../../img-pk/about/node.png";
import react from "../../img-pk/about/react.png";
import redux from "../../img-pk/about/redux.png";
import sequelize from "../../img-pk/about/sequelize.png";
import postgre from "../../img-pk/about/postgre.png";

const AboutMe = () => {
  return (
    <div className={style.containerAM}>
      <Link to={"/home"} className={style.spanBo}>
        <button className={style.buttonVolver}>
          <svg
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 1024 1024"
          >
            <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
          </svg>
          <p className={style.volverSpan}>Volver</p>
        </button>
      </Link>
      <div className={style.bodyContent}>
        <div className={style.containerDetail}>
          <div className={style.imagenConRedes}>
            <div className={style.backgroundDetail}>
              <img className={style.imageDetail} alt="imagen" src={foto} />
            </div>
            <div className={style.links}>
              <a
                href="https://www.linkedin.com/in/jesus-re/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  fill="none"
                  width="56.6934px"
                  height="56.6934px"
                  viewBox="0 0 120 120"
                  id="linkedin"
                  xmlns="http://www.w3.org/2000/svg"
                  className={style.iconsSocialMedia}
                >
                  <g clipRule="evenodd" fillRule="evenodd">
                    <path
                      d="m120 60.0002c0 33.1366-26.8633 59.9998-60 59.9998-33.138 0-60-26.8632-60-59.9998 0-33.1376 26.8617-60.0002 60-60.0002 33.1364.00031715 60 26.8626 60 60.0002z"
                      fill="#2867b2"
                    ></path>
                    <g fill="#fff">
                      <path d="m63.8771 54.3451c.2959-.3181.411-.4154.4938-.5356 4.0325-5.884 9.7919-7.6141 16.5119-6.5811 7.7657 1.1953 12.7354 6.6312 14.004 14.949.3009 1.9723.4506 3.9525.449 5.9464-.0047 8.2817-.0177 16.563.0178 24.844.0054.9327-.2242 1.2067-1.1801 1.195-4.3386-.052-8.6787-.0514-13.0179 0-.9493.0104-1.1925-.2601-1.1874-1.1944.0352-7.7238.0228-15.4472.0152-23.1703-.0029-1.7554-.1234-3.4997-.6169-5.1996-1.5816-5.4524-7.7846-7.3664-12.2018-3.7408-2.3866 1.9581-3.3196 4.5473-3.3015 7.5947.0386 7.2858.0114 14.5713.0114 21.8571 0 .9558-.0533 1.9146.0162 2.8647.0608.8259-.2766.9848-1.0248.98-4.4194-.0298-8.8379-.033-13.2567.0019-.8017.0063-1.09-.1567-1.0808-1.038.0647-6.5672.091-13.1375.0939-19.7052.0012-8.0822-.0149-16.1637-.0714-24.2455-.006-.8848.1792-1.1465 1.0932-1.1363 4.4194.0495 8.8383.0422 13.2571.0051.7957-.0073 1.0177.2321.9923 1.0063-.0549 1.6656-.0165 3.3335-.0165 5.3026z"></path>
                      <path d="m40.1241 71.1028c0 7.2826-.0155 14.5659.0187 21.8491.0038.9045-.1785 1.2264-1.1645 1.2134-4.377-.0584-8.7549-.0447-13.1324-.0079-.8129.0066-1.0869-.1963-1.086-1.0507.0213-14.6861.0178-29.3712-.0041-44.0569-.0009-.765.1856-1.0209.9882-1.0133 4.4579.038 8.9154.0428 13.3722-.0032.8896-.0098 1.0279.3149 1.0244 1.1008-.027 7.3235-.0152 14.6458-.0165 21.9687z"></path>
                      <path d="m32.5678 25.8388c5.8726.0064 9.6878 4.6579 8.2959 10.1135-1.0517 4.1194-5.3122 6.491-10.2299 5.6924-5.2234-.8477-8.1348-5.9452-6.21-10.8714 1.2013-3.0767 4.2757-4.9392 8.144-4.9345z"></path>
                    </g>
                  </g>
                </svg>
              </a>
              <a
                href="https://github.com/jesusre890"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="60px"
                  height="60px"
                  fill="#0092E4"
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 22 22"
                  id="github"
                  className={style.iconsSocialMedia}
                >
                  <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
                </svg>
              </a>
              <a
                href="mailto:jesusre890@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="56.6934px"
                  height="56.6934px"
                  className={style.iconsSocialMedia}
                  id="gmail"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                  viewBox="0 0 290 222"
                >
                  <path
                    fill="#4285F4"
                    d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                  ></path>
                  <path
                    fill="#34A853"
                    d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                  ></path>
                  <path
                    fill="#FBBC05"
                    d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                  ></path>
                  <path
                    fill="#EB4335"
                    d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className={style.contentDetail}>
            <h1 className={style.pokemonNameDetail}>Jesus Re</h1>
            <h3 className={style.pokemonType}>
              <p className={style.estudiante}>Estudiante: </p>
              <p>Full Stack Web Developer</p>
            </h3>
            <div className={style.pokemonStats}>
              <span className={style.spanAbout}>
                React js{" "}
                <img src={react} alt="react" className={style.iconImage} />
              </span>
              <span className={style.spanAbout}>
                Redux{" "}
                <img src={redux} alt="redux" className={style.iconImage} />
              </span>
              <span className={style.spanAbout}>
                Node js{" "}
                <img src={node} alt="node" className={style.iconImage} />
              </span>
              <span className={style.spanAbout}>
                Express{" "}
                <img src={express} alt="express" className={style.iconImage} />
              </span>
              <span className={style.spanAbout}>
                PostgreSQL{" "}
                <img src={postgre} alt="postgre" className={style.iconImage} />
              </span>
              <span className={style.spanAbout}>
                Sequelize{" "}
                <img
                  src={sequelize}
                  alt="sequelize"
                  className={style.iconImage}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
