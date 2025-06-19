import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getDatabase, ref, push, get, set, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js';

const firebaseConfig = {
  apiKey: "AIzaSyBtYV2z9q2sCwn6qKceSVWJ7Rp1Rd8h9ls",
  authDomain: "eventvotingapp-4cb94.firebaseapp.com",
  databaseURL: "https://eventvotingapp-4cb94-default-rtdb.firebaseio.com",
  projectId: "eventvotingapp-4cb94",
  storageBucket: "eventvotingapp-4cb94.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abc123def456ghi789"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// rest of the code will follow here (same as previous message)...
