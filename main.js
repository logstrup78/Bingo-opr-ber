
$('.box').click(function(){
    $(this).toggleClass('box1').toggleClass('box');
});
    
    $('.reset_button').click(function() {
        location.reload();
    });

$('.new_number').click(function(){
    random_number = Math.floor((Math.random(1,90) * 90) + 1) ;
    $('.' + random_number).addClass('box1');
    localStorage.setItem("randomNumber", random_number);


})




