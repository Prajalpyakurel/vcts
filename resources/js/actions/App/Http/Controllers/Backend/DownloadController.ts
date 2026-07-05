import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\DownloadController::index
 * @see app/Http/Controllers/Backend/DownloadController.php:24
 * @route '/admin/download'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/download',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\DownloadController::index
 * @see app/Http/Controllers/Backend/DownloadController.php:24
 * @route '/admin/download'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\DownloadController::index
 * @see app/Http/Controllers/Backend/DownloadController.php:24
 * @route '/admin/download'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\DownloadController::index
 * @see app/Http/Controllers/Backend/DownloadController.php:24
 * @route '/admin/download'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\DownloadController::index
 * @see app/Http/Controllers/Backend/DownloadController.php:24
 * @route '/admin/download'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\DownloadController::index
 * @see app/Http/Controllers/Backend/DownloadController.php:24
 * @route '/admin/download'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\DownloadController::index
 * @see app/Http/Controllers/Backend/DownloadController.php:24
 * @route '/admin/download'
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
* @see \App\Http\Controllers\Backend\DownloadController::create
 * @see app/Http/Controllers/Backend/DownloadController.php:35
 * @route '/admin/download/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/download/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\DownloadController::create
 * @see app/Http/Controllers/Backend/DownloadController.php:35
 * @route '/admin/download/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\DownloadController::create
 * @see app/Http/Controllers/Backend/DownloadController.php:35
 * @route '/admin/download/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\DownloadController::create
 * @see app/Http/Controllers/Backend/DownloadController.php:35
 * @route '/admin/download/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\DownloadController::create
 * @see app/Http/Controllers/Backend/DownloadController.php:35
 * @route '/admin/download/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\DownloadController::create
 * @see app/Http/Controllers/Backend/DownloadController.php:35
 * @route '/admin/download/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\DownloadController::create
 * @see app/Http/Controllers/Backend/DownloadController.php:35
 * @route '/admin/download/create'
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
* @see \App\Http\Controllers\Backend\DownloadController::store
 * @see app/Http/Controllers/Backend/DownloadController.php:43
 * @route '/admin/download/store'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/download/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\DownloadController::store
 * @see app/Http/Controllers/Backend/DownloadController.php:43
 * @route '/admin/download/store'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\DownloadController::store
 * @see app/Http/Controllers/Backend/DownloadController.php:43
 * @route '/admin/download/store'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\DownloadController::store
 * @see app/Http/Controllers/Backend/DownloadController.php:43
 * @route '/admin/download/store'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\DownloadController::store
 * @see app/Http/Controllers/Backend/DownloadController.php:43
 * @route '/admin/download/store'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Backend\DownloadController::edit
 * @see app/Http/Controllers/Backend/DownloadController.php:69
 * @route '/admin/download/edit/{download}'
 */
export const edit = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/download/edit/{download}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\DownloadController::edit
 * @see app/Http/Controllers/Backend/DownloadController.php:69
 * @route '/admin/download/edit/{download}'
 */
edit.url = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{download}', parsedArgs.download.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\DownloadController::edit
 * @see app/Http/Controllers/Backend/DownloadController.php:69
 * @route '/admin/download/edit/{download}'
 */
edit.get = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\DownloadController::edit
 * @see app/Http/Controllers/Backend/DownloadController.php:69
 * @route '/admin/download/edit/{download}'
 */
edit.head = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\DownloadController::edit
 * @see app/Http/Controllers/Backend/DownloadController.php:69
 * @route '/admin/download/edit/{download}'
 */
    const editForm = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\DownloadController::edit
 * @see app/Http/Controllers/Backend/DownloadController.php:69
 * @route '/admin/download/edit/{download}'
 */
        editForm.get = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\DownloadController::edit
 * @see app/Http/Controllers/Backend/DownloadController.php:69
 * @route '/admin/download/edit/{download}'
 */
        editForm.head = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Backend\DownloadController::update
 * @see app/Http/Controllers/Backend/DownloadController.php:79
 * @route '/admin/download/update/{download}'
 */
export const update = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/admin/download/update/{download}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\DownloadController::update
 * @see app/Http/Controllers/Backend/DownloadController.php:79
 * @route '/admin/download/update/{download}'
 */
update.url = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{download}', parsedArgs.download.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\DownloadController::update
 * @see app/Http/Controllers/Backend/DownloadController.php:79
 * @route '/admin/download/update/{download}'
 */
update.post = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\DownloadController::update
 * @see app/Http/Controllers/Backend/DownloadController.php:79
 * @route '/admin/download/update/{download}'
 */
    const updateForm = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\DownloadController::update
 * @see app/Http/Controllers/Backend/DownloadController.php:79
 * @route '/admin/download/update/{download}'
 */
        updateForm.post = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, options),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\Backend\DownloadController::destroy
 * @see app/Http/Controllers/Backend/DownloadController.php:108
 * @route '/admin/download/delete/{download}'
 */
export const destroy = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/download/delete/{download}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Backend\DownloadController::destroy
 * @see app/Http/Controllers/Backend/DownloadController.php:108
 * @route '/admin/download/delete/{download}'
 */
destroy.url = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{download}', parsedArgs.download.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\DownloadController::destroy
 * @see app/Http/Controllers/Backend/DownloadController.php:108
 * @route '/admin/download/delete/{download}'
 */
destroy.delete = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Backend\DownloadController::destroy
 * @see app/Http/Controllers/Backend/DownloadController.php:108
 * @route '/admin/download/delete/{download}'
 */
    const destroyForm = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\DownloadController::destroy
 * @see app/Http/Controllers/Backend/DownloadController.php:108
 * @route '/admin/download/delete/{download}'
 */
        destroyForm.delete = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
/**
* @see \App\Http\Controllers\Backend\DownloadController::download
 * @see app/Http/Controllers/Backend/DownloadController.php:126
 * @route '/admin/download/file/{download}'
 */
export const download = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: download.url(args, options),
    method: 'get',
})

download.definition = {
    methods: ["get","head"],
    url: '/admin/download/file/{download}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\DownloadController::download
 * @see app/Http/Controllers/Backend/DownloadController.php:126
 * @route '/admin/download/file/{download}'
 */
download.url = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return download.definition.url
            .replace('{download}', parsedArgs.download.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\DownloadController::download
 * @see app/Http/Controllers/Backend/DownloadController.php:126
 * @route '/admin/download/file/{download}'
 */
download.get = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: download.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\DownloadController::download
 * @see app/Http/Controllers/Backend/DownloadController.php:126
 * @route '/admin/download/file/{download}'
 */
download.head = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: download.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\DownloadController::download
 * @see app/Http/Controllers/Backend/DownloadController.php:126
 * @route '/admin/download/file/{download}'
 */
    const downloadForm = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: download.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\DownloadController::download
 * @see app/Http/Controllers/Backend/DownloadController.php:126
 * @route '/admin/download/file/{download}'
 */
        downloadForm.get = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: download.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\DownloadController::download
 * @see app/Http/Controllers/Backend/DownloadController.php:126
 * @route '/admin/download/file/{download}'
 */
        downloadForm.head = (args: { download: number | { id: number } } | [download: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: download.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    download.form = downloadForm
const DownloadController = { index, create, store, edit, update, destroy, download }

export default DownloadController