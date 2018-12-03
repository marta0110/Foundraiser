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
        avatar: registerform.elements.pic.accept
        

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