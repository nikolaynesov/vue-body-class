# vue-body-class
Control your page body classes with vue-router easily

## Dependencies
vue.js 2.x
vue-router 2.x

## Installation

npm install vue-body-class --save

## Get started

```js
import vbclass from 'vue-body-class'
Vue.use( vbclass, { router } )
```

### Set Up classes

Just add bodyClass property to route object in your vue-router routes.

```js
name: 'dashboard',
path: '/dashboard',
bodyClass: 'dashboard',
...
```

For child routes, all parent classes will be applied too.

```js
name: 'dashboard',
path: '/dashboard',
bodyClass: 'dashboard',
component: dashboard,
children: [

    {
        name: 'dashboard.profile',
        path: 'profile',
        bodyClass: 'profile',
        component: profile
    },
    
    ...

]
```

will result in 

```
class = 'dashboard profile'
```

You can overwrite parent classes by adding '!' at the beginning of the class:
```js
name: 'dashboard',
path: '/dashboard',
bodyClass: 'dashboard',
component: dashboard,
children: [

    {
        name: 'dashboard.profile',
        path: 'profile',
        bodyClass: '!profile',
        component: profile
        children: [
        
            {
                name: 'dashboard.profile.personal',
                path: 'personal',
                bodyClass: 'personal',
                component: personal
            },
            
            ...
        
        ]
    },
    
    ...

]
```
will result in 

```
class = 'profile personal'
```

as '!profile' overwrites 'dashboard' class.

The plugin will save your original body classes and new classes will be appended.



