import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::index
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:21
 * @route '/admin/boardMemberMessage'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/boardMemberMessage',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::index
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:21
 * @route '/admin/boardMemberMessage'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::index
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:21
 * @route '/admin/boardMemberMessage'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::index
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:21
 * @route '/admin/boardMemberMessage'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::index
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:21
 * @route '/admin/boardMemberMessage'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::index
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:21
 * @route '/admin/boardMemberMessage'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::index
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:21
 * @route '/admin/boardMemberMessage'
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
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::create
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:32
 * @route '/admin/boardMemberMessage/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/boardMemberMessage/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::create
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:32
 * @route '/admin/boardMemberMessage/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::create
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:32
 * @route '/admin/boardMemberMessage/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::create
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:32
 * @route '/admin/boardMemberMessage/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::create
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:32
 * @route '/admin/boardMemberMessage/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::create
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:32
 * @route '/admin/boardMemberMessage/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::create
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:32
 * @route '/admin/boardMemberMessage/create'
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
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::store
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:40
 * @route '/admin/boardMemberMessage/store'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/boardMemberMessage/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::store
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:40
 * @route '/admin/boardMemberMessage/store'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::store
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:40
 * @route '/admin/boardMemberMessage/store'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::store
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:40
 * @route '/admin/boardMemberMessage/store'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::store
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:40
 * @route '/admin/boardMemberMessage/store'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::edit
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:68
 * @route '/admin/boardMemberMessage/edit/{boardMemberMessage}'
 */
export const edit = (args: { boardMemberMessage: number | { id: number } } | [boardMemberMessage: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/boardMemberMessage/edit/{boardMemberMessage}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::edit
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:68
 * @route '/admin/boardMemberMessage/edit/{boardMemberMessage}'
 */
edit.url = (args: { boardMemberMessage: number | { id: number } } | [boardMemberMessage: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{boardMemberMessage}', parsedArgs.boardMemberMessage.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::edit
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:68
 * @route '/admin/boardMemberMessage/edit/{boardMemberMessage}'
 */
edit.get = (args: { boardMemberMessage: number | { id: number } } | [boardMemberMessage: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::edit
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:68
 * @route '/admin/boardMemberMessage/edit/{boardMemberMessage}'
 */
edit.head = (args: { boardMemberMessage: number | { id: number } } | [boardMemberMessage: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::edit
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:68
 * @route '/admin/boardMemberMessage/edit/{boardMemberMessage}'
 */
    const editForm = (args: { boardMemberMessage: number | { id: number } } | [boardMemberMessage: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::edit
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:68
 * @route '/admin/boardMemberMessage/edit/{boardMemberMessage}'
 */
        editForm.get = (args: { boardMemberMessage: number | { id: number } } | [boardMemberMessage: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::edit
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:68
 * @route '/admin/boardMemberMessage/edit/{boardMemberMessage}'
 */
        editForm.head = (args: { boardMemberMessage: number | { id: number } } | [boardMemberMessage: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::update
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:78
 * @route '/admin/boardMemberMessage/update/{boardMemberMessage}'
 */
export const update = (args: { boardMemberMessage: number | { id: number } } | [boardMemberMessage: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/admin/boardMemberMessage/update/{boardMemberMessage}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::update
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:78
 * @route '/admin/boardMemberMessage/update/{boardMemberMessage}'
 */
update.url = (args: { boardMemberMessage: number | { id: number } } | [boardMemberMessage: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{boardMemberMessage}', parsedArgs.boardMemberMessage.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::update
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:78
 * @route '/admin/boardMemberMessage/update/{boardMemberMessage}'
 */
update.post = (args: { boardMemberMessage: number | { id: number } } | [boardMemberMessage: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::update
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:78
 * @route '/admin/boardMemberMessage/update/{boardMemberMessage}'
 */
    const updateForm = (args: { boardMemberMessage: number | { id: number } } | [boardMemberMessage: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::update
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:78
 * @route '/admin/boardMemberMessage/update/{boardMemberMessage}'
 */
        updateForm.post = (args: { boardMemberMessage: number | { id: number } } | [boardMemberMessage: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, options),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::destroy
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:109
 * @route '/admin/boardMemberMessage/delete/{boardMemberMessage}'
 */
export const destroy = (args: { boardMemberMessage: number | { id: number } } | [boardMemberMessage: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/boardMemberMessage/delete/{boardMemberMessage}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::destroy
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:109
 * @route '/admin/boardMemberMessage/delete/{boardMemberMessage}'
 */
destroy.url = (args: { boardMemberMessage: number | { id: number } } | [boardMemberMessage: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{boardMemberMessage}', parsedArgs.boardMemberMessage.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::destroy
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:109
 * @route '/admin/boardMemberMessage/delete/{boardMemberMessage}'
 */
destroy.delete = (args: { boardMemberMessage: number | { id: number } } | [boardMemberMessage: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::destroy
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:109
 * @route '/admin/boardMemberMessage/delete/{boardMemberMessage}'
 */
    const destroyForm = (args: { boardMemberMessage: number | { id: number } } | [boardMemberMessage: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\BoardMemberMessageController::destroy
 * @see app/Http/Controllers/Backend/BoardMemberMessageController.php:109
 * @route '/admin/boardMemberMessage/delete/{boardMemberMessage}'
 */
        destroyForm.delete = (args: { boardMemberMessage: number | { id: number } } | [boardMemberMessage: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const BoardMemberMessageController = { index, create, store, edit, update, destroy }

export default BoardMemberMessageController