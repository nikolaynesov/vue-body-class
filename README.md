# vue-body-class

Control your page body classes with vue-router easily:

+ add classes to parent and children routes
+ add classes for homepage
+ overwrite classes defined in parent routes
+ dynamic routes support
+ written on top of ES6, yet is ES5 safe

## Dependencies
+ vue.js 2.x
+ vue-router 3.x

## Installation

`npm install vue-body-class --save`

## Get started with Vue.js

1. Import Vue Body Class

```js
import VueBodyClass from 'vue-body-class';
```
2. Set up routes and Vue Router as described in Vue Router [Installation](https://router.vuejs.org/installation.html) & [Getting Strated](https://router.vuejs.org/guide/) sections.

3. Add Vue Body Class Guard to the Router instance (Important: pass `routes` to the `VueBodyClass` construstor) :

```js
const vueBodyClass = new VueBodyClass(routes);
router.beforeEach((to, from, next) => { vueBodyClass.guard(to, next) });
```

You will end up with something like this:

```js
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueBodyClass from 'vue-body-class';

Vue.use(VueRouter)

const routes = [
    //...your routes here
];

const router = new VueRouter({
  routes
});

const vueBodyClass = new VueBodyClass(routes);
router.beforeEach((to, from, next) => { vueBodyClass.guard(to, next) });

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

```

### Set Up classes

Just add `bodyClass` to meta property of a route object in your `vue-router` routes.

```js
name: 'dashboard',
path: '/dashboard',
meta: { bodyClass: 'dashboard' },
...
```

For child routes, all parent classes will be applied too.

```js
name: 'dashboard',
path: '/dashboard',
meta: { bodyClass: 'dashboard' },
component: dashboard,
children: [

    {
        name: 'dashboard.profile',
        path: 'profile',
        meta: { bodyClass: 'profile' },
        component: profile
    },
    
    ...

]
```

will result in 

```
class = 'dashboard profile'
```

You can overwrite parent classes by adding `!` at the beginning of the class:
```js
name: 'dashboard',
path: '/dashboard',
meta: { bodyClass: 'dashboard' },
component: dashboard,
children: [

    {
        name: 'dashboard.profile',
        path: 'profile',
        meta: { bodyClass: '!profile' },
        component: profile,
        children: [
        
            {
                name: 'dashboard.profile.personal',
                path: 'personal',
                meta: { bodyClass: 'personal' },
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

as `!profile` overwrites `dashboard` class.

The plugin will save your original body classes and new classes will be appended.

## Get started with Nuxt.js

Nuxt.js is not supported in current package version, but there are plans to implement the integration in further versions.
Meanwhile, please use Nuxt.js built in solution, described [here](https://github.com/nuxt/nuxt.js/issues/188). 
This does not provider same flexibility and accumulating parent route classes functionality, but is useful in most of cases.  