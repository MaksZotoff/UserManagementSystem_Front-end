import React, { useState, useRef } from 'react';
import {Link} from 'react-router-dom';

import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';

import TaskService from '../../services/task.service';

import '../../stylesheets/App.css';
import '../../stylesheets/cardUI.css';

const required = (value) => {
    if (!value) {
        return (
            <div className='alert alert-danger' role='alert'>
                Это поле обязательно для заполнения.
            </div>
        );
    }
};


const AddTaskForm = () =>{
        const form = useRef();
        const checkBtn = useRef();

        const [title, setTitle] = useState('')
        const [project, setProject] = useState('')
        const [status, setStatus] = useState('') 
        const [createdAt, setCreatedAt] = useState('')
        const [date_end, setDateEnd] = useState('')

        const [successful, setSuccessful] = useState(false);
        const [message, setMessage] = useState('');

        const onChangeTitle = (e) => {
            const title = e.target.value;
            setTitle(title);
        };
        const onChangeCreatedAt = (e) => {
            const createdAt = e.target.value;
            setCreatedAt(createdAt);
        };
        const onChangeDateEnd = (e) => {
            const date_end = e.target.value;
            setDateEnd(date_end);
        };

    const handleAddTask = (e) => {
        e.preventDefault();
        setSuccessful(false);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            TaskService.addTask(title, project, status, createdAt, date_end).then((response) => {
                setMessage(response.data.message);
                setSuccessful(true);
            },
            (error) => {
                const resMessage =
                    (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    error.message ||
                    error.toString();
                    setMessage(resMessage);
                    setSuccessful(false);
            }
            );
        }
    };

        return (
            <div className='container-sm userform'>
                <Form className='cardform' onSubmit={handleAddTask} ref={form}>
                {!successful && (
                <div>
                    <div className='form-group'>
                    <label htmlFor='title'>Наименование задачи</label>
                        <Input
                            type='text'
                            className='form-control'
                            name='title'
                            value={title}
                            onChange={onChangeTitle}
                            validations={[required]}
                        />
                    </div>
                    
                    <div className='form-group'>
                    <label htmlFor='createdAt'>Дата начала</label>
                        <Input
                            type='date'
                            className='form-control'
                            name='createdAt'
                            value={createdAt}
                            onChange={onChangeCreatedAt}
                            validations={[required]}
                        />
                    </div>
                    
                    <div className='form-group'>
                    <label htmlFor='date_end'>Дата окончания</label>
                        <Input
                            type='date'
                            className='form-control'
                            name='date_end'
                            value={date_end}
                            onChange={onChangeDateEnd}
                            validations={[required]}
                        />
                    </div>
                    
                    <div className='form-group buttons'>
                        <button className='btn btn-outline-success '>Добавить</button>
                        <Link className='linkback' to='/project' >Вернуться назад</Link>    
                    </div>
                </div>
                )}
                    {message && (
                        <div className='form-group message'>
                            <div className={ successful ? 'alert alert-success' : 'alert alert-danger' } role='alert'>
                                {message}
                            </div>
                            <Link className='linkback' to='/project' >Вернуться назад</Link>    
                        </div>
                    )}
                <CheckButton style={{ display: 'none' }} ref={checkBtn}/>
                </Form>
            </div>
        );
};

export default AddTaskForm