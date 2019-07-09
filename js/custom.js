

$(document).ready(function() {
	$(".ourwork-buttons .btn").click(function () {
	    $(".ourwork-buttons .btn").removeClass("active");
	    $(this).addClass("active");        
		var showClass = this.id;
		$('.ourWorkImg').addClass('hidden');

		if( showClass == 'all'){
			$('.ourWorkImg').removeClass('hidden');
		}else{
			$('.ourWorkImg.'+showClass).removeClass('hidden');
		} 
		
	});
});

// window.onload=function(){
//   $slideshow = $('.carousel').slick({
//   dots:true,
//   autoplay:true,
//   arrows:true,
//   prevArrow:'<button type="button" class="slick-prev"></button>',
//   nextArrow:'<button type="button" class="slick-next"></button>',
//   slidesToShow:3,
//   slidesToScroll:3
//   });
  
//   $('.slide').click(function() {
//     $slideshow.slick('slickNext');
//   });
// };


function checkEmail() {

    var email = document.getElementById('email');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) 
    {
	    alert('Please provide a valid email address');
	    email.focus;
	    
 	}else
 	{
 		alert("Thank You!!!!!");
 		
 	}
 }

 function checkValiadte()
 {
 	var name = document.getElementById('name').value;

 	var email = document.getElementById('email');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

 	var msg = document.getElementById('msg').value;

 	if ( name === "" || email === "" || msg === "" ) 
 	{
 		alert("Please enter the fields");
 		return false; 		
 	}

 	 if (!filter.test(email.value)) 
    {
	    alert('Please provide a valid email address');
	    email.focus;
	    return false;
	    
 	}else
 	{
 		alert("Thank You!!!!!");
 		
 	}

 }
