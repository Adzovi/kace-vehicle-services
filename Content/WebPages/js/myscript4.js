function report(){

var db = firebase.firestore();
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '_' + mm + '_' + yyyy;

document.getElementById("adate").value=today;


const list = document.querySelector('#list');


const ref = db.collection(today);
    ref.get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            render(doc);
        })
    })

    function render(doc){
        var docid = doc.id;
        console.log(docid);

   let li = document.createElement('li');
   let li2 = document.createElement('span');
   
   li2.textContent = docid;
   li.appendChild(li2);
   
   list.appendChild(li);
    
   };
   

};
