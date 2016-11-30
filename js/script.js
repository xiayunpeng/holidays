	$('#hotelCarTabs a').click(function (e) {
		$(this).tab('show')
	});

	$('.submit-btn').click(function(event) {
		var flag = confirm('是否确定提交');
		if(flag)
			alert('抱歉，目前不支持此功能');
	});

	
