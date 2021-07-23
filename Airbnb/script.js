document.addEventListener("DOMContentLoaded",() => {

    const imgHero = document.querySelector(".hero");

    let i = 0;
    let time = 0;

    const imgs = ["arriba2.jpg","arriba.jpg"];

    setInterval( () => {
        imgHero.style.backgroundPositionY = "-"+time+"px";

        if(time>40) {
            time = 0;
            imgHero.style.backgroundImage = "url(img/"+imgs[i]+")";

            if(i===imgs.length-1) {
                i = 0;
            } else {
                i++;
            }

        }
            time++;
    },100);

    const btnFloat = document.querySelector(".btn-float");
    btnFloat.addEventListener("click", (e) => {
        e.preventDefault();
        const footer = document.querySelector("#footer");

        if(footer.classList.contains("active")) {
            footer.classList.remove("active");
            btnFloat.classList.remove("active");
            btnFloat.innerHTML = "Idioma y moneda";
        } else {
            footer.classList.add("active");
            btnFloat.classList.add("active");
            btnFloat.innerHTML = "X Cerrar";
        }
    })
})