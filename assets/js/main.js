let alert = document.querySelector(".alert");
let input = document.querySelectorAll(".Input");
alert.className = "alert-danger d-none";
function verifier() {
  for (let i = 0; i < input.length; i++) {
    const e = input[i];
    if (e.value.trim() == "") {
      alert.className = "alert-danger block";
      alert.innerHTML = "Veillez remplir les champs";
    } else {
      alert.className = "alert-danger d-none";
    }
  }
}


function valider() {
  verifier();
  if (alert.value == "") {
    document.querySelectorAll("form").submit();
  }
}