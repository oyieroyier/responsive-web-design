import {featureLinks, features} from "./features.js";
import SingleFeature from "./SingleFeature.jsx";
import highlight from "../../../../assets/images/highlight.svg";
import FeatureLink from "./FeatureLink.jsx";

function FeaturesContainer() {
    return (
        <section>
            <div>
                {
                    features.map((feature, index) => (
                        <SingleFeature key={index} feature={feature}/>
                    ))
                }
            </div>

            <h2>
                Accepting <span>payments <img src={highlight} alt="Highlight"/> </span> should not be hard
            </h2>

            <p>Accept payment using invoice, quick checkout, APIs and payment buttons</p>

            {/*Feature Links*/}
            <div>
                {
                    featureLinks.map( (feature, index) => (
                        <FeatureLink key={index} feature={feature}/>
                    ))
                }
            </div>

            <h3>Having issues with integration and setup</h3>

            <button>Let us know</button>
        </section>
    )
}

export default FeaturesContainer
