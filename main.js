let textarea = document.getElementById("textarea");

textarea.addEventListener('keydown', (event)=>{
    if(event.shiftKey && event.key.toLowerCase() === "a"){
        console.log("hai premuto shitf + a");
    }
});

let p = document.getElementById("p");
let txtArea = document.getElementById("txtArea");

txtArea.addEventListener('keydown' , (event)=>{
   if(event.key){
    p.textContent += event.key;
   }
});

// es 2

let txt = document.getElementById("mioForm");

// txt.addEventListener('keydown', (event)=>{
//     if(txt.value.trim()==="" && event.key === "Enter"){
//         event.preventDefault();
//         console.log("invio annullato");
//     }else if(txt.value !== ""){
//         console.log("form inviato");
//     }

// });

document.addEventListener("DOMContentLoaded", () => {
    let txt = document.getElementById("nome");
    
    txt.addEventListener('keydown', (event) => {
      if (txt.value.trim() === "" && event.key === "Enter") {
        event.preventDefault(); // Impedisce l'invio del form
        console.log("Il campo è vuoto, invio bloccato.");
      } else if (txt.value.trim() !== "" && event.ctrlKey && event.key === "Enter") {
        console.log("form inviato");
      }
    });
  });

// let ul = document.getElementById("ul");
// let array = [];
// let body = document.getElementById("body");
// fetch("https://jsonplaceholder.typicode.com/users",{
//     method: "GET"
// })
// .then(resp=>resp.json())
// .then(data=>{
//     data.forEach(element => {
//         array.push(element);
//     });
// })

// body.appendChild(array);

// chat gpt :(
document.addEventListener("DOMContentLoaded", () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const userList = document.getElementById("userList");
  
    // Fetch dei dati dall'API
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore durante il fetch");
        }
        return response.json();
      })
      .then((users) => {
        // Itera sugli utenti e crea la lista
        users.forEach((user) => {
          // Crea un elemento <li> per il nome
          const listItem = document.createElement("li");
          listItem.textContent = user.name;
  
          // Crea un elemento <p> per il numero di telefono
          const phone = document.createElement("p");
          phone.textContent = `Telefono: ${user.phone}`;
  
          // Crea un elemento <p> per l'email
          const email = document.createElement("p");
          email.textContent = `Email: ${user.email}`;
  
          // Appendi i dettagli all'elemento <li>
          listItem.appendChild(phone);
          listItem.appendChild(email);
  
          // Appendi <li> alla lista <ul>
          userList.appendChild(listItem);
        });
      })
      .catch((error) => {
        console.error("Errore:", error);
        userList.textContent = "Impossibile caricare la lista utenti.";
      });
  });

//   let promise = new Promise((resolve, reject )=>{
//     let bool = true;
//     if(bool){
//         resolve(console.log("ha funzionato"));
//     }else{
//         reject(console.log("non ha funzionato"));
//     }
//   })
//   .then((result)=>{
//     console.log("caricamento in corso");
//     setTimeout(()=>{
//         console.log("caricamento effettuato");
//     }, 20000)
//   })

function checkEvenNumber(number) {
    return new Promise((resolve, reject) => {
      if (number % 2 === 0) {
        resolve("Successo");
      } else {
        reject("Errore");
      }
    });
  }
  
  // Chiamata alla funzione con .then e .catch
  checkEvenNumber(4)
    .then((message) => {
      console.log(message); // "Successo" se il numero è pari
    })
    .catch((error) => {
      console.error(error); // "Errore" se il numero è dispari
    });
  
  // Esempio con un numero dispari
  checkEvenNumber(3)
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.error(error); // "Errore"
    });