let bloc_title=document.querySelector('.bloc_title');
window.addEventListener('scroll',()=>{
    if (pageYOffset>200) {

        bloc_title.style.backgroundColor=' rgb(0, 0, 196)';
        color='black';
        console.log("white");    
    }
    else{
        bloc_title.style.backgroundColor=' rgb(21, 21, 151)';
        console.log("bleu");
    }
})

$('form').on('submit',function(e){
    e.preventDefault();
    var but = $(this).find('[type="submit"]').toggleClass('sending').blur();
    
    setTimeout(function(){
       but.removeClass('sending').blur();
    },4500);
    
  })    