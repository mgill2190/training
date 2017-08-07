## Introduction

During the first week of being a new developer, its unfortunately back to basics as having a good understanding of the fundementals of programming languages allows us to tackling any issues early on.

We would like you to run through the following courses:

- **Basic Javascript**  
https://www.codecademy.com/courses/learn-javascript

- **Intermediate Javascript**  
https://www.codecademy.com/en/courses/javascript-intermediate-en-2nQQb/0/2.

- **Advanced Javascript (AngularJS)**  
https://www.codecademy.com/courses/javascript-advanced-en-2hJ3J/0/1#

- **Introduction to JQuery**  
https://www.codecademy.com/courses/web-beginner-en-bay3D/0/1

- **Basic PHP**  
https://www.codecademy.com/courses/web-beginner-en-StaFQ/0/1

## Resources

Our current stack is as follows

• PHP 7.0.10  
• AngularJS 1.4.7  
• Symfony Framework 3.2  
• Kendo UI 2017  
• MySQL 5.6.28  
• Elasticsearch 1.5.2  
• Amazon Elastic Beanstalk, EC2 and RDS (Production instances)  

We are currently using PHPStorm IDE (download the demo, you will get a full license when you start) you can follow some of their getting started video tutorials showcasing all the amazing things it does. Most of the dev team use MAMP PRO to easily manage Apache, MySQL and PHP on our development iMacs/macbooks.

You can full reference to development enviroment in [SETUP.md](SETUP.md)

## Github

In addition we use github.com and git for source code versioning, create a free github.com create a repository, have a play committing files and creating branches either on command line or through PHPStorm. 

We follow the [GitHub flow branching model](https://guides.github.com/introduction/flow), worth looking as it discusses branching, and dealing with pull requests.

- We create start new work in feature branches
- Create pull requests for code review, once accepted feature branches can be merged to ``develop`` branch
- Once ``develop`` is stable, we merge to ``master`` branch and CI (continous intergration) servers automatically deploy.

Backend

• [PHP Documentation (Language Reference)](http://php.net/manual/en/)  
• [Symfony2 Documentation](https://symfony.com/doc/current/index.html) (Getting Started, Databases (Doctrine ORM), Services, Forms, Event Dispatcher)  
• [Doctrine2 ORM](http://docs.doctrine-project.org/projects/doctrine-orm/en/latest/tutorials/getting-started.html) Getting Started  
• [RESTful API’s with Symfony2](http://williamdurand.fr/2012/08/02/rest-apis-with-symfony2-the-right-way/)  
• [Symfony2 REST API (Best Practice)](http://welcometothebundle.com/symfony2-rest-api-the-best-2013-way) (We use FOSRestBundle, NelmioCorsBundle, Swagger to document the API)  

Frontend

• AngularJS Documentation
• AngularJS Phonecat Tutorial
• Kendo UI AngularJS Integration
• Kendo UI Demos (Browse the demo code, with particular attention to the AngularJS examples)
