import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\DepartmentController::index
 * @see app/Http/Controllers/Backend/DepartmentController.php:22
 * @route '/admin/department'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/department',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\DepartmentController::index
 * @see app/Http/Controllers/Backend/DepartmentController.php:22
 * @route '/admin/department'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\DepartmentController::index
 * @see app/Http/Controllers/Backend/DepartmentController.php:22
 * @route '/admin/department'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\DepartmentController::index
 * @see app/Http/Controllers/Backend/DepartmentController.php:22
 * @route '/admin/department'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\DepartmentController::index
 * @see app/Http/Controllers/Backend/DepartmentController.php:22
 * @route '/admin/department'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\DepartmentController::index
 * @see app/Http/Controllers/Backend/DepartmentController.php:22
 * @route '/admin/department'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\DepartmentController::index
 * @see app/Http/Controllers/Backend/DepartmentController.php:22
 * @route '/admin/department'
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
* @see \App\Http\Controllers\Backend\DepartmentController::create
 * @see app/Http/Controllers/Backend/DepartmentController.php:37
 * @route '/admin/department/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/department/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\DepartmentController::create
 * @see app/Http/Controllers/Backend/DepartmentController.php:37
 * @route '/admin/department/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\DepartmentController::create
 * @see app/Http/Controllers/Backend/DepartmentController.php:37
 * @route '/admin/department/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\DepartmentController::create
 * @see app/Http/Controllers/Backend/DepartmentController.php:37
 * @route '/admin/department/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\DepartmentController::create
 * @see app/Http/Controllers/Backend/DepartmentController.php:37
 * @route '/admin/department/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\DepartmentController::create
 * @see app/Http/Controllers/Backend/DepartmentController.php:37
 * @route '/admin/department/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\DepartmentController::create
 * @see app/Http/Controllers/Backend/DepartmentController.php:37
 * @route '/admin/department/create'
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
* @see \App\Http\Controllers\Backend\DepartmentController::store
 * @see app/Http/Controllers/Backend/DepartmentController.php:47
 * @route '/admin/department/store'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/department/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\DepartmentController::store
 * @see app/Http/Controllers/Backend/DepartmentController.php:47
 * @route '/admin/department/store'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\DepartmentController::store
 * @see app/Http/Controllers/Backend/DepartmentController.php:47
 * @route '/admin/department/store'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\DepartmentController::store
 * @see app/Http/Controllers/Backend/DepartmentController.php:47
 * @route '/admin/department/store'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\DepartmentController::store
 * @see app/Http/Controllers/Backend/DepartmentController.php:47
 * @route '/admin/department/store'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Backend\DepartmentController::edit
 * @see app/Http/Controllers/Backend/DepartmentController.php:67
 * @route '/admin/department/edit/{department}'
 */
export const edit = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/department/edit/{department}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\DepartmentController::edit
 * @see app/Http/Controllers/Backend/DepartmentController.php:67
 * @route '/admin/department/edit/{department}'
 */
edit.url = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{department}', parsedArgs.department.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\DepartmentController::edit
 * @see app/Http/Controllers/Backend/DepartmentController.php:67
 * @route '/admin/department/edit/{department}'
 */
edit.get = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\DepartmentController::edit
 * @see app/Http/Controllers/Backend/DepartmentController.php:67
 * @route '/admin/department/edit/{department}'
 */
edit.head = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\DepartmentController::edit
 * @see app/Http/Controllers/Backend/DepartmentController.php:67
 * @route '/admin/department/edit/{department}'
 */
    const editForm = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\DepartmentController::edit
 * @see app/Http/Controllers/Backend/DepartmentController.php:67
 * @route '/admin/department/edit/{department}'
 */
        editForm.get = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\DepartmentController::edit
 * @see app/Http/Controllers/Backend/DepartmentController.php:67
 * @route '/admin/department/edit/{department}'
 */
        editForm.head = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Backend\DepartmentController::update
 * @see app/Http/Controllers/Backend/DepartmentController.php:79
 * @route '/admin/department/update/{department}'
 */
export const update = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/admin/department/update/{department}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\DepartmentController::update
 * @see app/Http/Controllers/Backend/DepartmentController.php:79
 * @route '/admin/department/update/{department}'
 */
update.url = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{department}', parsedArgs.department.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\DepartmentController::update
 * @see app/Http/Controllers/Backend/DepartmentController.php:79
 * @route '/admin/department/update/{department}'
 */
update.post = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\DepartmentController::update
 * @see app/Http/Controllers/Backend/DepartmentController.php:79
 * @route '/admin/department/update/{department}'
 */
    const updateForm = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\DepartmentController::update
 * @see app/Http/Controllers/Backend/DepartmentController.php:79
 * @route '/admin/department/update/{department}'
 */
        updateForm.post = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, options),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\Backend\DepartmentController::destroy
 * @see app/Http/Controllers/Backend/DepartmentController.php:97
 * @route '/admin/department/delete/{department}'
 */
export const destroy = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/department/delete/{department}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Backend\DepartmentController::destroy
 * @see app/Http/Controllers/Backend/DepartmentController.php:97
 * @route '/admin/department/delete/{department}'
 */
destroy.url = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{department}', parsedArgs.department.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\DepartmentController::destroy
 * @see app/Http/Controllers/Backend/DepartmentController.php:97
 * @route '/admin/department/delete/{department}'
 */
destroy.delete = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Backend\DepartmentController::destroy
 * @see app/Http/Controllers/Backend/DepartmentController.php:97
 * @route '/admin/department/delete/{department}'
 */
    const destroyForm = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\DepartmentController::destroy
 * @see app/Http/Controllers/Backend/DepartmentController.php:97
 * @route '/admin/department/delete/{department}'
 */
        destroyForm.delete = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const DepartmentController = { index, create, store, edit, update, destroy }

export default DepartmentController