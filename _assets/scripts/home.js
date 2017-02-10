$(function() {
	$(".toggle").on("click", function() {
  		$(".toggle").parent().toggleClass('active');
  		if($(".toggle").children().attr("class").split(' ')[1] == "fa-reorder"){
  			$(".toggle").children().attr("class" , "fa fa-times fa-2x")
  			$(".logo")[0].style.display = 'none';
        $("html")[0].style.overflow="hidden";
  		}else if($(".toggle").children().attr("class").split(' ')[1] == "fa-times"){
  			$(".toggle").children().attr("class" , "fa fa-reorder fa-2x")
  			$(".logo")[0].style.display = 'block';
        $("html")[0].style.overflow="scroll";
  		}
	}); 

  $(".link").on("click" , function(){
    if($(".toggle").parent().attr("class").split()[1] === undefined){
      $(".toggle").parent().toggleClass('active');
      $(".toggle").children().attr("class" , "fa fa-reorder fa-2x");
      $(".logo")[0].style.display = 'block';
      $("html")[0].style.overflow="scroll";
    }
  });
});