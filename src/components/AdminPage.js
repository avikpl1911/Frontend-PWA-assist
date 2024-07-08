import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminPage = () => {
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [link, setLink] = useState('');
    const [image, setImage] = useState('');

    const sendNotification = async () => {
        try {
            const response = await axios.post('http://localhost:5000/sendNotification', {
                title,
                message,
                link,
                image
            });
            toast.success('Notification sent successfully');
        } catch (error) {
            toast.error('Error sending notification: ' + error.message);
        }
    };

    return (
        <div>
            <ToastContainer />
            <h1>Admin Page</h1>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
            <input type="text" placeholder="Link (optional)" value={link} onChange={(e) => setLink(e.target.value)} />
            <input type="text" placeholder="Image URL (optional)" value={image} onChange={(e) => setImage(e.target.value)} />
            <button onClick={sendNotification}>Send Notification</button>
        </div>
    );
};

export default AdminPage;
