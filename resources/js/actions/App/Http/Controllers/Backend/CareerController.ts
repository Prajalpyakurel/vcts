import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\CareerController::index
 * @see app/Http/Controllers/Backend/CareerController.php:20
 * @route '/admin/career'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/career',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\CareerController::index
 * @see app/Http/Controllers/Backend/CareerController.php:20
 * @route '/admin/career'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CareerController::index
 * @see app/Http/Controllers/Backend/CareerController.php:20
 * @route '/admin/career'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\CareerController::index
 * @see app/Http/Controllers/Backend/CareerController.php:20
 * @route '/admin/career'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\CareerController::index
 * @see app/Http/Controllers/Backend/CareerController.php:20
 * @route '/admin/career'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\CareerController::index
 * @see app/Http/Controllers/Backend/CareerController.php:20
 * @route '/admin/career'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\CareerController::index
 * @see app/Http/Controllers/Backend/CareerController.php:20
 * @route '/admin/career'
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
* @see \App\Http\Controllers\Backend\CareerController::create
 * @see app/Http/Controllers/Backend/CareerController.php:31
 * @route '/admin/career/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/career/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\CareerController::create
 * @see app/Http/Controllers/Backend/CareerController.php:31
 * @route '/admin/career/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CareerController::create
 * @see app/Http/Controllers/Backend/CareerController.php:31
 * @route '/admin/career/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\CareerController::create
 * @see app/Http/Controllers/Backend/CareerController.php:31
 * @route '/admin/career/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\CareerController::create
 * @see app/Http/Controllers/Backend/CareerController.php:31
 * @route '/admin/career/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\CareerController::create
 * @see app/Http/Controllers/Backend/CareerController.php:31
 * @route '/admin/career/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\CareerController::create
 * @see app/Http/Controllers/Backend/CareerController.php:31
 * @route '/admin/career/create'
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
* @see \App\Http\Controllers\Backend\CareerController::store
 * @see app/Http/Controllers/Backend/CareerController.php:39
 * @route '/admin/career/store'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/career/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\CareerController::store
 * @see app/Http/Controllers/Backend/CareerController.php:39
 * @route '/admin/career/store'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CareerController::store
 * @see app/Http/Controllers/Backend/CareerController.php:39
 * @route '/admin/career/store'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\CareerController::store
 * @see app/Http/Controllers/Backend/CareerController.php:39
 * @route '/admin/career/store'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\CareerController::store
 * @see app/Http/Controllers/Backend/CareerController.php:39
 * @route '/admin/career/store'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Backend\CareerController::edit
 * @see app/Http/Controllers/Backend/CareerController.php:68
 * @route '/admin/career/edit/{career}'
 */
export const edit = (args: { career: number | { id: number } } | [career: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/career/edit/{career}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\CareerController::edit
 * @see app/Http/Controllers/Backend/CareerController.php:68
 * @route '/admin/career/edit/{career}'
 */
edit.url = (args: { career: number | { id: number } } | [career: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{career}', parsedArgs.career.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CareerController::edit
 * @see app/Http/Controllers/Backend/CareerController.php:68
 * @route '/admin/career/edit/{career}'
 */
edit.get = (args: { career: number | { id: number } } | [career: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\CareerController::edit
 * @see app/Http/Controllers/Backend/CareerController.php:68
 * @route '/admin/career/edit/{career}'
 */
edit.head = (args: { career: number | { id: number } } | [career: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\CareerController::edit
 * @see app/Http/Controllers/Backend/CareerController.php:68
 * @route '/admin/career/edit/{career}'
 */
    const editForm = (args: { career: number | { id: number } } | [career: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\CareerController::edit
 * @see app/Http/Controllers/Backend/CareerController.php:68
 * @route '/admin/career/edit/{career}'
 */
        editForm.get = (args: { career: number | { id: number } } | [career: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\CareerController::edit
 * @see app/Http/Controllers/Backend/CareerController.php:68
 * @route '/admin/career/edit/{career}'
 */
        editForm.head = (args: { career: number | { id: number } } | [career: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Backend\CareerController::update
 * @see app/Http/Controllers/Backend/CareerController.php:78
 * @route '/admin/career/update/{career}'
 */
export const update = (args: { career: number | { id: number } } | [career: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/admin/career/update/{career}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\CareerController::update
 * @see app/Http/Controllers/Backend/CareerController.php:78
 * @route '/admin/career/update/{career}'
 */
update.url = (args: { career: number | { id: number } } | [career: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{career}', parsedArgs.career.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CareerController::update
 * @see app/Http/Controllers/Backend/CareerController.php:78
 * @route '/admin/career/update/{career}'
 */
update.post = (args: { career: number | { id: number } } | [career: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\CareerController::update
 * @see app/Http/Controllers/Backend/CareerController.php:78
 * @route '/admin/career/update/{career}'
 */
    const updateForm = (args: { career: number | { id: number } } | [career: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\CareerController::update
 * @see app/Http/Controllers/Backend/CareerController.php:78
 * @route '/admin/career/update/{career}'
 */
        updateForm.post = (args: { career: number | { id: number } } | [career: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, options),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\Backend\CareerController::destroy
 * @see app/Http/Controllers/Backend/CareerController.php:110
 * @route '/admin/career/delete/{career}'
 */
export const destroy = (args: { career: number | { id: number } } | [career: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/career/delete/{career}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Backend\CareerController::destroy
 * @see app/Http/Controllers/Backend/CareerController.php:110
 * @route '/admin/career/delete/{career}'
 */
destroy.url = (args: { career: number | { id: number } } | [career: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{career}', parsedArgs.career.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CareerController::destroy
 * @see app/Http/Controllers/Backend/CareerController.php:110
 * @route '/admin/career/delete/{career}'
 */
destroy.delete = (args: { career: number | { id: number } } | [career: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Backend\CareerController::destroy
 * @see app/Http/Controllers/Backend/CareerController.php:110
 * @route '/admin/career/delete/{career}'
 */
    const destroyForm = (args: { career: number | { id: number } } | [career: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\CareerController::destroy
 * @see app/Http/Controllers/Backend/CareerController.php:110
 * @route '/admin/career/delete/{career}'
 */
        destroyForm.delete = (args: { career: number | { id: number } } | [career: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const CareerController = { index, create, store, edit, update, destroy }

export default CareerController