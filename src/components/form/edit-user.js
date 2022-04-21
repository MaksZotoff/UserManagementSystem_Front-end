import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';

import AdminService from '../../services/admin.service';

import '../../stylesheets/App.css';
import '../../stylesheets/cardUI.css';

const EditUser = (props) =>{
        const initialUserlState = {
            id_user: null,
            username: '',
            email: '',
            phone: '',
            password: ''
        };

        const [user, setUser]= useState(initialUserlState);
        const [message, setMessage] = useState('');
        
        const form = useRef();
        const checkBtn = useRef();

        const findOne = id_user => {
            AdminService.findOne(id_user)
            .then(responce => {
                setUser(responce.data);
                console.log(responce.data);
            })
            .cath(e => {
                console.log(e);
            });
        };

        useEffect(() => {
            findOne(props.id_user);
        },[props.id_user]);

        const handleInputChange = event => {
            const { name, value } = event.target;
            setUser({ ...user, [name]: value });
        };
        const updateUser = () => {
            AdminService.update(user.id_user, user)
                .then(response => {
                    console.log(response.data);
                    setMessage(message);
                })
                .cath(e => {
                    console.log(e);
                });
            };

        return (
            <div className='container-sm userform'>
                <Form className='cardform' ref={form}>
                <>
                    <div className='form-group'>
                    <label htmlFor='username'>Логин</label>
                        <Input
                            type='text'
                            className='form-control'
                            name='username'
                            value={user.username}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                        <Input
                            type='text'
                            className='form-control'
                            name='email'
                            value={user.email}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className='form-group'>
                    <label htmlFor='phone'>Номер телефона</label>
                        <Input
                            type='text'
                            className='form-control'
                            name='phone'
                            value={user.phone}
                            onChange={handleInputChange}
                        />
                    </div>


                    <div className='form-group'>
                    <label htmlFor='password'>Пароль</label>
                        <Input
                            type='password'
                            className='form-control'
                            name='password'
                            value={user.password}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className='form-group buttons'>
                        <button className='btn btn-outline-success' onClick={updateUser}>Обновить</button>
                        <Link className='linkback' to='/user' >Вернуться назад</Link>    
                    </div>
                </>

                <CheckButton style={{ display: 'none' }} ref={checkBtn}/>
                </Form>
        
            </div>
        );
};

export default EditUser