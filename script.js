const trash = document.querySelector('.trash');
const tree  = document.querySelector('.tree');
var sec = 0;

const jump = () => {
    trash.classList.add('jump');

    setTimeout(() => {
        trash.classList.remove('jump');

    }, 700);
}   

const loop = setInterval(() => {

    const treePosition = tree.offsetLeft;
    const trashPosition = window.getComputedStyle(trash).bottom.replace('px', '');

function timer() {
    sec++;
};
setInterval(timer, 1000);
document.getElementById("count").innerHTML = sec;
    
    window.addEventListener('keypress', (event) => {
        if (event.key === ' ') {
            event.preventDefault();
        }
    })
    
    if (treePosition <= 160 && treePosition > 0 && trashPosition < 256){

        tree.style.animation = "none";
        tree.style.left = `${treePosition}px`

        trash.style.animation = "none";
        trash.style.left = `${trashPosition}px`
    
        trash.src = './sprite/Trash-die.png'
    }

}, 10)

document.addEventListener('keypress', jump);


