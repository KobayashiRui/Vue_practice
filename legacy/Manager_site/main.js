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
var this_ = this;
var now_filter = 0; //0 : not filter 1: order filter

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
        this_ = this;
        //リアルタイム更新をさせる
        this.db.collection("order_list").onSnapshot(function(querySnapshot) {
          /*  
          switch(now_filter){
              case 0:
                this_.update_data();
                break;
              case 1:
                this_.filter_data(1);
            }*/
            this_.filter_data(now_filter);
            console.log("Get new data");
        });

    },
  
    data: function() {
        return {
        orders:[],
        db:null,
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
          var ref = this.db.collection("order_list").doc(collection_id);
          ref.get().then(function(doc){
              console.log(doc.data());
              console.log(doc.data().Now_Order);
              if(doc.data().Now_Order == true){
                ref.update({Now_Order:false});
              }else if(doc.data().Now_Order == false){
                ref.update({Now_Order:true});
              }
          });
          /*
          if(now_order_data == true){
            ref.updateData({Now_Order:false});
          }else if(now_order_data == false){
            ref.updateData({Now_Order:true});
          }*/
        },
        get_date: function(dt){
            let y = dt.getFullYear();
            let m = ("00" + (dt.getMonth()+1)).slice(-2);
            let d = ("00" + dt.getDate()).slice(-2);
            let result = y + "/" + m + "/" + d;
            return result;
        },
        update_data : function(){
            let orders_cp2 = [];
            this.db.collection("order_list").get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    // doc.data() is never undefined for query doc snapshots
                    //console.log(doc.id, " => ", doc.data());
                    //var dict_data = doc.data();
                    let copyObj2 = {};
                    let copyid2 = doc.id;
                    Object.assign(copyObj2 , doc.data());
                    //console.log(copyObj);
                    copyObj2.id = copyid2;
                    orders_cp2.push(copyObj2);
                    //console.log("update data");
                });
            });
            console.log(this.orders);
            this.orders = orders_cp2;
            console.log(this.orders);
            //vue.$forceUpdate();
        },
        filter_data : function(filter_tag){
            let orders_cp2 = [];
            let filter_DB;
            switch(filter_tag){
              case 0:
                filter_DB = this.db.collection("order_list");
                break;
              case 1:
                filter_DB = this.db.collection("order_list").where("Now_Order", "==", true);
                break;
            }
            //this.db.collection("order_list").where("Now_Order", "==", true).get().then(function(querySnapshot) {
            filter_DB.get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    // doc.data() is never undefined for query doc snapshots
                    //console.log(doc.id, " => ", doc.data());
                    //var dict_data = doc.data();
                    let copyObj2 = {};
                    let copyid2 = doc.id;
                    Object.assign(copyObj2 , doc.data());
                    //console.log(copyObj);
                    copyObj2.id = copyid2;
                    orders_cp2.push(copyObj2);
                    //console.log("update data");
                });
            });
            this.orders=orders_cp2;
            now_filter = filter_tag;
        },
        created: function(){
        // GET request
        axios.get("https://agate-postage.glitch.me/exel_generate")
        .then(response => {
          console.log("GET!!");
          document.getElementById("download_excel").click();
        });
        },

    }
})
