
$('.box').click(function(){
    $(this).toggleClass('box1').toggleClass('box');
});
    
    $('button').click(function() {
        location.reload();
    });

$('.new_number').click(function(){
    random_number = Math.floor((Math.random(1,90) * 90) + 1) ;
    alert(random_number)
})




