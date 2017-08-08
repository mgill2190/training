## ngResource ##

When working with a Restful API in Angular, you need to make a lot of calls most of the time. Using the default $http provider can unnecessarily inflate code. ngResource hides the complexity of interacting of RESTful API's simplicity of ngResource to aid in smaller services and cleaner code. As it returns a resource object that has action methods which provide high-level behaviors without the need to interact with the low level $http service.

For testing purposes we will use [JSONPlaceholder API](http://jsonplaceholder.typicode.com/) (dummy user data)

### Why use ngResource? ###

A common way to interacting with RESTful API is using the AngularJS [$http](https://docs.angularjs.org/api/ng/service/$http) service

```js
var postUsers = $http.get('http://jsonplaceholder.typicode.com/users/')
postUsers.then(function(result) {
    $scope.users = result.data;
});
```

When compared to using the ngResource, the code is cleaner, decoupled and portable (can be injected).

```js
.factory('UserFactory', function ($resource) {
    return $resource('http://jsonplaceholder.typicode.com/users/:user',{user: "@user"});
});

	
$scope.users = UserService.query();
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

Get a single user
```	
UserFactory.get({user: 1});
```

Create a new user
```
UserFactory.save({name: 'Warrant Group', email: 'it@warrant-group.com'});
```

You can always extend the factory for different usecases, as we can change the factory to allow for different HTTP methods or parameters. For example we now require a `update` method which will PUT to the RESTful API
```
.factory('UserFactory', function ($resource) {
      var data = $resource('http://jsonplaceholder.typicode.com/users/:user', {user: '@user'}, {
      update:{
          method:'PUT'
          }
      });
      return data;
  });
...
UserFactory.update({user: 1}, {name: 'Warrant Group', email: 'it@warrant-group.com'});
``
