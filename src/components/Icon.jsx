import React from "react";
import { ReactComponent as Clouds } from "../assets/icons/Clouds.svg";
import { ReactComponent as Rain } from "../assets/icons/Rain.svg";
import { ReactComponent as Clear } from "../assets/icons/Clear.svg";
import { ReactComponent as Snow } from "../assets/icons/Snow.svg";
import { ReactComponent as Atmosphere } from "../assets/icons/Atmosphere.svg";


const iconTypes = {
    Clouds: Clouds,
    Rain: Rain,
    Clear: Clear,
    Snow: Snow,
    Atmosphere: Atmosphere
};

const Icon = ({ name, ...props }) => {
    let Icon = iconTypes[name];
    return <Icon className="svgStyle" {...props} />;
};

export default Icon;