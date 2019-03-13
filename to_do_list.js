$("ul").on("click", "li", function(){
		$(this).toggleClass("line");
	});
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut( function(){
		$(this).remove();
	});
	event.stopPropagation();
})
$("input").on("keypress", function(event){
	var value = this.value; 

	var e= event.which;
	if(e===13){
		this.value="";
		$("ul").append("<li><span><i class='fa fa-trash'></i> </span> "+ value + "</li>")
	}
		
})