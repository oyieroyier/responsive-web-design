import highlight from "../../../../assets/images/highlight.svg";
import heroImage from "../../../../assets/images/hero-image.svg";

import { BsStarFill } from "react-icons/bs";

function HeroSection() {
  return (
    <section>
      <div>
        <h1>
          Start accepting{" "}
          <span>
            payments <img src={highlight} alt="Highlight" />{" "}
          </span>{" "}
          in 3 minutes
        </h1>

        <h2>Integrate xyz payment gateway without any technical knowledge.</h2>

        {/*Buttons*/}
        <div>
          <button>Start Now</button>
          <button>Read the developer docs</button>
        </div>

        {/*Ratings*/}
        <div>
          <div>
            <h3>4.7</h3>

            <div>
              <p>Top rated on Trust Pilot</p>

              <div>
                {Array.from({ length: 5 }).map((_, index) => (
                  <BsStarFill key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/*Image*/}
        <img src={heroImage} alt="Hero Image" />
      </div>
    </section>
  );
}

export default HeroSection;
