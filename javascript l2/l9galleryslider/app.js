var getimgs = document.querySelectorAll('.img');
var getmodal = document.querySelector('.modal');
var getmodalimg = document.querySelector('.modal-img');
var getcaption = document.querySelector('.caption');
var getbtnclose = document.querySelector('.btn-close');


for(var x = 0; x < getimgs.length; x++){
    getimgs[x].addEventListener('click',function(){
        shownow(this);
    });
}

function shownow(e){
    getmodal.style.display = 'block';
    getmodalimg.src = e.src;
    getcaption.textContent = e.alt;
}

getbtnclose.onclick = () => {
    getmodal.style.display = 'none';
};

document.onclick = (e) => {
    if (e.target === getmodal){
        getmodal.style.display = 'none';
    }
}