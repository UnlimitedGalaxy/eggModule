'use strict';

module.exports = app => {
  app.get('/api/watermarker/data/list', app.controller.api.watermarker.data.list.getListData);
  app.post('/api/watermarker/data/creation', app.controller.api.watermarker.data.list.postListData);
  app.get('/api/watermarker/test/acquire', app.controller.api.watermarker.test.index.getAppData);
  app.get('/api/v2/topics', app.controller.api.v2.topics.getTopics);
  app.get('/api/v2/topics/:id', app.controller.api.v2.topics.getTopic);
  app.post('/api/v2/topics', app.controller.api.v2.topics.postTopic);
  app.post('/api/v2/topics/:id', app.controller.api.v2.topics.updateTopic);
  
	app.options('*', function* (){
		this.status = 200;
	})
};
