const endpoint = "https://5bfd717f827c3800139ae958.mockapi.io/donationdatabase";
const template = document.querySelector("#templateDonation").content;
const root = document.querySelector("main");
const addDonation = document.querySelector("#addNewDonation");

getAllDonations();
setHeader();

addDonation.addEventListener("submit", e => {
            e.preventDefault();
            addItem();
        });

//sending data to database
function addItem (){
    const payload = {
        firstname: addDonation.elements.firstname.value,
        lastname: addDonation.elements.lastname.value,
        amount: addDonation.elements.amount.value,
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


        function getAllDonations() {
            fetch(endpoint)
                .then(res => res.json())
                .then(showAllDonations)
        }

        function showAllDonations(items) {
            items.forEach(showSingleDonation)
        }

        function showSingleDonation(item) {
            const clone = template.cloneNode(true);
          
            clone.querySelector("p").textContent = item.amount;
            root.appendChild(clone);

        }

function setHeader() {
  var UserName = localStorage.name;
  var UserImage = localStorage.avatar;

console.log(localStorage);
    console.log(localStorage.name);
        console.log(localStorage.avatar);
    
    
  document.querySelector('#UserName').textContent = "Hi " + UserName;
    
  document.getElementById('img').setAttribute("src", UserImage)

}