import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import axios from 'axios';


const firebaseConfig = {
  apiKey: "AIzaSyAm6kKEpeureZ6dgCW7lJK_haR6vbqIC8U",
  authDomain: "push-notification-7af2f.firebaseapp.com",
  databaseURL: "https://push-notification-7af2f-default-rtdb.firebaseio.com",
  projectId: "push-notification-7af2f",
  storageBucket: "push-notification-7af2f.appspot.com",
  messagingSenderId: "71517581649",
  appId: "1:71517581649:web:6a31ca99c5b21485fae370",
  measurementId: "G-EVV3BK98QC"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const messaging = getMessaging(firebaseApp);

const requestPermission = async () => {
    try {
      const registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js');
      const currentToken = await getToken(messaging, { 
        vapidKey: 'BKoYmuAJ2EQaOVLcXIlTzOFi34NSGbwURv9RRGIJHMxg4eiEBry5NZxhdhpmLhyv-pntSvzvbX3tG8jDLWnMh8k',
        serviceWorkerRegistration: registration
      });
  
      if (currentToken) {
        console.log('Current Token:', currentToken);
        await axios.post('http://localhost:5000/subscribe', { token: currentToken });
        console.log('Token sent to server successfully');
      } else {
        console.error('No registration token available. Request permission to generate one.');
      }
    } catch (error) {
      console.error('An error occurred while retrieving token. ', error);
    }
  };
  

  const listenForMessages = () => {
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      const notificationTitle = payload.notification.title;
      const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon
      };
  
      if (Notification.permission === 'granted') {
        new Notification(notificationTitle, notificationOptions);
      } else {
        console.error('Notification permission not granted');
      }
    });
  };
  

export default {
    requestPermission,
    listenForMessages
};
