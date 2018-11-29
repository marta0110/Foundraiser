if(localStorage.getItem('name')){
    window.location='index.html'
}




const loginbutton = document.querySelector('#loginbutton')
const loginform = document.querySelector('.login-form');
loginform.addEventListener('submit',(e)=>{
    e.preventDefault()
    const user = loginform.elements.username.value;
    console.log(user)
    checkLogin(user)
    
})

function checkLogin(username){
    fetch('https://5bff9c6d0296210013dc7df1.mockapi.io/api/v1/users?search='+username)
    .then(res=>res.json())
    .then(data=>{
        //console.log(data)
        if(data.length == 0){
            //something is wrong
        } else {
 
            localStorage.setItem('name', data[0].username);
            localStorage.setItem('avatar', data[0].avatar);
            localStorage.setItem('id', data[0].id);
            window.location='index.html'

        }
    })
}