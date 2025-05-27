import React, { useState } from "react";

const Item = ({ text, onDelete }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <li
            className="list-group-item d-flex justify-content-between align-items-center"
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
        >
            {text}
            <span>
                {hovered ? (
                    <button className="btn"onClick={onDelete}> ❌ </button>
                ) : null}
            </span>
        </li>
    );
};

export default Item;
