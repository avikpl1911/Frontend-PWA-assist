// firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/9.1.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.1.2/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyD6uCZ9DdOx40ZkNhJXoms3pTz3RmPUi2Q",
    authDomain: "pushnotification-f51a6.firebaseapp.com",
    databaseURL: "https://pushnotification-f51a6-default-rtdb.firebaseio.com",
    projectId: "pushnotification-f51a6",
    storageBucket: "pushnotification-f51a6.appspot.com",
    messagingSenderId: "200230547627",
    appId: "1:200230547627:web:dcf6c3f40df10092f287ee",
    measurementId: "G-2PYPYVDGXQ"
  };

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
