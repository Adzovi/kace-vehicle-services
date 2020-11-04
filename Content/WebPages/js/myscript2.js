//store user files



firebase.auth().onAuthStateChanged(function (user) {

    document.getElementById("homenext").disabled = true;
    var username = user.email;
    var uploader = document.getElementById("uploader");
    var ceps = document.getElementById("ceps");
    var text = document.getElementById("text");  
    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName("close")[0];
    var close = document.getElementById("close");
    var infor = document.getElementById("infor");
    

    ceps.addEventListener('change', function (e) {
        //get file
        var file = e.target.files[0];

        //create reference
        var storage = firebase.storage().ref('Vehicle_Registration/').child(username).child('Ceps_Document/' + file.name);

        //upload file
        var task = storage.put(file);

        //update progress
        task.on('state_changed',

            function progress(snapshot) {
                var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                uploader.value = percentage;
            },

        function error(err) {
            text.value = "Error Uploading Document. Please try again";
            infor.value = "Error"
            modal.style.display = "block";

            span.onclick = function () {
                modal.style.display = "none";
            }

            close.onclick = function () {
                modal.style.display = "none";
            }
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        },

        function complete() {
            text.value = "CEPS Document Successfully Uploaded";
            infor.value = "Success"
            modal.style.display = "block";

            span.onclick = function () {
                modal.style.display = "none";
            }

            close.onclick = function () {
                modal.style.display = "none";
            }
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";

                }
            }


        });

    });

    });

    firebase.auth().onAuthStateChanged(function (user) {

        var username = user.email;
        var uploader1 = document.getElementById("uploader1")
        var garage = document.getElementById("garage");
        var text = document.getElementById("text");  
        var modal = document.getElementById('myModal');
        var span = document.getElementsByClassName("close")[0];
        var close = document.getElementById("close");
        var infor = document.getElementById("infor");


        garage.addEventListener('change', function (e) {
            //get file
            var file = e.target.files[0];

            //upload file
            var storage = firebase.storage().ref('Vehicle_Registration/').child(username).child('Garage_Document/' + file.name);

            //upload file
            var task = storage.put(file);

            //update progress
            task.on('state_changed',

                function progress(snapshot) {
                    var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    uploader1.value = percentage;
                },

            function error(err) {
                text.value = "Error Uploading Document. Please try again";
                infor.value= "Error"
                modal.style.display = "block";

                span.onclick = function () {
                    modal.style.display = "none";
                }

                close.onclick = function () {
                    modal.style.display = "none";
                }
                window.onclick = function (event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
            },

            function complete() {
                text.value = "Private Garage Document Successfully Uploaded";
                infor.value = "Success"
                modal.style.display = "block";

                span.onclick = function () {
                    modal.style.display = "none";
                    document.getElementById("homenext").disabled = false;
                }

                close.onclick = function () {
                    modal.style.display = "none";
                    document.getElementById("homenext").disabled = false;
                }
                window.onclick = function (event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                        document.getElementById("homenext").disabled = false;
                    }

                }

            });


        });

    });




firebase.auth().onAuthStateChanged(function (user) {

    var username = user.email;
    var uploader = document.getElementById("uploader2");
    var passport = document.getElementById("passport");
    var text = document.getElementById("text");  
    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName("close")[0];
    var close = document.getElementById("close");
    var infor = document.getElementById("infor");

    passport.addEventListener('change', function (e) {
        //get file
        var file = e.target.files[0];

        //upload file
        var storage = firebase.storage().ref('Vehicle_Registration/').child(username).child('Passport Picture/' + file.name);

        //upload file
        var task = storage.put(file);

        //update progress
        task.on('state_changed',

            function progress(snapshot) {
                var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                uploader.value = percentage;
            },

        function error(err) {
                text.value = "Error Uploading Passport Picture";
                infor.value = "Error"
                modal.style.display = "block";

                span.onclick = function () {
                    modal.style.display = "none";
                     
                }

                close.onclick = function () {
                    modal.style.display = "none";
                     
                }
                window.onclick = function (event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                         
                    }

                }
        },

        function complete() {
                text.value = "Passport Picture Successfully Uploaded";
                infor.value = "Success"
                modal.style.display = "block";

                span.onclick = function () {
                    modal.style.display = "none";
                }

                close.onclick = function () {
                    modal.style.display = "none";
                }
                window.onclick = function (event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }

                }
        }

            );
    });

});




//Writing user data into the database
var database = firebase.firestore();
document.getElementById('nextmess').disabled=true;
function VehicleReg() {
    $(function () {
        $("#loader3").toggle();
    });

    var text = document.getElementById("text");  
    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName("close")[0];
    var close = document.getElementById("close");
    var infor = document.getElementById("infor");
    var form1 = document.getElementById('form1');
    var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '_' + mm + '_' + yyyy;

    const Ref = database.collection(today);

    firebase.auth().onAuthStateChanged(function (user) {

        var text = document.getElementById("text");  
        var modal = document.getElementById('myModal');
        var span = document.getElementsByClassName("close")[0];
        var close = document.getElementById("close");
        var infor = document.getElementById("infor");

            var username = user.email;
            var uid = user.uid;


            var fullname = document.getElementById("fullname").value;
            var work = document.getElementById("work").value;
            var resaddress = document.getElementById("resaddress").value;
            var phone = document.getElementById("phone").value;
            var email = document.getElementById("email").value;
            var idtype = document.getElementById("idtype").value;
            var idnumber = document.getElementById("idnumber").value;
            var passport = document.getElementById("passport");

            var chnumber = document.getElementById("chnumber").value;
            var year = document.getElementById("year").value;
            var build = document.getElementById("build").value;
            var model = document.getElementById("model").value;
            var type = document.getElementById("type").value;
            var vrcolour = document.getElementById("vrcolour").value;
            var country = document.getElementById("country").value;
            var use = document.getElementById("use").value;
            var width = document.getElementById("width").value;
            var length = document.getElementById("length").value;
            var height = document.getElementById("height").value;
            var tyres = document.getElementById("tyres").value;
            var vraxles = document.getElementById("vraxles").value;

           
            if (form1.checkValidity()){

            Ref.doc(user.email).collection("Details").doc("Owner's Info").set({
                FullName: fullname,
                Work: work,
                Residential_Address: resaddress,
                Telephone_Number: phone,
                Email: email,
                ID_Type: idtype,
                ID_Number: idnumber
            })
            .then(function () {
                var loaderhide = document.getElementById("loader3");
                loaderhide.style.display = "none";

                text.value = "Data Successfully Uploaded";
                infor.value = "Success"
                modal.style.display = "block";

                span.onclick = function () {
                    modal.style.display = "none";
                }

                close.onclick = function () {
                    modal.style.display = "none";
                }
                window.onclick = function (event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                        
                    }

                }
            })
.catch(function (error) {
    var loaderhide = document.getElementById("loader3");
                loaderhide.style.display = "none";
    text.value = "Error Uploading Data.";
    infor.value = "Error"
    modal.style.display = "block";

    span.onclick = function () {
        modal.style.display = "none";
         
    }

    close.onclick = function () {
        modal.style.display = "none";
         
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
             
        }

    }
});

        
        Ref.doc(user.email).collection("Details").doc("Vehicle's Info").set({
                Chassis_Number: chnumber,
                Year_of_Manufacture: year,
                Brand: build,
                Model: model,
                Type: type,
                Color: vrcolour,
                Country_of_Importation: country,
                Use: use,
                Width: width,
                Length: length,
                Height: height,
                Number_of_Tyres: tyres,
                Axle_Number: vraxles
            })

                     .then(function () {
                        var loaderhide = document.getElementById("loader3");
                        loaderhide.style.display = "none";
                        text.value = "Data Successfully Uploaded";
                        infor.value = "Success"
                        modal.style.display = "block";
        
                        span.onclick = function () {
                            modal.style.display = "none";
                            document.getElementById("paynext").disabled = false;
                        }
        
                        close.onclick = function () {
                            modal.style.display = "none";
                            document.getElementById("paynext").disabled = false;
                        }
                        window.onclick = function (event) {
                            if (event.target == modal) {
                                modal.style.display = "none";
                                document.getElementById("paynext").disabled = false;
                            }
        
                        }
                     })
.catch(function (error) {
    var loaderhide = document.getElementById("loader3");
                loaderhide.style.display = "none";
    console.error("Error recording data: ", error);
    text.value = "Error Uploading Data";
    infor.value = "Error"
    modal.style.display = "block";

    span.onclick = function () {
        modal.style.display = "none";
         
    }

    close.onclick = function () {
        modal.style.display = "none";
         
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
             
        }

    }
});
 

var uniqueid = document.getElementById("uniqueid");
var paytype = document.getElementById("paytype");
var payuse = document.getElementById("payuse");
var amount = document.getElementById("amount");

            document.getElementById("prename").value = fullname;
            document.getElementById("prework").value = work;
            document.getElementById("preres").value = resaddress;
            document.getElementById("prephone").value = phone;
            document.getElementById("preemail").value = email;
            document.getElementById("preidtype").value = idtype;
            document.getElementById("preidno").value = idnumber;


            document.getElementById("prechno").value = chnumber;
            document.getElementById("preyear").value = year;
            document.getElementById("premake").value = build;
            document.getElementById("premodel").value = model;
            document.getElementById("prebod").value = type;
            document.getElementById("precolour").value = vrcolour;
            document.getElementById("precountry").value = country;
            document.getElementById("preuse").value = use;
            document.getElementById("prewidth").value = width;
            document.getElementById("prelength").value = length;
            document.getElementById("preheight").value = height;
            document.getElementById("pretyres").value = tyres;
            document.getElementById("preaxles").value = vraxles;

            uniqueid.value = uid;
        paytype.value = type;
        payuse.value = use;
        
        if (type == "Motor Cycle (Up to 200CC)"){
          amount.value = "GH₵116.00";
        }
        else
        if (type == "Motor Cycle (Above 200CC)/Tricycle") {
            amount.value = "GH₵140.00";
        }
        else
        if (type == "Motor Vehicle (Up to 2000CC)" && use=="Private"){
            amount.value = "GH₵429.50";
        }
        else
        if (type == "Motor Vehicle (Up to 2000CC)" && use=="Commercial"){
            amount.value = "GH₵419.50";
        }
        if (type == "Motor Vehicle (Above 2000CC)" && use=="Private"){
            amount.value = "GH₵544.00";
        }
        else
        if (type == "Motor Vehicle (Above 2000CC)" && use=="Commercial"){
            amount.value = "GH₵524.00";
        }
        else
        if (type == "Buses and Coaches" && use=="Private"){
            amount.value = "GH₵494.00";
        }
        else
        if (type == "Buses and Coaches" && use=="Commercial"){
            amount.value = "GH₵479.00";
        }
        else
        if (type == "Rigid Cargo Truck (Up to 16 Tons)" && use=="Private"){
            amount.value = "GH₵534.00";
        }
        else
        if (type == "Rigid Cargo Truck (Up to 16 Tons)" && use=="Commercial"){
            amount.value = "GH₵524.00";
        }
        else
        if (type == "Rigid Cargo Truck (16 - 22 Tons)" && use=="Private"){
            amount.value = "GH₵554.00";
        }
        else
        if (type == "Rigid Cargo Truck (16 - 22 Tons)" && use=="Commercial"){
            amount.value = "GH₵539.00";
        }
        else
        if (type == "Rigid Cargo Truck (Above 22 Tons)" && use=="Private"){
            amount.value = "GH₵604.00";
        }
        else
        if (type == "Rigid Cargo Truck (Above 22 Tons)" && use=="Commercial"){
            amount.value = "GH₵574.00";
        }
        else
        if (type == "Rigid Cargo Truck (Above 24 Tons)" && use=="Private"){
            amount.value = "GH₵604.00";
        }
        else
        if (type == "Rigid Cargo Truck (Above 24 Tons)" && use=="Commercial"){
            amount.value = "GH₵574.00";
        }
        else
        if (type == "Articulated Trucks (Up to 24 Tons)" && use=="Private"){
            amount.value = "GH₵886.50";
        }
        else
        if (type == "Articulated Trucks (Up to 24 Tons)" && use=="Commercial"){
            amount.value = "GH₵796.50";
        }
        else
        if (type == "Articulated Trucks (24 - 32 Tons)" && use=="Private"){
            amount.value = "GH₵886.50";
        }
        else
        if (type == "Articulated Trucks (24 - 32 Tons)" && use=="Commercial"){
            amount.value = "GH₵796.50";
        }
        else
        if (type == "Articulated Trucks (Above 32 Tons)" && use=="Private"){
            amount.value = "GH₵886.50";
        }
        else
        if (type == "Articulated Trucks (Above 32 Tons)" && use=="Commercial"){
            amount.value = "GH₵796.50";
        }
        else
        if (type == "Articulated Trucks (Tipper)" && use=="Private"){
            amount.value = "GH₵826.50";
        }
        else
        if (type == "Articulated Trucks (Tipper)" && use=="Commercial"){
            amount.value = "GH₵756.50";
        }
      }

      else 
      {
        var loaderhide = document.getElementById("loader3");
        loaderhide.style.display = "none";
        text.value = "Please make sure all fields are filled before submitting";
        document.getElementById('fullname').focus();
        infor.value = "Error"
        modal.style.display = "block";
    
        span.onclick = function () {
            modal.style.display = "none";
             
        }
    
        close.onclick = function () {
            modal.style.display = "none";
             
        }
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
                 
            }
        }
      };
    });

    document.getElementById('nextmess').disabled=false;

};










var db = firebase.firestore();
document.getElementById("recnext").disabled=true;
function finalize(){
    var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        
        today = dd + '_' + mm + '_' + yyyy;
const Ref = db.collection(today);
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
    

    var text = document.getElementById("text");  
    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName("close")[0];
    var close = document.getElementById("close");
    var infor = document.getElementById("infor");

        text.value = "Vehicle Registration Successful."; 
        infor.value = "Congratulations"
        modal.style.display = "block";
    
        span.onclick = function () {
            modal.style.display = "none";
        }
    
        close.onclick = function () {
            modal.style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        var head = $("#vreghead").text();
        var paid = document.getElementById("amount").value;
        
        Ref.doc(user.email).collection("Details").doc("Service").set({
            Amount_Paid: paid,
            Service: head,
            Date: today
        });
        var client = document.getElementById("fullname").value;
        var address = document.getElementById("resaddress").value;
        var email = document.getElementById("email").value;
        var userid = document.getElementById("info").value;
        var transid = document.getElementById("uniqueid").value;    
        
        
        var bran = document.getElementById('build').value;
        var mode = document.getElementById('model').value;
        var type = document.getElementById('type').value;
        var use= document.getElementById('use').value;   
        var paid = document.getElementById('amount').value;

        document.getElementById("rservice").value=head;
        console.log(head);
        document.getElementById("rclient").value= client;
        document.getElementById("raddress").value= address;
        document.getElementById("remail").value=email;
        document.getElementById("rid").value = userid;
        document.getElementById("rdate").value = today;
        document.getElementById("rbrand").value = bran;
        document.getElementById("rmodel").value = mode;
        document.getElementById("rtype").value = type;
        document.getElementById("ruse").value = use;
        document.getElementById("rtrans").value=transid;
        document.getElementById("ramount").value= paid;

    };
});
document.getElementById("recnext").disabled=false;
}


$('#load').click(function (){

    window.location = "https://kace-vehicle-services2.firebaseapp.com/WebPages/receipt.html";
    });  
    
    $('#dreceipt').click(function (){

        window.location = "https://kace-vehicle-services2.firebaseapp.com/WebPages/receipt.html";
        });  
        
    



function WorthyReg() {

    const roadRef = database.collection("Roadworthy_Registration");

    firebase.auth().onAuthStateChanged(function (user) {

        
        var text = document.getElementById("text");  
        var modal = document.getElementById('myModal');
        var span = document.getElementsByClassName("close")[0];
        var close = document.getElementById("close");
        var infor = document.getElementById("infor");

        if (user) {
            var username = user.email;
            var uid = user.uid;


            var rwfullname = document.getElementById("rwfullname").value;
            var post = document.getElementById("rwpost").value;
            var rwresaddress = document.getElementById("rwresaddress").value;
             
            var rwchassis =document.getElementById("chno")
            var regnumber = document.getElementById("regnumber").value;
            var rwcolour = document.getElementById("rwcolour").value;
            var rwyear = document.getElementById("rwyear").value;
            var rwbuild = document.getElementById("rwbuild").value;
            var rwmodel = document.getElementById("model").value;
            var rwtype = document.getElementById("rwtype").value;
            var rwcountry = document.getElementById("rwcountry").value;
            var rwpersons = document.getElementById("rwpersons").value;
            var rwwidth = document.getElementById("rwwidth").value;
            var rwlength = document.getElementById("rwlength").value;
            var rwheight = document.getElementById("rwheight").value;
            var rwtyres = document.getElementById("rwtyres").value;
            var rwaxles = document.getElementById("rwaxles").value;
            var middletyre = document.getElementById("middletyre").value;
            var fronttyre = document.getElementById("fronttyre").value;
            var reartyre = document.getElementById("reartyre")
            var frontaxle = document.getElementById("frontaxle").value;
            var middleaxle = document.getElementById("middleaxle").value;
            var rearaxle = document.getElementById("rearaxle").value;
            var nvw = document.getElementById("nvw").value;
            var gvw = document.getElementById("gvw").value;
            var load = document.getElementById("load").value;
            var enginemake = document.getElementById("enginemake").value;
            var enginenum = document.getElementById("engineno")
            var cyls = document.getElementById("cyls").value;
            var cc = document.getElementById("cc").value;
            var hp = document.getElementById("hp").value;
            var rwuse = document.getElementById("rwuse").value;
            var fuel = document.getElementById("fuel").value;
            var rwdate = document.getElementById("rwdate").value;
            

            roadRef.doc(user.email).collection("Details").doc("Owner's Info").set({
                Full_Name: rwfullname,
                Postal_Address: post,
                Residential_Address: rwresaddress
            })
            .then(function () {
                  text.value = "Data Successfully Uploaded";
                infor.value = "Success"
                modal.style.display = "block";

                span.onclick = function () {
                    modal.style.display = "none";
                     
                }

                close.onclick = function () {
                    modal.style.display = "none";
                     
                }
                window.onclick = function (event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                         
                    }

                }
            })
.catch(function (error) {
    text.value = "Error Uploading Data";
    infor.value = "Error"
    modal.style.display = "block";

    span.onclick = function () {
        modal.style.display = "none";
         
    }

    close.onclick = function () {
        modal.style.display = "none";
         
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
             
        }

    }
});


roadRef.doc(user.email).collection("Details").doc("Vehicle's Info").set({
                Registration_Number: regnumber,
                Colour: rwcolour,
                Country_of_Importation: rwcountry,
                Year_of_Manufacture: rwyear,
                Make: rwbuild, 
                Model: rwmodel,
                Type: rwtype,
                Height: rwheight,
                Length: rwlength,
                Width: rwwidth,
                Use: rwuse,
                Number_of_Axles: rwaxles,
                Number_of_Tyres: rwtyres,
                Size_of_Front_Tyres: fronttyre,
                Size_of_Middle_Tyres: middletyre,
                Size_of_Rear_Tyres: reartyre,
                Size_of_Front_Axle: frontaxle,
                Size_of_Middle_Axle: middleaxle,
                Size_of_Rear_Axle: rearaxle,
                Weight_of_NVW: nvw,
                Weight_of_GVW: gvw,
                Permitted_Capacity: load,
                Engine_Make: enginemake,
                Number_of_Cylinders: cyls,
                Engine_Size: cc,
                Horse_Power: hp,
                Fuel_Type: fuel,
                Date_of_Entry: rwdate

                
            })

                     .then(function () {
                        text.value = "Data Successfully Uploaded";
                        infor.value = "Success"
                        modal.style.display = "block";
        
                        span.onclick = function () {
                            modal.style.display = "none";
                             
                        }
        
                        close.onclick = function () {
                            modal.style.display = "none";
                             
                        }
                        window.onclick = function (event) {
                            if (event.target == modal) {
                                modal.style.display = "none";
                                 
                            }
        
                        }
                     })
.catch(function (error) {
    text.value = "Error Uploading Data";
    infor.value = "Error"
    modal.style.display = "block";

    span.onclick = function () {
        modal.style.display = "none";
         
    }

    close.onclick = function () {
        modal.style.display = "none";
         
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
             
        }

    }
});

var uniqueid = document.getElementById("rwuniqueid");
var paytype = document.getElementById("rwpaytype");
var payuse = document.getElementById("rwpayuse");
var amount = document.getElementById("rwamount");

            document.getElementById("rwprename").value = rwfullname;
            document.getElementById("rwpreaddress").value = post;
            document.getElementById("rwpreres").value = rwresaddress;
            document.getElementById("prereg").value = regnumber;
            document.getElementById("rwprecol").value = rwcolour;
            document.getElementById("rwprebrand").value = rwbuild
            document.getElementById("rwpremodel").value = rwmodel;
            document.getElementById("rwpretype").value = rwtype;
            document.getElementById("rwprechass").value = rwchassis;
            document.getElementById("rwpreaddress").value = post;
            document.getElementById("rwprecount").value = rwcountry;
            document.getElementById("rwpreyear").value = rwyear;
            document.getElementById("rwprewid").value = rwwidth;
            document.getElementById("rwprelen").value = rwlength;
            document.getElementById("rwprehei").value = rwheight;
            document.getElementById("rwprewheels").value = rwtyres;
            document.getElementById("rwpreaxles").value = rwaxles;
            document.getElementById("rwtyres1").value = fronttyre;
            document.getElementById("rwtyres2").value = middletyre;
            document.getElementById("rwtyres3").value = reartyre;
            document.getElementById("rwaxle1").value = frontaxle;
            document.getElementById("rwaxle2").value = middleaxle;
            document.getElementById("rwaxle3").value = rearaxle;
            document.getElementById("prenvw").value = nvw;
            document.getElementById("pregvw").value = gvw;
            document.getElementById("rwload").value = load;
            document.getElementById("rwallow").value = rwpersons;
            document.getElementById("rwengmake").value = enginemake;
            document.getElementById("rwengnum").value = enginenum;
            document.getElementById("rwcyls").value = cyls;
            document.getElementById("rwengsize").value = cc;
            document.getElementById("rwhp").value = hp;
            document.getElementById("rwpreuse").value = rwuse;
            document.getElementById("rwfuel").value = fuel;
            document.getElementById("rwpredate").value = rwdate;
           
            

        };
    });
};
