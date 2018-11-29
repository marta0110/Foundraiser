window.addEventListener("load", initList);

const endpoint = "https://5bff9c6d0296210013dc7df1.mockapi.io/api/v1/users"

function initList() {
    console.log("Init list");
    listUsers();
  
}

function listUsers() {

fetch(endpoint, {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => {
      
        data.forEach( createUserInfo );

console.log(data);
    });
}

function createUserInfo( userData ) {
    const clone = document.querySelector("#userinfo").content.cloneNode(true);

    clone.querySelector("[data-username]").textContent = userData.username;
  //  clone.querySelector("[data-id]").dataset.userid = userData.id;
    clone.querySelector("[data-password]").textContent = userData.password;

    document.querySelector("#userlist").appendChild(clone);
}

