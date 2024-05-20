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
let topMenuLinks = topMenuEl.querySelectorAll('a');
console.log(topMenuLinks);

let subMenuOpen = false;

topMenuLinks.forEach((item) => {
  item.addEventListener(`click`,(event) => {
    event.preventDefault();
    if(event.target.localName != `a`) return;
    
    let lastActive = document.querySelector('a.active');
    if (lastActive) {
      lastActive.classList.remove(`active`);
    }
    event.target.classList.toggle(`active`);

    //open and close the subMenu bar if clicked item has subLinks
    const menuText = event.target.textContent.trim().toLowerCase();
    console.log(menuText);
    // If the ABOUT link is clicked, an <h1>About</h1> should be displayed
    if (menuText == `about`){
      let mainEl = document.querySelector(`main`);
      mainEl.innerHTML = `<h1>About</h1>`;
    }
    
    const menuItem = menuLinks.find(menu => menu.text.toLowerCase() === menuText);
    console.log(menuItem);
    if(menuItem && menuItem.subLinks){
      //if sublinks exist, buildSubmen
      buildSubmenu(menuItem.subLinks);
      console.log(subMenuEl);
      if(!subMenuOpen){
        subMenuEl.style.top = `100%`;
        subMenuOpen = true;
      }else{
        subMenuEl.style.top = `0`;
        subMenuOpen = false;
      }
    } else {
      subMenuEl.style.top = `0`;
      subMenuOpen = false;
    }
  })
})
console.log(topMenuEl);

//part 5 buildSubmenu 
function buildSubmenu(menu) {
  subMenuEl.innerHTML = '';
  menu.forEach((link) =>{
    const subMenu = document.createElement(`a`);
    subMenu.setAttribute(`href`,link.href);
    subMenu.textContent = link.text;
    subMenuEl.appendChild(subMenu);
  });}

console.log(subMenuEl);
//   Attach a delegated 'click' event listener to subMenuEl.

subMenuEl.addEventListener(`click`, (event)=>{
  // The first line of code of the event listener function should call the event object's preventDefault() method.
  event.preventDefault();

  // The second line of code within the function should immediately return if the element clicked was not an <a> element.
  if (event.target.localName !=`a`) return;

  // Log the content of the <a> to verify the handler is working.
  console.log(event.target);
  
  // Next, the event listener should set the CSS top property of subMenuEl to 0.
  subMenuEl.style.top = `0`;

  // Remove the active class from each <a> element in topMenuLinks.
  topMenuLinks.forEach((el) =>{
    el.classList.remove(`active`)});

  // Update the contents of mainEl, within an <h1>, to the contents of the <a> element clicked within subMenuEl.
  const mainEl = document.querySelector(`main`);
  mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
})

