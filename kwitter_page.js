// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5fRwjsphZB1joquW8g8J7iCGTXBGIJWw",
    authDomain: "chat-app-b40c0.firebaseapp.com",
    projectId: "chat-app-b40c0",
    storageBucket: "chat-app-b40c0.appspot.com",
    messagingSenderId: "130492940846",
    appId: "1:130492940846:web:361b77c336ee38de7255bf"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  user_name=localStorage.getItem("username",username);
  room_name=localStorage.getItem("room_name",room_name);

  function send()
  {
    text=document.getElementById("message_box");
    firebase.database().ref(room_name).push({name:user_name,message:message,like:0});
    document.getElementById("message_box").value="";
  }