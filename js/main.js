$(document).ready(function(){
	$('#btnContactMe').on('click',function(){
		var name = $('#txtName').val();
		var email = $('#txtEmail').val();
		var mobile = $('#txtMobile').val();
		var message = $('#txtMessage').val();

		var flag = false;
		if (mobile == "") {
			$('#txtMobile').focus();
			messageAction('error','mobile');
            flag = true;
        }
		if (email == "") {
			$('#txtEmail').focus();
			messageAction('error','email');
            flag = true;
        }
		if (name == "") {
			$('#txtName').focus();
			messageAction('error','full name');
            flag = true;
        }

        var postData = {
        	name : name,
        	email : email,
        	mobile : mobile,
        	message : message,
        	operation : 'contact'
        }

        $.post("controllers/main.php", postData, function (txt) {
        	$('.form-control').val('');
        	messageAction("success","I've recieved your message.i'll get back you soon.Thanks");
		});
	});
});	

function messageAction(type,val){
	var message = "";
	if(type == 'error'){
		message = "Please enter " + val;
		$('#messageBox').addClass('error');
	}
	else{
		message = val;
		$('#messageBox').addClass('success');
	}
	$("#messageBox").text(message);
    $("#messageBox").show().delay(2000).fadeOut(2000);
}