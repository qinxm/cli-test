'use strict';

// 引入commander包
import program from 'commander';
import install from './install';
// // 添加加命令 cli-template install
program.command('install') 
  .description('install template').alias('i').action(function () {
    console.log('用户install了');
    install();
  });
program.parse(process.argv);