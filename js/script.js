/*map slideout*/
var a;
function show_hide() {
    if(a==1) {
        document.getElementById("mySidenav").style.width = "620px";
        return a=0;
    }
    else {
        document.getElementById("mySidenav").style.width = "0";
        return a=1;
    }
}

/*map stuff*/
$(function() {
 
    $('#us2').locationpicker({
       location: {latitude: 25.2048493, longitude: 55.2707828},   
       radius: 0,
       inputBinding: {
          latitudeInput: $('#lat'),
          longitudeInput: $('#lng'),
          locationNameInput: $('#location1')
       },
       enableAutocomplete: true,
    });
     
     
});

/*get values from prev page*/
function passvalues() {
    var pickup = document.getElementById("location1").value;
    var dropoff = document.getElementById("location2").value;
    localStorage.setItem("pickup", pickup);
    localStorage.setItem("dropoff", dropoff);
    return false;
}

/*price setter*/
function price1() {
    document.getElementById("price").innerText = "Price: 25.00 AED";
    localStorage.setItem("vehicle", "SUV");
}

function price2() {
    document.getElementById("price").innerText = "Price: 30.50 AED";
    localStorage.setItem("vehicle", "VAN");
}

/*accordion*/
var coll = document.getElementsByClassName("card");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = '500px';
    } 
  });
}


/*login checker*/
function loginchecker() {
    if (localStorage.getItem("loginkey") == "1") {
      document.getElementById("in").innerText = localStorage.getItem("username1") + " - Sign Out";
      document.getElementById("in").innerText = localStorage.getItem("username2") + " - Sign Out";
    }
}

function signout() {
    if (document.getElementById("in").innerText != "Log In") {
      document.getElementById("in").href = "index.html";
      localStorage.removeItem("loginkey");
    }
}


function logincheckerbook() {
    if (localStorage.getItem("loginkey") == "1" || localStorage.getItem("loginkey") == "2") {
      document.getElementById("submit-btn3").href = "booked.html";
      document.getElementById("submit-btn4").href = "booked.html";
      document.getElementById("confirm-btn").href = "booked.html";
    }
  }

/*datetime slideout*/
var d;
function show_hide1() {
    if(d==1) {
        document.getElementById("datetime").style.width = "300px";
        return d=0;
    }
    else {
        document.getElementById("datetime").style.width = "0";
        return d=1;
    }
}





