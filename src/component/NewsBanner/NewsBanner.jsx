import React from "react";

// import "./header.modules.css";

import styles from "./header.module.css";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";

const NewsBanner = ({ item }) => {
    return (
        <div>
            <h3>{item.title}</h3>
            <p>{formatTimeAgo(item.published)}</p>
        </div>
    );
};

export default NewsBanner;
