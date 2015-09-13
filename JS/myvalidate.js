(function($) {
    window.myvalidate = $.fn.myvalidate = {
        bindValidate1: function() {
            //            $.formValidator.initConfig({
            //                formID: "form1",
            //                theme: 'SolidBox',
            //                mode: 'AutoTip',
            //                onError: function(msg) {
            //                    alert(msg)
            //                },
            //                inIframe: true,
            //                validatorGroup: "1"
            //       
            //            });

            $.formValidator.initConfig({
                formID: "form1",
                theme: 'SolidBox',
                mode: 'AutoTip',
                onError: function(msg) {
                    //alert(msg)
                },
                inIframe: true
            });

            /*$("#loginName1").formValidator({
                onShow:"请输入邮箱",
                onFocus:"邮箱至少6个字符,最多100个字符",
                onCorrect:"恭喜你,你输对了"
            }).inputValidator({
                min:6,
                max:100,
                empty: {
                    emptyError:"邮箱不能为空"
                },
                
                onError:"你输入的邮箱长度非法,请确认"
            }).regexValidator({
                regExp:"^([\\w-.]+)@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.)|(([\\w-]+.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(]?)$",
                onError:"你输入的邮箱格式不正确"
            }).ajaxValidator({
                dataType : "html",
                async : true,
                url : basePath + "member/checkEmail",
                success : function(data){
                    if( data.indexOf("此用户名可以注册!") > 0 ) {
                        return true
                    };
                    return data;
                },
                error: function(jqXHR, textStatus, errorThrown){
                    alert("服务器没有返回数据，可能服务器忙，请重试"+errorThrown);
                },
                onError : "该用户名不可用，请更换用户名",
                onWait : "正在对用户名进行合法性校验，请稍候..."
            });*/

            $("#loginName1").formValidator({
                onShow: "请输入用户名",
                onFocus: "用户名至少6个字符,最多32个字符",
                onCorrect: "该用户名可以注册"
            }).inputValidator({
                min: 6,
                max: 32,
                onError: "你输入的用户名非法,请确认"
            }).ajaxValidator({
                dataType: "html",
                async: true,
                url: basePath + "member/checkLoginName?" + new Date().getTime(),
                success: function(data) {
                    if (data.indexOf("此用户名可以注册!") > 0) {
                        return true;
                    };
                    if (data === 'true') {
                        return true;
                    } else {
                        return false;
                    }
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    alert("服务器没有返回数据，可能服务器忙，请重试" + errorThrown);
                },
                onError: "该用户名不可用，请更换用户名",
                onWait: "正在对用户名进行合法性校验，请稍候..."
            });

            $("#enterpriseName1").formValidator({
                onShow: "请输入企业名",
                onFocus: "企业名最多32个字符",
                onCorrect: "该企业可以注册"
            }).inputValidator({
                min: 2,
                max: 32,
                onError: "你输入的名称非法,请确认"
            });

            $("#mobile1").formValidator({
                onShow: "请输入电话",
                onFocus: "请输入手机号",
                onCorrect: "谢谢你的合作"
            }).inputValidator({
                min: 5,
                max: 11,
                onError: "电话格式不正确,请确认"
            }).regexValidator({
                regExp: "^\\d{5,11}$",
                onError: "电话格式不正确"
            });

            $("#email1").formValidator({
                onShow: "请输入邮箱",
                onFocus: "邮箱至少6个字符,最多100个字符",
                onCorrect: "恭喜你,你输对了"
            }).inputValidator({
                min: 6,
                max: 100,
                onError: "你输入的邮箱长度非法,请确认"
            }).regexValidator({
                regExp: "^([\\w-.]+)@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.)|(([\\w-]+.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(]?)$",
                onError: "你输入的邮箱格式不正确"
            });

            $("#password1").formValidator({
                onShow: "请输入密码",
                onFocus: "至少6个长度",
                onCorrect: "密码合法"
            }).inputValidator({
                min: 6,
                empty: {
                    leftEmpty: false,
                    rightEmpty: false,
                    emptyError: "密码两边不能有空符号"
                },
                onError: "密码不能为空,请确认"
            });

            $("#repassword1").formValidator({
                onShow: "输再次输入密码",
                onFocus: "至少6个长度",
                onCorrect: "密码一致"
            }).inputValidator({
                min: 6,
                empty: {
                    leftEmpty: false,
                    rightEmpty: false,
                    emptyError: "重复密码两边不能有空符号"
                },
                onError: "重复密码不能为空,请确认"
            }).compareValidator({
                desID: "password1",
                operateor: "=",
                onError: "2次密码不一致,请确认"
            });

        },
        bindValidate2: function() {
            $.formValidator.initConfig({
                formID: "form2",
                theme: 'SolidBox',
                mode: 'AutoTip',
                onError: function(msg) {
                    //alert(msg)
                },
                inIframe: true
            });

            $("#loginName2").formValidator({
                onShow: "请输入用户名",
                onFocus: "用户名至少6个字符,最多32个字符",
                onCorrect: "该用户名可以注册"
            }).inputValidator({
                min: 6,
                max: 32,
                onError: "你输入的用户名非法,请确认"
            }).ajaxValidator({
                dataType: "html",
                async: true,
                url: basePath + "member/checkLoginName",
                success: function(data) {
                    if (data.indexOf("此用户名可以注册!") > 0) {
                        return true;
                    };
                    if (data === 'true') {
                        return true;
                    } else {
                        return false;
                    }
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    alert("服务器没有返回数据，可能服务器忙，请重试" + errorThrown);
                },
                onError: "该用户名不可用，请更换用户名",
                onWait: "正在对用户名进行合法性校验，请稍候..."
            });

            $("#enterpriseName2").formValidator({
                onShow: "请输入企业名",
                onFocus: "企业名最多32个字符",
                onCorrect: "该企业可以注册"
            }).inputValidator({
                min: 2,
                max: 32,
                onError: "你输入的名称非法,请确认"
            });

            $("#mobile2").formValidator({
                onShow: "请输入电话",
                onFocus: "请输入手机号",
                onCorrect: "谢谢你的合作"
            }).inputValidator({
                min: 5,
                max: 11,
                onError: "电话格式不正确,请确认"
            }).regexValidator({
                regExp: "^\\d{5,11}$",
                onError: "电话格式不正确"
            });

            $("#email2").formValidator({
                onShow: "请输入邮箱",
                onFocus: "邮箱至少6个字符,最多100个字符",
                onCorrect: "恭喜你,你输对了"
            }).inputValidator({
                min: 6,
                max: 100,
                onError: "你输入的邮箱长度非法,请确认"
            }).regexValidator({
                regExp: "^([\\w-.]+)@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.)|(([\\w-]+.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(]?)$",
                onError: "你输入的邮箱格式不正确"
            });

            $("#password2").formValidator({
                onShow: "请输入密码",
                onFocus: "至少6个长度",
                onCorrect: "密码合法"
            }).inputValidator({
                min: 6,
                empty: {
                    leftEmpty: false,
                    rightEmpty: false,
                    emptyError: "密码两边不能有空符号"
                },
                onError: "密码不能为空,请确认"
            });

            $("#repassword2").formValidator({
                onShow: "输再次输入密码",
                onFocus: "至少6个长度",
                onCorrect: "密码一致"
            }).inputValidator({
                min: 6,
                empty: {
                    leftEmpty: false,
                    rightEmpty: false,
                    emptyError: "重复密码两边不能有空符号"
                },
                onError: "重复密码不能为空,请确认"
            }).compareValidator({
                desID: "password2",
                operateor: "=",
                onError: "2次密码不一致,请确认"
            });

        },
        bindValidate3: function() {
            $.formValidator.initConfig({
                formID: "form3",
                theme: 'SolidBox',
                mode: 'AutoTip',
                onError: function(msg) {
                    //alert(msg)
                },
                inIframe: true
            });

            $("#mobile3").formValidator({
                onShow: "请输入手机号",
                onFocus: "请输入手机号",
                onCorrect: "谢谢你的合作"
            }).inputValidator({
                min: 11,
                max: 11,
                onError: "手机号格式不正确,请确认"
            }).regexValidator({
                regExp: "mobile",
                dataType: "enum",
                onError: "你输入的手机号码格式不正确"
            }).ajaxValidator({
                dataType: "html",
                async: true,
                url: basePath + "member/checkMobile",
                success: function(data) {
                    if (data === 'true') {
                        return true;
                    } else {
                        return false;
                    }
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    alert("服务器没有返回数据，可能服务器忙，请重试" + errorThrown);
                },
                onError: "该手机号不可用，请更换手机号",
                onWait: "正在对手机号码进行合法性校验，请稍候..."
            });

            $("#password3").formValidator({
                onShow: "请输入密码",
                onFocus: "至少6个长度",
                onCorrect: "密码合法"
            }).inputValidator({
                min: 6,
                empty: {
                    leftEmpty: false,
                    rightEmpty: false,
                    emptyError: "密码两边不能有空符号"
                },
                onError: "密码不能为空,请确认"
            });

            $("#repassword3").formValidator({
                onShow: "输再次输入密码",
                onFocus: "至少6个长度",
                onCorrect: "密码一致"
            }).inputValidator({
                min: 6,
                empty: {
                    leftEmpty: false,
                    rightEmpty: false,
                    emptyError: "重复密码两边不能有空符号"
                },
                onError: "重复密码不能为空,请确认"
            }).compareValidator({
                desID: "password3",
                operateor: "=",
                onError: "2次密码不一致,请确认"
            });

        },
        unbindValidate: function() {
            $("#loginName1").unFormValidator(true);
            $("#enterpriseName1").unFormValidator(true);
            $("#mobile1").unFormValidator(true);
            $("#email1").unFormValidator(true);
            $("#password1").unFormValidator(true);
            $("#repassword1").unFormValidator(true);

            $("#loginName2").unFormValidator(true);
            $("#enterpriseName2").unFormValidator(true);
            $("#mobile2").unFormValidator(true);
            $("#email2").unFormValidator(true);
            $("#password2").unFormValidator(true);
            $("#repassword2").unFormValidator(true);

            $("#mobile3").unFormValidator(true);
            $("#password3").unFormValidator(true);
            $("#repassword3").unFormValidator(true);
        },

        clearForm: function() {
            $("#form1")[0].reset();
            $("#form2")[0].reset();
            $("#form3")[0].reset();
        },

    };
})(jQuery);

$(document).ready(function($) {
    //myvalidate.bindValidate1();
    $('.tabPanel ul li').click(function() {
        $(this).addClass('hit').siblings().removeClass('hit');
        $('.panes>div:eq(' + $(this).index() + ')').show().siblings().hide();
        myvalidate.unbindValidate();
        myvalidate.clearForm();
        if ($(this).attr('id') === 'li2') {
            myvalidate.bindValidate2();
        } else {
            $("input[value='mainType']").eq(0).attr("checked", true);
            $("#panel1-2").hide();
            $("#panel1-1").show();
            $("#panel1-1").next().show();
        }
        if ($(this).attr("id") === "li3") {
            myvalidate.bindValidate3();
        }
    });

    $("input[name='enterpriseTypeA']").click(function() {
        myvalidate.unbindValidate();
        myvalidate.clearForm();
        if ($(this).val() === 'mainType') {
            $("#panel1-2").hide();
            $("#panel1-1").show();
            $("#panel1-1").next().show();
        } else {
            $("#panel1-1").hide();
            $("#panel1-2").show();
            $("#panel1-1").next().hide();
            myvalidate.bindValidate1();
        }
    });

    $("#changeImg1").click(function() {
        $("#verificationCodeImg1").attr("src", basePath + "util/captcha?timestamp=" + new Date().getTime());
    });

    $("#changeImg2").click(function() {
        $("#verificationCodeImg2").attr("src", basePath + "util/captcha?timestamp=" + new Date().getTime());
    });
    $("#changeImg3").click(function() {
        $("#verificationCodeImg3").attr("src", basePath + "util/captcha?timestamp=" + new Date().getTime());
    });


    // 验证码
    $("#sendVerifyCode").html("发送验证码");
    $("#sendVerifyCode").next().hide();
    var count = 10;

    function reSendVerify() {
        if ($.formValidator.isOneValid("mobile3")) {
            $.ajax({
                url: basePath + "member/sendVerifyCode?" + new Date().getTime(),
                dataType: "json",
                type: "get",
                data: {
                    loginName: $("#mobile3").val()
                },
                success: function(data) {

                },
                error: function(data) {
                    console.log(data);
                }
            });
            var i = setInterval(function() {
                $("#sendVerifyCode").next().show();
                $("#sendVerifyCode").html("重新发送(" + count + ")");
                $("#sendVerifyCode").css('background-color', 'grey');
                $("#sendVerifyCode").unbind('click', reSendVerify);
                if (count <= 0) {
                    clearInterval(i);
                    $("#sendVerifyCode").bind('click', reSendVerify);
                    $("#sendVerifyCode").css('background-color', '#3388ff');
                    $("#sendVerifyCode").html("发送验证码");
                    count = 10;
                }
                count--;

            }, 1000);
        }

    }

    $("#sendVerifyCode").bind('click', reSendVerify);

});