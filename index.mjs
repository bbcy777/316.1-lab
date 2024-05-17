//Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

//Part 1
let mainEl = document.getElementsByTagName(`main`);
mainEl[0].style.backgroundColor = "var(--main-bg)";
mainEl[0].innerHTML = "<h1>DOM Manipulation</h1>";
mainEl[0].classList.toggle('flex-ctr');

//Part 2
let topMenuEl = document.getElementById(`top-menu`);
// console.log(topMenuEl);
topMenuEl.style.height = "100%";
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


//316.3.1 Part 3
const subMenuEl = document.getElementById(`sub-menu`);
subMenuEl.style.height = `100%`;
subMenuEl.style.backgroundColor = `var(--sub-menu-bg)`;
subMenuEl.classList.toggle(`flex-around`);
subMenuEl.style.position = `absolute`;
subMenuEl.style.top = `0`;

//part 4 Adding Menu Interaction
let topMenuLinks = document.querySelectorAll('a');
console.log(topMenuLinks);

topMenuEl.addEventListener(`click`, (event)=>{
    event.preventDefault();
    console.log(event);
    console.log(event.target);
    if(event.target != `a`) return;
    event.target.classList.toggle(`active`)
})