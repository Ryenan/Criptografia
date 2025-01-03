var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    canvas2 = document.getElementById('canvas2'),
    ctx2 = canvas2.getContext('2d'),
    cw = window.innerWidth,
    ch = window.innerHeight,
    charArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    maxCharCount = 100,
    fallingCharArr = [],
    fontSize = 10,
    maxColumns = Math.floor(cw / fontSize);

canvas.width = canvas2.width = cw;
canvas.height = canvas2.height = ch;

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.draw = function(ctx) {
  this.value = charArr[randomInt(0, charArr.length - 1)].toUpperCase();
  this.speed = randomFloat(1, 5);

  ctx2.fillStyle = "rgba(255,255,255,0.8)";
  ctx2.font = fontSize + "px san-serif";
  ctx2.fillText(this.value, this.x, this.y);

  ctx.fillStyle = "#0F0";
  ctx.font = fontSize + "px san-serif";
  ctx.fillText(this.value, this.x, this.y);

  this.y += this.speed;
  if (this.y > ch) {
    this.y = randomFloat(-100, 0);
    this.speed = randomFloat(2, 5);
  }
}

function resizeCanvas() {
  cw = window.innerWidth;
  ch = window.innerHeight;
  canvas.width = canvas2.width = cw;
  canvas.height = canvas2.height = ch;
  maxColumns = Math.floor(cw / fontSize);
  
  fallingCharArr = [];
  for (var i = 0; i < maxColumns; i++) {
    fallingCharArr.push(new Point(i * fontSize, randomFloat(-500, 0)));
  }
}

window.addEventListener('resize', resizeCanvas);

for (var i = 0; i < maxColumns; i++) {
  fallingCharArr.push(new Point(i * fontSize, randomFloat(-500, 0)));
}

var update = function() {
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, cw, ch);

  ctx2.clearRect(0, 0, cw, ch);

  var i = fallingCharArr.length;
  while (i--) {
    fallingCharArr[i].draw(ctx);
  }

  requestAnimationFrame(update);
}

update();

function showModal(title, message) {
    const modal = document.getElementById('custom-alert');
    const modalTitle = document.getElementById('modal-title');
    const modalMessage = document.getElementById('modal-message');
    const okBtn = document.getElementById('modal-ok-btn');

    modalTitle.textContent = title;
    modalMessage.textContent = message;

    modal.style.display = 'flex';

    disablePageInteraction(true);

    function closeModal(){
        modal.style.display = 'none';
        disablePageInteraction(false);
    }

    document.addEventListener('keydown', apertarEnter);

    function apertarEnter(event){
        if (event.key === 'Enter'){
        closeModal();
        }
    };

    okBtn.onclick = function() {
        closeModal();
    };

    window.onclick = function(event) {
        if (event.target == modal) {
        closeModal()
        }
    };

};

function disablePageInteraction(disable) {
    const elements = document.querySelectorAll('input, select, textarea');

    elements.forEach(function(element) {
        element.disabled = disable;
        element.setAttribute('tabindex', disable ? '-1' : '0'); 
    });
}
  
function itemCopy(){
    showModal('', 'Texto copiado');
}

function numeroOrdinal(){
    showModal('Explicação criptografia', )
}

let message = document.getElementById('message');
message.addEventListener('input', (converter, removercaracteres))

function removercaracteres(){
  let message = event.target.value;

  message = message.replace(/[^a-zA-Z0-9\s]/g, '')

  event.target.value = message
}

function converter(){
   
    let result = document.getElementById('result');

    let messageTratada = message.value.toUpperCase();
    let texto = messageTratada.split('');

    const resultado = []

    const Alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q','R','S','T','U','V','W','X','Y','Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'É', 'Ê', 'Á', 'À', 'Ã', 'Â', 'Ó', 'Ô', 'Õ']
    
    for(var i = 0; i < texto.length; i++){
        
        let letra = texto[i];
        let idx = Alphabet.indexOf(letra);
    
        idx = Alphabet.indexOf(letra);

        if(idx < '0'){
            resultado.push(' ');
        } else {
            resultado.push(idx + 1);
        }
    }

    result.innerText = resultado.join('');
}

function copy(){
    result.select();
    document.execCommand('copy')
    window.getSelection().removeAllRanges();
}

