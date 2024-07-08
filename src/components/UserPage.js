import React, { useEffect } from 'react';
import NotificationService from './NotificationService';

const UserPage = () => {
    useEffect(() => {
        NotificationService.requestPermission();
        NotificationService.listenForMessages();
    }, []);

    return (
        <div>
            <h1>Welcome to the User Page</h1>
            <p>We will notify you with updates!</p>
        </div>
    );
};

export default UserPage;
