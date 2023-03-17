//template_xyvzuht
//service_l8ysq2r
//6aeod9h4n8krKNy04

let isModalOpen = false;
let contrastToggle = false;

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme";
    }
    else {
        document.body.classList.remove("dark-theme");
    }
}

function contact(event) {
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible";
    event.preventDefault();
    emailjs
        .sendForm(
            'service_l8ysq2r',
            'template_xyvzuht',
            event.target,
            '6aeod9h4n8krKNy04'
        ).then(() => {
            throw new Error("error");
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                 "The email service is temporarily unavailable. Please contact me directly at kaanaygar3223@gmail.com."
            );
        });
}

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}