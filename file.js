var bar = document.getElementById('bar');
var close1 = document.getElementById('close');
 nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
    
}
if (close1) {
    close1.addEventListener('click', () => {
          nav.classList.remove('active');
      });
      
  }