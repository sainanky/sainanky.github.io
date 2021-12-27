$(document).ready(function(){
	bindCompanies();
	bindProducts();
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

function bindCompanies(){
	$.getJSON("./json/companies.json", function(result){
		let html = '';
		$.each(result, function(i, v){
			console.log(v)
			if(i == 0){
				html += `<div class="col-md-3 col-sm-6 md-margin-b-4">
					<div class="bg-color-base service" data-height="height">
						<div class="service-element">
							<img class="w-15" src="${v.icon}">
						</div>
						<div class="service-info">
							<h3 class="color-white">${v.name}</h3>
							<h5 class="color-white">${v.position}</h5>
							<p class="margin-b-5 color-white">${v.description}</p>
							<p class="margin-b-5 color-white">
								<b>${v.period}</b><br/>
								<b>${v.position}</b>
							</p>
							<a class="color-white" class="link" href="${v.company_link}" target="_blank">View More</a>
						</div>
						<a href="${v.company_link}" target="_blank" class="content-wrapper-link"></a>    
					</div>
				</div>`;
			}
			else{
				html += `<div class="col-md-3 col-sm-6 md-margin-b-4">
					<div class="service" data-height="height">
						<div class="service-element">
							<img class="w-15" src="${v.icon}">
						</div>
						<div class="service-info">
							<h3 class="">${v.name}</h3>
							<h5 class="">${v.position}</h5>
							<p class="margin-b-5 ">${v.description}</p>
							<p class="margin-b-5 ">
								<b>${v.period}</b><br/>
								<b>${v.position}</b>
							</p>
							<a class="" class="link" href="${v.company_link}" target="_blank">View More</a>
						</div>
						<a class="link" href="${v.company_link}" target="_blank" class="content-wrapper-link"></a>    
					</div>
				</div>`;
			}
		});
		$("#companies_list").html(html);
	});
}

function bindProducts(){
	$.getJSON("./json/products.json", function(result){
		console.log(result)
		let html = '';
		$.each(result, function(i, v){
			html += `<div class="col-sm-4 sm-margin-b-50" style="height: 400px;margin-bottom:5%;">
				<div class="margin-b-20">
					<div>
						<img class="img-responsive" src="${v.img}" alt="${v.company_name}">
					</div>
				</div>
				<h4><a href="#">${v.name}</a></h4>
				<p>${v.description}</p>
				<a class="link" href="${v.link}" target="_blank">Read More</a>
			</div>`;
		});
		$("#products_list").html(html);
	});
}
