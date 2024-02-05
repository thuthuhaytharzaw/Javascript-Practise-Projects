const getcheckbox = document.getElementById('toggle-checkbox');
const getchecklabel = document.getElementById('toggle-label');
const getbasic = document.getElementById('basic');
const getprof = document.getElementById('profession');
const getmst = document.getElementById('master');

getcheckbox.addEventListener('click',() => {
    if(getcheckbox.checked){
        getbasic.textContent = 120;
        getprof.textContent = 240;
        getmst.textContent = 360;
    }else{       
        [getbasic.textContent,getprof.textContent,getmst.textContent] = [10,20,30];

    }
});