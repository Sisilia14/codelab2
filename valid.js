function checkForm() {
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var alamatTextarea = document.getElementById("alamat");

  if (
    nameInput.value === "" ||
    emailInput.value === "" ||
    alamatTextarea.value === ""
  ) {
    alert("Anda Harus Mengisi Data Dengan Lengkap!");
  }
}
