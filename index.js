class VueBodyClassController {

    init(router) {
        this.bodyClass = document.body.className;
        this.router    = router
    }

    set router(router) {

        router.beforeEach((to, from, next) => {

            var parent              = router.options.routes;
            let matched             = [];
            var additionalClassName = "";

            for (let index in to.matched) {

                let prev = matched.join('/');

                matched.push(to.matched[index].path
                    .replace(/^\/|\/$/g, '')
                    .replace(prev, '')
                    .replace(/^\/|\/$/g, ''));

            }

            if (to.path != '/' && to.path.length > 0 && matched.length > 0) {

                for (let index in matched) {

                    let data = parent.children ? parent.children : parent;
                    let found;

                    found = data.find((o)=> {

                        return o.path.replace(/^\/|\/$/g, '') == matched[index];

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