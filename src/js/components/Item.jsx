import React, { useState } from "react";

const Item = ({ text, onDelete }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <li
            className="list-group-item d-flex justify-content-between align-items-center"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {text}
            {hovered && (
                <button className="btn btn-sm btn-danger " onClick={onDelete}>
                    &times;
                </button>
            )}
        </li>
    );
};

export default Item;