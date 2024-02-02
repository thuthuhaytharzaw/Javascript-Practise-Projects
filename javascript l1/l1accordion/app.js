const getacctitle = document.getElementsByClassName("acctitle");
console.log(getacctitle); // HTML Collection
var getacccontent = document.querySelectorAll(".acccontent");
console.log(getacccontent);

for(var x = 0; x < getacctitle.length; x++){
    // console.log(x);

    getacctitle[x].addEventListener("click", function(e) {
        this.classList.toggle('active');
        var getcontent = this.nextElementSibling;
        if(getcontent.style.height){
            getcontent.style.height = null;
        }else{
            getcontent.style.height = getcontent.scrollHeight + 'px';
        }
    });

    if(getacctitle[x].classList.contains("active")){
        getacccontent[x].style.height = getacccontent[x].scrollHeight + 'px';
    }

}
 