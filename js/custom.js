/**
 * Created by Mrebero on 21/07/2016.
 */


$('.rating').rating({
    filled: 'glyphicon glyphicon-heart',
    empty: 'glyphicon glyphicon-heart-empty'
});

$('.rate-email').hide();
$('.resto-main-details').hide();

$('.rate-input').click(function(){
    var emailInput = $(this).next('.rate-email');
    emailInput.show('slow');
    emailInput.find('.email-input').focus();
});

$('.email-input').focusout(function(){
    $('.rate-email').hide();
});

$('.resto-details-btn').click(function(){
    $('.resto-main-details').slideDown('slow');
});


