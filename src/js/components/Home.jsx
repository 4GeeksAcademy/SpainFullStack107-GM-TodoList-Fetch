import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "./ListGroup";

const Home = () => {
	const [task, setTask] = useState("");
	const [tasks, setTasks] = useState([]);

	const handleKeyPress = (e) => {
		if (e.key === "Enter" && task.trim() !== "") {
			setTasks([...tasks, task.trim()]);
			setTask(""); 
		}
	};

	const deleteTask = (indexToDelete) => {
		setTasks(tasks.filter((_, index) => index !== indexToDelete));
	};

	return (
		<div className="todo-container text-center mt-5">
			<p className="titulo">todos</p>
			<input
				className="form-control form-control-lg mb-3"
				type="text"
				placeholder="What needs to be done?"
				aria-label="todo input"
				value={task}
				onChange={(e) => setTask(e.target.value)}
				onKeyDown={handleKeyPress}
			/>

			<ListGroup tasks={tasks} onDelete={deleteTask} />
			{tasks.length === 0 ? (
				<div className="alert">No hay tareas!<br />Añade tareas...</div>
			) : (
				<div className="text-muted mt-3">
					{tasks.length} {tasks.length === 1 ? "tarea" : "tareas"}
				</div>
			)}
		</div>
	);
};

export default Home;
