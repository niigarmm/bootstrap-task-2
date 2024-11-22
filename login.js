let passBtn = document.querySelector(".pass");
let input = document.querySelector(".password");

passBtn.onclick = () => {
  if (input.attributes[0].value === "password") {
    input.attributes[0].value = "text";
  }else{
    input.attributes[0].value = "password";
  }
  console.log("TEst");
  
};