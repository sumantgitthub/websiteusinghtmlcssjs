const menu = document.querySelector('#mobile-menu')
const menulink = document.querySelector('.nav-menu');

menu.addEventListener('click',function() {
menu.classList.toggle('is-active');
menulink.classList.toggle('active');
})

//modal item //
const modal = document.getElementById('email-modal');
const openbtn = document.querySelector('.main-btn');
const closebtn = document.querySelector('.close-btn');

//click-event//
openbtn.addEventListener('click',() => { 
    modal.style.display = 'block'; 
})

closebtn.addEventListener('click',() => {
modal.style.display = 'none';   
})

window.addEventListener('click',(e) => {
    if(e.target == modal) {
        modal.style.display='none';
    } 
})

//form validation//
const form = document.getElementById('#form');
const Name = document.getElementById('#Name');
const email = document.getElementById('#email');
const password = document.getElementById('#password');
const passwordconfirm = document.getElementById('#password-confirm');

//show error massage//
function showError(input,massage) {
    const formValidation = input.parentElement;
    formvalidation.className = 'form-validation error';

    const errorMassage = formValidation.querySelector('p');
    errorMassage.innerText = massage;
}
//show valid
function showValid(input) {
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation valid';
}
//check requried feild//
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if(input.value.trim()=== "") {
            showError(input,`${getFieldName(input)} is required`);
        }else {
            showValid(input);
        }
    });
}
//check input link
function checklength(input , min , max ) {
    if(input.value.length < min) {
        showError(input,`${getFieldName(input)}must be at least ${min} character`);
    }else if (input.value. length > max) {
        showError(input,`${getFeildName(input)} must be less than ${max} character`);
    }else {
        showValid(input);
    }
}
//check password match
function passwordmatch(input1, input2) {
    if(input1.value!= input2.value);
    showError(input2,'password do not match')
}
// getfield name
function getFieldName(input) {
    return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}
//Event listeners
form.addEventListener('submit',(e) => {
    e.preventDefault();
    checkRequired({name,email,password,passwordconfirm});
    checklength(name,3,30);
    checklength(password,8,25);
    checklength(passwordconfirm,8,25);
    passwordMatch(password,passwordconfirm);
})

//image gallary
let gallaryImage=document.querySelectorAll('.services-cell');
let getlatestopenImg;
letwindowWidth=window.innerWidth;

gallaryImage.forEach(function(image, index){
    image.onclick = function() {
        getlatestopenImg = index + 1;

        let container = document.body;
        let newImgwindow = document.createElement('div');
        container.appendChild(newImgwindow);
        newImgwindow.setAttribute('class','img-window');
        newImgwindow.setAttribute('onclick','closeImg()');


        let newImg = image.firstElementChild.cloneNode();
        newImgwindow.appendChild(newImg)
        console.log(newImg)
        newImg.classList.remove('services-cell_img');
        newImg.classList.add('popup-img');
        newImg.setAttribute('id','current-img'); 
        
        newImg.onload = function() {
            let newNextBtn = document.createElement('a');
            newNextBtn.innerHTML = '<i class="fas fa-chevron-right next"></i>';
            newNextBtn.appendChild(newNextBtn);
            newNextBtn.setAttribute('class','img-btn-next');
            newNextBtn.setAttribute('onclick','changeImg(1)');

            let newprevBtn = document.createElement('a');
            newprevBtn.innerHTML = '<i class="fas fa-chevron-right next"></i>';
            newprevBtn.appendChild(newprevBtn);
            newprevBtn.setAttribute('class','img-btn-prev');
            newprevBtn.setAttribute('onclick','changeImg(0)');

        }
    
    }
})

function closeImg() {
    document.querySelector('.img-window').remove();
    document.querySelector('.img-btn-Next').remove();
    document.querySelector('.img-btn-prev').remove();

}


function smoothScroll(target, duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientReact().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition ;
    var startTime = null;


    
function animation(currentTime){
    if(startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed,startPosition,distance,duration);
    widow.scrollTo(0,run);
    if(timeElapsed<duration) requestAnimationFrame(animation);
    }

    function ease(t,b,c,d) {
        t /= d/ 2;
        if(t<1) return c/2 * t * t + b;
        t--;
        return -c/2 *(t*(t-2)-1)+b;
    }
    requestAnimationFrame(animation);
}




var  navmenu = document.querySelector('.nav-link');

navmenu.addEventListener('click',function(){
    smoothScroll('.',1000);
});