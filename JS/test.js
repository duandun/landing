(function($){
    window.test = $.fn.test = {
        bindValidate1: function() {
            $.formValidator.initConfig({
                formID:"form1",
                theme:'SolidBox',
                mode:'AutoTip',
                onError:function(msg){
                    alert(msg)
                },
                inIframe: true
            });
            $("#loginName1").formValidator({
                    onShow:"请输入用户名",
                    onFocus:"用户名至少6个字符,最多10个字符",
                    onCorrect:"该用户名可以注册"
                }).inputValidator({
                    min:6,
                    max:10,
                    onError:"你输入的用户名非法,请确认"
                }).regexValidator({
                    regExp:"username",
                    dataType:"enum",
                    onError:"用户名格式不正确"
                });    
        },
        bindValidate2: function() {
            $.formValidator.initConfig({
                    formID:"form2",
                    theme:'SolidBox',
                    mode:'AutoTip',
                    onError:function(msg){
                        alert(msg)
                    },
                    inIframe: true
                });
                $("#loginName").formValidator({
                        onShow:"请输入用户名",
                        onFocus:"用户名至少6个字符,最多10个字符",
                        onCorrect:"该用户名可以注册"
                    }).inputValidator({
                        min:6,
                        max:10,
                        onError:"你输入的用户名非法,请确认"
                    }).regexValidator({
                        regExp:"username",
                        dataType:"enum",
                        onError:"用户名格式不正确"
                    });
        },
        bindValidate3: function() {

        },
        unbindValidate: function() {
            $("#loginName1").unFormValidator(true);
            $("#loginName").unFormValidator(true);
        },

        clearForm: function() {

            $("#form1")[0].reset();
            $("#form2")[0].reset();
        },

    };
})(jQuery);

$(document).ready(function($) {

        $('.tabPanel ul li').click(function(){
            $(this).addClass('hit').siblings().removeClass('hit');
            $('.panes>div:eq('+$(this).index()+')').show().siblings().hide();  
            test.unbindValidate();
            test.clearForm();
            if($(this).attr('id') === 'li2') {
                test.bindValidate1();
            } else {
                $("input[value='mainType']").eq(0).attr("checked", true);
                $("#panel1-2").hide();
                $("#panel1-1").show();
                $("#panel1-1").next().show();
            }
            
         });

        $("input[name='enterpriseType']").click(function() {
            test.unbindValidate();
            test.clearForm();
            if($(this).val() === 'mainType') {               
                $("#panel1-2").hide();
                $("#panel1-1").show();
                $("#panel1-1").next().show();
            } else {
                $("#panel1-1").hide();
                $("#panel1-2").show();
                $("#panel1-1").next().hide();
                test.bindValidate2();
            }
        });

    });