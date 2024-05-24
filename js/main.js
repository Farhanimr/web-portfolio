// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD7Hi3Mh-ZRZL31guSB2smnN6YifFpEwMw",
    authDomain: "pesan-email-7b147.firebaseapp.com",
    projectId: "pesan-email-7b147",
    storageBucket: "pesan-email-7b147.appspot.com",
    messagingSenderId: "460792778979",
    appId: "1:460792778979:web:98d9109c039350560275d6",
    measurementId: "G-VRV7VNDQVL"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const functions = firebase.functions();

// Ambil referensi ke form
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Ambil nilai form
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const telp = document.getElementById('telp').value;
    const kategori = document.getElementById('kategori').value;
    const pesan = document.getElementById('pesan').value;

    // Panggil Firebase Function
    const sendContactForm = firebase.functions().httpsCallable('sendContactForm');
    sendContactForm({ nama, email, telp, kategori, pesan })
        .then((result) => {
            alert('Pesan berhasil dikirim.');
            contactForm.reset();
        })
        .catch((error) => {
            alert('Pesan gagal dikirim. Error: ' + error.message);
        });
});
