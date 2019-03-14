//const firebase = require("firebase");

var config = {
  apiKey: "AIzaSyD0CriN-8kBlwgieBmkjSPTqD3PvzBUzjc",
  authDomain: "aokilab-manager.firebaseapp.com",
  databaseURL: "https://aokilab-manager.firebaseio.com",
  projectId: "aokilab-manager",
  storageBucket: "aokilab-manager.appspot.com",
  messagingSenderId: "881455417889"
};

firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var app = new Vue({
    el: '#app',
    data: {
        items: [
            { title: '領収書を準備する', isChecked: true },
            { title: 'Vue.jsハンズオンの資料を作る', isChecked: true },
            { title: '参加者の人数を確認する', isChecked: false },
            { title: 'ピザを注文する', isChecked: false },
            { title: '参加費のお釣りを準備する', isChecked: false },
            { title: '会場設営をする', isChecked: false },
        ]
    },
    methods: {
        reverseMessage: function () {
          this.message = this.message.split('').reverse().join('')
        },
        get_data: function(){
            db.collection("order_list").get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                });
            });
        },
    }
})
