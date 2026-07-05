import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../wayfinder'
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

    /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
    const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: login.url(options),
        method: 'get',
    })

            /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
        loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url(options),
            method: 'get',
        })
            /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
        loginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    login.form = loginForm
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

    /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
    const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: logout.url(options),
        method: 'post',
    })

            /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
        logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: logout.url(options),
            method: 'post',
        })
    
    logout.form = logoutForm
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
export const register = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

register.definition = {
    methods: ["get","head"],
    url: '/register',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
register.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
register.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: register.url(options),
    method: 'head',
})

    /**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
    const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: register.url(options),
        method: 'get',
    })

            /**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
        registerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: register.url(options),
            method: 'get',
        })
            /**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
        registerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: register.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    register.form = registerForm
/**
* @see \App\Http\Controllers\Frontend\IndexController::home
 * @see app/Http/Controllers/Frontend/IndexController.php:34
 * @route '/'
 */
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\IndexController::home
 * @see app/Http/Controllers/Frontend/IndexController.php:34
 * @route '/'
 */
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\IndexController::home
 * @see app/Http/Controllers/Frontend/IndexController.php:34
 * @route '/'
 */
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\IndexController::home
 * @see app/Http/Controllers/Frontend/IndexController.php:34
 * @route '/'
 */
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\IndexController::home
 * @see app/Http/Controllers/Frontend/IndexController.php:34
 * @route '/'
 */
    const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: home.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\IndexController::home
 * @see app/Http/Controllers/Frontend/IndexController.php:34
 * @route '/'
 */
        homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\IndexController::home
 * @see app/Http/Controllers/Frontend/IndexController.php:34
 * @route '/'
 */
        homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    home.form = homeForm
/**
* @see \App\Http\Controllers\Frontend\IndexController::teachers
 * @see app/Http/Controllers/Frontend/IndexController.php:110
 * @route '/teachers'
 */
export const teachers = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: teachers.url(options),
    method: 'get',
})

teachers.definition = {
    methods: ["get","head"],
    url: '/teachers',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\IndexController::teachers
 * @see app/Http/Controllers/Frontend/IndexController.php:110
 * @route '/teachers'
 */
teachers.url = (options?: RouteQueryOptions) => {
    return teachers.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\IndexController::teachers
 * @see app/Http/Controllers/Frontend/IndexController.php:110
 * @route '/teachers'
 */
teachers.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: teachers.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\IndexController::teachers
 * @see app/Http/Controllers/Frontend/IndexController.php:110
 * @route '/teachers'
 */
teachers.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: teachers.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\IndexController::teachers
 * @see app/Http/Controllers/Frontend/IndexController.php:110
 * @route '/teachers'
 */
    const teachersForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: teachers.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\IndexController::teachers
 * @see app/Http/Controllers/Frontend/IndexController.php:110
 * @route '/teachers'
 */
        teachersForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: teachers.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\IndexController::teachers
 * @see app/Http/Controllers/Frontend/IndexController.php:110
 * @route '/teachers'
 */
        teachersForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: teachers.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    teachers.form = teachersForm
/**
* @see \App\Http\Controllers\Frontend\IndexController::departments
 * @see app/Http/Controllers/Frontend/IndexController.php:154
 * @route '/departments'
 */
export const departments = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: departments.url(options),
    method: 'get',
})

departments.definition = {
    methods: ["get","head"],
    url: '/departments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\IndexController::departments
 * @see app/Http/Controllers/Frontend/IndexController.php:154
 * @route '/departments'
 */
departments.url = (options?: RouteQueryOptions) => {
    return departments.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\IndexController::departments
 * @see app/Http/Controllers/Frontend/IndexController.php:154
 * @route '/departments'
 */
departments.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: departments.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\IndexController::departments
 * @see app/Http/Controllers/Frontend/IndexController.php:154
 * @route '/departments'
 */
departments.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: departments.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\IndexController::departments
 * @see app/Http/Controllers/Frontend/IndexController.php:154
 * @route '/departments'
 */
    const departmentsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: departments.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\IndexController::departments
 * @see app/Http/Controllers/Frontend/IndexController.php:154
 * @route '/departments'
 */
        departmentsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: departments.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\IndexController::departments
 * @see app/Http/Controllers/Frontend/IndexController.php:154
 * @route '/departments'
 */
        departmentsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: departments.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    departments.form = departmentsForm
/**
* @see \App\Http\Controllers\Frontend\IndexController::downloads
 * @see app/Http/Controllers/Frontend/IndexController.php:174
 * @route '/downloads'
 */
export const downloads = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloads.url(options),
    method: 'get',
})

downloads.definition = {
    methods: ["get","head"],
    url: '/downloads',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\IndexController::downloads
 * @see app/Http/Controllers/Frontend/IndexController.php:174
 * @route '/downloads'
 */
downloads.url = (options?: RouteQueryOptions) => {
    return downloads.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\IndexController::downloads
 * @see app/Http/Controllers/Frontend/IndexController.php:174
 * @route '/downloads'
 */
downloads.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloads.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\IndexController::downloads
 * @see app/Http/Controllers/Frontend/IndexController.php:174
 * @route '/downloads'
 */
downloads.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: downloads.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\IndexController::downloads
 * @see app/Http/Controllers/Frontend/IndexController.php:174
 * @route '/downloads'
 */
    const downloadsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: downloads.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\IndexController::downloads
 * @see app/Http/Controllers/Frontend/IndexController.php:174
 * @route '/downloads'
 */
        downloadsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: downloads.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\IndexController::downloads
 * @see app/Http/Controllers/Frontend/IndexController.php:174
 * @route '/downloads'
 */
        downloadsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: downloads.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    downloads.form = downloadsForm
/**
* @see \App\Http\Controllers\Frontend\IndexController::downloadFileFrontend
 * @see app/Http/Controllers/Frontend/IndexController.php:186
 * @route '/downloads/{id}'
 */
export const downloadFileFrontend = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadFileFrontend.url(args, options),
    method: 'get',
})

downloadFileFrontend.definition = {
    methods: ["get","head"],
    url: '/downloads/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\IndexController::downloadFileFrontend
 * @see app/Http/Controllers/Frontend/IndexController.php:186
 * @route '/downloads/{id}'
 */
downloadFileFrontend.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return downloadFileFrontend.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\IndexController::downloadFileFrontend
 * @see app/Http/Controllers/Frontend/IndexController.php:186
 * @route '/downloads/{id}'
 */
downloadFileFrontend.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadFileFrontend.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\IndexController::downloadFileFrontend
 * @see app/Http/Controllers/Frontend/IndexController.php:186
 * @route '/downloads/{id}'
 */
downloadFileFrontend.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: downloadFileFrontend.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\IndexController::downloadFileFrontend
 * @see app/Http/Controllers/Frontend/IndexController.php:186
 * @route '/downloads/{id}'
 */
    const downloadFileFrontendForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: downloadFileFrontend.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\IndexController::downloadFileFrontend
 * @see app/Http/Controllers/Frontend/IndexController.php:186
 * @route '/downloads/{id}'
 */
        downloadFileFrontendForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: downloadFileFrontend.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\IndexController::downloadFileFrontend
 * @see app/Http/Controllers/Frontend/IndexController.php:186
 * @route '/downloads/{id}'
 */
        downloadFileFrontendForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: downloadFileFrontend.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    downloadFileFrontend.form = downloadFileFrontendForm
/**
* @see \App\Http\Controllers\Frontend\IndexController::aboutUS
 * @see app/Http/Controllers/Frontend/IndexController.php:213
 * @route '/about-us'
 */
export const aboutUS = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: aboutUS.url(options),
    method: 'get',
})

aboutUS.definition = {
    methods: ["get","head"],
    url: '/about-us',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\IndexController::aboutUS
 * @see app/Http/Controllers/Frontend/IndexController.php:213
 * @route '/about-us'
 */
aboutUS.url = (options?: RouteQueryOptions) => {
    return aboutUS.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\IndexController::aboutUS
 * @see app/Http/Controllers/Frontend/IndexController.php:213
 * @route '/about-us'
 */
aboutUS.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: aboutUS.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\IndexController::aboutUS
 * @see app/Http/Controllers/Frontend/IndexController.php:213
 * @route '/about-us'
 */
aboutUS.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: aboutUS.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\IndexController::aboutUS
 * @see app/Http/Controllers/Frontend/IndexController.php:213
 * @route '/about-us'
 */
    const aboutUSForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: aboutUS.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\IndexController::aboutUS
 * @see app/Http/Controllers/Frontend/IndexController.php:213
 * @route '/about-us'
 */
        aboutUSForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: aboutUS.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\IndexController::aboutUS
 * @see app/Http/Controllers/Frontend/IndexController.php:213
 * @route '/about-us'
 */
        aboutUSForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: aboutUS.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    aboutUS.form = aboutUSForm
/**
* @see \App\Http\Controllers\Frontend\IndexController::facilities
 * @see app/Http/Controllers/Frontend/IndexController.php:350
 * @route '/facilities'
 */
export const facilities = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: facilities.url(options),
    method: 'get',
})

facilities.definition = {
    methods: ["get","head"],
    url: '/facilities',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\IndexController::facilities
 * @see app/Http/Controllers/Frontend/IndexController.php:350
 * @route '/facilities'
 */
facilities.url = (options?: RouteQueryOptions) => {
    return facilities.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\IndexController::facilities
 * @see app/Http/Controllers/Frontend/IndexController.php:350
 * @route '/facilities'
 */
facilities.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: facilities.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\IndexController::facilities
 * @see app/Http/Controllers/Frontend/IndexController.php:350
 * @route '/facilities'
 */
facilities.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: facilities.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\IndexController::facilities
 * @see app/Http/Controllers/Frontend/IndexController.php:350
 * @route '/facilities'
 */
    const facilitiesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: facilities.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\IndexController::facilities
 * @see app/Http/Controllers/Frontend/IndexController.php:350
 * @route '/facilities'
 */
        facilitiesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: facilities.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\IndexController::facilities
 * @see app/Http/Controllers/Frontend/IndexController.php:350
 * @route '/facilities'
 */
        facilitiesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: facilities.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    facilities.form = facilitiesForm
/**
* @see \App\Http\Controllers\Frontend\IndexController::galleries
 * @see app/Http/Controllers/Frontend/IndexController.php:361
 * @route '/galleries'
 */
export const galleries = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: galleries.url(options),
    method: 'get',
})

galleries.definition = {
    methods: ["get","head"],
    url: '/galleries',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\IndexController::galleries
 * @see app/Http/Controllers/Frontend/IndexController.php:361
 * @route '/galleries'
 */
galleries.url = (options?: RouteQueryOptions) => {
    return galleries.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\IndexController::galleries
 * @see app/Http/Controllers/Frontend/IndexController.php:361
 * @route '/galleries'
 */
galleries.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: galleries.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\IndexController::galleries
 * @see app/Http/Controllers/Frontend/IndexController.php:361
 * @route '/galleries'
 */
galleries.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: galleries.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\IndexController::galleries
 * @see app/Http/Controllers/Frontend/IndexController.php:361
 * @route '/galleries'
 */
    const galleriesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: galleries.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\IndexController::galleries
 * @see app/Http/Controllers/Frontend/IndexController.php:361
 * @route '/galleries'
 */
        galleriesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: galleries.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\IndexController::galleries
 * @see app/Http/Controllers/Frontend/IndexController.php:361
 * @route '/galleries'
 */
        galleriesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: galleries.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    galleries.form = galleriesForm
/**
* @see \App\Http\Controllers\Frontend\IndexController::notices
 * @see app/Http/Controllers/Frontend/IndexController.php:221
 * @route '/notices'
 */
export const notices = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: notices.url(options),
    method: 'get',
})

notices.definition = {
    methods: ["get","head"],
    url: '/notices',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\IndexController::notices
 * @see app/Http/Controllers/Frontend/IndexController.php:221
 * @route '/notices'
 */
notices.url = (options?: RouteQueryOptions) => {
    return notices.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\IndexController::notices
 * @see app/Http/Controllers/Frontend/IndexController.php:221
 * @route '/notices'
 */
notices.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: notices.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\IndexController::notices
 * @see app/Http/Controllers/Frontend/IndexController.php:221
 * @route '/notices'
 */
notices.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: notices.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\IndexController::notices
 * @see app/Http/Controllers/Frontend/IndexController.php:221
 * @route '/notices'
 */
    const noticesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: notices.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\IndexController::notices
 * @see app/Http/Controllers/Frontend/IndexController.php:221
 * @route '/notices'
 */
        noticesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: notices.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\IndexController::notices
 * @see app/Http/Controllers/Frontend/IndexController.php:221
 * @route '/notices'
 */
        noticesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: notices.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    notices.form = noticesForm
/**
* @see \App\Http\Controllers\Frontend\IndexController::events
 * @see app/Http/Controllers/Frontend/IndexController.php:249
 * @route '/events'
 */
export const events = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: events.url(options),
    method: 'get',
})

events.definition = {
    methods: ["get","head"],
    url: '/events',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\IndexController::events
 * @see app/Http/Controllers/Frontend/IndexController.php:249
 * @route '/events'
 */
events.url = (options?: RouteQueryOptions) => {
    return events.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\IndexController::events
 * @see app/Http/Controllers/Frontend/IndexController.php:249
 * @route '/events'
 */
events.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: events.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\IndexController::events
 * @see app/Http/Controllers/Frontend/IndexController.php:249
 * @route '/events'
 */
events.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: events.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\IndexController::events
 * @see app/Http/Controllers/Frontend/IndexController.php:249
 * @route '/events'
 */
    const eventsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: events.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\IndexController::events
 * @see app/Http/Controllers/Frontend/IndexController.php:249
 * @route '/events'
 */
        eventsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: events.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\IndexController::events
 * @see app/Http/Controllers/Frontend/IndexController.php:249
 * @route '/events'
 */
        eventsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: events.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    events.form = eventsForm
/**
* @see \App\Http\Controllers\Frontend\IndexController::activities
 * @see app/Http/Controllers/Frontend/IndexController.php:276
 * @route '/activities'
 */
export const activities = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: activities.url(options),
    method: 'get',
})

activities.definition = {
    methods: ["get","head"],
    url: '/activities',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\IndexController::activities
 * @see app/Http/Controllers/Frontend/IndexController.php:276
 * @route '/activities'
 */
activities.url = (options?: RouteQueryOptions) => {
    return activities.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\IndexController::activities
 * @see app/Http/Controllers/Frontend/IndexController.php:276
 * @route '/activities'
 */
activities.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: activities.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\IndexController::activities
 * @see app/Http/Controllers/Frontend/IndexController.php:276
 * @route '/activities'
 */
activities.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: activities.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\IndexController::activities
 * @see app/Http/Controllers/Frontend/IndexController.php:276
 * @route '/activities'
 */
    const activitiesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: activities.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\IndexController::activities
 * @see app/Http/Controllers/Frontend/IndexController.php:276
 * @route '/activities'
 */
        activitiesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: activities.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\IndexController::activities
 * @see app/Http/Controllers/Frontend/IndexController.php:276
 * @route '/activities'
 */
        activitiesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: activities.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    activities.form = activitiesForm
/**
* @see \App\Http\Controllers\Frontend\IndexController::blogs
 * @see app/Http/Controllers/Frontend/IndexController.php:373
 * @route '/blogs'
 */
export const blogs = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: blogs.url(options),
    method: 'get',
})

blogs.definition = {
    methods: ["get","head"],
    url: '/blogs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\IndexController::blogs
 * @see app/Http/Controllers/Frontend/IndexController.php:373
 * @route '/blogs'
 */
blogs.url = (options?: RouteQueryOptions) => {
    return blogs.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\IndexController::blogs
 * @see app/Http/Controllers/Frontend/IndexController.php:373
 * @route '/blogs'
 */
blogs.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: blogs.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\IndexController::blogs
 * @see app/Http/Controllers/Frontend/IndexController.php:373
 * @route '/blogs'
 */
blogs.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: blogs.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\IndexController::blogs
 * @see app/Http/Controllers/Frontend/IndexController.php:373
 * @route '/blogs'
 */
    const blogsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: blogs.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\IndexController::blogs
 * @see app/Http/Controllers/Frontend/IndexController.php:373
 * @route '/blogs'
 */
        blogsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: blogs.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\IndexController::blogs
 * @see app/Http/Controllers/Frontend/IndexController.php:373
 * @route '/blogs'
 */
        blogsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: blogs.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    blogs.form = blogsForm
/**
* @see \App\Http\Controllers\Frontend\IndexController::news
 * @see app/Http/Controllers/Frontend/IndexController.php:416
 * @route '/news'
 */
export const news = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: news.url(options),
    method: 'get',
})

news.definition = {
    methods: ["get","head"],
    url: '/news',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\IndexController::news
 * @see app/Http/Controllers/Frontend/IndexController.php:416
 * @route '/news'
 */
news.url = (options?: RouteQueryOptions) => {
    return news.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\IndexController::news
 * @see app/Http/Controllers/Frontend/IndexController.php:416
 * @route '/news'
 */
news.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: news.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\IndexController::news
 * @see app/Http/Controllers/Frontend/IndexController.php:416
 * @route '/news'
 */
news.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: news.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\IndexController::news
 * @see app/Http/Controllers/Frontend/IndexController.php:416
 * @route '/news'
 */
    const newsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: news.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\IndexController::news
 * @see app/Http/Controllers/Frontend/IndexController.php:416
 * @route '/news'
 */
        newsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: news.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\IndexController::news
 * @see app/Http/Controllers/Frontend/IndexController.php:416
 * @route '/news'
 */
        newsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: news.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    news.form = newsForm
/**
* @see \App\Http\Controllers\Frontend\IndexController::contacts
 * @see app/Http/Controllers/Frontend/IndexController.php:319
 * @route '/contacts'
 */
export const contacts = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contacts.url(options),
    method: 'get',
})

contacts.definition = {
    methods: ["get","head"],
    url: '/contacts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\IndexController::contacts
 * @see app/Http/Controllers/Frontend/IndexController.php:319
 * @route '/contacts'
 */
contacts.url = (options?: RouteQueryOptions) => {
    return contacts.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\IndexController::contacts
 * @see app/Http/Controllers/Frontend/IndexController.php:319
 * @route '/contacts'
 */
contacts.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contacts.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\IndexController::contacts
 * @see app/Http/Controllers/Frontend/IndexController.php:319
 * @route '/contacts'
 */
contacts.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: contacts.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\IndexController::contacts
 * @see app/Http/Controllers/Frontend/IndexController.php:319
 * @route '/contacts'
 */
    const contactsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: contacts.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\IndexController::contacts
 * @see app/Http/Controllers/Frontend/IndexController.php:319
 * @route '/contacts'
 */
        contactsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: contacts.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\IndexController::contacts
 * @see app/Http/Controllers/Frontend/IndexController.php:319
 * @route '/contacts'
 */
        contactsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: contacts.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    contacts.form = contactsForm
/**
* @see \App\Http\Controllers\Frontend\IndexController::contactStoreFrontend
 * @see app/Http/Controllers/Frontend/IndexController.php:328
 * @route '/contacts'
 */
export const contactStoreFrontend = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: contactStoreFrontend.url(options),
    method: 'post',
})

contactStoreFrontend.definition = {
    methods: ["post"],
    url: '/contacts',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Frontend\IndexController::contactStoreFrontend
 * @see app/Http/Controllers/Frontend/IndexController.php:328
 * @route '/contacts'
 */
contactStoreFrontend.url = (options?: RouteQueryOptions) => {
    return contactStoreFrontend.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\IndexController::contactStoreFrontend
 * @see app/Http/Controllers/Frontend/IndexController.php:328
 * @route '/contacts'
 */
contactStoreFrontend.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: contactStoreFrontend.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Frontend\IndexController::contactStoreFrontend
 * @see app/Http/Controllers/Frontend/IndexController.php:328
 * @route '/contacts'
 */
    const contactStoreFrontendForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: contactStoreFrontend.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Frontend\IndexController::contactStoreFrontend
 * @see app/Http/Controllers/Frontend/IndexController.php:328
 * @route '/contacts'
 */
        contactStoreFrontendForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: contactStoreFrontend.url(options),
            method: 'post',
        })
    
    contactStoreFrontend.form = contactStoreFrontendForm
/**
* @see \App\Http\Controllers\Frontend\IndexController::programShow
 * @see app/Http/Controllers/Frontend/IndexController.php:137
 * @route '/programs/{program_name}'
 */
export const programShow = (args: { program_name: string | number } | [program_name: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: programShow.url(args, options),
    method: 'get',
})

programShow.definition = {
    methods: ["get","head"],
    url: '/programs/{program_name}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\IndexController::programShow
 * @see app/Http/Controllers/Frontend/IndexController.php:137
 * @route '/programs/{program_name}'
 */
programShow.url = (args: { program_name: string | number } | [program_name: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { program_name: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    program_name: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        program_name: args.program_name,
                }

    return programShow.definition.url
            .replace('{program_name}', parsedArgs.program_name.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\IndexController::programShow
 * @see app/Http/Controllers/Frontend/IndexController.php:137
 * @route '/programs/{program_name}'
 */
programShow.get = (args: { program_name: string | number } | [program_name: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: programShow.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\IndexController::programShow
 * @see app/Http/Controllers/Frontend/IndexController.php:137
 * @route '/programs/{program_name}'
 */
programShow.head = (args: { program_name: string | number } | [program_name: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: programShow.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\IndexController::programShow
 * @see app/Http/Controllers/Frontend/IndexController.php:137
 * @route '/programs/{program_name}'
 */
    const programShowForm = (args: { program_name: string | number } | [program_name: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: programShow.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\IndexController::programShow
 * @see app/Http/Controllers/Frontend/IndexController.php:137
 * @route '/programs/{program_name}'
 */
        programShowForm.get = (args: { program_name: string | number } | [program_name: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: programShow.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\IndexController::programShow
 * @see app/Http/Controllers/Frontend/IndexController.php:137
 * @route '/programs/{program_name}'
 */
        programShowForm.head = (args: { program_name: string | number } | [program_name: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: programShow.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    programShow.form = programShowForm
/**
* @see \App\Http\Controllers\Frontend\IndexController::programIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:120
 * @route '/programs'
 */
export const programIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: programIndex.url(options),
    method: 'get',
})

programIndex.definition = {
    methods: ["get","head"],
    url: '/programs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\IndexController::programIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:120
 * @route '/programs'
 */
programIndex.url = (options?: RouteQueryOptions) => {
    return programIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\IndexController::programIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:120
 * @route '/programs'
 */
programIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: programIndex.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\IndexController::programIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:120
 * @route '/programs'
 */
programIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: programIndex.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\IndexController::programIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:120
 * @route '/programs'
 */
    const programIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: programIndex.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\IndexController::programIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:120
 * @route '/programs'
 */
        programIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: programIndex.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\IndexController::programIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:120
 * @route '/programs'
 */
        programIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: programIndex.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    programIndex.form = programIndexForm
/**
* @see \App\Http\Controllers\Backend\IndexController::dashboard
 * @see app/Http/Controllers/Backend/IndexController.php:15
 * @route '/admin/dashboard'
 */
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/admin/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\IndexController::dashboard
 * @see app/Http/Controllers/Backend/IndexController.php:15
 * @route '/admin/dashboard'
 */
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\IndexController::dashboard
 * @see app/Http/Controllers/Backend/IndexController.php:15
 * @route '/admin/dashboard'
 */
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\IndexController::dashboard
 * @see app/Http/Controllers/Backend/IndexController.php:15
 * @route '/admin/dashboard'
 */
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\IndexController::dashboard
 * @see app/Http/Controllers/Backend/IndexController.php:15
 * @route '/admin/dashboard'
 */
    const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dashboard.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\IndexController::dashboard
 * @see app/Http/Controllers/Backend/IndexController.php:15
 * @route '/admin/dashboard'
 */
        dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\IndexController::dashboard
 * @see app/Http/Controllers/Backend/IndexController.php:15
 * @route '/admin/dashboard'
 */
        dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    dashboard.form = dashboardForm
/**
* @see \App\Http\Controllers\Backend\ContactController::contactIndex
 * @see app/Http/Controllers/Backend/ContactController.php:22
 * @route '/admin/contact'
 */
export const contactIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contactIndex.url(options),
    method: 'get',
})

contactIndex.definition = {
    methods: ["get","head"],
    url: '/admin/contact',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\ContactController::contactIndex
 * @see app/Http/Controllers/Backend/ContactController.php:22
 * @route '/admin/contact'
 */
contactIndex.url = (options?: RouteQueryOptions) => {
    return contactIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ContactController::contactIndex
 * @see app/Http/Controllers/Backend/ContactController.php:22
 * @route '/admin/contact'
 */
contactIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contactIndex.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\ContactController::contactIndex
 * @see app/Http/Controllers/Backend/ContactController.php:22
 * @route '/admin/contact'
 */
contactIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: contactIndex.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\ContactController::contactIndex
 * @see app/Http/Controllers/Backend/ContactController.php:22
 * @route '/admin/contact'
 */
    const contactIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: contactIndex.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\ContactController::contactIndex
 * @see app/Http/Controllers/Backend/ContactController.php:22
 * @route '/admin/contact'
 */
        contactIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: contactIndex.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\ContactController::contactIndex
 * @see app/Http/Controllers/Backend/ContactController.php:22
 * @route '/admin/contact'
 */
        contactIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: contactIndex.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    contactIndex.form = contactIndexForm
/**
* @see \App\Http\Controllers\Backend\ContactController::contactCreate
 * @see app/Http/Controllers/Backend/ContactController.php:36
 * @route '/admin/contact/create'
 */
export const contactCreate = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contactCreate.url(options),
    method: 'get',
})

contactCreate.definition = {
    methods: ["get","head"],
    url: '/admin/contact/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\ContactController::contactCreate
 * @see app/Http/Controllers/Backend/ContactController.php:36
 * @route '/admin/contact/create'
 */
contactCreate.url = (options?: RouteQueryOptions) => {
    return contactCreate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ContactController::contactCreate
 * @see app/Http/Controllers/Backend/ContactController.php:36
 * @route '/admin/contact/create'
 */
contactCreate.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contactCreate.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\ContactController::contactCreate
 * @see app/Http/Controllers/Backend/ContactController.php:36
 * @route '/admin/contact/create'
 */
contactCreate.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: contactCreate.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\ContactController::contactCreate
 * @see app/Http/Controllers/Backend/ContactController.php:36
 * @route '/admin/contact/create'
 */
    const contactCreateForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: contactCreate.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\ContactController::contactCreate
 * @see app/Http/Controllers/Backend/ContactController.php:36
 * @route '/admin/contact/create'
 */
        contactCreateForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: contactCreate.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\ContactController::contactCreate
 * @see app/Http/Controllers/Backend/ContactController.php:36
 * @route '/admin/contact/create'
 */
        contactCreateForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: contactCreate.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    contactCreate.form = contactCreateForm
/**
* @see \App\Http\Controllers\Backend\ContactController::contactStore
 * @see app/Http/Controllers/Backend/ContactController.php:44
 * @route '/admin/contact/store'
 */
export const contactStore = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: contactStore.url(options),
    method: 'post',
})

contactStore.definition = {
    methods: ["post"],
    url: '/admin/contact/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\ContactController::contactStore
 * @see app/Http/Controllers/Backend/ContactController.php:44
 * @route '/admin/contact/store'
 */
contactStore.url = (options?: RouteQueryOptions) => {
    return contactStore.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ContactController::contactStore
 * @see app/Http/Controllers/Backend/ContactController.php:44
 * @route '/admin/contact/store'
 */
contactStore.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: contactStore.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\ContactController::contactStore
 * @see app/Http/Controllers/Backend/ContactController.php:44
 * @route '/admin/contact/store'
 */
    const contactStoreForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: contactStore.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\ContactController::contactStore
 * @see app/Http/Controllers/Backend/ContactController.php:44
 * @route '/admin/contact/store'
 */
        contactStoreForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: contactStore.url(options),
            method: 'post',
        })
    
    contactStore.form = contactStoreForm
/**
* @see \App\Http\Controllers\Backend\ContactController::contactEdit
 * @see app/Http/Controllers/Backend/ContactController.php:67
 * @route '/admin/contact/edit/{contact}'
 */
export const contactEdit = (args: { contact: number | { id: number } } | [contact: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contactEdit.url(args, options),
    method: 'get',
})

contactEdit.definition = {
    methods: ["get","head"],
    url: '/admin/contact/edit/{contact}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\ContactController::contactEdit
 * @see app/Http/Controllers/Backend/ContactController.php:67
 * @route '/admin/contact/edit/{contact}'
 */
contactEdit.url = (args: { contact: number | { id: number } } | [contact: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { contact: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { contact: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    contact: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        contact: typeof args.contact === 'object'
                ? args.contact.id
                : args.contact,
                }

    return contactEdit.definition.url
            .replace('{contact}', parsedArgs.contact.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ContactController::contactEdit
 * @see app/Http/Controllers/Backend/ContactController.php:67
 * @route '/admin/contact/edit/{contact}'
 */
contactEdit.get = (args: { contact: number | { id: number } } | [contact: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contactEdit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\ContactController::contactEdit
 * @see app/Http/Controllers/Backend/ContactController.php:67
 * @route '/admin/contact/edit/{contact}'
 */
contactEdit.head = (args: { contact: number | { id: number } } | [contact: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: contactEdit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\ContactController::contactEdit
 * @see app/Http/Controllers/Backend/ContactController.php:67
 * @route '/admin/contact/edit/{contact}'
 */
    const contactEditForm = (args: { contact: number | { id: number } } | [contact: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: contactEdit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\ContactController::contactEdit
 * @see app/Http/Controllers/Backend/ContactController.php:67
 * @route '/admin/contact/edit/{contact}'
 */
        contactEditForm.get = (args: { contact: number | { id: number } } | [contact: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: contactEdit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\ContactController::contactEdit
 * @see app/Http/Controllers/Backend/ContactController.php:67
 * @route '/admin/contact/edit/{contact}'
 */
        contactEditForm.head = (args: { contact: number | { id: number } } | [contact: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: contactEdit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    contactEdit.form = contactEditForm
/**
* @see \App\Http\Controllers\Backend\ContactController::contactUpdate
 * @see app/Http/Controllers/Backend/ContactController.php:77
 * @route '/admin/contact/update/{contact}'
 */
export const contactUpdate = (args: { contact: number | { id: number } } | [contact: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: contactUpdate.url(args, options),
    method: 'post',
})

contactUpdate.definition = {
    methods: ["post"],
    url: '/admin/contact/update/{contact}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\ContactController::contactUpdate
 * @see app/Http/Controllers/Backend/ContactController.php:77
 * @route '/admin/contact/update/{contact}'
 */
contactUpdate.url = (args: { contact: number | { id: number } } | [contact: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { contact: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { contact: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    contact: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        contact: typeof args.contact === 'object'
                ? args.contact.id
                : args.contact,
                }

    return contactUpdate.definition.url
            .replace('{contact}', parsedArgs.contact.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ContactController::contactUpdate
 * @see app/Http/Controllers/Backend/ContactController.php:77
 * @route '/admin/contact/update/{contact}'
 */
contactUpdate.post = (args: { contact: number | { id: number } } | [contact: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: contactUpdate.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\ContactController::contactUpdate
 * @see app/Http/Controllers/Backend/ContactController.php:77
 * @route '/admin/contact/update/{contact}'
 */
    const contactUpdateForm = (args: { contact: number | { id: number } } | [contact: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: contactUpdate.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\ContactController::contactUpdate
 * @see app/Http/Controllers/Backend/ContactController.php:77
 * @route '/admin/contact/update/{contact}'
 */
        contactUpdateForm.post = (args: { contact: number | { id: number } } | [contact: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: contactUpdate.url(args, options),
            method: 'post',
        })
    
    contactUpdate.form = contactUpdateForm
/**
* @see \App\Http\Controllers\Backend\ContactController::contactDestroy
 * @see app/Http/Controllers/Backend/ContactController.php:99
 * @route '/admin/contact/delete/{contact}'
 */
export const contactDestroy = (args: { contact: number | { id: number } } | [contact: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: contactDestroy.url(args, options),
    method: 'delete',
})

contactDestroy.definition = {
    methods: ["delete"],
    url: '/admin/contact/delete/{contact}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Backend\ContactController::contactDestroy
 * @see app/Http/Controllers/Backend/ContactController.php:99
 * @route '/admin/contact/delete/{contact}'
 */
contactDestroy.url = (args: { contact: number | { id: number } } | [contact: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { contact: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { contact: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    contact: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        contact: typeof args.contact === 'object'
                ? args.contact.id
                : args.contact,
                }

    return contactDestroy.definition.url
            .replace('{contact}', parsedArgs.contact.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ContactController::contactDestroy
 * @see app/Http/Controllers/Backend/ContactController.php:99
 * @route '/admin/contact/delete/{contact}'
 */
contactDestroy.delete = (args: { contact: number | { id: number } } | [contact: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: contactDestroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Backend\ContactController::contactDestroy
 * @see app/Http/Controllers/Backend/ContactController.php:99
 * @route '/admin/contact/delete/{contact}'
 */
    const contactDestroyForm = (args: { contact: number | { id: number } } | [contact: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: contactDestroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\ContactController::contactDestroy
 * @see app/Http/Controllers/Backend/ContactController.php:99
 * @route '/admin/contact/delete/{contact}'
 */
        contactDestroyForm.delete = (args: { contact: number | { id: number } } | [contact: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: contactDestroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    contactDestroy.form = contactDestroyForm
/**
* @see \App\Http\Controllers\Backend\HeroSectionController::heroSectionindex
 * @see app/Http/Controllers/Backend/HeroSectionController.php:22
 * @route '/admin/hero-section'
 */
export const heroSectionindex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: heroSectionindex.url(options),
    method: 'get',
})

heroSectionindex.definition = {
    methods: ["get","head"],
    url: '/admin/hero-section',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\HeroSectionController::heroSectionindex
 * @see app/Http/Controllers/Backend/HeroSectionController.php:22
 * @route '/admin/hero-section'
 */
heroSectionindex.url = (options?: RouteQueryOptions) => {
    return heroSectionindex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\HeroSectionController::heroSectionindex
 * @see app/Http/Controllers/Backend/HeroSectionController.php:22
 * @route '/admin/hero-section'
 */
heroSectionindex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: heroSectionindex.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\HeroSectionController::heroSectionindex
 * @see app/Http/Controllers/Backend/HeroSectionController.php:22
 * @route '/admin/hero-section'
 */
heroSectionindex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: heroSectionindex.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\HeroSectionController::heroSectionindex
 * @see app/Http/Controllers/Backend/HeroSectionController.php:22
 * @route '/admin/hero-section'
 */
    const heroSectionindexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: heroSectionindex.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\HeroSectionController::heroSectionindex
 * @see app/Http/Controllers/Backend/HeroSectionController.php:22
 * @route '/admin/hero-section'
 */
        heroSectionindexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: heroSectionindex.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\HeroSectionController::heroSectionindex
 * @see app/Http/Controllers/Backend/HeroSectionController.php:22
 * @route '/admin/hero-section'
 */
        heroSectionindexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: heroSectionindex.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    heroSectionindex.form = heroSectionindexForm
/**
* @see \App\Http\Controllers\Backend\HeroSectionController::heroSectioncreate
 * @see app/Http/Controllers/Backend/HeroSectionController.php:37
 * @route '/admin/hero-section/create'
 */
export const heroSectioncreate = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: heroSectioncreate.url(options),
    method: 'get',
})

heroSectioncreate.definition = {
    methods: ["get","head"],
    url: '/admin/hero-section/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\HeroSectionController::heroSectioncreate
 * @see app/Http/Controllers/Backend/HeroSectionController.php:37
 * @route '/admin/hero-section/create'
 */
heroSectioncreate.url = (options?: RouteQueryOptions) => {
    return heroSectioncreate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\HeroSectionController::heroSectioncreate
 * @see app/Http/Controllers/Backend/HeroSectionController.php:37
 * @route '/admin/hero-section/create'
 */
heroSectioncreate.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: heroSectioncreate.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\HeroSectionController::heroSectioncreate
 * @see app/Http/Controllers/Backend/HeroSectionController.php:37
 * @route '/admin/hero-section/create'
 */
heroSectioncreate.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: heroSectioncreate.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\HeroSectionController::heroSectioncreate
 * @see app/Http/Controllers/Backend/HeroSectionController.php:37
 * @route '/admin/hero-section/create'
 */
    const heroSectioncreateForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: heroSectioncreate.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\HeroSectionController::heroSectioncreate
 * @see app/Http/Controllers/Backend/HeroSectionController.php:37
 * @route '/admin/hero-section/create'
 */
        heroSectioncreateForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: heroSectioncreate.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\HeroSectionController::heroSectioncreate
 * @see app/Http/Controllers/Backend/HeroSectionController.php:37
 * @route '/admin/hero-section/create'
 */
        heroSectioncreateForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: heroSectioncreate.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    heroSectioncreate.form = heroSectioncreateForm
/**
* @see \App\Http\Controllers\Backend\HeroSectionController::heroSectionstore
 * @see app/Http/Controllers/Backend/HeroSectionController.php:45
 * @route '/admin/hero-section/store'
 */
export const heroSectionstore = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: heroSectionstore.url(options),
    method: 'post',
})

heroSectionstore.definition = {
    methods: ["post"],
    url: '/admin/hero-section/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\HeroSectionController::heroSectionstore
 * @see app/Http/Controllers/Backend/HeroSectionController.php:45
 * @route '/admin/hero-section/store'
 */
heroSectionstore.url = (options?: RouteQueryOptions) => {
    return heroSectionstore.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\HeroSectionController::heroSectionstore
 * @see app/Http/Controllers/Backend/HeroSectionController.php:45
 * @route '/admin/hero-section/store'
 */
heroSectionstore.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: heroSectionstore.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\HeroSectionController::heroSectionstore
 * @see app/Http/Controllers/Backend/HeroSectionController.php:45
 * @route '/admin/hero-section/store'
 */
    const heroSectionstoreForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: heroSectionstore.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\HeroSectionController::heroSectionstore
 * @see app/Http/Controllers/Backend/HeroSectionController.php:45
 * @route '/admin/hero-section/store'
 */
        heroSectionstoreForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: heroSectionstore.url(options),
            method: 'post',
        })
    
    heroSectionstore.form = heroSectionstoreForm
/**
* @see \App\Http\Controllers\Backend\HeroSectionController::heroSectionedit
 * @see app/Http/Controllers/Backend/HeroSectionController.php:77
 * @route '/admin/hero-section/edit/{heroSection}'
 */
export const heroSectionedit = (args: { heroSection: number | { id: number } } | [heroSection: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: heroSectionedit.url(args, options),
    method: 'get',
})

heroSectionedit.definition = {
    methods: ["get","head"],
    url: '/admin/hero-section/edit/{heroSection}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\HeroSectionController::heroSectionedit
 * @see app/Http/Controllers/Backend/HeroSectionController.php:77
 * @route '/admin/hero-section/edit/{heroSection}'
 */
heroSectionedit.url = (args: { heroSection: number | { id: number } } | [heroSection: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { heroSection: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { heroSection: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    heroSection: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        heroSection: typeof args.heroSection === 'object'
                ? args.heroSection.id
                : args.heroSection,
                }

    return heroSectionedit.definition.url
            .replace('{heroSection}', parsedArgs.heroSection.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\HeroSectionController::heroSectionedit
 * @see app/Http/Controllers/Backend/HeroSectionController.php:77
 * @route '/admin/hero-section/edit/{heroSection}'
 */
heroSectionedit.get = (args: { heroSection: number | { id: number } } | [heroSection: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: heroSectionedit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\HeroSectionController::heroSectionedit
 * @see app/Http/Controllers/Backend/HeroSectionController.php:77
 * @route '/admin/hero-section/edit/{heroSection}'
 */
heroSectionedit.head = (args: { heroSection: number | { id: number } } | [heroSection: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: heroSectionedit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\HeroSectionController::heroSectionedit
 * @see app/Http/Controllers/Backend/HeroSectionController.php:77
 * @route '/admin/hero-section/edit/{heroSection}'
 */
    const heroSectioneditForm = (args: { heroSection: number | { id: number } } | [heroSection: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: heroSectionedit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\HeroSectionController::heroSectionedit
 * @see app/Http/Controllers/Backend/HeroSectionController.php:77
 * @route '/admin/hero-section/edit/{heroSection}'
 */
        heroSectioneditForm.get = (args: { heroSection: number | { id: number } } | [heroSection: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: heroSectionedit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\HeroSectionController::heroSectionedit
 * @see app/Http/Controllers/Backend/HeroSectionController.php:77
 * @route '/admin/hero-section/edit/{heroSection}'
 */
        heroSectioneditForm.head = (args: { heroSection: number | { id: number } } | [heroSection: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: heroSectionedit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    heroSectionedit.form = heroSectioneditForm
/**
* @see \App\Http\Controllers\Backend\HeroSectionController::heroSectionupdate
 * @see app/Http/Controllers/Backend/HeroSectionController.php:87
 * @route '/admin/hero-section/update/{heroSection}'
 */
export const heroSectionupdate = (args: { heroSection: number | { id: number } } | [heroSection: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: heroSectionupdate.url(args, options),
    method: 'post',
})

heroSectionupdate.definition = {
    methods: ["post"],
    url: '/admin/hero-section/update/{heroSection}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\HeroSectionController::heroSectionupdate
 * @see app/Http/Controllers/Backend/HeroSectionController.php:87
 * @route '/admin/hero-section/update/{heroSection}'
 */
heroSectionupdate.url = (args: { heroSection: number | { id: number } } | [heroSection: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { heroSection: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { heroSection: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    heroSection: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        heroSection: typeof args.heroSection === 'object'
                ? args.heroSection.id
                : args.heroSection,
                }

    return heroSectionupdate.definition.url
            .replace('{heroSection}', parsedArgs.heroSection.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\HeroSectionController::heroSectionupdate
 * @see app/Http/Controllers/Backend/HeroSectionController.php:87
 * @route '/admin/hero-section/update/{heroSection}'
 */
heroSectionupdate.post = (args: { heroSection: number | { id: number } } | [heroSection: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: heroSectionupdate.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\HeroSectionController::heroSectionupdate
 * @see app/Http/Controllers/Backend/HeroSectionController.php:87
 * @route '/admin/hero-section/update/{heroSection}'
 */
    const heroSectionupdateForm = (args: { heroSection: number | { id: number } } | [heroSection: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: heroSectionupdate.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\HeroSectionController::heroSectionupdate
 * @see app/Http/Controllers/Backend/HeroSectionController.php:87
 * @route '/admin/hero-section/update/{heroSection}'
 */
        heroSectionupdateForm.post = (args: { heroSection: number | { id: number } } | [heroSection: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: heroSectionupdate.url(args, options),
            method: 'post',
        })
    
    heroSectionupdate.form = heroSectionupdateForm
/**
* @see \App\Http\Controllers\Backend\HeroSectionController::heroSectiondestroy
 * @see app/Http/Controllers/Backend/HeroSectionController.php:128
 * @route '/admin/hero-section/delete/{heroSection}'
 */
export const heroSectiondestroy = (args: { heroSection: number | { id: number } } | [heroSection: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: heroSectiondestroy.url(args, options),
    method: 'delete',
})

heroSectiondestroy.definition = {
    methods: ["delete"],
    url: '/admin/hero-section/delete/{heroSection}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Backend\HeroSectionController::heroSectiondestroy
 * @see app/Http/Controllers/Backend/HeroSectionController.php:128
 * @route '/admin/hero-section/delete/{heroSection}'
 */
heroSectiondestroy.url = (args: { heroSection: number | { id: number } } | [heroSection: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { heroSection: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { heroSection: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    heroSection: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        heroSection: typeof args.heroSection === 'object'
                ? args.heroSection.id
                : args.heroSection,
                }

    return heroSectiondestroy.definition.url
            .replace('{heroSection}', parsedArgs.heroSection.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\HeroSectionController::heroSectiondestroy
 * @see app/Http/Controllers/Backend/HeroSectionController.php:128
 * @route '/admin/hero-section/delete/{heroSection}'
 */
heroSectiondestroy.delete = (args: { heroSection: number | { id: number } } | [heroSection: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: heroSectiondestroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Backend\HeroSectionController::heroSectiondestroy
 * @see app/Http/Controllers/Backend/HeroSectionController.php:128
 * @route '/admin/hero-section/delete/{heroSection}'
 */
    const heroSectiondestroyForm = (args: { heroSection: number | { id: number } } | [heroSection: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: heroSectiondestroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\HeroSectionController::heroSectiondestroy
 * @see app/Http/Controllers/Backend/HeroSectionController.php:128
 * @route '/admin/hero-section/delete/{heroSection}'
 */
        heroSectiondestroyForm.delete = (args: { heroSection: number | { id: number } } | [heroSection: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: heroSectiondestroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    heroSectiondestroy.form = heroSectiondestroyForm
/**
* @see \App\Http\Controllers\Backend\CourseController::courseIndex
 * @see app/Http/Controllers/Backend/CourseController.php:21
 * @route '/admin/course'
 */
export const courseIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: courseIndex.url(options),
    method: 'get',
})

courseIndex.definition = {
    methods: ["get","head"],
    url: '/admin/course',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\CourseController::courseIndex
 * @see app/Http/Controllers/Backend/CourseController.php:21
 * @route '/admin/course'
 */
courseIndex.url = (options?: RouteQueryOptions) => {
    return courseIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CourseController::courseIndex
 * @see app/Http/Controllers/Backend/CourseController.php:21
 * @route '/admin/course'
 */
courseIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: courseIndex.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\CourseController::courseIndex
 * @see app/Http/Controllers/Backend/CourseController.php:21
 * @route '/admin/course'
 */
courseIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: courseIndex.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\CourseController::courseIndex
 * @see app/Http/Controllers/Backend/CourseController.php:21
 * @route '/admin/course'
 */
    const courseIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: courseIndex.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\CourseController::courseIndex
 * @see app/Http/Controllers/Backend/CourseController.php:21
 * @route '/admin/course'
 */
        courseIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: courseIndex.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\CourseController::courseIndex
 * @see app/Http/Controllers/Backend/CourseController.php:21
 * @route '/admin/course'
 */
        courseIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: courseIndex.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    courseIndex.form = courseIndexForm
/**
* @see \App\Http\Controllers\Backend\CourseController::courseCreate
 * @see app/Http/Controllers/Backend/CourseController.php:32
 * @route '/admin/course/create'
 */
export const courseCreate = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: courseCreate.url(options),
    method: 'get',
})

courseCreate.definition = {
    methods: ["get","head"],
    url: '/admin/course/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\CourseController::courseCreate
 * @see app/Http/Controllers/Backend/CourseController.php:32
 * @route '/admin/course/create'
 */
courseCreate.url = (options?: RouteQueryOptions) => {
    return courseCreate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CourseController::courseCreate
 * @see app/Http/Controllers/Backend/CourseController.php:32
 * @route '/admin/course/create'
 */
courseCreate.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: courseCreate.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\CourseController::courseCreate
 * @see app/Http/Controllers/Backend/CourseController.php:32
 * @route '/admin/course/create'
 */
courseCreate.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: courseCreate.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\CourseController::courseCreate
 * @see app/Http/Controllers/Backend/CourseController.php:32
 * @route '/admin/course/create'
 */
    const courseCreateForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: courseCreate.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\CourseController::courseCreate
 * @see app/Http/Controllers/Backend/CourseController.php:32
 * @route '/admin/course/create'
 */
        courseCreateForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: courseCreate.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\CourseController::courseCreate
 * @see app/Http/Controllers/Backend/CourseController.php:32
 * @route '/admin/course/create'
 */
        courseCreateForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: courseCreate.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    courseCreate.form = courseCreateForm
/**
* @see \App\Http\Controllers\Backend\CourseController::courseStore
 * @see app/Http/Controllers/Backend/CourseController.php:40
 * @route '/admin/course/store'
 */
export const courseStore = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: courseStore.url(options),
    method: 'post',
})

courseStore.definition = {
    methods: ["post"],
    url: '/admin/course/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\CourseController::courseStore
 * @see app/Http/Controllers/Backend/CourseController.php:40
 * @route '/admin/course/store'
 */
courseStore.url = (options?: RouteQueryOptions) => {
    return courseStore.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CourseController::courseStore
 * @see app/Http/Controllers/Backend/CourseController.php:40
 * @route '/admin/course/store'
 */
courseStore.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: courseStore.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\CourseController::courseStore
 * @see app/Http/Controllers/Backend/CourseController.php:40
 * @route '/admin/course/store'
 */
    const courseStoreForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: courseStore.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\CourseController::courseStore
 * @see app/Http/Controllers/Backend/CourseController.php:40
 * @route '/admin/course/store'
 */
        courseStoreForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: courseStore.url(options),
            method: 'post',
        })
    
    courseStore.form = courseStoreForm
/**
* @see \App\Http\Controllers\Backend\CourseController::courseEdit
 * @see app/Http/Controllers/Backend/CourseController.php:69
 * @route '/admin/course/edit/{course}'
 */
export const courseEdit = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: courseEdit.url(args, options),
    method: 'get',
})

courseEdit.definition = {
    methods: ["get","head"],
    url: '/admin/course/edit/{course}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\CourseController::courseEdit
 * @see app/Http/Controllers/Backend/CourseController.php:69
 * @route '/admin/course/edit/{course}'
 */
courseEdit.url = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { course: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { course: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    course: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        course: typeof args.course === 'object'
                ? args.course.id
                : args.course,
                }

    return courseEdit.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CourseController::courseEdit
 * @see app/Http/Controllers/Backend/CourseController.php:69
 * @route '/admin/course/edit/{course}'
 */
courseEdit.get = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: courseEdit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\CourseController::courseEdit
 * @see app/Http/Controllers/Backend/CourseController.php:69
 * @route '/admin/course/edit/{course}'
 */
courseEdit.head = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: courseEdit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\CourseController::courseEdit
 * @see app/Http/Controllers/Backend/CourseController.php:69
 * @route '/admin/course/edit/{course}'
 */
    const courseEditForm = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: courseEdit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\CourseController::courseEdit
 * @see app/Http/Controllers/Backend/CourseController.php:69
 * @route '/admin/course/edit/{course}'
 */
        courseEditForm.get = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: courseEdit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\CourseController::courseEdit
 * @see app/Http/Controllers/Backend/CourseController.php:69
 * @route '/admin/course/edit/{course}'
 */
        courseEditForm.head = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: courseEdit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    courseEdit.form = courseEditForm
/**
* @see \App\Http\Controllers\Backend\CourseController::courseUpdate
 * @see app/Http/Controllers/Backend/CourseController.php:79
 * @route '/admin/course/update/{course}'
 */
export const courseUpdate = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: courseUpdate.url(args, options),
    method: 'post',
})

courseUpdate.definition = {
    methods: ["post"],
    url: '/admin/course/update/{course}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\CourseController::courseUpdate
 * @see app/Http/Controllers/Backend/CourseController.php:79
 * @route '/admin/course/update/{course}'
 */
courseUpdate.url = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { course: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { course: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    course: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        course: typeof args.course === 'object'
                ? args.course.id
                : args.course,
                }

    return courseUpdate.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CourseController::courseUpdate
 * @see app/Http/Controllers/Backend/CourseController.php:79
 * @route '/admin/course/update/{course}'
 */
courseUpdate.post = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: courseUpdate.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\CourseController::courseUpdate
 * @see app/Http/Controllers/Backend/CourseController.php:79
 * @route '/admin/course/update/{course}'
 */
    const courseUpdateForm = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: courseUpdate.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\CourseController::courseUpdate
 * @see app/Http/Controllers/Backend/CourseController.php:79
 * @route '/admin/course/update/{course}'
 */
        courseUpdateForm.post = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: courseUpdate.url(args, options),
            method: 'post',
        })
    
    courseUpdate.form = courseUpdateForm
/**
* @see \App\Http\Controllers\Backend\CourseController::courseDestroy
 * @see app/Http/Controllers/Backend/CourseController.php:111
 * @route '/admin/course/delete/{course}'
 */
export const courseDestroy = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: courseDestroy.url(args, options),
    method: 'delete',
})

courseDestroy.definition = {
    methods: ["delete"],
    url: '/admin/course/delete/{course}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Backend\CourseController::courseDestroy
 * @see app/Http/Controllers/Backend/CourseController.php:111
 * @route '/admin/course/delete/{course}'
 */
courseDestroy.url = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { course: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { course: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    course: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        course: typeof args.course === 'object'
                ? args.course.id
                : args.course,
                }

    return courseDestroy.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CourseController::courseDestroy
 * @see app/Http/Controllers/Backend/CourseController.php:111
 * @route '/admin/course/delete/{course}'
 */
courseDestroy.delete = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: courseDestroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Backend\CourseController::courseDestroy
 * @see app/Http/Controllers/Backend/CourseController.php:111
 * @route '/admin/course/delete/{course}'
 */
    const courseDestroyForm = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: courseDestroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\CourseController::courseDestroy
 * @see app/Http/Controllers/Backend/CourseController.php:111
 * @route '/admin/course/delete/{course}'
 */
        courseDestroyForm.delete = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: courseDestroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    courseDestroy.form = courseDestroyForm
/**
* @see \App\Http\Controllers\Backend\StudentFeedbackController::studentFeedbackIndex
 * @see app/Http/Controllers/Backend/StudentFeedbackController.php:21
 * @route '/admin/studentFeedback'
 */
export const studentFeedbackIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: studentFeedbackIndex.url(options),
    method: 'get',
})

studentFeedbackIndex.definition = {
    methods: ["get","head"],
    url: '/admin/studentFeedback',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\StudentFeedbackController::studentFeedbackIndex
 * @see app/Http/Controllers/Backend/StudentFeedbackController.php:21
 * @route '/admin/studentFeedback'
 */
studentFeedbackIndex.url = (options?: RouteQueryOptions) => {
    return studentFeedbackIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\StudentFeedbackController::studentFeedbackIndex
 * @see app/Http/Controllers/Backend/StudentFeedbackController.php:21
 * @route '/admin/studentFeedback'
 */
studentFeedbackIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: studentFeedbackIndex.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\StudentFeedbackController::studentFeedbackIndex
 * @see app/Http/Controllers/Backend/StudentFeedbackController.php:21
 * @route '/admin/studentFeedback'
 */
studentFeedbackIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: studentFeedbackIndex.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\StudentFeedbackController::studentFeedbackIndex
 * @see app/Http/Controllers/Backend/StudentFeedbackController.php:21
 * @route '/admin/studentFeedback'
 */
    const studentFeedbackIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: studentFeedbackIndex.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\StudentFeedbackController::studentFeedbackIndex
 * @see app/Http/Controllers/Backend/StudentFeedbackController.php:21
 * @route '/admin/studentFeedback'
 */
        studentFeedbackIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: studentFeedbackIndex.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\StudentFeedbackController::studentFeedbackIndex
 * @see app/Http/Controllers/Backend/StudentFeedbackController.php:21
 * @route '/admin/studentFeedback'
 */
        studentFeedbackIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: studentFeedbackIndex.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    studentFeedbackIndex.form = studentFeedbackIndexForm
/**
* @see \App\Http\Controllers\Backend\StudentFeedbackController::studentFeedbackCreate
 * @see app/Http/Controllers/Backend/StudentFeedbackController.php:32
 * @route '/admin/studentFeedback/create'
 */
export const studentFeedbackCreate = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: studentFeedbackCreate.url(options),
    method: 'get',
})

studentFeedbackCreate.definition = {
    methods: ["get","head"],
    url: '/admin/studentFeedback/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\StudentFeedbackController::studentFeedbackCreate
 * @see app/Http/Controllers/Backend/StudentFeedbackController.php:32
 * @route '/admin/studentFeedback/create'
 */
studentFeedbackCreate.url = (options?: RouteQueryOptions) => {
    return studentFeedbackCreate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\StudentFeedbackController::studentFeedbackCreate
 * @see app/Http/Controllers/Backend/StudentFeedbackController.php:32
 * @route '/admin/studentFeedback/create'
 */
studentFeedbackCreate.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: studentFeedbackCreate.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\StudentFeedbackController::studentFeedbackCreate
 * @see app/Http/Controllers/Backend/StudentFeedbackController.php:32
 * @route '/admin/studentFeedback/create'
 */
studentFeedbackCreate.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: studentFeedbackCreate.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\StudentFeedbackController::studentFeedbackCreate
 * @see app/Http/Controllers/Backend/StudentFeedbackController.php:32
 * @route '/admin/studentFeedback/create'
 */
    const studentFeedbackCreateForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: studentFeedbackCreate.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\StudentFeedbackController::studentFeedbackCreate
 * @see app/Http/Controllers/Backend/StudentFeedbackController.php:32
 * @route '/admin/studentFeedback/create'
 */
        studentFeedbackCreateForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: studentFeedbackCreate.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\StudentFeedbackController::studentFeedbackCreate
 * @see app/Http/Controllers/Backend/StudentFeedbackController.php:32
 * @route '/admin/studentFeedback/create'
 */
        studentFeedbackCreateForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: studentFeedbackCreate.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    studentFeedbackCreate.form = studentFeedbackCreateForm
/**
* @see \App\Http\Controllers\Backend\StudentFeedbackController::studentFeedbackStore
 * @see app/Http/Controllers/Backend/StudentFeedbackController.php:40
 * @route '/admin/studentFeedback/store'
 */
export const studentFeedbackStore = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: studentFeedbackStore.url(options),
    method: 'post',
})

studentFeedbackStore.definition = {
    methods: ["post"],
    url: '/admin/studentFeedback/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\StudentFeedbackController::studentFeedbackStore
 * @see app/Http/Controllers/Backend/StudentFeedbackController.php:40
 * @route '/admin/studentFeedback/store'
 */
studentFeedbackStore.url = (options?: RouteQueryOptions) => {
    return studentFeedbackStore.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\StudentFeedbackController::studentFeedbackStore
 * @see app/Http/Controllers/Backend/StudentFeedbackController.php:40
 * @route '/admin/studentFeedback/store'
 */
studentFeedbackStore.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: studentFeedbackStore.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\StudentFeedbackController::studentFeedbackStore
 * @see app/Http/Controllers/Backend/StudentFeedbackController.php:40
 * @route '/admin/studentFeedback/store'
 */
    const studentFeedbackStoreForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: studentFeedbackStore.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\StudentFeedbackController::studentFeedbackStore
 * @see app/Http/Controllers/Backend/StudentFeedbackController.php:40
 * @route '/admin/studentFeedback/store'
 */
        studentFeedbackStoreForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: studentFeedbackStore.url(options),
            method: 'post',
        })
    
    studentFeedbackStore.form = studentFeedbackStoreForm
/**
* @see \App\Http\Controllers\Backend\StudentFeedbackController::studentFeedbackEdit
 * @see app/Http/Controllers/Backend/StudentFeedbackController.php:68
 * @route '/admin/studentFeedback/edit/{studentFeedback}'
 */
export const studentFeedbackEdit = (args: { studentFeedback: number | { id: number } } | [studentFeedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: studentFeedbackEdit.url(args, options),
    method: 'get',
})

studentFeedbackEdit.definition = {
    methods: ["get","head"],
    url: '/admin/studentFeedback/edit/{studentFeedback}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\StudentFeedbackController::studentFeedbackEdit
 * @see app/Http/Controllers/Backend/StudentFeedbackController.php:68
 * @route '/admin/studentFeedback/edit/{studentFeedback}'
 */
studentFeedbackEdit.url = (args: { studentFeedback: number | { id: number } } | [studentFeedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { studentFeedback: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { studentFeedback: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    studentFeedback: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        studentFeedback: typeof args.studentFeedback === 'object'
                ? args.studentFeedback.id
                : args.studentFeedback,
                }

    return studentFeedbackEdit.definition.url
            .replace('{studentFeedback}', parsedArgs.studentFeedback.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\StudentFeedbackController::studentFeedbackEdit
 * @see app/Http/Controllers/Backend/StudentFeedbackController.php:68
 * @route '/admin/studentFeedback/edit/{studentFeedback}'
 */
studentFeedbackEdit.get = (args: { studentFeedback: number | { id: number } } | [studentFeedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: studentFeedbackEdit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\StudentFeedbackController::studentFeedbackEdit
 * @see app/Http/Controllers/Backend/StudentFeedbackController.php:68
 * @route '/admin/studentFeedback/edit/{studentFeedback}'
 */
studentFeedbackEdit.head = (args: { studentFeedback: number | { id: number } } | [studentFeedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: studentFeedbackEdit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\StudentFeedbackController::studentFeedbackEdit
 * @see app/Http/Controllers/Backend/StudentFeedbackController.php:68
 * @route '/admin/studentFeedback/edit/{studentFeedback}'
 */
    const studentFeedbackEditForm = (args: { studentFeedback: number | { id: number } } | [studentFeedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: studentFeedbackEdit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\StudentFeedbackController::studentFeedbackEdit
 * @see app/Http/Controllers/Backend/StudentFeedbackController.php:68
 * @route '/admin/studentFeedback/edit/{studentFeedback}'
 */
        studentFeedbackEditForm.get = (args: { studentFeedback: number | { id: number } } | [studentFeedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: studentFeedbackEdit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\StudentFeedbackController::studentFeedbackEdit
 * @see app/Http/Controllers/Backend/StudentFeedbackController.php:68
 * @route '/admin/studentFeedback/edit/{studentFeedback}'
 */
        studentFeedbackEditForm.head = (args: { studentFeedback: number | { id: number } } | [studentFeedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: studentFeedbackEdit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    studentFeedbackEdit.form = studentFeedbackEditForm
/**
* @see \App\Http\Controllers\Backend\StudentFeedbackController::studentFeedbackUpdate
 * @see app/Http/Controllers/Backend/StudentFeedbackController.php:78
 * @route '/admin/studentFeedback/update/{studentFeedback}'
 */
export const studentFeedbackUpdate = (args: { studentFeedback: number | { id: number } } | [studentFeedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: studentFeedbackUpdate.url(args, options),
    method: 'post',
})

studentFeedbackUpdate.definition = {
    methods: ["post"],
    url: '/admin/studentFeedback/update/{studentFeedback}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\StudentFeedbackController::studentFeedbackUpdate
 * @see app/Http/Controllers/Backend/StudentFeedbackController.php:78
 * @route '/admin/studentFeedback/update/{studentFeedback}'
 */
studentFeedbackUpdate.url = (args: { studentFeedback: number | { id: number } } | [studentFeedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { studentFeedback: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { studentFeedback: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    studentFeedback: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        studentFeedback: typeof args.studentFeedback === 'object'
                ? args.studentFeedback.id
                : args.studentFeedback,
                }

    return studentFeedbackUpdate.definition.url
            .replace('{studentFeedback}', parsedArgs.studentFeedback.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\StudentFeedbackController::studentFeedbackUpdate
 * @see app/Http/Controllers/Backend/StudentFeedbackController.php:78
 * @route '/admin/studentFeedback/update/{studentFeedback}'
 */
studentFeedbackUpdate.post = (args: { studentFeedback: number | { id: number } } | [studentFeedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: studentFeedbackUpdate.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\StudentFeedbackController::studentFeedbackUpdate
 * @see app/Http/Controllers/Backend/StudentFeedbackController.php:78
 * @route '/admin/studentFeedback/update/{studentFeedback}'
 */
    const studentFeedbackUpdateForm = (args: { studentFeedback: number | { id: number } } | [studentFeedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: studentFeedbackUpdate.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\StudentFeedbackController::studentFeedbackUpdate
 * @see app/Http/Controllers/Backend/StudentFeedbackController.php:78
 * @route '/admin/studentFeedback/update/{studentFeedback}'
 */
        studentFeedbackUpdateForm.post = (args: { studentFeedback: number | { id: number } } | [studentFeedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: studentFeedbackUpdate.url(args, options),
            method: 'post',
        })
    
    studentFeedbackUpdate.form = studentFeedbackUpdateForm
/**
* @see \App\Http\Controllers\Backend\StudentFeedbackController::studentFeedbackDestroy
 * @see app/Http/Controllers/Backend/StudentFeedbackController.php:109
 * @route '/admin/studentFeedback/delete/{studentFeedback}'
 */
export const studentFeedbackDestroy = (args: { studentFeedback: number | { id: number } } | [studentFeedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: studentFeedbackDestroy.url(args, options),
    method: 'delete',
})

studentFeedbackDestroy.definition = {
    methods: ["delete"],
    url: '/admin/studentFeedback/delete/{studentFeedback}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Backend\StudentFeedbackController::studentFeedbackDestroy
 * @see app/Http/Controllers/Backend/StudentFeedbackController.php:109
 * @route '/admin/studentFeedback/delete/{studentFeedback}'
 */
studentFeedbackDestroy.url = (args: { studentFeedback: number | { id: number } } | [studentFeedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { studentFeedback: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { studentFeedback: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    studentFeedback: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        studentFeedback: typeof args.studentFeedback === 'object'
                ? args.studentFeedback.id
                : args.studentFeedback,
                }

    return studentFeedbackDestroy.definition.url
            .replace('{studentFeedback}', parsedArgs.studentFeedback.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\StudentFeedbackController::studentFeedbackDestroy
 * @see app/Http/Controllers/Backend/StudentFeedbackController.php:109
 * @route '/admin/studentFeedback/delete/{studentFeedback}'
 */
studentFeedbackDestroy.delete = (args: { studentFeedback: number | { id: number } } | [studentFeedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: studentFeedbackDestroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Backend\StudentFeedbackController::studentFeedbackDestroy
 * @see app/Http/Controllers/Backend/StudentFeedbackController.php:109
 * @route '/admin/studentFeedback/delete/{studentFeedback}'
 */
    const studentFeedbackDestroyForm = (args: { studentFeedback: number | { id: number } } | [studentFeedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: studentFeedbackDestroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\StudentFeedbackController::studentFeedbackDestroy
 * @see app/Http/Controllers/Backend/StudentFeedbackController.php:109
 * @route '/admin/studentFeedback/delete/{studentFeedback}'
 */
        studentFeedbackDestroyForm.delete = (args: { studentFeedback: number | { id: number } } | [studentFeedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: studentFeedbackDestroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    studentFeedbackDestroy.form = studentFeedbackDestroyForm
/**
* @see \App\Http\Controllers\Backend\CurriculumController::curriculumIndex
 * @see app/Http/Controllers/Backend/CurriculumController.php:21
 * @route '/admin/curriculum'
 */
export const curriculumIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: curriculumIndex.url(options),
    method: 'get',
})

curriculumIndex.definition = {
    methods: ["get","head"],
    url: '/admin/curriculum',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\CurriculumController::curriculumIndex
 * @see app/Http/Controllers/Backend/CurriculumController.php:21
 * @route '/admin/curriculum'
 */
curriculumIndex.url = (options?: RouteQueryOptions) => {
    return curriculumIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CurriculumController::curriculumIndex
 * @see app/Http/Controllers/Backend/CurriculumController.php:21
 * @route '/admin/curriculum'
 */
curriculumIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: curriculumIndex.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\CurriculumController::curriculumIndex
 * @see app/Http/Controllers/Backend/CurriculumController.php:21
 * @route '/admin/curriculum'
 */
curriculumIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: curriculumIndex.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\CurriculumController::curriculumIndex
 * @see app/Http/Controllers/Backend/CurriculumController.php:21
 * @route '/admin/curriculum'
 */
    const curriculumIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: curriculumIndex.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\CurriculumController::curriculumIndex
 * @see app/Http/Controllers/Backend/CurriculumController.php:21
 * @route '/admin/curriculum'
 */
        curriculumIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: curriculumIndex.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\CurriculumController::curriculumIndex
 * @see app/Http/Controllers/Backend/CurriculumController.php:21
 * @route '/admin/curriculum'
 */
        curriculumIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: curriculumIndex.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    curriculumIndex.form = curriculumIndexForm
/**
* @see \App\Http\Controllers\Backend\CurriculumController::curriculumCreate
 * @see app/Http/Controllers/Backend/CurriculumController.php:32
 * @route '/admin/curriculum/create'
 */
export const curriculumCreate = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: curriculumCreate.url(options),
    method: 'get',
})

curriculumCreate.definition = {
    methods: ["get","head"],
    url: '/admin/curriculum/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\CurriculumController::curriculumCreate
 * @see app/Http/Controllers/Backend/CurriculumController.php:32
 * @route '/admin/curriculum/create'
 */
curriculumCreate.url = (options?: RouteQueryOptions) => {
    return curriculumCreate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CurriculumController::curriculumCreate
 * @see app/Http/Controllers/Backend/CurriculumController.php:32
 * @route '/admin/curriculum/create'
 */
curriculumCreate.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: curriculumCreate.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\CurriculumController::curriculumCreate
 * @see app/Http/Controllers/Backend/CurriculumController.php:32
 * @route '/admin/curriculum/create'
 */
curriculumCreate.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: curriculumCreate.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\CurriculumController::curriculumCreate
 * @see app/Http/Controllers/Backend/CurriculumController.php:32
 * @route '/admin/curriculum/create'
 */
    const curriculumCreateForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: curriculumCreate.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\CurriculumController::curriculumCreate
 * @see app/Http/Controllers/Backend/CurriculumController.php:32
 * @route '/admin/curriculum/create'
 */
        curriculumCreateForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: curriculumCreate.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\CurriculumController::curriculumCreate
 * @see app/Http/Controllers/Backend/CurriculumController.php:32
 * @route '/admin/curriculum/create'
 */
        curriculumCreateForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: curriculumCreate.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    curriculumCreate.form = curriculumCreateForm
/**
* @see \App\Http\Controllers\Backend\CurriculumController::curriculumStore
 * @see app/Http/Controllers/Backend/CurriculumController.php:43
 * @route '/admin/curriculum/store'
 */
export const curriculumStore = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: curriculumStore.url(options),
    method: 'post',
})

curriculumStore.definition = {
    methods: ["post"],
    url: '/admin/curriculum/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\CurriculumController::curriculumStore
 * @see app/Http/Controllers/Backend/CurriculumController.php:43
 * @route '/admin/curriculum/store'
 */
curriculumStore.url = (options?: RouteQueryOptions) => {
    return curriculumStore.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CurriculumController::curriculumStore
 * @see app/Http/Controllers/Backend/CurriculumController.php:43
 * @route '/admin/curriculum/store'
 */
curriculumStore.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: curriculumStore.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\CurriculumController::curriculumStore
 * @see app/Http/Controllers/Backend/CurriculumController.php:43
 * @route '/admin/curriculum/store'
 */
    const curriculumStoreForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: curriculumStore.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\CurriculumController::curriculumStore
 * @see app/Http/Controllers/Backend/CurriculumController.php:43
 * @route '/admin/curriculum/store'
 */
        curriculumStoreForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: curriculumStore.url(options),
            method: 'post',
        })
    
    curriculumStore.form = curriculumStoreForm
/**
* @see \App\Http\Controllers\Backend\CurriculumController::curriculumEdit
 * @see app/Http/Controllers/Backend/CurriculumController.php:64
 * @route '/admin/curriculum/edit/{curriculum}'
 */
export const curriculumEdit = (args: { curriculum: number | { id: number } } | [curriculum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: curriculumEdit.url(args, options),
    method: 'get',
})

curriculumEdit.definition = {
    methods: ["get","head"],
    url: '/admin/curriculum/edit/{curriculum}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\CurriculumController::curriculumEdit
 * @see app/Http/Controllers/Backend/CurriculumController.php:64
 * @route '/admin/curriculum/edit/{curriculum}'
 */
curriculumEdit.url = (args: { curriculum: number | { id: number } } | [curriculum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { curriculum: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { curriculum: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    curriculum: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        curriculum: typeof args.curriculum === 'object'
                ? args.curriculum.id
                : args.curriculum,
                }

    return curriculumEdit.definition.url
            .replace('{curriculum}', parsedArgs.curriculum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CurriculumController::curriculumEdit
 * @see app/Http/Controllers/Backend/CurriculumController.php:64
 * @route '/admin/curriculum/edit/{curriculum}'
 */
curriculumEdit.get = (args: { curriculum: number | { id: number } } | [curriculum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: curriculumEdit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\CurriculumController::curriculumEdit
 * @see app/Http/Controllers/Backend/CurriculumController.php:64
 * @route '/admin/curriculum/edit/{curriculum}'
 */
curriculumEdit.head = (args: { curriculum: number | { id: number } } | [curriculum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: curriculumEdit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\CurriculumController::curriculumEdit
 * @see app/Http/Controllers/Backend/CurriculumController.php:64
 * @route '/admin/curriculum/edit/{curriculum}'
 */
    const curriculumEditForm = (args: { curriculum: number | { id: number } } | [curriculum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: curriculumEdit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\CurriculumController::curriculumEdit
 * @see app/Http/Controllers/Backend/CurriculumController.php:64
 * @route '/admin/curriculum/edit/{curriculum}'
 */
        curriculumEditForm.get = (args: { curriculum: number | { id: number } } | [curriculum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: curriculumEdit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\CurriculumController::curriculumEdit
 * @see app/Http/Controllers/Backend/CurriculumController.php:64
 * @route '/admin/curriculum/edit/{curriculum}'
 */
        curriculumEditForm.head = (args: { curriculum: number | { id: number } } | [curriculum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: curriculumEdit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    curriculumEdit.form = curriculumEditForm
/**
* @see \App\Http\Controllers\Backend\CurriculumController::curriculumUpdate
 * @see app/Http/Controllers/Backend/CurriculumController.php:77
 * @route '/admin/curriculum/update/{curriculum}'
 */
export const curriculumUpdate = (args: { curriculum: number | { id: number } } | [curriculum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: curriculumUpdate.url(args, options),
    method: 'put',
})

curriculumUpdate.definition = {
    methods: ["put"],
    url: '/admin/curriculum/update/{curriculum}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Backend\CurriculumController::curriculumUpdate
 * @see app/Http/Controllers/Backend/CurriculumController.php:77
 * @route '/admin/curriculum/update/{curriculum}'
 */
curriculumUpdate.url = (args: { curriculum: number | { id: number } } | [curriculum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { curriculum: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { curriculum: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    curriculum: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        curriculum: typeof args.curriculum === 'object'
                ? args.curriculum.id
                : args.curriculum,
                }

    return curriculumUpdate.definition.url
            .replace('{curriculum}', parsedArgs.curriculum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CurriculumController::curriculumUpdate
 * @see app/Http/Controllers/Backend/CurriculumController.php:77
 * @route '/admin/curriculum/update/{curriculum}'
 */
curriculumUpdate.put = (args: { curriculum: number | { id: number } } | [curriculum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: curriculumUpdate.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Backend\CurriculumController::curriculumUpdate
 * @see app/Http/Controllers/Backend/CurriculumController.php:77
 * @route '/admin/curriculum/update/{curriculum}'
 */
    const curriculumUpdateForm = (args: { curriculum: number | { id: number } } | [curriculum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: curriculumUpdate.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\CurriculumController::curriculumUpdate
 * @see app/Http/Controllers/Backend/CurriculumController.php:77
 * @route '/admin/curriculum/update/{curriculum}'
 */
        curriculumUpdateForm.put = (args: { curriculum: number | { id: number } } | [curriculum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: curriculumUpdate.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    curriculumUpdate.form = curriculumUpdateForm
/**
* @see \App\Http\Controllers\Backend\CurriculumController::curriculumDestroy
 * @see app/Http/Controllers/Backend/CurriculumController.php:97
 * @route '/admin/curriculum/delete/{curriculum}'
 */
export const curriculumDestroy = (args: { curriculum: number | { id: number } } | [curriculum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: curriculumDestroy.url(args, options),
    method: 'delete',
})

curriculumDestroy.definition = {
    methods: ["delete"],
    url: '/admin/curriculum/delete/{curriculum}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Backend\CurriculumController::curriculumDestroy
 * @see app/Http/Controllers/Backend/CurriculumController.php:97
 * @route '/admin/curriculum/delete/{curriculum}'
 */
curriculumDestroy.url = (args: { curriculum: number | { id: number } } | [curriculum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { curriculum: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { curriculum: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    curriculum: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        curriculum: typeof args.curriculum === 'object'
                ? args.curriculum.id
                : args.curriculum,
                }

    return curriculumDestroy.definition.url
            .replace('{curriculum}', parsedArgs.curriculum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CurriculumController::curriculumDestroy
 * @see app/Http/Controllers/Backend/CurriculumController.php:97
 * @route '/admin/curriculum/delete/{curriculum}'
 */
curriculumDestroy.delete = (args: { curriculum: number | { id: number } } | [curriculum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: curriculumDestroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Backend\CurriculumController::curriculumDestroy
 * @see app/Http/Controllers/Backend/CurriculumController.php:97
 * @route '/admin/curriculum/delete/{curriculum}'
 */
    const curriculumDestroyForm = (args: { curriculum: number | { id: number } } | [curriculum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: curriculumDestroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\CurriculumController::curriculumDestroy
 * @see app/Http/Controllers/Backend/CurriculumController.php:97
 * @route '/admin/curriculum/delete/{curriculum}'
 */
        curriculumDestroyForm.delete = (args: { curriculum: number | { id: number } } | [curriculum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: curriculumDestroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    curriculumDestroy.form = curriculumDestroyForm
/**
* @see \App\Http\Controllers\Backend\CurriculumSyllabusController::curriculumSyllabusStore
 * @see app/Http/Controllers/Backend/CurriculumSyllabusController.php:17
 * @route '/admin/curriculum-syllabus/store'
 */
export const curriculumSyllabusStore = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: curriculumSyllabusStore.url(options),
    method: 'post',
})

curriculumSyllabusStore.definition = {
    methods: ["post"],
    url: '/admin/curriculum-syllabus/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\CurriculumSyllabusController::curriculumSyllabusStore
 * @see app/Http/Controllers/Backend/CurriculumSyllabusController.php:17
 * @route '/admin/curriculum-syllabus/store'
 */
curriculumSyllabusStore.url = (options?: RouteQueryOptions) => {
    return curriculumSyllabusStore.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CurriculumSyllabusController::curriculumSyllabusStore
 * @see app/Http/Controllers/Backend/CurriculumSyllabusController.php:17
 * @route '/admin/curriculum-syllabus/store'
 */
curriculumSyllabusStore.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: curriculumSyllabusStore.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\CurriculumSyllabusController::curriculumSyllabusStore
 * @see app/Http/Controllers/Backend/CurriculumSyllabusController.php:17
 * @route '/admin/curriculum-syllabus/store'
 */
    const curriculumSyllabusStoreForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: curriculumSyllabusStore.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\CurriculumSyllabusController::curriculumSyllabusStore
 * @see app/Http/Controllers/Backend/CurriculumSyllabusController.php:17
 * @route '/admin/curriculum-syllabus/store'
 */
        curriculumSyllabusStoreForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: curriculumSyllabusStore.url(options),
            method: 'post',
        })
    
    curriculumSyllabusStore.form = curriculumSyllabusStoreForm
/**
* @see \App\Http\Controllers\Backend\CurriculumSyllabusController::curriculumSyllabusUpdate
 * @see app/Http/Controllers/Backend/CurriculumSyllabusController.php:38
 * @route '/admin/curriculum-syllabus/update/{curriculumSyllabus}'
 */
export const curriculumSyllabusUpdate = (args: { curriculumSyllabus: number | { id: number } } | [curriculumSyllabus: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: curriculumSyllabusUpdate.url(args, options),
    method: 'put',
})

curriculumSyllabusUpdate.definition = {
    methods: ["put"],
    url: '/admin/curriculum-syllabus/update/{curriculumSyllabus}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Backend\CurriculumSyllabusController::curriculumSyllabusUpdate
 * @see app/Http/Controllers/Backend/CurriculumSyllabusController.php:38
 * @route '/admin/curriculum-syllabus/update/{curriculumSyllabus}'
 */
curriculumSyllabusUpdate.url = (args: { curriculumSyllabus: number | { id: number } } | [curriculumSyllabus: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { curriculumSyllabus: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { curriculumSyllabus: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    curriculumSyllabus: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        curriculumSyllabus: typeof args.curriculumSyllabus === 'object'
                ? args.curriculumSyllabus.id
                : args.curriculumSyllabus,
                }

    return curriculumSyllabusUpdate.definition.url
            .replace('{curriculumSyllabus}', parsedArgs.curriculumSyllabus.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CurriculumSyllabusController::curriculumSyllabusUpdate
 * @see app/Http/Controllers/Backend/CurriculumSyllabusController.php:38
 * @route '/admin/curriculum-syllabus/update/{curriculumSyllabus}'
 */
curriculumSyllabusUpdate.put = (args: { curriculumSyllabus: number | { id: number } } | [curriculumSyllabus: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: curriculumSyllabusUpdate.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Backend\CurriculumSyllabusController::curriculumSyllabusUpdate
 * @see app/Http/Controllers/Backend/CurriculumSyllabusController.php:38
 * @route '/admin/curriculum-syllabus/update/{curriculumSyllabus}'
 */
    const curriculumSyllabusUpdateForm = (args: { curriculumSyllabus: number | { id: number } } | [curriculumSyllabus: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: curriculumSyllabusUpdate.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\CurriculumSyllabusController::curriculumSyllabusUpdate
 * @see app/Http/Controllers/Backend/CurriculumSyllabusController.php:38
 * @route '/admin/curriculum-syllabus/update/{curriculumSyllabus}'
 */
        curriculumSyllabusUpdateForm.put = (args: { curriculumSyllabus: number | { id: number } } | [curriculumSyllabus: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: curriculumSyllabusUpdate.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    curriculumSyllabusUpdate.form = curriculumSyllabusUpdateForm
/**
* @see \App\Http\Controllers\Backend\CurriculumSyllabusController::curriculumSyllabusDestroy
 * @see app/Http/Controllers/Backend/CurriculumSyllabusController.php:57
 * @route '/admin/curriculum-syllabus/delete/{curriculumSyllabus}'
 */
export const curriculumSyllabusDestroy = (args: { curriculumSyllabus: number | { id: number } } | [curriculumSyllabus: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: curriculumSyllabusDestroy.url(args, options),
    method: 'delete',
})

curriculumSyllabusDestroy.definition = {
    methods: ["delete"],
    url: '/admin/curriculum-syllabus/delete/{curriculumSyllabus}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Backend\CurriculumSyllabusController::curriculumSyllabusDestroy
 * @see app/Http/Controllers/Backend/CurriculumSyllabusController.php:57
 * @route '/admin/curriculum-syllabus/delete/{curriculumSyllabus}'
 */
curriculumSyllabusDestroy.url = (args: { curriculumSyllabus: number | { id: number } } | [curriculumSyllabus: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { curriculumSyllabus: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { curriculumSyllabus: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    curriculumSyllabus: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        curriculumSyllabus: typeof args.curriculumSyllabus === 'object'
                ? args.curriculumSyllabus.id
                : args.curriculumSyllabus,
                }

    return curriculumSyllabusDestroy.definition.url
            .replace('{curriculumSyllabus}', parsedArgs.curriculumSyllabus.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CurriculumSyllabusController::curriculumSyllabusDestroy
 * @see app/Http/Controllers/Backend/CurriculumSyllabusController.php:57
 * @route '/admin/curriculum-syllabus/delete/{curriculumSyllabus}'
 */
curriculumSyllabusDestroy.delete = (args: { curriculumSyllabus: number | { id: number } } | [curriculumSyllabus: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: curriculumSyllabusDestroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Backend\CurriculumSyllabusController::curriculumSyllabusDestroy
 * @see app/Http/Controllers/Backend/CurriculumSyllabusController.php:57
 * @route '/admin/curriculum-syllabus/delete/{curriculumSyllabus}'
 */
    const curriculumSyllabusDestroyForm = (args: { curriculumSyllabus: number | { id: number } } | [curriculumSyllabus: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: curriculumSyllabusDestroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\CurriculumSyllabusController::curriculumSyllabusDestroy
 * @see app/Http/Controllers/Backend/CurriculumSyllabusController.php:57
 * @route '/admin/curriculum-syllabus/delete/{curriculumSyllabus}'
 */
        curriculumSyllabusDestroyForm.delete = (args: { curriculumSyllabus: number | { id: number } } | [curriculumSyllabus: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: curriculumSyllabusDestroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    curriculumSyllabusDestroy.form = curriculumSyllabusDestroyForm
/**
* @see \App\Http\Controllers\Backend\FacultyController::facultyIndex
 * @see app/Http/Controllers/Backend/FacultyController.php:22
 * @route '/admin/faculty'
 */
export const facultyIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: facultyIndex.url(options),
    method: 'get',
})

facultyIndex.definition = {
    methods: ["get","head"],
    url: '/admin/faculty',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\FacultyController::facultyIndex
 * @see app/Http/Controllers/Backend/FacultyController.php:22
 * @route '/admin/faculty'
 */
facultyIndex.url = (options?: RouteQueryOptions) => {
    return facultyIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\FacultyController::facultyIndex
 * @see app/Http/Controllers/Backend/FacultyController.php:22
 * @route '/admin/faculty'
 */
facultyIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: facultyIndex.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\FacultyController::facultyIndex
 * @see app/Http/Controllers/Backend/FacultyController.php:22
 * @route '/admin/faculty'
 */
facultyIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: facultyIndex.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\FacultyController::facultyIndex
 * @see app/Http/Controllers/Backend/FacultyController.php:22
 * @route '/admin/faculty'
 */
    const facultyIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: facultyIndex.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\FacultyController::facultyIndex
 * @see app/Http/Controllers/Backend/FacultyController.php:22
 * @route '/admin/faculty'
 */
        facultyIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: facultyIndex.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\FacultyController::facultyIndex
 * @see app/Http/Controllers/Backend/FacultyController.php:22
 * @route '/admin/faculty'
 */
        facultyIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: facultyIndex.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    facultyIndex.form = facultyIndexForm
/**
* @see \App\Http\Controllers\Backend\FacultyController::facultyCreate
 * @see app/Http/Controllers/Backend/FacultyController.php:33
 * @route '/admin/faculty/create'
 */
export const facultyCreate = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: facultyCreate.url(options),
    method: 'get',
})

facultyCreate.definition = {
    methods: ["get","head"],
    url: '/admin/faculty/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\FacultyController::facultyCreate
 * @see app/Http/Controllers/Backend/FacultyController.php:33
 * @route '/admin/faculty/create'
 */
facultyCreate.url = (options?: RouteQueryOptions) => {
    return facultyCreate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\FacultyController::facultyCreate
 * @see app/Http/Controllers/Backend/FacultyController.php:33
 * @route '/admin/faculty/create'
 */
facultyCreate.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: facultyCreate.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\FacultyController::facultyCreate
 * @see app/Http/Controllers/Backend/FacultyController.php:33
 * @route '/admin/faculty/create'
 */
facultyCreate.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: facultyCreate.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\FacultyController::facultyCreate
 * @see app/Http/Controllers/Backend/FacultyController.php:33
 * @route '/admin/faculty/create'
 */
    const facultyCreateForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: facultyCreate.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\FacultyController::facultyCreate
 * @see app/Http/Controllers/Backend/FacultyController.php:33
 * @route '/admin/faculty/create'
 */
        facultyCreateForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: facultyCreate.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\FacultyController::facultyCreate
 * @see app/Http/Controllers/Backend/FacultyController.php:33
 * @route '/admin/faculty/create'
 */
        facultyCreateForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: facultyCreate.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    facultyCreate.form = facultyCreateForm
/**
* @see \App\Http\Controllers\Backend\FacultyController::facultyStore
 * @see app/Http/Controllers/Backend/FacultyController.php:41
 * @route '/admin/faculty/store'
 */
export const facultyStore = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: facultyStore.url(options),
    method: 'post',
})

facultyStore.definition = {
    methods: ["post"],
    url: '/admin/faculty/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\FacultyController::facultyStore
 * @see app/Http/Controllers/Backend/FacultyController.php:41
 * @route '/admin/faculty/store'
 */
facultyStore.url = (options?: RouteQueryOptions) => {
    return facultyStore.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\FacultyController::facultyStore
 * @see app/Http/Controllers/Backend/FacultyController.php:41
 * @route '/admin/faculty/store'
 */
facultyStore.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: facultyStore.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\FacultyController::facultyStore
 * @see app/Http/Controllers/Backend/FacultyController.php:41
 * @route '/admin/faculty/store'
 */
    const facultyStoreForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: facultyStore.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\FacultyController::facultyStore
 * @see app/Http/Controllers/Backend/FacultyController.php:41
 * @route '/admin/faculty/store'
 */
        facultyStoreForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: facultyStore.url(options),
            method: 'post',
        })
    
    facultyStore.form = facultyStoreForm
/**
* @see \App\Http\Controllers\Backend\FacultyController::facultyEdit
 * @see app/Http/Controllers/Backend/FacultyController.php:73
 * @route '/admin/faculty/edit/{faculty}'
 */
export const facultyEdit = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: facultyEdit.url(args, options),
    method: 'get',
})

facultyEdit.definition = {
    methods: ["get","head"],
    url: '/admin/faculty/edit/{faculty}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\FacultyController::facultyEdit
 * @see app/Http/Controllers/Backend/FacultyController.php:73
 * @route '/admin/faculty/edit/{faculty}'
 */
facultyEdit.url = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { faculty: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { faculty: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    faculty: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        faculty: typeof args.faculty === 'object'
                ? args.faculty.id
                : args.faculty,
                }

    return facultyEdit.definition.url
            .replace('{faculty}', parsedArgs.faculty.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\FacultyController::facultyEdit
 * @see app/Http/Controllers/Backend/FacultyController.php:73
 * @route '/admin/faculty/edit/{faculty}'
 */
facultyEdit.get = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: facultyEdit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\FacultyController::facultyEdit
 * @see app/Http/Controllers/Backend/FacultyController.php:73
 * @route '/admin/faculty/edit/{faculty}'
 */
facultyEdit.head = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: facultyEdit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\FacultyController::facultyEdit
 * @see app/Http/Controllers/Backend/FacultyController.php:73
 * @route '/admin/faculty/edit/{faculty}'
 */
    const facultyEditForm = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: facultyEdit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\FacultyController::facultyEdit
 * @see app/Http/Controllers/Backend/FacultyController.php:73
 * @route '/admin/faculty/edit/{faculty}'
 */
        facultyEditForm.get = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: facultyEdit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\FacultyController::facultyEdit
 * @see app/Http/Controllers/Backend/FacultyController.php:73
 * @route '/admin/faculty/edit/{faculty}'
 */
        facultyEditForm.head = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: facultyEdit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    facultyEdit.form = facultyEditForm
/**
* @see \App\Http\Controllers\Backend\FacultyController::facultyUpdate
 * @see app/Http/Controllers/Backend/FacultyController.php:83
 * @route '/admin/faculty/update/{faculty}'
 */
export const facultyUpdate = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: facultyUpdate.url(args, options),
    method: 'post',
})

facultyUpdate.definition = {
    methods: ["post"],
    url: '/admin/faculty/update/{faculty}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\FacultyController::facultyUpdate
 * @see app/Http/Controllers/Backend/FacultyController.php:83
 * @route '/admin/faculty/update/{faculty}'
 */
facultyUpdate.url = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { faculty: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { faculty: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    faculty: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        faculty: typeof args.faculty === 'object'
                ? args.faculty.id
                : args.faculty,
                }

    return facultyUpdate.definition.url
            .replace('{faculty}', parsedArgs.faculty.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\FacultyController::facultyUpdate
 * @see app/Http/Controllers/Backend/FacultyController.php:83
 * @route '/admin/faculty/update/{faculty}'
 */
facultyUpdate.post = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: facultyUpdate.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\FacultyController::facultyUpdate
 * @see app/Http/Controllers/Backend/FacultyController.php:83
 * @route '/admin/faculty/update/{faculty}'
 */
    const facultyUpdateForm = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: facultyUpdate.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\FacultyController::facultyUpdate
 * @see app/Http/Controllers/Backend/FacultyController.php:83
 * @route '/admin/faculty/update/{faculty}'
 */
        facultyUpdateForm.post = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: facultyUpdate.url(args, options),
            method: 'post',
        })
    
    facultyUpdate.form = facultyUpdateForm
/**
* @see \App\Http\Controllers\Backend\FacultyController::facultyDestroy
 * @see app/Http/Controllers/Backend/FacultyController.php:117
 * @route '/admin/faculty/delete/{faculty}'
 */
export const facultyDestroy = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: facultyDestroy.url(args, options),
    method: 'delete',
})

facultyDestroy.definition = {
    methods: ["delete"],
    url: '/admin/faculty/delete/{faculty}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Backend\FacultyController::facultyDestroy
 * @see app/Http/Controllers/Backend/FacultyController.php:117
 * @route '/admin/faculty/delete/{faculty}'
 */
facultyDestroy.url = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { faculty: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { faculty: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    faculty: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        faculty: typeof args.faculty === 'object'
                ? args.faculty.id
                : args.faculty,
                }

    return facultyDestroy.definition.url
            .replace('{faculty}', parsedArgs.faculty.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\FacultyController::facultyDestroy
 * @see app/Http/Controllers/Backend/FacultyController.php:117
 * @route '/admin/faculty/delete/{faculty}'
 */
facultyDestroy.delete = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: facultyDestroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Backend\FacultyController::facultyDestroy
 * @see app/Http/Controllers/Backend/FacultyController.php:117
 * @route '/admin/faculty/delete/{faculty}'
 */
    const facultyDestroyForm = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: facultyDestroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\FacultyController::facultyDestroy
 * @see app/Http/Controllers/Backend/FacultyController.php:117
 * @route '/admin/faculty/delete/{faculty}'
 */
        facultyDestroyForm.delete = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: facultyDestroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    facultyDestroy.form = facultyDestroyForm
/**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::boardMemberMessageIndex
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:21
 * @route '/admin/boardMemberMessage'
 */
export const boardMemberMessageIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: boardMemberMessageIndex.url(options),
    method: 'get',
})

boardMemberMessageIndex.definition = {
    methods: ["get","head"],
    url: '/admin/boardMemberMessage',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::boardMemberMessageIndex
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:21
 * @route '/admin/boardMemberMessage'
 */
boardMemberMessageIndex.url = (options?: RouteQueryOptions) => {
    return boardMemberMessageIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::boardMemberMessageIndex
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:21
 * @route '/admin/boardMemberMessage'
 */
boardMemberMessageIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: boardMemberMessageIndex.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::boardMemberMessageIndex
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:21
 * @route '/admin/boardMemberMessage'
 */
boardMemberMessageIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: boardMemberMessageIndex.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::boardMemberMessageIndex
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:21
 * @route '/admin/boardMemberMessage'
 */
    const boardMemberMessageIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: boardMemberMessageIndex.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::boardMemberMessageIndex
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:21
 * @route '/admin/boardMemberMessage'
 */
        boardMemberMessageIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: boardMemberMessageIndex.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::boardMemberMessageIndex
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:21
 * @route '/admin/boardMemberMessage'
 */
        boardMemberMessageIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: boardMemberMessageIndex.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    boardMemberMessageIndex.form = boardMemberMessageIndexForm
/**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::boardMemberMessageCreate
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:32
 * @route '/admin/boardMemberMessage/create'
 */
export const boardMemberMessageCreate = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: boardMemberMessageCreate.url(options),
    method: 'get',
})

boardMemberMessageCreate.definition = {
    methods: ["get","head"],
    url: '/admin/boardMemberMessage/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::boardMemberMessageCreate
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:32
 * @route '/admin/boardMemberMessage/create'
 */
boardMemberMessageCreate.url = (options?: RouteQueryOptions) => {
    return boardMemberMessageCreate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::boardMemberMessageCreate
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:32
 * @route '/admin/boardMemberMessage/create'
 */
boardMemberMessageCreate.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: boardMemberMessageCreate.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::boardMemberMessageCreate
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:32
 * @route '/admin/boardMemberMessage/create'
 */
boardMemberMessageCreate.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: boardMemberMessageCreate.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::boardMemberMessageCreate
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:32
 * @route '/admin/boardMemberMessage/create'
 */
    const boardMemberMessageCreateForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: boardMemberMessageCreate.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::boardMemberMessageCreate
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:32
 * @route '/admin/boardMemberMessage/create'
 */
        boardMemberMessageCreateForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: boardMemberMessageCreate.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::boardMemberMessageCreate
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:32
 * @route '/admin/boardMemberMessage/create'
 */
        boardMemberMessageCreateForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: boardMemberMessageCreate.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    boardMemberMessageCreate.form = boardMemberMessageCreateForm
/**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::boardMemberMessageStore
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:40
 * @route '/admin/boardMemberMessage/store'
 */
export const boardMemberMessageStore = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: boardMemberMessageStore.url(options),
    method: 'post',
})

boardMemberMessageStore.definition = {
    methods: ["post"],
    url: '/admin/boardMemberMessage/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::boardMemberMessageStore
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:40
 * @route '/admin/boardMemberMessage/store'
 */
boardMemberMessageStore.url = (options?: RouteQueryOptions) => {
    return boardMemberMessageStore.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::boardMemberMessageStore
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:40
 * @route '/admin/boardMemberMessage/store'
 */
boardMemberMessageStore.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: boardMemberMessageStore.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::boardMemberMessageStore
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:40
 * @route '/admin/boardMemberMessage/store'
 */
    const boardMemberMessageStoreForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: boardMemberMessageStore.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::boardMemberMessageStore
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:40
 * @route '/admin/boardMemberMessage/store'
 */
        boardMemberMessageStoreForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: boardMemberMessageStore.url(options),
            method: 'post',
        })
    
    boardMemberMessageStore.form = boardMemberMessageStoreForm
/**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::boardMemberMessageEdit
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:68
 * @route '/admin/boardMemberMessage/edit/{boardMemberMessage}'
 */
export const boardMemberMessageEdit = (args: { boardMemberMessage: number | { id: number } } | [boardMemberMessage: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: boardMemberMessageEdit.url(args, options),
    method: 'get',
})

boardMemberMessageEdit.definition = {
    methods: ["get","head"],
    url: '/admin/boardMemberMessage/edit/{boardMemberMessage}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::boardMemberMessageEdit
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:68
 * @route '/admin/boardMemberMessage/edit/{boardMemberMessage}'
 */
boardMemberMessageEdit.url = (args: { boardMemberMessage: number | { id: number } } | [boardMemberMessage: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { boardMemberMessage: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { boardMemberMessage: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    boardMemberMessage: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        boardMemberMessage: typeof args.boardMemberMessage === 'object'
                ? args.boardMemberMessage.id
                : args.boardMemberMessage,
                }

    return boardMemberMessageEdit.definition.url
            .replace('{boardMemberMessage}', parsedArgs.boardMemberMessage.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::boardMemberMessageEdit
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:68
 * @route '/admin/boardMemberMessage/edit/{boardMemberMessage}'
 */
boardMemberMessageEdit.get = (args: { boardMemberMessage: number | { id: number } } | [boardMemberMessage: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: boardMemberMessageEdit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::boardMemberMessageEdit
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:68
 * @route '/admin/boardMemberMessage/edit/{boardMemberMessage}'
 */
boardMemberMessageEdit.head = (args: { boardMemberMessage: number | { id: number } } | [boardMemberMessage: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: boardMemberMessageEdit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::boardMemberMessageEdit
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:68
 * @route '/admin/boardMemberMessage/edit/{boardMemberMessage}'
 */
    const boardMemberMessageEditForm = (args: { boardMemberMessage: number | { id: number } } | [boardMemberMessage: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: boardMemberMessageEdit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::boardMemberMessageEdit
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:68
 * @route '/admin/boardMemberMessage/edit/{boardMemberMessage}'
 */
        boardMemberMessageEditForm.get = (args: { boardMemberMessage: number | { id: number } } | [boardMemberMessage: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: boardMemberMessageEdit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::boardMemberMessageEdit
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:68
 * @route '/admin/boardMemberMessage/edit/{boardMemberMessage}'
 */
        boardMemberMessageEditForm.head = (args: { boardMemberMessage: number | { id: number } } | [boardMemberMessage: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: boardMemberMessageEdit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    boardMemberMessageEdit.form = boardMemberMessageEditForm
/**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::boardMemberMessageUpdate
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:78
 * @route '/admin/boardMemberMessage/update/{boardMemberMessage}'
 */
export const boardMemberMessageUpdate = (args: { boardMemberMessage: number | { id: number } } | [boardMemberMessage: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: boardMemberMessageUpdate.url(args, options),
    method: 'post',
})

boardMemberMessageUpdate.definition = {
    methods: ["post"],
    url: '/admin/boardMemberMessage/update/{boardMemberMessage}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::boardMemberMessageUpdate
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:78
 * @route '/admin/boardMemberMessage/update/{boardMemberMessage}'
 */
boardMemberMessageUpdate.url = (args: { boardMemberMessage: number | { id: number } } | [boardMemberMessage: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { boardMemberMessage: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { boardMemberMessage: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    boardMemberMessage: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        boardMemberMessage: typeof args.boardMemberMessage === 'object'
                ? args.boardMemberMessage.id
                : args.boardMemberMessage,
                }

    return boardMemberMessageUpdate.definition.url
            .replace('{boardMemberMessage}', parsedArgs.boardMemberMessage.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::boardMemberMessageUpdate
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:78
 * @route '/admin/boardMemberMessage/update/{boardMemberMessage}'
 */
boardMemberMessageUpdate.post = (args: { boardMemberMessage: number | { id: number } } | [boardMemberMessage: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: boardMemberMessageUpdate.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::boardMemberMessageUpdate
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:78
 * @route '/admin/boardMemberMessage/update/{boardMemberMessage}'
 */
    const boardMemberMessageUpdateForm = (args: { boardMemberMessage: number | { id: number } } | [boardMemberMessage: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: boardMemberMessageUpdate.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::boardMemberMessageUpdate
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:78
 * @route '/admin/boardMemberMessage/update/{boardMemberMessage}'
 */
        boardMemberMessageUpdateForm.post = (args: { boardMemberMessage: number | { id: number } } | [boardMemberMessage: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: boardMemberMessageUpdate.url(args, options),
            method: 'post',
        })
    
    boardMemberMessageUpdate.form = boardMemberMessageUpdateForm
/**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::boardMemberMessageDestroy
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:109
 * @route '/admin/boardMemberMessage/delete/{boardMemberMessage}'
 */
export const boardMemberMessageDestroy = (args: { boardMemberMessage: number | { id: number } } | [boardMemberMessage: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: boardMemberMessageDestroy.url(args, options),
    method: 'delete',
})

boardMemberMessageDestroy.definition = {
    methods: ["delete"],
    url: '/admin/boardMemberMessage/delete/{boardMemberMessage}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::boardMemberMessageDestroy
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:109
 * @route '/admin/boardMemberMessage/delete/{boardMemberMessage}'
 */
boardMemberMessageDestroy.url = (args: { boardMemberMessage: number | { id: number } } | [boardMemberMessage: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { boardMemberMessage: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { boardMemberMessage: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    boardMemberMessage: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        boardMemberMessage: typeof args.boardMemberMessage === 'object'
                ? args.boardMemberMessage.id
                : args.boardMemberMessage,
                }

    return boardMemberMessageDestroy.definition.url
            .replace('{boardMemberMessage}', parsedArgs.boardMemberMessage.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::boardMemberMessageDestroy
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:109
 * @route '/admin/boardMemberMessage/delete/{boardMemberMessage}'
 */
boardMemberMessageDestroy.delete = (args: { boardMemberMessage: number | { id: number } } | [boardMemberMessage: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: boardMemberMessageDestroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::boardMemberMessageDestroy
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:109
 * @route '/admin/boardMemberMessage/delete/{boardMemberMessage}'
 */
    const boardMemberMessageDestroyForm = (args: { boardMemberMessage: number | { id: number } } | [boardMemberMessage: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: boardMemberMessageDestroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::boardMemberMessageDestroy
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:109
 * @route '/admin/boardMemberMessage/delete/{boardMemberMessage}'
 */
        boardMemberMessageDestroyForm.delete = (args: { boardMemberMessage: number | { id: number } } | [boardMemberMessage: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: boardMemberMessageDestroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    boardMemberMessageDestroy.form = boardMemberMessageDestroyForm
/**
* @see \App\Http\Controllers\Backend\EventController::eventIndex
 * @see app/Http/Controllers/Backend/EventController.php:22
 * @route '/admin/event'
 */
export const eventIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: eventIndex.url(options),
    method: 'get',
})

eventIndex.definition = {
    methods: ["get","head"],
    url: '/admin/event',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\EventController::eventIndex
 * @see app/Http/Controllers/Backend/EventController.php:22
 * @route '/admin/event'
 */
eventIndex.url = (options?: RouteQueryOptions) => {
    return eventIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\EventController::eventIndex
 * @see app/Http/Controllers/Backend/EventController.php:22
 * @route '/admin/event'
 */
eventIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: eventIndex.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\EventController::eventIndex
 * @see app/Http/Controllers/Backend/EventController.php:22
 * @route '/admin/event'
 */
eventIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: eventIndex.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\EventController::eventIndex
 * @see app/Http/Controllers/Backend/EventController.php:22
 * @route '/admin/event'
 */
    const eventIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: eventIndex.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\EventController::eventIndex
 * @see app/Http/Controllers/Backend/EventController.php:22
 * @route '/admin/event'
 */
        eventIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: eventIndex.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\EventController::eventIndex
 * @see app/Http/Controllers/Backend/EventController.php:22
 * @route '/admin/event'
 */
        eventIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: eventIndex.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    eventIndex.form = eventIndexForm
/**
* @see \App\Http\Controllers\Backend\EventController::eventCreate
 * @see app/Http/Controllers/Backend/EventController.php:33
 * @route '/admin/event/create'
 */
export const eventCreate = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: eventCreate.url(options),
    method: 'get',
})

eventCreate.definition = {
    methods: ["get","head"],
    url: '/admin/event/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\EventController::eventCreate
 * @see app/Http/Controllers/Backend/EventController.php:33
 * @route '/admin/event/create'
 */
eventCreate.url = (options?: RouteQueryOptions) => {
    return eventCreate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\EventController::eventCreate
 * @see app/Http/Controllers/Backend/EventController.php:33
 * @route '/admin/event/create'
 */
eventCreate.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: eventCreate.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\EventController::eventCreate
 * @see app/Http/Controllers/Backend/EventController.php:33
 * @route '/admin/event/create'
 */
eventCreate.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: eventCreate.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\EventController::eventCreate
 * @see app/Http/Controllers/Backend/EventController.php:33
 * @route '/admin/event/create'
 */
    const eventCreateForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: eventCreate.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\EventController::eventCreate
 * @see app/Http/Controllers/Backend/EventController.php:33
 * @route '/admin/event/create'
 */
        eventCreateForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: eventCreate.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\EventController::eventCreate
 * @see app/Http/Controllers/Backend/EventController.php:33
 * @route '/admin/event/create'
 */
        eventCreateForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: eventCreate.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    eventCreate.form = eventCreateForm
/**
* @see \App\Http\Controllers\Backend\EventController::eventStore
 * @see app/Http/Controllers/Backend/EventController.php:41
 * @route '/admin/event/store'
 */
export const eventStore = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: eventStore.url(options),
    method: 'post',
})

eventStore.definition = {
    methods: ["post"],
    url: '/admin/event/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\EventController::eventStore
 * @see app/Http/Controllers/Backend/EventController.php:41
 * @route '/admin/event/store'
 */
eventStore.url = (options?: RouteQueryOptions) => {
    return eventStore.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\EventController::eventStore
 * @see app/Http/Controllers/Backend/EventController.php:41
 * @route '/admin/event/store'
 */
eventStore.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: eventStore.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\EventController::eventStore
 * @see app/Http/Controllers/Backend/EventController.php:41
 * @route '/admin/event/store'
 */
    const eventStoreForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: eventStore.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\EventController::eventStore
 * @see app/Http/Controllers/Backend/EventController.php:41
 * @route '/admin/event/store'
 */
        eventStoreForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: eventStore.url(options),
            method: 'post',
        })
    
    eventStore.form = eventStoreForm
/**
* @see \App\Http\Controllers\Backend\EventController::eventEdit
 * @see app/Http/Controllers/Backend/EventController.php:71
 * @route '/admin/event/edit/{event}'
 */
export const eventEdit = (args: { event: number | { id: number } } | [event: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: eventEdit.url(args, options),
    method: 'get',
})

eventEdit.definition = {
    methods: ["get","head"],
    url: '/admin/event/edit/{event}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\EventController::eventEdit
 * @see app/Http/Controllers/Backend/EventController.php:71
 * @route '/admin/event/edit/{event}'
 */
eventEdit.url = (args: { event: number | { id: number } } | [event: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { event: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { event: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    event: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        event: typeof args.event === 'object'
                ? args.event.id
                : args.event,
                }

    return eventEdit.definition.url
            .replace('{event}', parsedArgs.event.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\EventController::eventEdit
 * @see app/Http/Controllers/Backend/EventController.php:71
 * @route '/admin/event/edit/{event}'
 */
eventEdit.get = (args: { event: number | { id: number } } | [event: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: eventEdit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\EventController::eventEdit
 * @see app/Http/Controllers/Backend/EventController.php:71
 * @route '/admin/event/edit/{event}'
 */
eventEdit.head = (args: { event: number | { id: number } } | [event: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: eventEdit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\EventController::eventEdit
 * @see app/Http/Controllers/Backend/EventController.php:71
 * @route '/admin/event/edit/{event}'
 */
    const eventEditForm = (args: { event: number | { id: number } } | [event: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: eventEdit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\EventController::eventEdit
 * @see app/Http/Controllers/Backend/EventController.php:71
 * @route '/admin/event/edit/{event}'
 */
        eventEditForm.get = (args: { event: number | { id: number } } | [event: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: eventEdit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\EventController::eventEdit
 * @see app/Http/Controllers/Backend/EventController.php:71
 * @route '/admin/event/edit/{event}'
 */
        eventEditForm.head = (args: { event: number | { id: number } } | [event: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: eventEdit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    eventEdit.form = eventEditForm
/**
* @see \App\Http\Controllers\Backend\EventController::eventUpdate
 * @see app/Http/Controllers/Backend/EventController.php:81
 * @route '/admin/event/update/{event}'
 */
export const eventUpdate = (args: { event: number | { id: number } } | [event: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: eventUpdate.url(args, options),
    method: 'post',
})

eventUpdate.definition = {
    methods: ["post"],
    url: '/admin/event/update/{event}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\EventController::eventUpdate
 * @see app/Http/Controllers/Backend/EventController.php:81
 * @route '/admin/event/update/{event}'
 */
eventUpdate.url = (args: { event: number | { id: number } } | [event: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { event: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { event: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    event: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        event: typeof args.event === 'object'
                ? args.event.id
                : args.event,
                }

    return eventUpdate.definition.url
            .replace('{event}', parsedArgs.event.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\EventController::eventUpdate
 * @see app/Http/Controllers/Backend/EventController.php:81
 * @route '/admin/event/update/{event}'
 */
eventUpdate.post = (args: { event: number | { id: number } } | [event: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: eventUpdate.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\EventController::eventUpdate
 * @see app/Http/Controllers/Backend/EventController.php:81
 * @route '/admin/event/update/{event}'
 */
    const eventUpdateForm = (args: { event: number | { id: number } } | [event: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: eventUpdate.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\EventController::eventUpdate
 * @see app/Http/Controllers/Backend/EventController.php:81
 * @route '/admin/event/update/{event}'
 */
        eventUpdateForm.post = (args: { event: number | { id: number } } | [event: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: eventUpdate.url(args, options),
            method: 'post',
        })
    
    eventUpdate.form = eventUpdateForm
/**
* @see \App\Http\Controllers\Backend\EventController::eventDestroy
 * @see app/Http/Controllers/Backend/EventController.php:114
 * @route '/admin/event/delete/{event}'
 */
export const eventDestroy = (args: { event: number | { id: number } } | [event: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: eventDestroy.url(args, options),
    method: 'delete',
})

eventDestroy.definition = {
    methods: ["delete"],
    url: '/admin/event/delete/{event}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Backend\EventController::eventDestroy
 * @see app/Http/Controllers/Backend/EventController.php:114
 * @route '/admin/event/delete/{event}'
 */
eventDestroy.url = (args: { event: number | { id: number } } | [event: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { event: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { event: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    event: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        event: typeof args.event === 'object'
                ? args.event.id
                : args.event,
                }

    return eventDestroy.definition.url
            .replace('{event}', parsedArgs.event.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\EventController::eventDestroy
 * @see app/Http/Controllers/Backend/EventController.php:114
 * @route '/admin/event/delete/{event}'
 */
eventDestroy.delete = (args: { event: number | { id: number } } | [event: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: eventDestroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Backend\EventController::eventDestroy
 * @see app/Http/Controllers/Backend/EventController.php:114
 * @route '/admin/event/delete/{event}'
 */
    const eventDestroyForm = (args: { event: number | { id: number } } | [event: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: eventDestroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\EventController::eventDestroy
 * @see app/Http/Controllers/Backend/EventController.php:114
 * @route '/admin/event/delete/{event}'
 */
        eventDestroyForm.delete = (args: { event: number | { id: number } } | [event: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: eventDestroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    eventDestroy.form = eventDestroyForm
/**
* @see \App\Http\Controllers\Backend\DepartmentController::departmentIndex
 * @see app/Http/Controllers/Backend/DepartmentController.php:22
 * @route '/admin/department'
 */
export const departmentIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: departmentIndex.url(options),
    method: 'get',
})

departmentIndex.definition = {
    methods: ["get","head"],
    url: '/admin/department',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\DepartmentController::departmentIndex
 * @see app/Http/Controllers/Backend/DepartmentController.php:22
 * @route '/admin/department'
 */
departmentIndex.url = (options?: RouteQueryOptions) => {
    return departmentIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\DepartmentController::departmentIndex
 * @see app/Http/Controllers/Backend/DepartmentController.php:22
 * @route '/admin/department'
 */
departmentIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: departmentIndex.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\DepartmentController::departmentIndex
 * @see app/Http/Controllers/Backend/DepartmentController.php:22
 * @route '/admin/department'
 */
departmentIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: departmentIndex.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\DepartmentController::departmentIndex
 * @see app/Http/Controllers/Backend/DepartmentController.php:22
 * @route '/admin/department'
 */
    const departmentIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: departmentIndex.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\DepartmentController::departmentIndex
 * @see app/Http/Controllers/Backend/DepartmentController.php:22
 * @route '/admin/department'
 */
        departmentIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: departmentIndex.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\DepartmentController::departmentIndex
 * @see app/Http/Controllers/Backend/DepartmentController.php:22
 * @route '/admin/department'
 */
        departmentIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: departmentIndex.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    departmentIndex.form = departmentIndexForm
/**
* @see \App\Http\Controllers\Backend\DepartmentController::departmentCreate
 * @see app/Http/Controllers/Backend/DepartmentController.php:37
 * @route '/admin/department/create'
 */
export const departmentCreate = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: departmentCreate.url(options),
    method: 'get',
})

departmentCreate.definition = {
    methods: ["get","head"],
    url: '/admin/department/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\DepartmentController::departmentCreate
 * @see app/Http/Controllers/Backend/DepartmentController.php:37
 * @route '/admin/department/create'
 */
departmentCreate.url = (options?: RouteQueryOptions) => {
    return departmentCreate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\DepartmentController::departmentCreate
 * @see app/Http/Controllers/Backend/DepartmentController.php:37
 * @route '/admin/department/create'
 */
departmentCreate.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: departmentCreate.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\DepartmentController::departmentCreate
 * @see app/Http/Controllers/Backend/DepartmentController.php:37
 * @route '/admin/department/create'
 */
departmentCreate.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: departmentCreate.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\DepartmentController::departmentCreate
 * @see app/Http/Controllers/Backend/DepartmentController.php:37
 * @route '/admin/department/create'
 */
    const departmentCreateForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: departmentCreate.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\DepartmentController::departmentCreate
 * @see app/Http/Controllers/Backend/DepartmentController.php:37
 * @route '/admin/department/create'
 */
        departmentCreateForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: departmentCreate.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\DepartmentController::departmentCreate
 * @see app/Http/Controllers/Backend/DepartmentController.php:37
 * @route '/admin/department/create'
 */
        departmentCreateForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: departmentCreate.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    departmentCreate.form = departmentCreateForm
/**
* @see \App\Http\Controllers\Backend\DepartmentController::departmentStore
 * @see app/Http/Controllers/Backend/DepartmentController.php:47
 * @route '/admin/department/store'
 */
export const departmentStore = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: departmentStore.url(options),
    method: 'post',
})

departmentStore.definition = {
    methods: ["post"],
    url: '/admin/department/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\DepartmentController::departmentStore
 * @see app/Http/Controllers/Backend/DepartmentController.php:47
 * @route '/admin/department/store'
 */
departmentStore.url = (options?: RouteQueryOptions) => {
    return departmentStore.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\DepartmentController::departmentStore
 * @see app/Http/Controllers/Backend/DepartmentController.php:47
 * @route '/admin/department/store'
 */
departmentStore.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: departmentStore.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\DepartmentController::departmentStore
 * @see app/Http/Controllers/Backend/DepartmentController.php:47
 * @route '/admin/department/store'
 */
    const departmentStoreForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: departmentStore.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\DepartmentController::departmentStore
 * @see app/Http/Controllers/Backend/DepartmentController.php:47
 * @route '/admin/department/store'
 */
        departmentStoreForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: departmentStore.url(options),
            method: 'post',
        })
    
    departmentStore.form = departmentStoreForm
/**
* @see \App\Http\Controllers\Backend\DepartmentController::departmentEdit
 * @see app/Http/Controllers/Backend/DepartmentController.php:67
 * @route '/admin/department/edit/{department}'
 */
export const departmentEdit = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: departmentEdit.url(args, options),
    method: 'get',
})

departmentEdit.definition = {
    methods: ["get","head"],
    url: '/admin/department/edit/{department}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\DepartmentController::departmentEdit
 * @see app/Http/Controllers/Backend/DepartmentController.php:67
 * @route '/admin/department/edit/{department}'
 */
departmentEdit.url = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { department: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { department: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    department: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        department: typeof args.department === 'object'
                ? args.department.id
                : args.department,
                }

    return departmentEdit.definition.url
            .replace('{department}', parsedArgs.department.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\DepartmentController::departmentEdit
 * @see app/Http/Controllers/Backend/DepartmentController.php:67
 * @route '/admin/department/edit/{department}'
 */
departmentEdit.get = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: departmentEdit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\DepartmentController::departmentEdit
 * @see app/Http/Controllers/Backend/DepartmentController.php:67
 * @route '/admin/department/edit/{department}'
 */
departmentEdit.head = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: departmentEdit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\DepartmentController::departmentEdit
 * @see app/Http/Controllers/Backend/DepartmentController.php:67
 * @route '/admin/department/edit/{department}'
 */
    const departmentEditForm = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: departmentEdit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\DepartmentController::departmentEdit
 * @see app/Http/Controllers/Backend/DepartmentController.php:67
 * @route '/admin/department/edit/{department}'
 */
        departmentEditForm.get = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: departmentEdit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\DepartmentController::departmentEdit
 * @see app/Http/Controllers/Backend/DepartmentController.php:67
 * @route '/admin/department/edit/{department}'
 */
        departmentEditForm.head = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: departmentEdit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    departmentEdit.form = departmentEditForm
/**
* @see \App\Http\Controllers\Backend\DepartmentController::departmentUpdate
 * @see app/Http/Controllers/Backend/DepartmentController.php:79
 * @route '/admin/department/update/{department}'
 */
export const departmentUpdate = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: departmentUpdate.url(args, options),
    method: 'post',
})

departmentUpdate.definition = {
    methods: ["post"],
    url: '/admin/department/update/{department}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\DepartmentController::departmentUpdate
 * @see app/Http/Controllers/Backend/DepartmentController.php:79
 * @route '/admin/department/update/{department}'
 */
departmentUpdate.url = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { department: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { department: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    department: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        department: typeof args.department === 'object'
                ? args.department.id
                : args.department,
                }

    return departmentUpdate.definition.url
            .replace('{department}', parsedArgs.department.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\DepartmentController::departmentUpdate
 * @see app/Http/Controllers/Backend/DepartmentController.php:79
 * @route '/admin/department/update/{department}'
 */
departmentUpdate.post = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: departmentUpdate.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\DepartmentController::departmentUpdate
 * @see app/Http/Controllers/Backend/DepartmentController.php:79
 * @route '/admin/department/update/{department}'
 */
    const departmentUpdateForm = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: departmentUpdate.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\DepartmentController::departmentUpdate
 * @see app/Http/Controllers/Backend/DepartmentController.php:79
 * @route '/admin/department/update/{department}'
 */
        departmentUpdateForm.post = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: departmentUpdate.url(args, options),
            method: 'post',
        })
    
    departmentUpdate.form = departmentUpdateForm
/**
* @see \App\Http\Controllers\Backend\DepartmentController::departmentDestroy
 * @see app/Http/Controllers/Backend/DepartmentController.php:97
 * @route '/admin/department/delete/{department}'
 */
export const departmentDestroy = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: departmentDestroy.url(args, options),
    method: 'delete',
})

departmentDestroy.definition = {
    methods: ["delete"],
    url: '/admin/department/delete/{department}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Backend\DepartmentController::departmentDestroy
 * @see app/Http/Controllers/Backend/DepartmentController.php:97
 * @route '/admin/department/delete/{department}'
 */
departmentDestroy.url = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { department: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { department: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    department: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        department: typeof args.department === 'object'
                ? args.department.id
                : args.department,
                }

    return departmentDestroy.definition.url
            .replace('{department}', parsedArgs.department.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\DepartmentController::departmentDestroy
 * @see app/Http/Controllers/Backend/DepartmentController.php:97
 * @route '/admin/department/delete/{department}'
 */
departmentDestroy.delete = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: departmentDestroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Backend\DepartmentController::departmentDestroy
 * @see app/Http/Controllers/Backend/DepartmentController.php:97
 * @route '/admin/department/delete/{department}'
 */
    const departmentDestroyForm = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: departmentDestroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\DepartmentController::departmentDestroy
 * @see app/Http/Controllers/Backend/DepartmentController.php:97
 * @route '/admin/department/delete/{department}'
 */
        departmentDestroyForm.delete = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: departmentDestroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    departmentDestroy.form = departmentDestroyForm
/**
* @see \App\Http\Controllers\Backend\DownloadController::downloadIndex
 * @see app/Http/Controllers/Backend/DownloadController.php:24
 * @route '/admin/download'
 */
export const downloadIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadIndex.url(options),
    method: 'get',
})

downloadIndex.definition = {
    methods: ["get","head"],
    url: '/admin/download',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\DownloadController::downloadIndex
 * @see app/Http/Controllers/Backend/DownloadController.php:24
 * @route '/admin/download'
 */
downloadIndex.url = (options?: RouteQueryOptions) => {
    return downloadIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\DownloadController::downloadIndex
 * @see app/Http/Controllers/Backend/DownloadController.php:24
 * @route '/admin/download'
 */
downloadIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadIndex.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\DownloadController::downloadIndex
 * @see app/Http/Controllers/Backend/DownloadController.php:24
 * @route '/admin/download'
 */
downloadIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: downloadIndex.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\DownloadController::downloadIndex
 * @see app/Http/Controllers/Backend/DownloadController.php:24
 * @route '/admin/download'
 */
    const downloadIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: downloadIndex.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\DownloadController::downloadIndex
 * @see app/Http/Controllers/Backend/DownloadController.php:24
 * @route '/admin/download'
 */
        downloadIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: downloadIndex.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\DownloadController::downloadIndex
 * @see app/Http/Controllers/Backend/DownloadController.php:24
 * @route '/admin/download'
 */
        downloadIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: downloadIndex.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    downloadIndex.form = downloadIndexForm
/**
* @see \App\Http\Controllers\Backend\DownloadController::downloadCreate
 * @see app/Http/Controllers/Backend/DownloadController.php:35
 * @route '/admin/download/create'
 */
export const downloadCreate = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadCreate.url(options),
    method: 'get',
})

downloadCreate.definition = {
    methods: ["get","head"],
    url: '/admin/download/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\DownloadController::downloadCreate
 * @see app/Http/Controllers/Backend/DownloadController.php:35
 * @route '/admin/download/create'
 */
downloadCreate.url = (options?: RouteQueryOptions) => {
    return downloadCreate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\DownloadController::downloadCreate
 * @see app/Http/Controllers/Backend/DownloadController.php:35
 * @route '/admin/download/create'
 */
downloadCreate.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadCreate.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\DownloadController::downloadCreate
 * @see app/Http/Controllers/Backend/DownloadController.php:35
 * @route '/admin/download/create'
 */
downloadCreate.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: downloadCreate.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\DownloadController::downloadCreate
 * @see app/Http/Controllers/Backend/DownloadController.php:35
 * @route '/admin/download/create'
 */
    const downloadCreateForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: downloadCreate.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\DownloadController::downloadCreate
 * @see app/Http/Controllers/Backend/DownloadController.php:35
 * @route '/admin/download/create'
 */
        downloadCreateForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: downloadCreate.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\DownloadController::downloadCreate
 * @see app/Http/Controllers/Backend/DownloadController.php:35
 * @route '/admin/download/create'
 */
        downloadCreateForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: downloadCreate.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    downloadCreate.form = downloadCreateForm
/**
* @see \App\Http\Controllers\Backend\DownloadController::downloadStore
 * @see app/Http/Controllers/Backend/DownloadController.php:43
 * @route '/admin/download/store'
 */
export const downloadStore = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: downloadStore.url(options),
    method: 'post',
})

downloadStore.definition = {
    methods: ["post"],
    url: '/admin/download/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\DownloadController::downloadStore
 * @see app/Http/Controllers/Backend/DownloadController.php:43
 * @route '/admin/download/store'
 */
downloadStore.url = (options?: RouteQueryOptions) => {
    return downloadStore.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\DownloadController::downloadStore
 * @see app/Http/Controllers/Backend/DownloadController.php:43
 * @route '/admin/download/store'
 */
downloadStore.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: downloadStore.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\DownloadController::downloadStore
 * @see app/Http/Controllers/Backend/DownloadController.php:43
 * @route '/admin/download/store'
 */
    const downloadStoreForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: downloadStore.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\DownloadController::downloadStore
 * @see app/Http/Controllers/Backend/DownloadController.php:43
 * @route '/admin/download/store'
 */
        downloadStoreForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: downloadStore.url(options),
            method: 'post',
        })
    
    downloadStore.form = downloadStoreForm
/**
* @see \App\Http\Controllers\Backend\DownloadController::downloadEdit
 * @see app/Http/Controllers/Backend/DownloadController.php:69
 * @route '/admin/download/edit/{download}'
 */
export const downloadEdit = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadEdit.url(args, options),
    method: 'get',
})

downloadEdit.definition = {
    methods: ["get","head"],
    url: '/admin/download/edit/{download}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\DownloadController::downloadEdit
 * @see app/Http/Controllers/Backend/DownloadController.php:69
 * @route '/admin/download/edit/{download}'
 */
downloadEdit.url = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { download: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { download: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    download: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        download: typeof args.download === 'object'
                ? args.download.id
                : args.download,
                }

    return downloadEdit.definition.url
            .replace('{download}', parsedArgs.download.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\DownloadController::downloadEdit
 * @see app/Http/Controllers/Backend/DownloadController.php:69
 * @route '/admin/download/edit/{download}'
 */
downloadEdit.get = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadEdit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\DownloadController::downloadEdit
 * @see app/Http/Controllers/Backend/DownloadController.php:69
 * @route '/admin/download/edit/{download}'
 */
downloadEdit.head = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: downloadEdit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\DownloadController::downloadEdit
 * @see app/Http/Controllers/Backend/DownloadController.php:69
 * @route '/admin/download/edit/{download}'
 */
    const downloadEditForm = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: downloadEdit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\DownloadController::downloadEdit
 * @see app/Http/Controllers/Backend/DownloadController.php:69
 * @route '/admin/download/edit/{download}'
 */
        downloadEditForm.get = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: downloadEdit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\DownloadController::downloadEdit
 * @see app/Http/Controllers/Backend/DownloadController.php:69
 * @route '/admin/download/edit/{download}'
 */
        downloadEditForm.head = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: downloadEdit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    downloadEdit.form = downloadEditForm
/**
* @see \App\Http\Controllers\Backend\DownloadController::downloadUpdate
 * @see app/Http/Controllers/Backend/DownloadController.php:79
 * @route '/admin/download/update/{download}'
 */
export const downloadUpdate = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: downloadUpdate.url(args, options),
    method: 'post',
})

downloadUpdate.definition = {
    methods: ["post"],
    url: '/admin/download/update/{download}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\DownloadController::downloadUpdate
 * @see app/Http/Controllers/Backend/DownloadController.php:79
 * @route '/admin/download/update/{download}'
 */
downloadUpdate.url = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { download: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { download: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    download: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        download: typeof args.download === 'object'
                ? args.download.id
                : args.download,
                }

    return downloadUpdate.definition.url
            .replace('{download}', parsedArgs.download.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\DownloadController::downloadUpdate
 * @see app/Http/Controllers/Backend/DownloadController.php:79
 * @route '/admin/download/update/{download}'
 */
downloadUpdate.post = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: downloadUpdate.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\DownloadController::downloadUpdate
 * @see app/Http/Controllers/Backend/DownloadController.php:79
 * @route '/admin/download/update/{download}'
 */
    const downloadUpdateForm = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: downloadUpdate.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\DownloadController::downloadUpdate
 * @see app/Http/Controllers/Backend/DownloadController.php:79
 * @route '/admin/download/update/{download}'
 */
        downloadUpdateForm.post = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: downloadUpdate.url(args, options),
            method: 'post',
        })
    
    downloadUpdate.form = downloadUpdateForm
/**
* @see \App\Http\Controllers\Backend\DownloadController::downloadDestroy
 * @see app/Http/Controllers/Backend/DownloadController.php:108
 * @route '/admin/download/delete/{download}'
 */
export const downloadDestroy = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: downloadDestroy.url(args, options),
    method: 'delete',
})

downloadDestroy.definition = {
    methods: ["delete"],
    url: '/admin/download/delete/{download}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Backend\DownloadController::downloadDestroy
 * @see app/Http/Controllers/Backend/DownloadController.php:108
 * @route '/admin/download/delete/{download}'
 */
downloadDestroy.url = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { download: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { download: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    download: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        download: typeof args.download === 'object'
                ? args.download.id
                : args.download,
                }

    return downloadDestroy.definition.url
            .replace('{download}', parsedArgs.download.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\DownloadController::downloadDestroy
 * @see app/Http/Controllers/Backend/DownloadController.php:108
 * @route '/admin/download/delete/{download}'
 */
downloadDestroy.delete = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: downloadDestroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Backend\DownloadController::downloadDestroy
 * @see app/Http/Controllers/Backend/DownloadController.php:108
 * @route '/admin/download/delete/{download}'
 */
    const downloadDestroyForm = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: downloadDestroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\DownloadController::downloadDestroy
 * @see app/Http/Controllers/Backend/DownloadController.php:108
 * @route '/admin/download/delete/{download}'
 */
        downloadDestroyForm.delete = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: downloadDestroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    downloadDestroy.form = downloadDestroyForm
/**
* @see \App\Http\Controllers\Backend\DownloadController::downloadFile
 * @see app/Http/Controllers/Backend/DownloadController.php:126
 * @route '/admin/download/file/{download}'
 */
export const downloadFile = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadFile.url(args, options),
    method: 'get',
})

downloadFile.definition = {
    methods: ["get","head"],
    url: '/admin/download/file/{download}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\DownloadController::downloadFile
 * @see app/Http/Controllers/Backend/DownloadController.php:126
 * @route '/admin/download/file/{download}'
 */
downloadFile.url = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { download: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { download: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    download: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        download: typeof args.download === 'object'
                ? args.download.id
                : args.download,
                }

    return downloadFile.definition.url
            .replace('{download}', parsedArgs.download.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\DownloadController::downloadFile
 * @see app/Http/Controllers/Backend/DownloadController.php:126
 * @route '/admin/download/file/{download}'
 */
downloadFile.get = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadFile.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\DownloadController::downloadFile
 * @see app/Http/Controllers/Backend/DownloadController.php:126
 * @route '/admin/download/file/{download}'
 */
downloadFile.head = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: downloadFile.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\DownloadController::downloadFile
 * @see app/Http/Controllers/Backend/DownloadController.php:126
 * @route '/admin/download/file/{download}'
 */
    const downloadFileForm = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: downloadFile.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\DownloadController::downloadFile
 * @see app/Http/Controllers/Backend/DownloadController.php:126
 * @route '/admin/download/file/{download}'
 */
        downloadFileForm.get = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: downloadFile.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\DownloadController::downloadFile
 * @see app/Http/Controllers/Backend/DownloadController.php:126
 * @route '/admin/download/file/{download}'
 */
        downloadFileForm.head = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: downloadFile.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    downloadFile.form = downloadFileForm
/**
* @see \App\Http\Controllers\Backend\InformationController::informationIndex
 * @see app/Http/Controllers/Backend/InformationController.php:22
 * @route '/admin/information'
 */
export const informationIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: informationIndex.url(options),
    method: 'get',
})

informationIndex.definition = {
    methods: ["get","head"],
    url: '/admin/information',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\InformationController::informationIndex
 * @see app/Http/Controllers/Backend/InformationController.php:22
 * @route '/admin/information'
 */
informationIndex.url = (options?: RouteQueryOptions) => {
    return informationIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\InformationController::informationIndex
 * @see app/Http/Controllers/Backend/InformationController.php:22
 * @route '/admin/information'
 */
informationIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: informationIndex.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\InformationController::informationIndex
 * @see app/Http/Controllers/Backend/InformationController.php:22
 * @route '/admin/information'
 */
informationIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: informationIndex.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\InformationController::informationIndex
 * @see app/Http/Controllers/Backend/InformationController.php:22
 * @route '/admin/information'
 */
    const informationIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: informationIndex.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\InformationController::informationIndex
 * @see app/Http/Controllers/Backend/InformationController.php:22
 * @route '/admin/information'
 */
        informationIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: informationIndex.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\InformationController::informationIndex
 * @see app/Http/Controllers/Backend/InformationController.php:22
 * @route '/admin/information'
 */
        informationIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: informationIndex.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    informationIndex.form = informationIndexForm
/**
* @see \App\Http\Controllers\Backend\InformationController::informationCreate
 * @see app/Http/Controllers/Backend/InformationController.php:33
 * @route '/admin/information/create'
 */
export const informationCreate = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: informationCreate.url(options),
    method: 'get',
})

informationCreate.definition = {
    methods: ["get","head"],
    url: '/admin/information/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\InformationController::informationCreate
 * @see app/Http/Controllers/Backend/InformationController.php:33
 * @route '/admin/information/create'
 */
informationCreate.url = (options?: RouteQueryOptions) => {
    return informationCreate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\InformationController::informationCreate
 * @see app/Http/Controllers/Backend/InformationController.php:33
 * @route '/admin/information/create'
 */
informationCreate.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: informationCreate.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\InformationController::informationCreate
 * @see app/Http/Controllers/Backend/InformationController.php:33
 * @route '/admin/information/create'
 */
informationCreate.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: informationCreate.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\InformationController::informationCreate
 * @see app/Http/Controllers/Backend/InformationController.php:33
 * @route '/admin/information/create'
 */
    const informationCreateForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: informationCreate.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\InformationController::informationCreate
 * @see app/Http/Controllers/Backend/InformationController.php:33
 * @route '/admin/information/create'
 */
        informationCreateForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: informationCreate.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\InformationController::informationCreate
 * @see app/Http/Controllers/Backend/InformationController.php:33
 * @route '/admin/information/create'
 */
        informationCreateForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: informationCreate.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    informationCreate.form = informationCreateForm
/**
* @see \App\Http\Controllers\Backend\InformationController::informationStore
 * @see app/Http/Controllers/Backend/InformationController.php:41
 * @route '/admin/information/store'
 */
export const informationStore = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: informationStore.url(options),
    method: 'post',
})

informationStore.definition = {
    methods: ["post"],
    url: '/admin/information/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\InformationController::informationStore
 * @see app/Http/Controllers/Backend/InformationController.php:41
 * @route '/admin/information/store'
 */
informationStore.url = (options?: RouteQueryOptions) => {
    return informationStore.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\InformationController::informationStore
 * @see app/Http/Controllers/Backend/InformationController.php:41
 * @route '/admin/information/store'
 */
informationStore.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: informationStore.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\InformationController::informationStore
 * @see app/Http/Controllers/Backend/InformationController.php:41
 * @route '/admin/information/store'
 */
    const informationStoreForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: informationStore.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\InformationController::informationStore
 * @see app/Http/Controllers/Backend/InformationController.php:41
 * @route '/admin/information/store'
 */
        informationStoreForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: informationStore.url(options),
            method: 'post',
        })
    
    informationStore.form = informationStoreForm
/**
* @see \App\Http\Controllers\Backend\InformationController::informationEdit
 * @see app/Http/Controllers/Backend/InformationController.php:79
 * @route '/admin/information/edit/{information}'
 */
export const informationEdit = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: informationEdit.url(args, options),
    method: 'get',
})

informationEdit.definition = {
    methods: ["get","head"],
    url: '/admin/information/edit/{information}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\InformationController::informationEdit
 * @see app/Http/Controllers/Backend/InformationController.php:79
 * @route '/admin/information/edit/{information}'
 */
informationEdit.url = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { information: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { information: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    information: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        information: typeof args.information === 'object'
                ? args.information.id
                : args.information,
                }

    return informationEdit.definition.url
            .replace('{information}', parsedArgs.information.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\InformationController::informationEdit
 * @see app/Http/Controllers/Backend/InformationController.php:79
 * @route '/admin/information/edit/{information}'
 */
informationEdit.get = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: informationEdit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\InformationController::informationEdit
 * @see app/Http/Controllers/Backend/InformationController.php:79
 * @route '/admin/information/edit/{information}'
 */
informationEdit.head = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: informationEdit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\InformationController::informationEdit
 * @see app/Http/Controllers/Backend/InformationController.php:79
 * @route '/admin/information/edit/{information}'
 */
    const informationEditForm = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: informationEdit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\InformationController::informationEdit
 * @see app/Http/Controllers/Backend/InformationController.php:79
 * @route '/admin/information/edit/{information}'
 */
        informationEditForm.get = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: informationEdit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\InformationController::informationEdit
 * @see app/Http/Controllers/Backend/InformationController.php:79
 * @route '/admin/information/edit/{information}'
 */
        informationEditForm.head = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: informationEdit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    informationEdit.form = informationEditForm
/**
* @see \App\Http\Controllers\Backend\InformationController::informationShow
 * @see app/Http/Controllers/Backend/InformationController.php:69
 * @route '/admin/information/show/{information}'
 */
export const informationShow = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: informationShow.url(args, options),
    method: 'get',
})

informationShow.definition = {
    methods: ["get","head"],
    url: '/admin/information/show/{information}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\InformationController::informationShow
 * @see app/Http/Controllers/Backend/InformationController.php:69
 * @route '/admin/information/show/{information}'
 */
informationShow.url = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { information: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { information: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    information: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        information: typeof args.information === 'object'
                ? args.information.id
                : args.information,
                }

    return informationShow.definition.url
            .replace('{information}', parsedArgs.information.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\InformationController::informationShow
 * @see app/Http/Controllers/Backend/InformationController.php:69
 * @route '/admin/information/show/{information}'
 */
informationShow.get = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: informationShow.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\InformationController::informationShow
 * @see app/Http/Controllers/Backend/InformationController.php:69
 * @route '/admin/information/show/{information}'
 */
informationShow.head = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: informationShow.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\InformationController::informationShow
 * @see app/Http/Controllers/Backend/InformationController.php:69
 * @route '/admin/information/show/{information}'
 */
    const informationShowForm = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: informationShow.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\InformationController::informationShow
 * @see app/Http/Controllers/Backend/InformationController.php:69
 * @route '/admin/information/show/{information}'
 */
        informationShowForm.get = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: informationShow.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\InformationController::informationShow
 * @see app/Http/Controllers/Backend/InformationController.php:69
 * @route '/admin/information/show/{information}'
 */
        informationShowForm.head = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: informationShow.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    informationShow.form = informationShowForm
/**
* @see \App\Http\Controllers\Backend\InformationController::informationUpdate
 * @see app/Http/Controllers/Backend/InformationController.php:89
 * @route '/admin/information/update/{information}'
 */
export const informationUpdate = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: informationUpdate.url(args, options),
    method: 'post',
})

informationUpdate.definition = {
    methods: ["post"],
    url: '/admin/information/update/{information}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\InformationController::informationUpdate
 * @see app/Http/Controllers/Backend/InformationController.php:89
 * @route '/admin/information/update/{information}'
 */
informationUpdate.url = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { information: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { information: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    information: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        information: typeof args.information === 'object'
                ? args.information.id
                : args.information,
                }

    return informationUpdate.definition.url
            .replace('{information}', parsedArgs.information.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\InformationController::informationUpdate
 * @see app/Http/Controllers/Backend/InformationController.php:89
 * @route '/admin/information/update/{information}'
 */
informationUpdate.post = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: informationUpdate.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\InformationController::informationUpdate
 * @see app/Http/Controllers/Backend/InformationController.php:89
 * @route '/admin/information/update/{information}'
 */
    const informationUpdateForm = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: informationUpdate.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\InformationController::informationUpdate
 * @see app/Http/Controllers/Backend/InformationController.php:89
 * @route '/admin/information/update/{information}'
 */
        informationUpdateForm.post = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: informationUpdate.url(args, options),
            method: 'post',
        })
    
    informationUpdate.form = informationUpdateForm
/**
* @see \App\Http\Controllers\Backend\InformationController::informationDestroy
 * @see app/Http/Controllers/Backend/InformationController.php:120
 * @route '/admin/information/delete/{information}'
 */
export const informationDestroy = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: informationDestroy.url(args, options),
    method: 'delete',
})

informationDestroy.definition = {
    methods: ["delete"],
    url: '/admin/information/delete/{information}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Backend\InformationController::informationDestroy
 * @see app/Http/Controllers/Backend/InformationController.php:120
 * @route '/admin/information/delete/{information}'
 */
informationDestroy.url = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { information: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { information: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    information: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        information: typeof args.information === 'object'
                ? args.information.id
                : args.information,
                }

    return informationDestroy.definition.url
            .replace('{information}', parsedArgs.information.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\InformationController::informationDestroy
 * @see app/Http/Controllers/Backend/InformationController.php:120
 * @route '/admin/information/delete/{information}'
 */
informationDestroy.delete = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: informationDestroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Backend\InformationController::informationDestroy
 * @see app/Http/Controllers/Backend/InformationController.php:120
 * @route '/admin/information/delete/{information}'
 */
    const informationDestroyForm = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: informationDestroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\InformationController::informationDestroy
 * @see app/Http/Controllers/Backend/InformationController.php:120
 * @route '/admin/information/delete/{information}'
 */
        informationDestroyForm.delete = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: informationDestroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    informationDestroy.form = informationDestroyForm
/**
* @see \App\Http\Controllers\Backend\GalleryController::galleryIndex
 * @see app/Http/Controllers/Backend/GalleryController.php:21
 * @route '/admin/gallery'
 */
export const galleryIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: galleryIndex.url(options),
    method: 'get',
})

galleryIndex.definition = {
    methods: ["get","head"],
    url: '/admin/gallery',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\GalleryController::galleryIndex
 * @see app/Http/Controllers/Backend/GalleryController.php:21
 * @route '/admin/gallery'
 */
galleryIndex.url = (options?: RouteQueryOptions) => {
    return galleryIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\GalleryController::galleryIndex
 * @see app/Http/Controllers/Backend/GalleryController.php:21
 * @route '/admin/gallery'
 */
galleryIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: galleryIndex.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\GalleryController::galleryIndex
 * @see app/Http/Controllers/Backend/GalleryController.php:21
 * @route '/admin/gallery'
 */
galleryIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: galleryIndex.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\GalleryController::galleryIndex
 * @see app/Http/Controllers/Backend/GalleryController.php:21
 * @route '/admin/gallery'
 */
    const galleryIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: galleryIndex.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\GalleryController::galleryIndex
 * @see app/Http/Controllers/Backend/GalleryController.php:21
 * @route '/admin/gallery'
 */
        galleryIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: galleryIndex.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\GalleryController::galleryIndex
 * @see app/Http/Controllers/Backend/GalleryController.php:21
 * @route '/admin/gallery'
 */
        galleryIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: galleryIndex.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    galleryIndex.form = galleryIndexForm
/**
* @see \App\Http\Controllers\Backend\GalleryController::galleryCreate
 * @see app/Http/Controllers/Backend/GalleryController.php:32
 * @route '/admin/gallery/create'
 */
export const galleryCreate = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: galleryCreate.url(options),
    method: 'get',
})

galleryCreate.definition = {
    methods: ["get","head"],
    url: '/admin/gallery/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\GalleryController::galleryCreate
 * @see app/Http/Controllers/Backend/GalleryController.php:32
 * @route '/admin/gallery/create'
 */
galleryCreate.url = (options?: RouteQueryOptions) => {
    return galleryCreate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\GalleryController::galleryCreate
 * @see app/Http/Controllers/Backend/GalleryController.php:32
 * @route '/admin/gallery/create'
 */
galleryCreate.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: galleryCreate.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\GalleryController::galleryCreate
 * @see app/Http/Controllers/Backend/GalleryController.php:32
 * @route '/admin/gallery/create'
 */
galleryCreate.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: galleryCreate.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\GalleryController::galleryCreate
 * @see app/Http/Controllers/Backend/GalleryController.php:32
 * @route '/admin/gallery/create'
 */
    const galleryCreateForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: galleryCreate.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\GalleryController::galleryCreate
 * @see app/Http/Controllers/Backend/GalleryController.php:32
 * @route '/admin/gallery/create'
 */
        galleryCreateForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: galleryCreate.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\GalleryController::galleryCreate
 * @see app/Http/Controllers/Backend/GalleryController.php:32
 * @route '/admin/gallery/create'
 */
        galleryCreateForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: galleryCreate.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    galleryCreate.form = galleryCreateForm
/**
* @see \App\Http\Controllers\Backend\GalleryController::galleryStore
 * @see app/Http/Controllers/Backend/GalleryController.php:40
 * @route '/admin/gallery/store'
 */
export const galleryStore = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: galleryStore.url(options),
    method: 'post',
})

galleryStore.definition = {
    methods: ["post"],
    url: '/admin/gallery/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\GalleryController::galleryStore
 * @see app/Http/Controllers/Backend/GalleryController.php:40
 * @route '/admin/gallery/store'
 */
galleryStore.url = (options?: RouteQueryOptions) => {
    return galleryStore.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\GalleryController::galleryStore
 * @see app/Http/Controllers/Backend/GalleryController.php:40
 * @route '/admin/gallery/store'
 */
galleryStore.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: galleryStore.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\GalleryController::galleryStore
 * @see app/Http/Controllers/Backend/GalleryController.php:40
 * @route '/admin/gallery/store'
 */
    const galleryStoreForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: galleryStore.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\GalleryController::galleryStore
 * @see app/Http/Controllers/Backend/GalleryController.php:40
 * @route '/admin/gallery/store'
 */
        galleryStoreForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: galleryStore.url(options),
            method: 'post',
        })
    
    galleryStore.form = galleryStoreForm
/**
* @see \App\Http\Controllers\Backend\GalleryController::galleryEdit
 * @see app/Http/Controllers/Backend/GalleryController.php:65
 * @route '/admin/gallery/edit/{gallery}'
 */
export const galleryEdit = (args: { gallery: number | { id: number } } | [gallery: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: galleryEdit.url(args, options),
    method: 'get',
})

galleryEdit.definition = {
    methods: ["get","head"],
    url: '/admin/gallery/edit/{gallery}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\GalleryController::galleryEdit
 * @see app/Http/Controllers/Backend/GalleryController.php:65
 * @route '/admin/gallery/edit/{gallery}'
 */
galleryEdit.url = (args: { gallery: number | { id: number } } | [gallery: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { gallery: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { gallery: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    gallery: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        gallery: typeof args.gallery === 'object'
                ? args.gallery.id
                : args.gallery,
                }

    return galleryEdit.definition.url
            .replace('{gallery}', parsedArgs.gallery.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\GalleryController::galleryEdit
 * @see app/Http/Controllers/Backend/GalleryController.php:65
 * @route '/admin/gallery/edit/{gallery}'
 */
galleryEdit.get = (args: { gallery: number | { id: number } } | [gallery: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: galleryEdit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\GalleryController::galleryEdit
 * @see app/Http/Controllers/Backend/GalleryController.php:65
 * @route '/admin/gallery/edit/{gallery}'
 */
galleryEdit.head = (args: { gallery: number | { id: number } } | [gallery: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: galleryEdit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\GalleryController::galleryEdit
 * @see app/Http/Controllers/Backend/GalleryController.php:65
 * @route '/admin/gallery/edit/{gallery}'
 */
    const galleryEditForm = (args: { gallery: number | { id: number } } | [gallery: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: galleryEdit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\GalleryController::galleryEdit
 * @see app/Http/Controllers/Backend/GalleryController.php:65
 * @route '/admin/gallery/edit/{gallery}'
 */
        galleryEditForm.get = (args: { gallery: number | { id: number } } | [gallery: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: galleryEdit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\GalleryController::galleryEdit
 * @see app/Http/Controllers/Backend/GalleryController.php:65
 * @route '/admin/gallery/edit/{gallery}'
 */
        galleryEditForm.head = (args: { gallery: number | { id: number } } | [gallery: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: galleryEdit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    galleryEdit.form = galleryEditForm
/**
* @see \App\Http\Controllers\Backend\GalleryController::galleryUpdate
 * @see app/Http/Controllers/Backend/GalleryController.php:75
 * @route '/admin/gallery/update/{gallery}'
 */
export const galleryUpdate = (args: { gallery: number | { id: number } } | [gallery: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: galleryUpdate.url(args, options),
    method: 'post',
})

galleryUpdate.definition = {
    methods: ["post"],
    url: '/admin/gallery/update/{gallery}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\GalleryController::galleryUpdate
 * @see app/Http/Controllers/Backend/GalleryController.php:75
 * @route '/admin/gallery/update/{gallery}'
 */
galleryUpdate.url = (args: { gallery: number | { id: number } } | [gallery: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { gallery: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { gallery: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    gallery: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        gallery: typeof args.gallery === 'object'
                ? args.gallery.id
                : args.gallery,
                }

    return galleryUpdate.definition.url
            .replace('{gallery}', parsedArgs.gallery.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\GalleryController::galleryUpdate
 * @see app/Http/Controllers/Backend/GalleryController.php:75
 * @route '/admin/gallery/update/{gallery}'
 */
galleryUpdate.post = (args: { gallery: number | { id: number } } | [gallery: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: galleryUpdate.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\GalleryController::galleryUpdate
 * @see app/Http/Controllers/Backend/GalleryController.php:75
 * @route '/admin/gallery/update/{gallery}'
 */
    const galleryUpdateForm = (args: { gallery: number | { id: number } } | [gallery: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: galleryUpdate.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\GalleryController::galleryUpdate
 * @see app/Http/Controllers/Backend/GalleryController.php:75
 * @route '/admin/gallery/update/{gallery}'
 */
        galleryUpdateForm.post = (args: { gallery: number | { id: number } } | [gallery: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: galleryUpdate.url(args, options),
            method: 'post',
        })
    
    galleryUpdate.form = galleryUpdateForm
/**
* @see \App\Http\Controllers\Backend\GalleryController::galleryDestroy
 * @see app/Http/Controllers/Backend/GalleryController.php:103
 * @route '/admin/gallery/delete/{gallery}'
 */
export const galleryDestroy = (args: { gallery: number | { id: number } } | [gallery: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: galleryDestroy.url(args, options),
    method: 'delete',
})

galleryDestroy.definition = {
    methods: ["delete"],
    url: '/admin/gallery/delete/{gallery}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Backend\GalleryController::galleryDestroy
 * @see app/Http/Controllers/Backend/GalleryController.php:103
 * @route '/admin/gallery/delete/{gallery}'
 */
galleryDestroy.url = (args: { gallery: number | { id: number } } | [gallery: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { gallery: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { gallery: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    gallery: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        gallery: typeof args.gallery === 'object'
                ? args.gallery.id
                : args.gallery,
                }

    return galleryDestroy.definition.url
            .replace('{gallery}', parsedArgs.gallery.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\GalleryController::galleryDestroy
 * @see app/Http/Controllers/Backend/GalleryController.php:103
 * @route '/admin/gallery/delete/{gallery}'
 */
galleryDestroy.delete = (args: { gallery: number | { id: number } } | [gallery: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: galleryDestroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Backend\GalleryController::galleryDestroy
 * @see app/Http/Controllers/Backend/GalleryController.php:103
 * @route '/admin/gallery/delete/{gallery}'
 */
    const galleryDestroyForm = (args: { gallery: number | { id: number } } | [gallery: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: galleryDestroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\GalleryController::galleryDestroy
 * @see app/Http/Controllers/Backend/GalleryController.php:103
 * @route '/admin/gallery/delete/{gallery}'
 */
        galleryDestroyForm.delete = (args: { gallery: number | { id: number } } | [gallery: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: galleryDestroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    galleryDestroy.form = galleryDestroyForm
/**
* @see \App\Http\Controllers\Backend\CareerController::careerIndex
 * @see app/Http/Controllers/Backend/CareerController.php:20
 * @route '/admin/career'
 */
export const careerIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: careerIndex.url(options),
    method: 'get',
})

careerIndex.definition = {
    methods: ["get","head"],
    url: '/admin/career',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\CareerController::careerIndex
 * @see app/Http/Controllers/Backend/CareerController.php:20
 * @route '/admin/career'
 */
careerIndex.url = (options?: RouteQueryOptions) => {
    return careerIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CareerController::careerIndex
 * @see app/Http/Controllers/Backend/CareerController.php:20
 * @route '/admin/career'
 */
careerIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: careerIndex.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\CareerController::careerIndex
 * @see app/Http/Controllers/Backend/CareerController.php:20
 * @route '/admin/career'
 */
careerIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: careerIndex.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\CareerController::careerIndex
 * @see app/Http/Controllers/Backend/CareerController.php:20
 * @route '/admin/career'
 */
    const careerIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: careerIndex.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\CareerController::careerIndex
 * @see app/Http/Controllers/Backend/CareerController.php:20
 * @route '/admin/career'
 */
        careerIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: careerIndex.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\CareerController::careerIndex
 * @see app/Http/Controllers/Backend/CareerController.php:20
 * @route '/admin/career'
 */
        careerIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: careerIndex.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    careerIndex.form = careerIndexForm
/**
* @see \App\Http\Controllers\Backend\CareerController::careerCreate
 * @see app/Http/Controllers/Backend/CareerController.php:31
 * @route '/admin/career/create'
 */
export const careerCreate = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: careerCreate.url(options),
    method: 'get',
})

careerCreate.definition = {
    methods: ["get","head"],
    url: '/admin/career/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\CareerController::careerCreate
 * @see app/Http/Controllers/Backend/CareerController.php:31
 * @route '/admin/career/create'
 */
careerCreate.url = (options?: RouteQueryOptions) => {
    return careerCreate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CareerController::careerCreate
 * @see app/Http/Controllers/Backend/CareerController.php:31
 * @route '/admin/career/create'
 */
careerCreate.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: careerCreate.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\CareerController::careerCreate
 * @see app/Http/Controllers/Backend/CareerController.php:31
 * @route '/admin/career/create'
 */
careerCreate.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: careerCreate.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\CareerController::careerCreate
 * @see app/Http/Controllers/Backend/CareerController.php:31
 * @route '/admin/career/create'
 */
    const careerCreateForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: careerCreate.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\CareerController::careerCreate
 * @see app/Http/Controllers/Backend/CareerController.php:31
 * @route '/admin/career/create'
 */
        careerCreateForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: careerCreate.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\CareerController::careerCreate
 * @see app/Http/Controllers/Backend/CareerController.php:31
 * @route '/admin/career/create'
 */
        careerCreateForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: careerCreate.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    careerCreate.form = careerCreateForm
/**
* @see \App\Http\Controllers\Backend\CareerController::careerStore
 * @see app/Http/Controllers/Backend/CareerController.php:39
 * @route '/admin/career/store'
 */
export const careerStore = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: careerStore.url(options),
    method: 'post',
})

careerStore.definition = {
    methods: ["post"],
    url: '/admin/career/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\CareerController::careerStore
 * @see app/Http/Controllers/Backend/CareerController.php:39
 * @route '/admin/career/store'
 */
careerStore.url = (options?: RouteQueryOptions) => {
    return careerStore.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CareerController::careerStore
 * @see app/Http/Controllers/Backend/CareerController.php:39
 * @route '/admin/career/store'
 */
careerStore.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: careerStore.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\CareerController::careerStore
 * @see app/Http/Controllers/Backend/CareerController.php:39
 * @route '/admin/career/store'
 */
    const careerStoreForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: careerStore.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\CareerController::careerStore
 * @see app/Http/Controllers/Backend/CareerController.php:39
 * @route '/admin/career/store'
 */
        careerStoreForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: careerStore.url(options),
            method: 'post',
        })
    
    careerStore.form = careerStoreForm
/**
* @see \App\Http\Controllers\Backend\CareerController::careerEdit
 * @see app/Http/Controllers/Backend/CareerController.php:68
 * @route '/admin/career/edit/{career}'
 */
export const careerEdit = (args: { career: number | { id: number } } | [career: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: careerEdit.url(args, options),
    method: 'get',
})

careerEdit.definition = {
    methods: ["get","head"],
    url: '/admin/career/edit/{career}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\CareerController::careerEdit
 * @see app/Http/Controllers/Backend/CareerController.php:68
 * @route '/admin/career/edit/{career}'
 */
careerEdit.url = (args: { career: number | { id: number } } | [career: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { career: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { career: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    career: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        career: typeof args.career === 'object'
                ? args.career.id
                : args.career,
                }

    return careerEdit.definition.url
            .replace('{career}', parsedArgs.career.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CareerController::careerEdit
 * @see app/Http/Controllers/Backend/CareerController.php:68
 * @route '/admin/career/edit/{career}'
 */
careerEdit.get = (args: { career: number | { id: number } } | [career: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: careerEdit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\CareerController::careerEdit
 * @see app/Http/Controllers/Backend/CareerController.php:68
 * @route '/admin/career/edit/{career}'
 */
careerEdit.head = (args: { career: number | { id: number } } | [career: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: careerEdit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\CareerController::careerEdit
 * @see app/Http/Controllers/Backend/CareerController.php:68
 * @route '/admin/career/edit/{career}'
 */
    const careerEditForm = (args: { career: number | { id: number } } | [career: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: careerEdit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\CareerController::careerEdit
 * @see app/Http/Controllers/Backend/CareerController.php:68
 * @route '/admin/career/edit/{career}'
 */
        careerEditForm.get = (args: { career: number | { id: number } } | [career: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: careerEdit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\CareerController::careerEdit
 * @see app/Http/Controllers/Backend/CareerController.php:68
 * @route '/admin/career/edit/{career}'
 */
        careerEditForm.head = (args: { career: number | { id: number } } | [career: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: careerEdit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    careerEdit.form = careerEditForm
/**
* @see \App\Http\Controllers\Backend\CareerController::careerUpdate
 * @see app/Http/Controllers/Backend/CareerController.php:78
 * @route '/admin/career/update/{career}'
 */
export const careerUpdate = (args: { career: number | { id: number } } | [career: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: careerUpdate.url(args, options),
    method: 'post',
})

careerUpdate.definition = {
    methods: ["post"],
    url: '/admin/career/update/{career}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\CareerController::careerUpdate
 * @see app/Http/Controllers/Backend/CareerController.php:78
 * @route '/admin/career/update/{career}'
 */
careerUpdate.url = (args: { career: number | { id: number } } | [career: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { career: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { career: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    career: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        career: typeof args.career === 'object'
                ? args.career.id
                : args.career,
                }

    return careerUpdate.definition.url
            .replace('{career}', parsedArgs.career.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CareerController::careerUpdate
 * @see app/Http/Controllers/Backend/CareerController.php:78
 * @route '/admin/career/update/{career}'
 */
careerUpdate.post = (args: { career: number | { id: number } } | [career: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: careerUpdate.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\CareerController::careerUpdate
 * @see app/Http/Controllers/Backend/CareerController.php:78
 * @route '/admin/career/update/{career}'
 */
    const careerUpdateForm = (args: { career: number | { id: number } } | [career: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: careerUpdate.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\CareerController::careerUpdate
 * @see app/Http/Controllers/Backend/CareerController.php:78
 * @route '/admin/career/update/{career}'
 */
        careerUpdateForm.post = (args: { career: number | { id: number } } | [career: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: careerUpdate.url(args, options),
            method: 'post',
        })
    
    careerUpdate.form = careerUpdateForm
/**
* @see \App\Http\Controllers\Backend\CareerController::careerDestroy
 * @see app/Http/Controllers/Backend/CareerController.php:110
 * @route '/admin/career/delete/{career}'
 */
export const careerDestroy = (args: { career: number | { id: number } } | [career: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: careerDestroy.url(args, options),
    method: 'delete',
})

careerDestroy.definition = {
    methods: ["delete"],
    url: '/admin/career/delete/{career}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Backend\CareerController::careerDestroy
 * @see app/Http/Controllers/Backend/CareerController.php:110
 * @route '/admin/career/delete/{career}'
 */
careerDestroy.url = (args: { career: number | { id: number } } | [career: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { career: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { career: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    career: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        career: typeof args.career === 'object'
                ? args.career.id
                : args.career,
                }

    return careerDestroy.definition.url
            .replace('{career}', parsedArgs.career.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CareerController::careerDestroy
 * @see app/Http/Controllers/Backend/CareerController.php:110
 * @route '/admin/career/delete/{career}'
 */
careerDestroy.delete = (args: { career: number | { id: number } } | [career: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: careerDestroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Backend\CareerController::careerDestroy
 * @see app/Http/Controllers/Backend/CareerController.php:110
 * @route '/admin/career/delete/{career}'
 */
    const careerDestroyForm = (args: { career: number | { id: number } } | [career: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: careerDestroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\CareerController::careerDestroy
 * @see app/Http/Controllers/Backend/CareerController.php:110
 * @route '/admin/career/delete/{career}'
 */
        careerDestroyForm.delete = (args: { career: number | { id: number } } | [career: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: careerDestroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    careerDestroy.form = careerDestroyForm
/**
* @see \App\Http\Controllers\Backend\SystemInformationController::systemInformationEdit
 * @see app/Http/Controllers/Backend/SystemInformationController.php:17
 * @route '/admin/systemInformation/edit'
 */
export const systemInformationEdit = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: systemInformationEdit.url(options),
    method: 'get',
})

systemInformationEdit.definition = {
    methods: ["get","head"],
    url: '/admin/systemInformation/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\SystemInformationController::systemInformationEdit
 * @see app/Http/Controllers/Backend/SystemInformationController.php:17
 * @route '/admin/systemInformation/edit'
 */
systemInformationEdit.url = (options?: RouteQueryOptions) => {
    return systemInformationEdit.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\SystemInformationController::systemInformationEdit
 * @see app/Http/Controllers/Backend/SystemInformationController.php:17
 * @route '/admin/systemInformation/edit'
 */
systemInformationEdit.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: systemInformationEdit.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\SystemInformationController::systemInformationEdit
 * @see app/Http/Controllers/Backend/SystemInformationController.php:17
 * @route '/admin/systemInformation/edit'
 */
systemInformationEdit.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: systemInformationEdit.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\SystemInformationController::systemInformationEdit
 * @see app/Http/Controllers/Backend/SystemInformationController.php:17
 * @route '/admin/systemInformation/edit'
 */
    const systemInformationEditForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: systemInformationEdit.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\SystemInformationController::systemInformationEdit
 * @see app/Http/Controllers/Backend/SystemInformationController.php:17
 * @route '/admin/systemInformation/edit'
 */
        systemInformationEditForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: systemInformationEdit.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\SystemInformationController::systemInformationEdit
 * @see app/Http/Controllers/Backend/SystemInformationController.php:17
 * @route '/admin/systemInformation/edit'
 */
        systemInformationEditForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: systemInformationEdit.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    systemInformationEdit.form = systemInformationEditForm
/**
* @see \App\Http\Controllers\Backend\SystemInformationController::systemInformationUpdate
 * @see app/Http/Controllers/Backend/SystemInformationController.php:27
 * @route '/admin/systemInformation/update'
 */
export const systemInformationUpdate = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: systemInformationUpdate.url(options),
    method: 'post',
})

systemInformationUpdate.definition = {
    methods: ["post"],
    url: '/admin/systemInformation/update',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\SystemInformationController::systemInformationUpdate
 * @see app/Http/Controllers/Backend/SystemInformationController.php:27
 * @route '/admin/systemInformation/update'
 */
systemInformationUpdate.url = (options?: RouteQueryOptions) => {
    return systemInformationUpdate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\SystemInformationController::systemInformationUpdate
 * @see app/Http/Controllers/Backend/SystemInformationController.php:27
 * @route '/admin/systemInformation/update'
 */
systemInformationUpdate.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: systemInformationUpdate.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\SystemInformationController::systemInformationUpdate
 * @see app/Http/Controllers/Backend/SystemInformationController.php:27
 * @route '/admin/systemInformation/update'
 */
    const systemInformationUpdateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: systemInformationUpdate.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\SystemInformationController::systemInformationUpdate
 * @see app/Http/Controllers/Backend/SystemInformationController.php:27
 * @route '/admin/systemInformation/update'
 */
        systemInformationUpdateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: systemInformationUpdate.url(options),
            method: 'post',
        })
    
    systemInformationUpdate.form = systemInformationUpdateForm