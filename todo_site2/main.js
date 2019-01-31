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
//var db = firebase.firestore();

var app = new Vue({
    el: '#app',
    created: function() {
        this.db = firebase.firestore();
        let orders_cp = [];
        this.db.collection("order_list").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                //console.log(doc.id, " => ", doc.data());
                //var dict_data = doc.data();
                let copyObj = {};
                let copyid = doc.id;
                Object.assign(copyObj , doc.data());
                //console.log(copyObj);
                copyObj.id = copyid;
                console.log(copyObj);
                orders_cp.push(copyObj);
            });
        });
        this.orders = orders_cp;
      //this.todosRef.on('value', function(snapshot) {
      //  _this.todos = snapshot.val(); // データに変化が起きたときに再取得する
      //});
    },
    data: function() {
        return {
        orders:[],
        }
    },
    methods: {
        get_data: function(){
            this.db.collection("order_list").get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    // doc.data() is never undefined for query doc snapshots
                    //console.log(doc.id, " => ", doc.data());
                    //var dict_data = doc.data();
                    let copyObj = {};
                    Object.assign(copyObj , doc.data());
                    //console.log(copyObj);
                    copyObj.id = doc.id;
                    console.log(copyObj);
                    this.orders.push(copyObj);
                });
            });
        },
        change_order_now: function(collection_id){
        },
        get_date: function(dt){
            let y = dt.getFullYear();
            let m = ("00" + (dt.getMonth()+1)).slice(-2);
            let d = ("00" + dt.getDate()).slice(-2);
            let result = y + "/" + m + "/" + d;
            return result;
        },
    }
})
