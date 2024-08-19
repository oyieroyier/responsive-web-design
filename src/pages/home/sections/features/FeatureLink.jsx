/* eslint-disable react/prop-types */
import {LiaLongArrowAltRightSolid} from "react-icons/lia";

function FeatureLink({feature}) {
    return (
        <div>
            <img src={feature.image} alt={feature.title}/>

            <div>
                <h3>{feature.title}</h3>
                <p>{feature.summary}</p>
                <p>{feature.description}</p>
                <LiaLongArrowAltRightSolid/>
            </div>
        </div>
    )
}

export default FeatureLink
