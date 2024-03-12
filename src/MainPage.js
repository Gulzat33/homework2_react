import React, { useState } from 'react';
import List from './List';
import Button from './Button';

const MainPage = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    };

    const tasks = [
        {
            id: 1,
            title: 'coding',
            completed: false
        },
        {
            id: 2,
            title: 'eat',
            completed: false
        },
        {
            id: 3,
            title: 'sleep',
            completed: false
        }
    ];

    return (
        <div>
            <Button onClick={handleShow} label={show ? 'ЗАКРЫТЬ' : 'ОТКРЫТЬ'} />
            {show && <List tasks={tasks} />}
        </div>
    );
};

export default MainPage;
