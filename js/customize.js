// 自行加入的JS請寫在這裡

function openNav() {
	document.getElementById("leftSidenav").style.width = "250px";
	document.getElementById("mainC").style.marginLeft = "250px";
}

function closeNav() {
	document.getElementById("leftSidenav").style.width = "0";
	document.getElementById("mainC").style.marginLeft= "0";
}


/*-----------------------------------*/
/////////////modal設定/////////////
/*-----------------------------------*/
$(function() {
    $('#modal1').hide();                                                                //先隱藏視窗
    $('.modal').after('<div class="modal_overlay"></div>');                             //新增透明底
    $('.modal').prepend('<button type="button" class="close">關閉</button>');           //新增關閉按鈕
    $('.modal_overlay').hide();                                                         //隱藏透明底
    //按鈕動作
    $('#openModal').click(function(e) {
    	$('.modal_overlay').fadeIn(100);
    	$('.modal').fadeIn(100);
    	$('body').addClass('noscroll');
    	e.preventDefault();
    });
    //關閉function
    function closeModal(){
    	$('#modal1').hide();
    	$('.modal_overlay').hide();
    	$('body').removeClass('noscroll');
    }
    //點選關閉按鈕及透明底都可關閉
    $('.modal_overlay').click(closeModal);
    $('.modal .close').click(closeModal);

});


/*-----------------------------*/
    /////form表單 placeholder隱藏/////
    /*-----------------------------*/
    $('input,textarea').focus(function() {
        $(this).removeAttr('placeholder');
    });
    $('input[type="checkbox"]').off().click(function(e) {
        $(this).blur();
    });
    /*------------------------------------*/
    /////form表單 單個檔案上傳+多個檔案上傳/////
    /*------------------------------------*/
    $(document).on('change', '.check_file', function() {
        var names = [];
        var length = $(this).get(0).files.length;
        for (var i = 0; i < $(this).get(0).files.length; ++i) {
            names.push($(this).get(0).files[i].name);
        }
        // $('input[name=file]').val(names);
        if (length > 2) {
            var fileName = names.join(', ');
            $(this).closest('.upload_grp').find('.upload_file').attr("value", length + " files selected");
        } else {
            $(this).closest('.upload_grp').find('.upload_file').attr("value", names);
        }
    });

