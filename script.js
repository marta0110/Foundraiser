
$(".message a").on('click',function(){
   $("form").slideToggle(), "slow";
   });


//LOCAL STORAGE
// Name and Password from the register-form
const Reg_name = document.getElementById('name');
const Reg_pw = document.getElementById('pw');

// storing input from register-form
function store() {
    localStorage.setItem('name', Reg_name.value);
    localStorage.setItem('pw', Reg_pw.value);
}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    // entered data from the login-form
    var userName = document.getElementById('user_name');
    var userPw = document.getElementById('user_pw');


    //check if stored data from register-form is equal to data from login form
   if(userName.value == storedName && userPw.value == storedPw) {
      alert('You are loged in.');
  }else {
      alert('ERROR.');
 }
 }

