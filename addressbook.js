class Contact {
  constructor(name, email, phone, relationship){
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relationship = relationship;

  }

}



class Addressbook {
  constructor(){
    this.contacts = [];
    let tomas = new Contact("jimmy", "jymmy@email.com", "432-234-3456", "friend");
    this.contacts[0] = tomas;
    let billy = new Contact("billy", "billy@gmail.com", "180-234-billy", "child hood friend");
    this.contacts[1] = billy;

    }

   Add(){
    let name = prompt("enter your name?");
    let email = prompt("enter your email?");
    let phone = prompt("enter phone number?");
    let relationship = prompt("what is your relationship");

    let newFriend = new Contact(name,email,phone,relationship);
    this.contacts.push(newFriend);
  }
}
let book = new Addressbook();
console.log(book.contacts);
// book.Add();
// console.log(book.contacts);

while(true){
  let input = prompt("do you wish to add(a) or quit(q)?");
  if(input === "a"){
    book.Add();
  }
  else if(input === "q"){
    console.log("goodbye");
    break;
  }
  else{
    console.log("sorry i dont understand you!");
    console.log("try again");
  }
}
