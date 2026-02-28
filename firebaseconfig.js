// Firebase SDK
const scripts = [
  "https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js",
  "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js",
  "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js",
  "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage-compat.js",
  "https://www.gstatic.com/firebasejs/9.23.0/firebase-database-compat.js",
  "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics-compat.js"
];

(function loadFirebase() {
  let loaded = 0;
  scripts.forEach(src => {
    const s = document.createElement('script');
    s.src = src;
    s.onload = () => {
      loaded++;
      if (loaded === scripts.length) initFirebase();
    };
    document.head.appendChild(s);
  });
})();

function initFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyD5JGQ3eARM5Lo2IG3mkpdx7p3uh0nrBIk",
    authDomain: "samp-miracle.firebaseapp.com",
    projectId: "samp-miracle",
    storageBucket: "samp-miracle.firebasestorage.app",
    messagingSenderId: "465126706451",
    appId: "1:465126706451:web:b94f2359a348ff7078dee6",
    measurementId: "G-ZCRVX5DCPR",
    databaseURL: "https://samp-miracle-default-rtdb.asia-southeast1.firebasedatabase.app"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  // Optional: enable analytics
  if (typeof firebase.analytics === 'function') {
    firebase.analytics();
  }

  console.log('%c[Miracle RP] Firebase connected ✓', 'color:#00C9B1;font-weight:bold');

  // Dispatch event so index.html knows Firebase is ready
  document.dispatchEvent(new Event('firebaseReady'));
}
