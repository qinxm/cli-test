'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ora = require('ora');

var _ora2 = _interopRequireDefault(_ora);

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

require('babel-polyfill');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } //ora 一个命令行loading效果
//命令行交互
// 运行shell脚本


// 

var install = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var loading, answer, projectName;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        loading = (0, _ora2.default)('fetching template......');
                        _context.next = 3;
                        return _inquirer2.default.prompt([{
                            type: 'input', //你可以输入你自己的名称
                            name: 'projectName',
                            message: '项目名称',
                            default: 'vue-template-ts' //默认名
                        }]);

                    case 3:
                        answer = _context.sent;

                        // 项目名字
                        projectName = answer.projectName;

                        loading.start();
                        _shelljs2.default.exec('git clone git@github.com:qinxm/vueTsMockTemplate.git ' + projectName);
                        loading.succeed();
                        _shelljs2.default.exit(1);

                    case 9:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function install() {
        return _ref.apply(this, arguments);
    };
}();
exports.default = install;