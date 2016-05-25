$(document).ready(function(){

// on('.click', function() {
	$('#q1').on("click", function(){
		$("#q1").html("<h4><div id='test'>Coolest kid in class</div></h4>");
		$(this).off('click')
	$('#test').on("click", function(){
		$("#q1").html("Who is Dan");
		});
	});
});