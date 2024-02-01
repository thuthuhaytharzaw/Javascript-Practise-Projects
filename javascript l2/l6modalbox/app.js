var getmodalbox= document.getElementById("loginmodal");

var getbtnmodal=document.getElementById("btn-modal");

var getbtnclose= document.querySelector(".btn-close");

getbtnmodal.addEventListener('click',openmodal);
getbtnclose.addEventListener('click',closemodal);

window.onclick = (event) => {
    if(event.target === getmodalbox){
        getmodalbox.style.display = 'none';
    }
};

function openmodal(){
    getmodalbox.style.display = 'block';
};

function closemodal(){
    getmodalbox.style.display = 'none';
}