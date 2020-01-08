import { initializeApp } from 'firebase'

const app = initializeApp({
    apiKey: "AIzaSyDU2NRip5LQepFt4mXu4-A2EpU_XvEkSPc",
    authDomain: "assesment-8c6c0.firebaseapp.com",
    databaseURL: "https://assesment-8c6c0.firebaseio.com",
    projectId: "assesment-8c6c0",
    storageBucket: "assesment-8c6c0.appspot.com",
    messagingSenderId: "570729948876"
});

export const db = app.database();
export const productRef = db.ref('product');