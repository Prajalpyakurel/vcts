import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\FacultyController::index
 * @see app/Http/Controllers/Backend/FacultyController.php:22
 * @route '/admin/faculty'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/faculty',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\FacultyController::index
 * @see app/Http/Controllers/Backend/FacultyController.php:22
 * @route '/admin/faculty'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\FacultyController::index
 * @see app/Http/Controllers/Backend/FacultyController.php:22
 * @route '/admin/faculty'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\FacultyController::index
 * @see app/Http/Controllers/Backend/FacultyController.php:22
 * @route '/admin/faculty'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\FacultyController::index
 * @see app/Http/Controllers/Backend/FacultyController.php:22
 * @route '/admin/faculty'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\FacultyController::index
 * @see app/Http/Controllers/Backend/FacultyController.php:22
 * @route '/admin/faculty'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\FacultyController::index
 * @see app/Http/Controllers/Backend/FacultyController.php:22
 * @route '/admin/faculty'
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
* @see \App\Http\Controllers\Backend\FacultyController::create
 * @see app/Http/Controllers/Backend/FacultyController.php:33
 * @route '/admin/faculty/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/faculty/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\FacultyController::create
 * @see app/Http/Controllers/Backend/FacultyController.php:33
 * @route '/admin/faculty/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\FacultyController::create
 * @see app/Http/Controllers/Backend/FacultyController.php:33
 * @route '/admin/faculty/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\FacultyController::create
 * @see app/Http/Controllers/Backend/FacultyController.php:33
 * @route '/admin/faculty/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\FacultyController::create
 * @see app/Http/Controllers/Backend/FacultyController.php:33
 * @route '/admin/faculty/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\FacultyController::create
 * @see app/Http/Controllers/Backend/FacultyController.php:33
 * @route '/admin/faculty/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\FacultyController::create
 * @see app/Http/Controllers/Backend/FacultyController.php:33
 * @route '/admin/faculty/create'
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
* @see \App\Http\Controllers\Backend\FacultyController::store
 * @see app/Http/Controllers/Backend/FacultyController.php:41
 * @route '/admin/faculty/store'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/faculty/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\FacultyController::store
 * @see app/Http/Controllers/Backend/FacultyController.php:41
 * @route '/admin/faculty/store'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\FacultyController::store
 * @see app/Http/Controllers/Backend/FacultyController.php:41
 * @route '/admin/faculty/store'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\FacultyController::store
 * @see app/Http/Controllers/Backend/FacultyController.php:41
 * @route '/admin/faculty/store'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\FacultyController::store
 * @see app/Http/Controllers/Backend/FacultyController.php:41
 * @route '/admin/faculty/store'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Backend\FacultyController::edit
 * @see app/Http/Controllers/Backend/FacultyController.php:73
 * @route '/admin/faculty/edit/{faculty}'
 */
export const edit = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/faculty/edit/{faculty}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\FacultyController::edit
 * @see app/Http/Controllers/Backend/FacultyController.php:73
 * @route '/admin/faculty/edit/{faculty}'
 */
edit.url = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{faculty}', parsedArgs.faculty.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\FacultyController::edit
 * @see app/Http/Controllers/Backend/FacultyController.php:73
 * @route '/admin/faculty/edit/{faculty}'
 */
edit.get = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\FacultyController::edit
 * @see app/Http/Controllers/Backend/FacultyController.php:73
 * @route '/admin/faculty/edit/{faculty}'
 */
edit.head = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\FacultyController::edit
 * @see app/Http/Controllers/Backend/FacultyController.php:73
 * @route '/admin/faculty/edit/{faculty}'
 */
    const editForm = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\FacultyController::edit
 * @see app/Http/Controllers/Backend/FacultyController.php:73
 * @route '/admin/faculty/edit/{faculty}'
 */
        editForm.get = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\FacultyController::edit
 * @see app/Http/Controllers/Backend/FacultyController.php:73
 * @route '/admin/faculty/edit/{faculty}'
 */
        editForm.head = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Backend\FacultyController::update
 * @see app/Http/Controllers/Backend/FacultyController.php:83
 * @route '/admin/faculty/update/{faculty}'
 */
export const update = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/admin/faculty/update/{faculty}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\FacultyController::update
 * @see app/Http/Controllers/Backend/FacultyController.php:83
 * @route '/admin/faculty/update/{faculty}'
 */
update.url = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{faculty}', parsedArgs.faculty.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\FacultyController::update
 * @see app/Http/Controllers/Backend/FacultyController.php:83
 * @route '/admin/faculty/update/{faculty}'
 */
update.post = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\FacultyController::update
 * @see app/Http/Controllers/Backend/FacultyController.php:83
 * @route '/admin/faculty/update/{faculty}'
 */
    const updateForm = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\FacultyController::update
 * @see app/Http/Controllers/Backend/FacultyController.php:83
 * @route '/admin/faculty/update/{faculty}'
 */
        updateForm.post = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, options),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\Backend\FacultyController::destroy
 * @see app/Http/Controllers/Backend/FacultyController.php:117
 * @route '/admin/faculty/delete/{faculty}'
 */
export const destroy = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/faculty/delete/{faculty}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Backend\FacultyController::destroy
 * @see app/Http/Controllers/Backend/FacultyController.php:117
 * @route '/admin/faculty/delete/{faculty}'
 */
destroy.url = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{faculty}', parsedArgs.faculty.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\FacultyController::destroy
 * @see app/Http/Controllers/Backend/FacultyController.php:117
 * @route '/admin/faculty/delete/{faculty}'
 */
destroy.delete = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Backend\FacultyController::destroy
 * @see app/Http/Controllers/Backend/FacultyController.php:117
 * @route '/admin/faculty/delete/{faculty}'
 */
    const destroyForm = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\FacultyController::destroy
 * @see app/Http/Controllers/Backend/FacultyController.php:117
 * @route '/admin/faculty/delete/{faculty}'
 */
        destroyForm.delete = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const FacultyController = { index, create, store, edit, update, destroy }

export default FacultyController