//Menu data structure
var menuLinks = [
    { text: 'about', href: '/about'},
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },  
];

//Part 1
let mainEl = document.getElementsByTagName(`main`);
mainEl[0].style.backgroundColor = "var(--main-bg)";
mainEl[0].innerHTML = "<h1>DOM Manipulation</h1>";
mainEl[0].classList.toggle('flex-ctr');

//Part 2
let topMenuEl = document.getElementById(`top-menu`);
// console.log(topMenuEl);
topMenuEl.style.height = "100%"
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.toggle("flex-around");

//Part 3
for (let i = 0; i < menuLinks.length; i++){
    const link = document.createElement(`a`);
    let attributeValue = menuLinks[i].href;
    link.setAttribute(`href`,attributeValue);
    link.textContent = menuLinks[i].text;
    topMenuEl.appendChild(link);
}
// menuLinks.forEach((link) => {
//     let newLink = document.createElement(`a`);
//     newLink.setAttribute(`href`, link.href);
//     newLink.textContent = link.text;
//     topMenuEl.appendChild(newLink);
// })