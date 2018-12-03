const endpointR = "https://5bff9c6d0296210013dc7df1.mockapi.io/api/v1/users";
const registerbutton = document.querySelector('#registerbutton')
const registerform = document.querySelector('.register-form');


registerform.addEventListener("submit", e => {
            e.preventDefault();
            addNewUser();
        });

//sending data to database
function  addNewUser(){
    const payload = {
        FName: registerform.elements.FName.value,
        LName: registerform.elements.LName.value,
        username: registerform.elements.username.value,
        password: registerform.elements.password.value,
        email: registerform.elements.email.value,
		avatar: registerform.elements.pic.value,

    };
	
  fetch(endpointR, {
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



/// user already exists

registerform.addEventListener('submit',(e)=>{
    e.preventDefault()
    const ExistingUser = registerform.elements.username.value;
    console.log(ExistingUser)
	checkUser();
	


function checkUser(ExistingUser){

	fetch('https://5bff9c6d0296210013dc7df1.mockapi.io/api/v1/users?search=' + username)
    .then(res=>res.json())
    .then(data=>{
        console.log("lala")
        if(data.username == username){
			 console.log(data)
			   console.log("lala2")
			 
document.querySelector(".wrong_username").textContent= "This user already exists";
 
        } 
      
    })
}})







