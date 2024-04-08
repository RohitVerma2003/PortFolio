document.addEventListener("mousemove", parallax)
function parallax(event) {
    this.querySelectorAll(".mouse").forEach((shift) => {
        const position = shift.getAttribute("value");
        const x = (window.innerWidth - event.pageX * position) / 90;
        const y = (window.innerHeight - event.pageY * position) / 90;

        shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        const nav = document.getElementsByClassName("navbar")[0].classList.add("navbarBlur");
    } else {
        document.getElementsByClassName("navbar")[0].classList.remove("navbarBlur");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const skills = ["developer", "problem_solver", "dsa", "freelancer"];
    typeWrite(0)
    let index = 0;
    setInterval(function () { typeWrite(++index % 4) }, 5000);

    function typeWrite(index) {
        let typePara = document.getElementById("typewrite");
        let str = skills[index];
        var i = 0;
        typePara.innerText = '';
        typeWriter();

        function typeWriter() {
            if (i < str.length) {
                typePara.innerText += str.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
    }



    const links = document.querySelectorAll(".navbar a");
    console.log(links)

    for (const link of links) {
        link.addEventListener("click", clickHandler);
    }

    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    }
});


function sendEmail() {
    let name = document.getElementById("form_name").value;
    let email = document.getElementById("form_email").value;
    let message = document.getElementById("form_message").value;

    Email.send({
        SecureToken: 'b59a7d15-c94f-46bf-a9a4-254f130ce90c',
        To: 'rvermajio78300@gmail.com',
        From: 'rvermajio78300@gmail.com',
        Subject: name,
        Body: email + " : " +message
    }).then(
        message => alert(message)
    );
}
