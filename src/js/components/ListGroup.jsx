import React from "react";
import Item from "./Item";

const ListGroup = ({ tasks, onDelete }) => (
	<ul className="list-group">
		{tasks.map((task, index) => (
			<Item key={index} text={task} onDelete={() => onDelete(index)} />
		))}
	</ul>
);
export default ListGroup;
