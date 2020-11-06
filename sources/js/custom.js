//Dropdown Menu Hover Event//

const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";
 
$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});

//Dropdown Menu Mega
$(document).on('click', '.dropdown-menu', function (e) {
    e.stopPropagation();
});

//Inspiration start//


// $('#carousel-speed').carousel({
//   interval: 10000
// })

$('.carousel .carousel-item').each(function(){
    var minPerSlide = 4;
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<minPerSlide;i++) {
        next=next.next();
        if (!next.length) {
        	next = $(this).siblings(':first');
      	}
        
        next.children(':first-child').clone().appendTo($(this));
      }
});

//Inspiration end//