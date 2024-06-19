let form = document.querySelector(".login-form");
const submitFormHandler = (event) => {
    event.preventDefault();
    const formInEvent = event.target;
    const emailValue = formInEvent.elements.email.value.trim();
    const passwordValue = formInEvent.elements.password.value.trim();

    if (emailValue === "" || passwordValue === "") {
        alert('All form fields must be filled in');
        return;
    }
    const outputParams = {
        email: emailValue,
        password: passwordValue
    }
    console.log("Output object : ", outputParams);
    formInEvent.reset();

};

form.addEventListener("submit", submitFormHandler);
