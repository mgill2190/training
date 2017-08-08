## Programming Introduction

It important to have a good understanding and consistently apply the basic fundamentals of programming. We would like you to run through the following courses:

- **Basic Javascript**  
[https://www.codecademy.com/courses/learn-javascript](https://www.codecademy.com/courses/learn-javascript)

- **Intermediate Javascript**  
[https://www.codecademy.com/en/courses/javascript-intermediate-en-2nQQb/0/1](https://www.codecademy.com/en/courses/javascript-intermediate-en-2nQQb/0/1)

- **Advanced Javascript (AngularJS)**  
[https://www.codecademy.com/courses/javascript-advanced-en-2hJ3J/0/1](https://www.codecademy.com/courses/javascript-advanced-en-2hJ3J/0/1)

- **Introduction to JQuery**  
[https://www.codecademy.com/courses/web-beginner-en-bay3D/0/1](https://www.codecademy.com/courses/web-beginner-en-bay3D/0/1)

- **Basic PHP**  
[https://www.codecademy.com/courses/web-beginner-en-StaFQ/0/1](https://www.codecademy.com/courses/web-beginner-en-StaFQ/0/1)

Afterward we can get you on to the backlog on [Pivotal Tracker](https://www.pivotaltracker.com) were you can be assigned to a weekly sprint, and work on a story. Once completed it will be pushed live!

## Resources

Our current stack is as follows

• PHP 7.0.10  
• AngularJS 1.4.7  
• Symfony Framework 3.2  
• Kendo UI 2017  
• MySQL 5.6.28  
• Elasticsearch 1.5.2  
• Amazon Elastic Beanstalk, EC2 and RDS (Production instances)  

We are currently using [PHPStorm IDE](https://www.jetbrains.com/phpstorm/) (download the demo, and request a full license from our team) you can follow some of their getting started video tutorials showcasing all the amazing things it does. Most of the dev team use either docker, vagrant or MAMP PRO to easily manage Apache, MySQL and PHP on our development iMacs/macbooks

You can full reference to development enviroment in [SETUP.md](SETUP.md)

**Backend**

• [PHP Documentation (Language Reference)](http://php.net/manual/en/)  
• [Symfony2 Documentation](https://symfony.com/doc/current/index.html) (Getting Started, Databases (Doctrine ORM), Services, Forms, Event Dispatcher)  
• [Doctrine2 ORM](http://docs.doctrine-project.org/projects/doctrine-orm/en/latest/tutorials/getting-started.html) Getting Started  
• [RESTful API’s with Symfony2](http://williamdurand.fr/2012/08/02/rest-apis-with-symfony2-the-right-way/)  
• [Symfony2 REST API (Best Practice)](http://welcometothebundle.com/symfony2-rest-api-the-best-2013-way) (We use FOSRestBundle, NelmioCorsBundle, Swagger to document the API)  

**Frontend**

• [AngularJS Documentation](https://docs.angularjs.org)  
• [AngularJS Phonecat Tutorial](https://docs.angularjs.org/tutorial)  
• [Kendo UI AngularJS Integration](http://docs.telerik.com/kendo-ui/AngularJS/introduction)  
• [Kendo UI Demos](http://demos.telerik.com/kendo-ui) (Browse the demo code, with particular attention to the AngularJS examples  
• [AngularJS Style Guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md) Opinionated AngularJS style guide for teams, endorsed by Angular team.

## Github

In addition we use [github.com](https://github.com/warrantgroup) and git for source code versioning, create a free github.com account, try creating a repository, have a play committing file, creating branches or merging either on command line or through PHPStorm. 

We follow the [GitHub flow branching model](https://guides.github.com/introduction/flow), which discusses feature branching, and creating pull requests .

## Agile Methodology

We have standups in the morning with all members of the IT department (development and support), it good to know what team is working on, and any blockers can be raised early.

For a typical development feature:

- Pick a story from the sprint backlog on [Pivotal Tracker](https://www.pivotaltracker.com)
- Create a new feature branch from ``develop`` branch, feature branch must include the story ID
- Create pull request on github for code review, or assistance. 
- Once story has been accepted the feature branch can be merged into ``develop`` branch
- Once ``develop`` is stable, we merge to ``master`` branch and CI (continous intergration) teamcity servers automatically deploy to production.
