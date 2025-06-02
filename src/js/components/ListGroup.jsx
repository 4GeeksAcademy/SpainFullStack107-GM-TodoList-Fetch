import React from "react";
import Item from "./Item";

const ListGroup = ({ tasks, onDelete }) => (
	<ul className="list-group">
		{tasks.map((task) => (
			<Item key={task.id} text={task.label} onDelete={() => onDelete(task.id)} />
		))}
	</ul>
);

export default ListGroup