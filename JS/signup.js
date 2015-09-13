(function($) {
	window.signup = $.fn.signup = {

		valideForm1: function() {
			if ($("#form1").valid()) {
				alert("form1验证成功");
				var roleCode = 'ROLE_NO_TAX';
				$.ajax({
					url: basePath + "member/insertMember?" + new Date().getTime(),
					dataType: "json",
					type: "post",
					data: {
						loginName: $("#loginName1").val(),
						enterpriseName: $("#enterpriseName1").val(),
						mobile: $("#mobile1").val(),
						email: $("#email1").val(),
						password: $("#password1").val(),
						roleCode: roleCode
					},
					success: function(data) {
						var result = data.result;
						if (result === 'success') {
							window.location.replace(basePath + "member/registerSuccess?" + new Date().getTime());
						} else {
							$.jBox.error("注册失败！");
						}
					},
					error: function(data) {
						console.log(data);
						$.jBox.error("注册失败！");
					}
				});
			}
		},

		valideForm2: function() {
			if ($("#form2").valid()) {
				//if($.formValidator.pageIsValid() && $("#form2").valid()) {
				alert("form2验证成功");
				var roleCode = $("#panel2 input[name='enterpriseTypeB2']:checked").val();
				$.ajax({
					url: basePath + "member/insertMember?" + new Date().getTime(),
					dataType: "json",
					type: "post",
					data: {
						loginName: $("#loginName2").val(),
						enterpriseName: $("#enterpriseName2").val(),
						mobile: $("#mobile2").val(),
						email: $("#email2").val(),
						password: $("#password2").val(),
						roleCode: roleCode
					},
					success: function(data) {
						var result = data.result;
						if (result === 'success') {
							window.location.replace(basePath + "member/registerSuccess?" + new Date().getTime());
						} else {
							$.jBox.error("注册失败！");
						}
					},
					error: function(data) {
						console.log(data);
						$.jBox.error("注册失败！");
					}
				});
			}
		},
		
		valideForm3: function() {
			var accept = $("#form3 input[name='accept']").eq(0).attr("checked");
			if ($("#form3").valid() && accept) {
				//	if($.formValidator.pageIsValid() && $("#form3").valid() && accept) {
				alert("form3验证成功");

				var roleCode = "ROLE_SOCIAL_PUBLIC";
				$.ajax({
					url: basePath + "member/insertMember?" + new Date().getTime(),
					dataType: "json",
					type: "post",
					data: {
						mobile: $("#mobile3").val(),
						password: $("#password3").val(),
						roleCode: roleCode
					},
					success: function(data) {
						var result = data.result;
						if (result === 'success') {
							window.location.replace(basePath + "member/registerSuccess?" + new Date().getTime());
						} else {
							$.jBox.error("注册失败！");
						}
					},
					error: function(data) {
						console.log(data);
						$.jBox.error("注册失败！");
					}
				});
			}
		},
	};
})(jQuery);