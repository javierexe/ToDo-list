import React, { useState } from "react";
import '../../styles/tasklist.css';


const TaskList  = () => {
    const [ input, setInput ] = useState('');
    const [ tasks, setTasks ] = useState([]);
     
    function pressEnter (e) {
        if (e.key === "Enter")
            validate_Add_Input();
    }

    const validate_Add_Input = () => {
        if(input === "") 
            alert("Debes ingresar una tarea");
        else {
            const formattedInput = formatTask(input);
            setTasks([...tasks, formattedInput]);
            setInput('');
        }
    }
    
    const formatTask = (task) => {
        return task.charAt(0).toUpperCase() + task.slice(1).toLowerCase();
    }

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
        setTasks(newTasks);
        setTaskCount(taskCount - 1);
    }

    return (
        <div className="container">
            <div className='header'>ToDo List 📋</div>
            <div className='content'>
            <input
                className="input"
                type="text" 
                onChange={e => setInput(e.target.value)} 
                value={input} 
                onKeyDown={pressEnter} 
                placeholder="¿ Qué debes hacer hoy?                        ⏎" 
            />
            <ul className="list">
                {tasks.length === 0  ? (
                    <li className="list-item">No hay tareas, añadir tareas</li>
                ) : (
                    tasks.map((task, index) => (
                        <li key={index} className="list-item">
                            {task}
                            <button onClick={() => deleteTask(index)} className="delete-button">❌</button>
                        </li>
                      
                    ))
                )}
            </ul>
            </div>
            <div className='footer'>
                <div className="task-counter">{tasks.length} tareas pendientes</div>
                <div>Desarrolado por javierexe</div>
            </div>    
        </div>
    );
};

export default TaskList;