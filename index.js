const button = document.querySelector("button");
const share = document.getElementById("share");
const pointer = document.getElementById("pointer");

button.addEventListener('click', function (e) {
    if(share.classList.contains("hidden")){
        share.classList.replace("hidden","flex");
        share.querySelector('input, button, a').focus();
        pointer.classList.replace("lg:hidden","lg:block");
        button.setAttribute('aria-expanded',true);
        share.hidden=false;
        button.classList.replace("bg-[hsl(210,46%,95%)]","bg-[#6E8098]");
        button.children[0].classList.replace("fill-[#6E8098]","fill-white");
    }else{
        share.hidden=true;
        share.classList.replace("flex","hidden");
        pointer.classList.replace("lg:block","lg:hidden");
        button.setAttribute('aria-expanded',false);
        button.classList.replace("bg-[#6E8098]","bg-[hsl(210,46%,95%)]");
        button.children[0].classList.replace("fill-white","fill-[#6E8098]");
    }
});

