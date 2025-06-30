// Import and configure Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCJ19goEX8CwlHjEsEi5rCIdNfqLz09-9M",
  authDomain: "ngl-clone-20fd2.firebaseapp.com",
  databaseURL: "https://ngl-clone-20fd2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ngl-clone-20fd2",
  storageBucket: "ngl-clone-20fd2.firebasestorage.app",
  messagingSenderId: "1091371340835",
  appId: "1:1091371340835:web:13b26c88a4a7d77e7b4d96",
  measurementId: "G-HT9BWJ6101"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to the Realtime Database
const database = firebase.database();
