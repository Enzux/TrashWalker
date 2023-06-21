const trash = document.querySelector('.trash');
const tree  = document.querySelector('.tree');
var sec = 0;
var ticks = 1000;


const jump = () => {
    trash.classList.add('jump');

    setTimeout(() => {
        trash.classList.remove('jump');

    }, 700);
}   

const loop = setInterval(() => {

    const treePosition = tree.offsetLeft;
    const trashPosition = window.getComputedStyle(trash).bottom.replace('px', '');
    
    window.addEventListener('keypress', (event) => {
        if (event.key === ' ') {
            event.preventDefault();
        }
    })
    document.getElementById("count").innerHTML = sec;
    if (treePosition <= 160 && treePosition > 0 && trashPosition < 256){

        tree.style.animation = "none";
        tree.style.left = `${treePosition}px`;

        trash.style.animation = "none";
        trash.style.left = `${trashPosition}px`;
    
        trash.src = './sprite/Trash-die.png';

        clearInterval(cont);
    }

}, 10);

function timer() {
    sec = sec + 50;
};
var cont = setInterval(timer, ticks);

document.addEventListener('keypress', jump);



