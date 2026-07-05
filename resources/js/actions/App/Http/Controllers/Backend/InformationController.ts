import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\InformationController::index
 * @see app/Http/Controllers/Backend/InformationController.php:22
 * @route '/admin/information'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/information',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\InformationController::index
 * @see app/Http/Controllers/Backend/InformationController.php:22
 * @route '/admin/information'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\InformationController::index
 * @see app/Http/Controllers/Backend/InformationController.php:22
 * @route '/admin/information'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\InformationController::index
 * @see app/Http/Controllers/Backend/InformationController.php:22
 * @route '/admin/information'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\InformationController::index
 * @see app/Http/Controllers/Backend/InformationController.php:22
 * @route '/admin/information'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\InformationController::index
 * @see app/Http/Controllers/Backend/InformationController.php:22
 * @route '/admin/information'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\InformationController::index
 * @see app/Http/Controllers/Backend/InformationController.php:22
 * @route '/admin/information'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\Backend\InformationController::create
 * @see app/Http/Controllers/Backend/InformationController.php:33
 * @route '/admin/information/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/information/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\InformationController::create
 * @see app/Http/Controllers/Backend/InformationController.php:33
 * @route '/admin/information/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\InformationController::create
 * @see app/Http/Controllers/Backend/InformationController.php:33
 * @route '/admin/information/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\InformationController::create
 * @see app/Http/Controllers/Backend/InformationController.php:33
 * @route '/admin/information/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\InformationController::create
 * @see app/Http/Controllers/Backend/InformationController.php:33
 * @route '/admin/information/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\InformationController::create
 * @see app/Http/Controllers/Backend/InformationController.php:33
 * @route '/admin/information/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\InformationController::create
 * @see app/Http/Controllers/Backend/InformationController.php:33
 * @route '/admin/information/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\Backend\InformationController::store
 * @see app/Http/Controllers/Backend/InformationController.php:41
 * @route '/admin/information/store'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/information/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\InformationController::store
 * @see app/Http/Controllers/Backend/InformationController.php:41
 * @route '/admin/information/store'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\InformationController::store
 * @see app/Http/Controllers/Backend/InformationController.php:41
 * @route '/admin/information/store'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\InformationController::store
 * @see app/Http/Controllers/Backend/InformationController.php:41
 * @route '/admin/information/store'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\InformationController::store
 * @see app/Http/Controllers/Backend/InformationController.php:41
 * @route '/admin/information/store'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Backend\InformationController::edit
 * @see app/Http/Controllers/Backend/InformationController.php:79
 * @route '/admin/information/edit/{information}'
 */
export const edit = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/information/edit/{information}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\InformationController::edit
 * @see app/Http/Controllers/Backend/InformationController.php:79
 * @route '/admin/information/edit/{information}'
 */
edit.url = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{information}', parsedArgs.information.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\InformationController::edit
 * @see app/Http/Controllers/Backend/InformationController.php:79
 * @route '/admin/information/edit/{information}'
 */
edit.get = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\InformationController::edit
 * @see app/Http/Controllers/Backend/InformationController.php:79
 * @route '/admin/information/edit/{information}'
 */
edit.head = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\InformationController::edit
 * @see app/Http/Controllers/Backend/InformationController.php:79
 * @route '/admin/information/edit/{information}'
 */
    const editForm = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\InformationController::edit
 * @see app/Http/Controllers/Backend/InformationController.php:79
 * @route '/admin/information/edit/{information}'
 */
        editForm.get = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\InformationController::edit
 * @see app/Http/Controllers/Backend/InformationController.php:79
 * @route '/admin/information/edit/{information}'
 */
        editForm.head = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\Backend\InformationController::show
 * @see app/Http/Controllers/Backend/InformationController.php:69
 * @route '/admin/information/show/{information}'
 */
export const show = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/information/show/{information}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\InformationController::show
 * @see app/Http/Controllers/Backend/InformationController.php:69
 * @route '/admin/information/show/{information}'
 */
show.url = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{information}', parsedArgs.information.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\InformationController::show
 * @see app/Http/Controllers/Backend/InformationController.php:69
 * @route '/admin/information/show/{information}'
 */
show.get = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\InformationController::show
 * @see app/Http/Controllers/Backend/InformationController.php:69
 * @route '/admin/information/show/{information}'
 */
show.head = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\InformationController::show
 * @see app/Http/Controllers/Backend/InformationController.php:69
 * @route '/admin/information/show/{information}'
 */
    const showForm = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\InformationController::show
 * @see app/Http/Controllers/Backend/InformationController.php:69
 * @route '/admin/information/show/{information}'
 */
        showForm.get = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\InformationController::show
 * @see app/Http/Controllers/Backend/InformationController.php:69
 * @route '/admin/information/show/{information}'
 */
        showForm.head = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\Backend\InformationController::update
 * @see app/Http/Controllers/Backend/InformationController.php:89
 * @route '/admin/information/update/{information}'
 */
export const update = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/admin/information/update/{information}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\InformationController::update
 * @see app/Http/Controllers/Backend/InformationController.php:89
 * @route '/admin/information/update/{information}'
 */
update.url = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{information}', parsedArgs.information.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\InformationController::update
 * @see app/Http/Controllers/Backend/InformationController.php:89
 * @route '/admin/information/update/{information}'
 */
update.post = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\InformationController::update
 * @see app/Http/Controllers/Backend/InformationController.php:89
 * @route '/admin/information/update/{information}'
 */
    const updateForm = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\InformationController::update
 * @see app/Http/Controllers/Backend/InformationController.php:89
 * @route '/admin/information/update/{information}'
 */
        updateForm.post = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, options),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\Backend\InformationController::destroy
 * @see app/Http/Controllers/Backend/InformationController.php:120
 * @route '/admin/information/delete/{information}'
 */
export const destroy = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/information/delete/{information}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Backend\InformationController::destroy
 * @see app/Http/Controllers/Backend/InformationController.php:120
 * @route '/admin/information/delete/{information}'
 */
destroy.url = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{information}', parsedArgs.information.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\InformationController::destroy
 * @see app/Http/Controllers/Backend/InformationController.php:120
 * @route '/admin/information/delete/{information}'
 */
destroy.delete = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Backend\InformationController::destroy
 * @see app/Http/Controllers/Backend/InformationController.php:120
 * @route '/admin/information/delete/{information}'
 */
    const destroyForm = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\InformationController::destroy
 * @see app/Http/Controllers/Backend/InformationController.php:120
 * @route '/admin/information/delete/{information}'
 */
        destroyForm.delete = (args: { information: number | { id: number } } | [information: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const InformationController = { index, create, store, edit, show, update, destroy }

export default InformationController