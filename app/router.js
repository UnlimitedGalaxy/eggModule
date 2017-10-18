'use strict';

module.exports = app => {
  app.get('/', app.controller.api.watermarker.data.list);
};
