const texts = [
    'web apps',
    'mobile apps'
];

let index = 0;
let charIndex = 0;
let isDeleting = false;

function changeText() {
    const spanText = document.querySelector('#home h1 span');

    const currentText = texts[index];

    if (!isDeleting) {
        spanText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(changeText, 2000);
            return;
        }
    } else {
        spanText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % texts.length
        }
    }

    const speed = isDeleting ? 50 : 100; 
    setTimeout(changeText, speed);
}

changeText();

const changeButton=document.getElementById("button");
        
function colorChange(){
    const letters="123456789ABCDEF"
    let color="#";
    for(let i=0; i<6; i++){
        color +=letters[Math.floor(Math.random()*16)];
    }
    return color
}

  // function kaan waxa uu inoo qabtay in uu background noo badalo //
function changeBackgroundColor(){
     const rondom=colorChange();
    document.body.style.backgroundColor=rondom;
}
changeButton.addEventListener('click',changeBackgroundColor);


const mouseHover=document.getElementById("mouse-hover")
mouseHover.addEventListener('mouseover',function(){
    mouseHover.textContent='our job'
    mouseHover.style.color='red'
})

mouseHover.addEventListener('mouseout',function(){
    mouseHover.textContent='our work'
    mouseHover.style.color='rgba(21, 143, 143, 0.409)'
})


const nameChange=document.getElementById("name-change")

nameChange.addEventListener('mouseover',function(){
    nameChange.textContent='ABDIKHAALIQ'
})

nameChange.addEventListener('mouseout',function(){
    nameChange.textContent='Dhaqane'
})

const imageChange=document.getElementById("img-1")
imageChange.addEventListener('mouseover',function(){
    
})
    


function task2(){
    setTimeout(()=>{
        console.log("waan soo daahay ")
    },2000)
}


function task1(){
    console.log("task one complete")
}

task2()
task1()