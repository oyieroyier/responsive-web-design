/* eslint-disable react/prop-types */
import {BiCheck} from "react-icons/bi";

function SingleFeature({feature}) {
    return (
        <div>

            <div>
                <BiCheck/>
            </div>

            <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
            </div>
        </div>
    )
}

export default SingleFeature
