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

  user_name = localStorage.getItem("username",username);
  document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

  function addroom()
  {
    room_name=document.getElementById("room_name").value;
    localStorage.setItem(room_name,"room_name");
    firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
});
    window.location = "kwitter_page.html";
  }


function getData() 
{
  firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
//End code
});});}
getData();

function redirectToroomname()
{
  localStorage.setItem("room_name",room_name);
  window.location = "kwitter_page.html";
}

function logout()
{
  window.location="index.html";
}