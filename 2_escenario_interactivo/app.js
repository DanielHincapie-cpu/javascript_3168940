(function(){
const g = document.getElementById('g');
const scoreEl = document.getElementById('score');
const resetBtn = document.getElementById('reset');
const msg = document.getElementById('msg');
const final = document.getElementById('final');

let score = 0;
let clicks = 0;
const maxClicks = 12; 

function updateScore(){
scoreEl.textContent = 'Puntos: ' + score;
}

const targets = Array.from(g.querySelectorAll('.c'));
targets.forEach(t => {
t.addEventListener('click', e => {
if (t.dataset.disabled === '1') return;

const pts = Number(t.dataset.points) || 5;
score += pts;
clicks += 1;
updateScore();

t.classList.add('hit');
t.style.opacity = '0.5';

t.dataset.disabled = '1';
setTimeout(() => {
t.classList.remove('hit');
t.style.opacity = '1';
t.dataset.disabled = '0';

const padding = 20;
const maxX = g.clientWidth - t.clientWidth - padding;
const maxY = g.clientHeight - t.clientHeight - padding;
const nx = Math.floor(Math.random() * (maxX - padding)) + padding;
const ny = Math.floor(Math.random() * (maxY - padding)) + padding;
t.style.left = nx + 'px';
t.style.top = ny + 'px';
}, 450);



if (clicks >= maxClicks) {
endGame();
}
});
});

function endGame(){
final.textContent = score;
msg.classList.add('show');

targets.forEach(t => t.dataset.disabled = '1');
}

resetBtn.addEventListener('click', () => {

score = 0;
clicks = 0;
updateScore();
msg.classList.remove('show');
document.querySelector('.c1').style.left = '40px';
document.querySelector('.c1').style.top = '120px';
document.querySelector('.c2').style.left = '90px';
document.querySelector('.c2').style.top = (g.clientHeight - 40 - 90) + 'px'; 
document.querySelector('.c3').style.right = '90px';
document.querySelector('.c3').style.top = '40px';
document.querySelector('.c4').style.right = '40px';
document.querySelector('.c4').style.top = (g.clientHeight - 80 - 90) + 'px';

targets.forEach(t => t.dataset.disabled = '0');
});


updateScore();



window.addEventListener('resize', () => {

targets.forEach(t => {
const rect = t.getBoundingClientRect();
if (rect.right > g.clientWidth) t.style.left = (g.clientWidth - t.clientWidth - 16) + 'px';
if (rect.bottom > g.clientHeight) t.style.top = (g.clientHeight - t.clientHeight - 16) + 'px';
});
});
})();