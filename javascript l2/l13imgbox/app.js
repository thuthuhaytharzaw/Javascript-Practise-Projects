const getimgboxes = document.querySelectorAll('.imgbox');
// console.log(getimgboxes);

getimgboxes.forEach(function(getimgbox,idx){
    // console.log(getimgbox);
    // console.log(idx);

    getimgbox.addEventListener('click',function(){
        showbox(idx);
    });
});

function showbox(idx){
    getimgboxes.forEach(function(imagebox,curidx){
        // console.log(idx);
        // console.log(curidx)

        if(idx === curidx){
            imagebox.classList.add('show');

            imagebox.addEventListener('click',function(e){
                if(e.target.className === 'btn-close'){
                    imagebox.classList.remove('show');
                }

                if(e.target.className === 'btn'){
                    const subbtn = getimgboxes[idx].querySelector('.btn');
                    subbtn.textContent = 'Subscribed';
                };
            });
        }else{
            imagebox.classList.remove('show');
        }
    });
}