class VueBodyClassController {

    init(router) {
        this.bodyClass = document.body.className;
        this.router    = router
    }

    set router(router) {

        router.beforeEach((to, from, next) => {

            var parent              = router.options.routes;
            let pathSplitted        = to.path.split('/');
            var additionalClassName = "";
            let goDeep;

            pathSplitted = pathSplitted.filter(function(n){ return (n) });
            goDeep       = (to.path != '/' && to.path.length > 0 && pathSplitted.length > 0);

            if (goDeep) {

                for (var prop in pathSplitted) {

                    let data = parent.children ? parent.children : parent;
                    let found;

                    found = data.find((o)=> {

                        return o.path == '/' + pathSplitted[prop] || o.path == pathSplitted[prop];

                    });

                    if (found) {

                        parent = found;

                        if (found['bodyClass']) {

                            let routeBodyClass = found['bodyClass'].replace(/^!/, '');

                            if (found['bodyClass'].indexOf('!') === 0) {

                                additionalClassName = " " + routeBodyClass;

                            }
                            else {

                                additionalClassName += " " + routeBodyClass;

                            }


                        }

                    }

                }

            }

            document.body.className = (this.bodyClass + additionalClassName).trim();

            next();

        })
    }
}

let VueBodyClass = new VueBodyClassController()

VueBodyClass.install = function (Vue, {router}) {

    VueBodyClass.init(router);

}

export default VueBodyClass;