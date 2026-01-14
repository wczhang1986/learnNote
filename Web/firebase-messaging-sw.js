// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.11.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.11.1/firebase-messaging-compat.js');

// 注意：这里的配置需要和你主页面（.html文件）中的完全一致
firebase.initializeApp({
          apiKey: "AIzaSyAdE5Y5AeqpYLUwX6YKAY6UWjp-hk51tuI",
          authDomain: "cho-mansei.firebaseapp.com",
          projectId: "cho-mansei",
          messagingSenderId: "589796244868",
          appId: "1:589796244868:web:435b988364f0686289b1d1"
});

const messaging = firebase.messaging();

// 这是处理后台消息（当网页关闭或在后台时）的核心监听器
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] 收到后台消息： ', payload);

  // 自定义通知标题
  const notificationTitle = payload.notification?.title || '新消息';
  const notificationOptions = {
    body: payload.notification?.body
    //icon: '/firebase-logo.png' // 可选：你可以放置一个图标在根目录
  };

  // 在Service Worker作用域内显示通知
  return self.registration.showNotification(notificationTitle, notificationOptions);
});