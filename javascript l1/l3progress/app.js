var getdownloadbtn = document.querySelector('.download-btn');
// console.log(getdownloadbtn);
var getprogressbar = document.querySelector('.progress-bar');

getdownloadbtn.addEventListener("click",function(){

    getdownloadbtn.setAttribute('disabled',true);
    console.log(getdownloadbtn);
    var setwidth = 0;

    var setinv = setInterval(progressinc,100);

    function progressinc(){
        if(setwidth >= 100){
            clearInterval(setinv)
            setwidth = 0;
        }else{
            setwidth++;

            getprogressbar.style.width = `${setwidth}%`;
            getprogressbar.setAttribute('data-inc',`${setwidth}%`)
        }
    }

});

