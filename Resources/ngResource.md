## ngResource ##

When working with a Restful API in Angular, the application will require a number of calls to various endpoints. Using the default $http provider can unnecessarily inflate code. ngResource hides the complexity of interacting of RESTful API's as it returns a $resource object that has action methods which provide high-level behaviors without the need to interact with the low level $http service. This results in cleaner code, and smaller services.

For testing purposes we will use [JSONPlaceholder API](http://jsonplaceholder.typicode.com/) (dummy user data)

### Why use ngResource? ###

A common way to interacting with RESTful API is using the AngularJS [$http](https://docs.angularjs.org/api/ng/service/$http) service

```js
# Create a user
var postUser = $http.post('http://jsonplaceholder.typicode.com/users', {name: 'Warrant Group', email: 'it@warrant-group.com'})
postUser.then(function(result) {
    $scope.user = result.data;
});

# Get a single user
var getUser = $http.get('http://jsonplaceholder.typicode.com/users/1')
getUsers.then(function(result) {
    $scope.oneUser = result.data;
});

# Get all users
var users = $http.get('http://jsonplaceholder.typicode.com/users')
users.then(function(result) {
    $scope.users = result.data;
});
```

When compared to using the ngResource, the code is cleaner, decoupled and portable (can be injected).

```js
.factory('UserFactory', function ($resource) {
    return $resource('http://jsonplaceholder.typicode.com/users/:user',{user: "@user"});
});

# Create a user
$scope.user = UserFactory.save({name: 'Warrant Group', email: 'it@warrant-group.com'});	
# Get a single user
$scope.oneUser = UserFactory.get({user: 1});
# Get all users
$scope.users = UserFactory.query();

```

The beauty to ngResource is that it returns a $resource object, with the methods below

```
{ 
'get':    {method:'GET'},
'save':   {method:'POST'},
'query':  {method:'GET', isArray:true},
'remove': {method:'DELETE'},
'delete': {method:'DELETE'} 
};
```

You can always extend the factory for different usecases, as we can change the factory to allow for different HTTP methods or parameters. For example we now require a `update` method which will PUT to the RESTful API

```js
.factory('UserFactory', function ($resource) {
      var data = $resource('http://jsonplaceholder.typicode.com/users/:user', {user: '@user'}, {
      update:{
          method:'PUT'
          }
      });
      return data;
  });

UserFactory.update({user: 1}, {name: 'Warrant Group', email: 'it@warrant-group.com'});
```
