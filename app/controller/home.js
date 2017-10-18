'use strict';
let fs = require('fs');
let path = require('path');
module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      let indexPath = path.resolve(__dirname, '../public/index.html');
      let index = fs.readFileSync(indexPath).toString();
      this.ctx.body = index;
    }
  }
  return HomeController;
};
