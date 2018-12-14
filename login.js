 //if(localStorage.getItem('name')){
 //   window.location='donation.html'
// } 



const loginbutton = document.querySelector('#loginbutton')
const loginform = document.querySelector('.login-form');
loginform.addEventListener('submit',(e)=>{
    e.preventDefault()
    const user = loginform.elements.username.value;
    console.log(user)
    
 const password = loginform.elements.password.value;
	 console.log(password)
	//checkPassword(password)
	checkLogin(user, password)
})


// login form

function checkLogin(username, password){
	
	console.log(username + password)
    fetch('https://5bff9c6d0296210013dc7df1.mockapi.io/api/v1/users?search=' + username)
    .then(res=>res.json())
    .then(data=>{
        console.log("data: ",data)
        if(data[0].username == username && data[0].password == password){
			 
			console.log("test")
	
			     localStorage.setItem('name', data[0].username);
			 localStorage.setItem('FName', data[0].FName);
			 localStorage.setItem('LName', data[0].LName);
            localStorage.setItem('avatar', data[0].avatar);
            localStorage.setItem('id', data[0].id);
             window.location='donation.html'
	 
			
			
            //something is wrong
        } else {
			
			 document.querySelector(".wrong_data").textContent= "Please insert correct data";
 
       
	 
    }})
}



$(".message a").on('click',function(){
   $("form").slideToggle(), "slow";
   });
