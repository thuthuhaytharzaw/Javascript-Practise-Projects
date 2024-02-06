const getemail = document.getElementById('emails');
const gettextarea = document.getElementById('textarea');
const getbtn = document.querySelector('.btn');
const getemcontainer = document.querySelector('.email-container');

getemail.addEventListener('keyup',function(e){
    createemaillist(this.value);
});

function createemaillist(inputtext){
    const emitems = inputtext.split(',').filter
};