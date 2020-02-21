'use strict';

// 引入commander包

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _install = require('./install');

var _install2 = _interopRequireDefault(_install);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// // 添加加命令 cli-template install
_commander2.default.command('install').description('install template').alias('i').action(function () {
  console.log('用户install了');
  // console.log(install());
  (0, _install2.default)();
});
_commander2.default.parse(process.argv);