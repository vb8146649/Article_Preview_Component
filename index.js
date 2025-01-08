const button = document.querySelector("button");
const cardfooter = document.getElementById("crdft");
const share = document.getElementById("share");
const pointer = document.getElementById("pointer");

button.addEventListener('click', function (e) {
    if(share.classList.contains("hidden")){
        share.classList.replace("hidden","flex");
        pointer.classList.replace("md:hidden","md:block");
    }else{
        share.classList.replace("flex","hidden");
        pointer.classList.replace("md:block","md:hidden");
    }
});
