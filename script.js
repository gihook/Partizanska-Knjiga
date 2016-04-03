$(document).ready(function() {
    $(".navigation-item").hover(onNavigationItemMouseEnter, onNavigationItemMouseLeave);
});

function onNavigationItemMouseEnter(){
	$(this).removeClass("navigation-item").addClass("active");
}

function onNavigationItemMouseLeave(){
	$(this).removeClass("active").addClass("navigation-item");
}
