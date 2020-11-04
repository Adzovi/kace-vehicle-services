var db = firebase.firestore();

function loaddata(){

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            
            today = dd + '_' + mm + '_' + yyyy;
            var userid = user.email;
            var tid = user.uid;
    const Ref = db.collection(today);

    Ref.doc(user.email).collection("Details").get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            render(doc);
        })
    })

    function render(doc) {
            var docid = doc.id;

            if(docid == "Owner's Info"){
                
                document.getElementById("rclient").value = doc.data().FullName;
                document.getElementById("raddress").value = doc.data().Residential_Address;
                document.getElementById("remail").value = doc.data().Email;
            }
            else

            if(docid == "Service"){
                document.getElementById("rservice").value = doc.data().Service;
                document.getElementById("ramount").value = doc.data().Amount_Paid;
          
            }
            else

            if(docid == "Vehicle's Info"){
                document.getElementById("rbrand").value = doc.data().Brand;
                document.getElementById("rmodel").value = doc.data().Model;
                document.getElementById("rtype").value = doc.data().Type;
                document.getElementById("ruse").value = doc.data().Use;
      
            }



        var uid = userid;

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = dd + '/' + mm + '/' + yyyy;

        var trid = tid;
        
  
        document.getElementById("rid").value = uid;
        document.getElementById("rdate").value = today;
        document.getElementById("rtrans").value = trid;
    
    };

    };
});

};

function download(){

    window.print();
    window.location = "https://kace-vehicle-services2.firebaseapp.com/WebPages/HomePage.html"
}

var regi = document.getElementById("regi");
regi.disabled = true
