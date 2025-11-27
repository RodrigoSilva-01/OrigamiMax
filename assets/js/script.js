
let bannerImg = document.getElementById('imagensBanner');
function carrossel() {
        let imgans = bannerImg.querySelectorAll('.img')[0];
        bannerImg.appendChild(imgans);

    setTimeout(carrossel, 4000);
}

carrossel(); 


// MENU HAMBÚRGUER
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
});
