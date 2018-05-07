
  function Add(){
      let name = document.getElementById('fullname').innerHTML = document.myForm.name.value;
      let email = document.getElementById('theEmail').innerHTML = document.myForm.Email.value;
      let phone = document.getElementById('thePhone').innerHTML = document.myForm.phone.value;
      let relationship = document.getElementById('therelation').innerHTML = document.myForm.relation.value;

    }
 // function Book(){
 //   document.getElementByClass('info1').document.removeChild();
 // }
 //
function removeDiv(){
  var eDiv = document.getElementById("info1");
  eDiv.parentNode.removeChild(eDiv);
}

function removeDiv2(){
  var eDiv2 = document.getElementById("info");
  eDiv2.parentNode.removeChild(eDiv2);

}
