import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\CurriculumController::index
 * @see app/Http/Controllers/Backend/CurriculumController.php:21
 * @route '/admin/curriculum'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/curriculum',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\CurriculumController::index
 * @see app/Http/Controllers/Backend/CurriculumController.php:21
 * @route '/admin/curriculum'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CurriculumController::index
 * @see app/Http/Controllers/Backend/CurriculumController.php:21
 * @route '/admin/curriculum'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\CurriculumController::index
 * @see app/Http/Controllers/Backend/CurriculumController.php:21
 * @route '/admin/curriculum'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\CurriculumController::index
 * @see app/Http/Controllers/Backend/CurriculumController.php:21
 * @route '/admin/curriculum'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\CurriculumController::index
 * @see app/Http/Controllers/Backend/CurriculumController.php:21
 * @route '/admin/curriculum'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\CurriculumController::index
 * @see app/Http/Controllers/Backend/CurriculumController.php:21
 * @route '/admin/curriculum'
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
* @see \App\Http\Controllers\Backend\CurriculumController::create
 * @see app/Http/Controllers/Backend/CurriculumController.php:32
 * @route '/admin/curriculum/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/curriculum/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\CurriculumController::create
 * @see app/Http/Controllers/Backend/CurriculumController.php:32
 * @route '/admin/curriculum/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CurriculumController::create
 * @see app/Http/Controllers/Backend/CurriculumController.php:32
 * @route '/admin/curriculum/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\CurriculumController::create
 * @see app/Http/Controllers/Backend/CurriculumController.php:32
 * @route '/admin/curriculum/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\CurriculumController::create
 * @see app/Http/Controllers/Backend/CurriculumController.php:32
 * @route '/admin/curriculum/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\CurriculumController::create
 * @see app/Http/Controllers/Backend/CurriculumController.php:32
 * @route '/admin/curriculum/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\CurriculumController::create
 * @see app/Http/Controllers/Backend/CurriculumController.php:32
 * @route '/admin/curriculum/create'
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
* @see \App\Http\Controllers\Backend\CurriculumController::store
 * @see app/Http/Controllers/Backend/CurriculumController.php:43
 * @route '/admin/curriculum/store'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/curriculum/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\CurriculumController::store
 * @see app/Http/Controllers/Backend/CurriculumController.php:43
 * @route '/admin/curriculum/store'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CurriculumController::store
 * @see app/Http/Controllers/Backend/CurriculumController.php:43
 * @route '/admin/curriculum/store'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\CurriculumController::store
 * @see app/Http/Controllers/Backend/CurriculumController.php:43
 * @route '/admin/curriculum/store'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\CurriculumController::store
 * @see app/Http/Controllers/Backend/CurriculumController.php:43
 * @route '/admin/curriculum/store'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Backend\CurriculumController::edit
 * @see app/Http/Controllers/Backend/CurriculumController.php:64
 * @route '/admin/curriculum/edit/{curriculum}'
 */
export const edit = (args: { curriculum: number | { id: number } } | [curriculum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/curriculum/edit/{curriculum}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\CurriculumController::edit
 * @see app/Http/Controllers/Backend/CurriculumController.php:64
 * @route '/admin/curriculum/edit/{curriculum}'
 */
edit.url = (args: { curriculum: number | { id: number } } | [curriculum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{curriculum}', parsedArgs.curriculum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CurriculumController::edit
 * @see app/Http/Controllers/Backend/CurriculumController.php:64
 * @route '/admin/curriculum/edit/{curriculum}'
 */
edit.get = (args: { curriculum: number | { id: number } } | [curriculum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\CurriculumController::edit
 * @see app/Http/Controllers/Backend/CurriculumController.php:64
 * @route '/admin/curriculum/edit/{curriculum}'
 */
edit.head = (args: { curriculum: number | { id: number } } | [curriculum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\CurriculumController::edit
 * @see app/Http/Controllers/Backend/CurriculumController.php:64
 * @route '/admin/curriculum/edit/{curriculum}'
 */
    const editForm = (args: { curriculum: number | { id: number } } | [curriculum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\CurriculumController::edit
 * @see app/Http/Controllers/Backend/CurriculumController.php:64
 * @route '/admin/curriculum/edit/{curriculum}'
 */
        editForm.get = (args: { curriculum: number | { id: number } } | [curriculum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\CurriculumController::edit
 * @see app/Http/Controllers/Backend/CurriculumController.php:64
 * @route '/admin/curriculum/edit/{curriculum}'
 */
        editForm.head = (args: { curriculum: number | { id: number } } | [curriculum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Backend\CurriculumController::update
 * @see app/Http/Controllers/Backend/CurriculumController.php:77
 * @route '/admin/curriculum/update/{curriculum}'
 */
export const update = (args: { curriculum: number | { id: number } } | [curriculum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/curriculum/update/{curriculum}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Backend\CurriculumController::update
 * @see app/Http/Controllers/Backend/CurriculumController.php:77
 * @route '/admin/curriculum/update/{curriculum}'
 */
update.url = (args: { curriculum: number | { id: number } } | [curriculum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{curriculum}', parsedArgs.curriculum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CurriculumController::update
 * @see app/Http/Controllers/Backend/CurriculumController.php:77
 * @route '/admin/curriculum/update/{curriculum}'
 */
update.put = (args: { curriculum: number | { id: number } } | [curriculum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Backend\CurriculumController::update
 * @see app/Http/Controllers/Backend/CurriculumController.php:77
 * @route '/admin/curriculum/update/{curriculum}'
 */
    const updateForm = (args: { curriculum: number | { id: number } } | [curriculum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\CurriculumController::update
 * @see app/Http/Controllers/Backend/CurriculumController.php:77
 * @route '/admin/curriculum/update/{curriculum}'
 */
        updateForm.put = (args: { curriculum: number | { id: number } } | [curriculum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\Backend\CurriculumController::destroy
 * @see app/Http/Controllers/Backend/CurriculumController.php:97
 * @route '/admin/curriculum/delete/{curriculum}'
 */
export const destroy = (args: { curriculum: number | { id: number } } | [curriculum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/curriculum/delete/{curriculum}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Backend\CurriculumController::destroy
 * @see app/Http/Controllers/Backend/CurriculumController.php:97
 * @route '/admin/curriculum/delete/{curriculum}'
 */
destroy.url = (args: { curriculum: number | { id: number } } | [curriculum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{curriculum}', parsedArgs.curriculum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CurriculumController::destroy
 * @see app/Http/Controllers/Backend/CurriculumController.php:97
 * @route '/admin/curriculum/delete/{curriculum}'
 */
destroy.delete = (args: { curriculum: number | { id: number } } | [curriculum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Backend\CurriculumController::destroy
 * @see app/Http/Controllers/Backend/CurriculumController.php:97
 * @route '/admin/curriculum/delete/{curriculum}'
 */
    const destroyForm = (args: { curriculum: number | { id: number } } | [curriculum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\CurriculumController::destroy
 * @see app/Http/Controllers/Backend/CurriculumController.php:97
 * @route '/admin/curriculum/delete/{curriculum}'
 */
        destroyForm.delete = (args: { curriculum: number | { id: number } } | [curriculum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const CurriculumController = { index, create, store, edit, update, destroy }

export default CurriculumController