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
    let billy = new Contact("billy", "billy@gmail.com", "180-234-billy", "childhood friend");
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
// console.log(book.contacts);
// book.Add();
// console.log(book.contacts);

while(true){
  let input = prompt("do you wish to add(a) or quit(q) delete(d) or print(p)?");
  if(input === "a"){
    book.Add();
  }
  else if(input === "q"){
    console.log("goodbye");
    break;
  }else if(input === "p"){
    console.log(book.contacts);
    break;
  }
  else if(input === "d"){
    let choice = prompt("What item would you like to remove? EX:1,2,3..?")
    book.contacts.splice(2, choice);
    console.log(book.contacts);
    break;

  }
  else{
    console.log("sorry i dont understand you!");
    console.log("try again");
  }
}
