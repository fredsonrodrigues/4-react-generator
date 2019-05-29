'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the ultimate ${chalk.red('generator-4-react')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'projectTitle',
        message: 'Whats the project name?',
        default: this.appname
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
      //Public Folder
      this.fs.copy(
        this.templatePath('public'),
        this.destinationPath('public')
      );

      //src Folder
      this.fs.copy(
        this.templatePath('src'),
        this.destinationPath('src')
      );

      //Root Files
      this.fs.copy(
        this.templatePath('package.json'),
        this.destinationPath('package.json')
      );
      this.fs.copy(
        this.templatePath('.gitignore'),
        this.destinationPath('.gitignore')
      );
      this.fs.copy(
        this.templatePath('README.md'),
        this.destinationPath('README.md')
      );

  }

  install() {
    this.npmInstall()
  }
};
