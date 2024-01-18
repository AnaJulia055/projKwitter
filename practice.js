const firebaseConfig = {
    apiKey: "AIzaSyD1so4HabrP0Ws-NQIjBNPuTSLzXV3hJc8",
    authDomain: "kwitter-4acda.firebaseapp.com",
    databaseURL: "https://kwitter-4acda-default-rtdb.firebaseio.com",
    projectId: "kwitter-4acda",
    storageBucket: "kwitter-4acda.appspot.com",
    messagingSenderId: "1078798023843",
    appId: "1:1078798023843:web:df19663baa87d7a597d316"
  };
//ADICIONE SEUS LINKS FIREBASE




FileSystemWritableFileStream.initializeApp(firebaseConfig);



function addUser()
{
    userName= document.getElementById("userName").value;
    firebase.database().rerf("/").child(userName).update({purpose : "adding user"});
}