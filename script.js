function compare() {
    return password_fields[0].value.localeCompare(password_fields[1].value);
}

const password_fields = document.getElementsByClassName("password-fields");
const form = document.getElementById("sign-up-form");

Array.from(password_fields).forEach(field => {
    field.addEventListener("input", () => {
        if (compare()) {
            Array.from(password_fields).forEach(pwd_fld => {
                pwd_fld.classList.add("mismatch");
            });
        }
        else Array.from(password_fields).forEach(pwd_fld => {
            pwd_fld.classList.remove("mismatch");
        });
    });
});

form.addEventListener("submit", (event) => {
    if (compare())
    {
        event.preventDefault();
        console.log("Passwords do not match!");
    }
    else {
        
    }
});

