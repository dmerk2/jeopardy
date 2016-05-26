//When the document loads this function will happen
$(document).ready(function(){

	//when you click q1 the function below will happen
	$('#q1').on("click", function(){
		//q1 will say this when clicked on
		$("#q1").html("<h4><div id='test'>Coolest kid in class</div></h4>");
		//when click it removes the above event
		$(this).off('click')
	//when clicked the function below will happen	
	$('#test').on("click", function(){
		//q1 will say this when clicked again
		$("#q1").html("<h4>Who is Dan</h4>");
		});
	});

	$('#q2').on("click", function(){
		$("#q2").html("<h4><div id='test'>Matt Kim</div></h4>");
		$(this).off('click')
	$('#test').on("click", function(){
		$("#q2").html("<h4>Who is the Tues/Thurs teacher</h4>");
		});
	});

	$('#q3').on("click", function(){
		$("#q3").html("<h4><div id='test'>Cascading Style Sheet</div></h4>");
		$(this).off('click')
	$('#test').on("click", function(){
		$("#q3").html("<h4>What does CSS stand for</h4>");
		});
	});

	$('#q4').on('click',function(){
		$('#q4').html("<h4><div id = 'test'>Hypertext Markup Language</div></h4>");
		$(this).off('click')
	$('#test').on('click',function(){
		$('#q4').html('<h4>What does HTML stand for</h4>');
		});
	});

	$('#q5').on('click', function(){
		$('#q5').html("<h4><div id = 'test'>A way to make a website interactive</h4>");
		$(this).off('click');
	$('#test').on('click',function(){
		$('#q5').html("<h4>What is Javascript</h4>");
		});
	});
	$('#q6').on('click',function(){
		$('#q6').html("<h4><div id = 'test'>What is Jquery</h4>");
		$(this).off('click');
	$('#test').on('click',function(){
		$('#q6').html("<h4><A library for Javascript</h4>");
		});
	});

	$('#q1r3').on("click", function(){
		$('#q1r3').html("<h4><div id = 'test'>What is Whitley</h4>");
		$(this).off("click");
	$("#test").on("click", function(){
		$('#q1r3').html("<h4>Whose name starts with W</h4>");
		});
	});




});