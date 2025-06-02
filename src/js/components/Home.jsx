import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "./ListGroup";

const Home = () => {
	const [task, setTask] = useState("");
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		obtenerListaTareas();
	}, []);

	const obtenerListaTareas = () => {
		const URL = "https://playground.4geeks.com/todo/users/GuillerMorales";

		fetch(URL)
			.then((response) => response.json())
			.then((data) => {
				setTasks(data.todos); // Guardamos objetos completos
				console.log("Tareas obtenidas:", data.todos);
			})
			.catch((error) => {
				console.error("Error al obtener las tareas:", error);
			});
	};

	const handleKeyPress = (e) => {
		if (e.key === "Enter" && task.trim() !== "") {
			const nuevaTarea = {
				label: task.trim(),
				done: false
			};

			fetch("https://playground.4geeks.com/todo/todos/GuillerMorales", {
				method: "POST",
				body: JSON.stringify(nuevaTarea),
				headers: {
					"Content-Type": "application/json"
				}
			})
				.then(resp => {
					if (!resp.ok) throw new Error("Error al crear la tarea");
					return resp.json();
				})
				.then(data => {
					console.log("Tarea creada:", data);
					obtenerListaTareas();
					setTask("");
				})
				.catch(error => {
					console.error("Error en la petición POST:", error);
				});
		}
	};

	const deleteTask = (id) => {
		fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
			method: "DELETE",
		})
			.then(() => {
				console.log("Tarea eliminada");
				obtenerListaTareas();
			})
			.catch(error => {
				console.log("Error al eliminar la Tarea:", error);
			});
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
				<div className="alert">There are no tasks!<br />Add new tasks...</div>
			) : (
				<div className="text-muted mt-3">
					{tasks.length} {tasks.length === 1 ? "task" : "tasks"}
				</div>
			)}
		</div>
	);
};

export default Home;
