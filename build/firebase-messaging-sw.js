// firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/9.1.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.1.2/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyBobLj2IxBjg0_6SMDAf4ilQ7udHfnrd4I",
    authDomain: "pushnotification-631f0.firebaseapp.com",
    databaseURL: "https://pushnotification-631f0-default-rtdb.firebaseio.com",
    projectId: "pushnotification-631f0",
    storageBucket: "pushnotification-631f0.appspot.com",
    messagingSenderId: "547702504774",
    appId: "1:547702504774:web:851d21b680e9743d12b947",
    measurementId: "G-0MCDZ77ZH8"
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
