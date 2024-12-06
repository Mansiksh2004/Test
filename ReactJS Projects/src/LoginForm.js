import React, { useState } from 'react';
import UserInfo from './UserInfo';
import './App.css';
const LoginForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [size, setSize] = useState('');
    const [showInfo, setShowInfo] = useState(false);
   const handleShowInfo = () => {
        setShowInfo(true);
    };

    return (
        <div>
            <h1>Login Form</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label>Username:</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Customer Contact No.</label>
                    <input 
                        type="number" 
                        value={number} 
                        onChange={(e) => setNumber(e.target.value)} 
                        required 
                    />
                    <label>Pizza Size</label>
                    <select  value={size} onChange={(e) => setSize(e.target.value)}>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                    </div>
                <button type="button" onClick={handleShowInfo}>Show</button>
            </form>
                 
            {showInfo && (
                <UserInfo name={name} number={number} size={size}/>

            )}
                 
        </div>
         
           

           
        
    );
};

export default LoginForm;
