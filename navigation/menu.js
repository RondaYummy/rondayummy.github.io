let leftNav = document.querySelector('ul').children;
let images;
let linkR = document.querySelector('.right-nav-bar').children;

for(let navigations = 0; navigations <= linkR.length; navigations++){
   for(images = 0; images <= navigations; images++){
      leftNav[navigations].addEventListener('mouseover', (event) => {
         linkR[navigations].children[images].style.opacity= '0.8';
         linkR[navigations].children[images+1].style.opacity= '0.8';
         linkR[navigations].children[images+2].style.opacity= '0.8';
      });
      leftNav[navigations].addEventListener('mouseout', (event) => {
         linkR[navigations].children[images].style.opacity= '0.2';
         linkR[navigations].children[images+1].style.opacity= '0.2';
         linkR[navigations].children[images+2].style.opacity= '0.2';
      });
   }
}



