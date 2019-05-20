
let avatar = document.getElementById('avatar');
let first = document.getElementById('detail');
let second = document.getElementById('actualdetail');
let third = document.getElementById('actualdetail2');
let fourth = document.getElementById('actualdetail3');
let fifth = document.getElementById('actualdetail4');
let sixth = document.getElementById('actualdetail5');
let seventh = document.getElementById('actualdetail6');
//let third = document.getElementById('actualdetail5');




  const url = 'https://randomuser.me/api/?results=1';

  function getfullName()
  {
  fetch(url)
  .then(response => response.json())
  .then(json => {


    first.innerHTML = "Hi, My Name is";

    second.innerHTML = json.results[0].name.first + " " + json.results[0].name.last;
    third.innerHTML = json.results[0].email;

    var date = new Date(json.results[0].dob.date);
var properlyFormatted =  ("0" + date.getDate()).slice(-2) + "/" +("0" + (date.getMonth() + 1)).slice(-2)  + "/" + date.getFullYear();
fourth.innerHTML = properlyFormatted;

fifth.innerHTML = json.results[0].location.street;
sixth.innerHTML = json.results[0].cell;
seventh.innerHTML = json.results[0].login.password;



    avatar.src = json.results[0].picture.medium;


    console.log(json.results[0].name.first + " " + json.results[0].name.last);
  });


  }

function show(id) {
    document.getElementById(id).style.visibility = "visible";
  }
  function hide(id) {
    document.getElementById(id).style.visibility = "hidden";
  }



function getEmail()
  {

    first.innerHTML = "My email address is";


  }

  function getName()
  {

    first.innerHTML = "Hi, My Name is";


  }


function getBirthday()
{
  first.innerHTML = "My Birthday Is";
}



function getAddress()
{
first.innerHTML = "My Address is";
}

function getPhone()
{
  first.innerHTML = "My phone number is";

}



function getPassword()
{
  first.innerHTML = "My password is";
}



