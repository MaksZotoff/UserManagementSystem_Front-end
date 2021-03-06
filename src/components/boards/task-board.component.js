import React, { useState, useEffect } from 'react';
import TaskService from '../../services/task.service';
import { Link } from 'react-router-dom';
import '../../stylesheets/projectUI.css';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    
    useEffect(() => {
        retrieveTasks();
    }, []);

    const retrieveTasks = () => {
        TaskService.findAll()
        .then(response => {
            setTasks(response.data);
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    };

    const setActiveTask = (task, index) => {
        setCurrentTask(task);
        setCurrentIndex(index);
    };

    const deleteTask = () => {
        TaskService.remove(currentTask.id_task)
            .then(response => {
            console.log(response.data);
            retrieveTasks();
        })
        .catch(e => {
            console.log(e);
        });
    };

    return(
        <div className='main container-fluid'>
        <div className="list row">

            <div className="col-md-8">
                <h4>Всего задач:</h4>
                <ul className="list-group">
                    {tasks && tasks.map((task, index) => (
                            <li
                                className={"list-group-item " + (index === currentIndex ? "active" : "")}
                                onClick={() => setActiveTask(task, index)}
                                key={index}
                            >
                                {task.title}
                            </li>
                        ))}
                </ul>

                <div className='form-group buttons'>
                    <Link to={"/addtask/" } className="btn btn-outline-success">
                        Добавить задачу
                    </Link>
                </div>

            </div>


            <div className="col-md-4">

                    {currentTask ? (
                        <div className='cardform'>
                            <h4>Задача</h4>
                            <div>
                                <label>
                                    <strong>Название:</strong>
                                </label>{" "}
                                {currentTask.title}
                            </div>
                            <div>
                                <label>
                                    <strong>Дата начала:</strong>
                                </label>{" "}
                                {currentTask.date_start}
                            </div>
                            <div>
                                <label>
                                    <strong>Дата окончания:</strong>
                                </label>{" "}
                                {currentTask.date_end}
                            </div>
                            <div>
                                <label>
                                    <strong>Статус:</strong>
                                </label>{" "}
                                {currentTask.relevant ? "Выполнена" : "В процессе"}
                            </div>

                            <div className='form-group buttons'>
                                <Link
                                    to={"/task/update/" + currentTask.id_task} className="btn btn-outline-primary">
                                    Изменить
                                </Link>
                                <button className="btn btn-outline-danger" onClick={deleteTask}>
                                    Удалить
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <br />
                            <p>Выберите задачу</p>
                        </div>
                    )}
            </div>
        </div>

        </div>
    );

}

export default TaskList;