const firebaseConfig = {
    apiKey: "AIzaSyCx-U4VkwnRSZEdsuMbMJNYq5EjPEqGRIA",
    authDomain: "crud-de5f7.firebaseapp.com",
    projectId: "crud-de5f7",
    storageBucket: "crud-de5f7.appspot.com",
    messagingSenderId: "16546212598",
    appId: "1:16546212598:web:b2a36c5f2bc18dde4f5ad7"
  };

  firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
// const auth = firebase.auth();

const modalWrapper = document.querySelector('.modal-wrapper');
const addModalForm = document.querySelector('.add-modal .form');
const btnAdd = document.querySelector('.btn-2')
const selectModal = document.querySelector('.selc-modal')
const tableUsers = document.querySelector('.table-users');
