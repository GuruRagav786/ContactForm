 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyDK6kex2WN9UA1mviEq4w_9_GZwXf1Sdvs",
    authDomain: "contactform-68b45.firebaseapp.com",
    databaseURL: "https://contactform-68b45-default-rtdb.firebaseio.com",
    projectId: "contactform-68b45",
    storageBucket: "contactform-68b45.firebasestorage.app",
    messagingSenderId: "338337542954",
    appId: "1:338337542954:web:e293952b9869921c502453"
  };
// initialize firebase
firebase.initializeApp(firebaseConfig);


// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};