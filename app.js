
let navbar =  document.querySelector('.header  .navbar');

// let btnClick = document.querySelector('.btn');

// btnClick.onclick = () => {
//      alert("huuu");
// }

document.querySelector('#menu-btn').onclick  = () => {
     navbar.classList.toggle('active');
}
// ! about script

document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn => {
     btn.onclick = () => {
          let src = btn.getAttribute('data-src');
          document.querySelector('.about .video-container .video').src = src;
     }
})