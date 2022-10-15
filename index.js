const inputs = document.querySelectorAll(".check");

const patterns = {
  password: /^[\d\w@-]{8,20}$/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
};

function validate(field, regex) {
  regex.test(field.value)
    ? (field.className = "valid")
    : (field.className = "invalid");
}

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});
