if(localStorage.getItem('name')){
    window.location='donation.html'
} 



const loginbutton = document.querySelector('#loginbutton')
const loginform = document.querySelector('.login-form');
loginform.addEventListener('submit',(e)=>{
    e.preventDefault()
    const user = loginform.elements.username.value;
    console.log(user)
    checkLogin(user)
 const password = loginform.elements.password.value;
	 console.log(password)
	checkPassword(password)
})

// register form
const registerbutton = document.querySelector('#registerbutton')
const registerform = document.querySelector('.register-form');


registerform.addEventListener("submit", e => {
            e.preventDefault();
            addNewUser();
        });

//sending data to database
function  addNewUser(){
    const payload = {
        username: addNewUser.elements.username.value,
    };
	
  fetch(endpoint, {
        method :"post",
        body: JSON.stringify(payload),
        headers: {
            Accept : "application/json",
            "Content-Type":"application/json"
        }
    })
    .then(res => res.json())
    .then(d => {
        console.log(d);
    })
}
   function getAllUsers() {
            fetch(endpoint)
                .then(res => res.json())
                .then(showAllUsers)
        }

        function showAllUsers(users) {
            users.forEach(showSingleUser)
        }

        function showSingleUser(users) {
            const clone = template.cloneNode(true);
          
            clone.querySelector("p").textContent = users.username;
            root.appendChild(clone);

        }





function checkLogin(username){
    fetch('https://5bff9c6d0296210013dc7df1.mockapi.io/api/v1/users?search='+username)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.length == 0){
			  document.querySelector(".wrong_data").textContent= "Please insert correct data";
            //something is wrong
        } else {
 
            localStorage.setItem('name', data[0].username);
			 localStorage.setItem('FName', data[0].FName);
			 localStorage.setItem('LName', data[0].LName);
            localStorage.setItem('avatar', data[0].avatar);
            localStorage.setItem('id', data[0].id);
            window.location='login.html';
	 
    }})
}


function checkPassword(password){
    fetch('https://5bff9c6d0296210013dc7df1.mockapi.io/api/v1/users?search='+password)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.length == 0){
			  document.querySelector(".wrong_data").textContent= "Please insert correct data";
            //something is wrong
        } else {
 
             window.location='login.html';
	 
    }})
}





$(".message a").on('click',function(){
   $("form").slideToggle(), "slow";
   });
