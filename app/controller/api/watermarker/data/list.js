const rq = require('request-promise');
const Controller = require('egg').Controller;

class ListData extends Controller {
	* getListData() {
		const { ctx, service, app } = this;
		
		// ctx.validate(createRule);
		try {
			// const res = yield rq({
			// 	uri: 'http://www.easy-mock.com/mock/59c86bcfe0dc663341b7da3c/ums-ope-pla-web/api/util/upload_profile',
			// 	json: true,
			// });
			console.log('env', app.config.env);
			app.test = 'test';
			ctx.body = {
				code: 0,
				message: '获取用户信息成功',
			};
		} catch (e) {
			ctx.body = {
				code: -300,
				message: '获取用户信息失败',
			};
		}
	}
	
	
	* postListData() {
		const { ctx, service } = this;
		const body = ctx.request.body;
		if (!body.userName || !body.password) {
			return ctx.body = {
				code: 404,
				message: '缺少必要参数',
			};
		}
		// console.log('ctx.model.User', ctx.model.User.insert);
		// console.log('remove', ctx.model.User.remove);
		// console.log('update', ctx.model.User.update);
		// const person = new ctx.model.User({
		// 	userName: body.userName,
		// 	password: body.password,
		// });
		// yield person.save();
		// ctx.body = {
		// 	code: 0,
		// 	message: 'success',
		// };
	}
}

module.exports = ListData;