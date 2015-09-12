(function($){
	window.signup = $.fn.signup = {
		valideForm1: function() {
			if($.formValidator.pageIsValid()) {
				alert("form1验证成功");
			}
		},
		valideForm2: function() {
			if($.formValidator.pageIsValid()) {
				alert("form2验证成功");
			}
		}
	};
})(jQuery);