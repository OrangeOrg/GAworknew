layui.use(['form', 'element'], function() {
	var $ = layui.$,
		setter = layui.setter,
		form = layui.form,
		router = layui.router(),
		search = router.search;
	var layer = layui.layer;
	var element = layui.element;

	form.render();

	//提交
	form.on('submit(LAY-user-login-submit)', function(obj) {
		if(obj.field.vercode === show_num.join("")) {
			if(obj.field.username === 'admin' || obj.field.username.password === '123456') {
				layer.msg('登陆成功', {
					offset: '15px',
					icon: 0,
					time: 1000
				}, function() {
					var userInfo={
						username:obj.field.username,
						role:'管理员'
					}
					document.cookie = obj.field.username
					window.userinfo=userInfo
					window.location.href = './mainPage/mainPage.html'
					

				});
			} else {
				layer.msg('用户名或者密码错误', {
					offset: '15px',
					icon: 0,
					time: 1000
				}, function() {

				});
			}
		} else {
			layer.msg('验证码错误', {
				offset: '15px',
				icon: 0,
				time: 1000
			}, function() {

			});
		}
	});

});