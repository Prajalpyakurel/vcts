import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\HeroSectionController::index
 * @see app/Http/Controllers/Backend/HeroSectionController.php:22
 * @route '/admin/hero-section'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/hero-section',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\HeroSectionController::index
 * @see app/Http/Controllers/Backend/HeroSectionController.php:22
 * @route '/admin/hero-section'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\HeroSectionController::index
 * @see app/Http/Controllers/Backend/HeroSectionController.php:22
 * @route '/admin/hero-section'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\HeroSectionController::index
 * @see app/Http/Controllers/Backend/HeroSectionController.php:22
 * @route '/admin/hero-section'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\HeroSectionController::index
 * @see app/Http/Controllers/Backend/HeroSectionController.php:22
 * @route '/admin/hero-section'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\HeroSectionController::index
 * @see app/Http/Controllers/Backend/HeroSectionController.php:22
 * @route '/admin/hero-section'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\HeroSectionController::index
 * @see app/Http/Controllers/Backend/HeroSectionController.php:22
 * @route '/admin/hero-section'
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
* @see \App\Http\Controllers\Backend\HeroSectionController::create
 * @see app/Http/Controllers/Backend/HeroSectionController.php:37
 * @route '/admin/hero-section/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/hero-section/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\HeroSectionController::create
 * @see app/Http/Controllers/Backend/HeroSectionController.php:37
 * @route '/admin/hero-section/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\HeroSectionController::create
 * @see app/Http/Controllers/Backend/HeroSectionController.php:37
 * @route '/admin/hero-section/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\HeroSectionController::create
 * @see app/Http/Controllers/Backend/HeroSectionController.php:37
 * @route '/admin/hero-section/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\HeroSectionController::create
 * @see app/Http/Controllers/Backend/HeroSectionController.php:37
 * @route '/admin/hero-section/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\HeroSectionController::create
 * @see app/Http/Controllers/Backend/HeroSectionController.php:37
 * @route '/admin/hero-section/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\HeroSectionController::create
 * @see app/Http/Controllers/Backend/HeroSectionController.php:37
 * @route '/admin/hero-section/create'
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
* @see \App\Http\Controllers\Backend\HeroSectionController::store
 * @see app/Http/Controllers/Backend/HeroSectionController.php:45
 * @route '/admin/hero-section/store'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/hero-section/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\HeroSectionController::store
 * @see app/Http/Controllers/Backend/HeroSectionController.php:45
 * @route '/admin/hero-section/store'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\HeroSectionController::store
 * @see app/Http/Controllers/Backend/HeroSectionController.php:45
 * @route '/admin/hero-section/store'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\HeroSectionController::store
 * @see app/Http/Controllers/Backend/HeroSectionController.php:45
 * @route '/admin/hero-section/store'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\HeroSectionController::store
 * @see app/Http/Controllers/Backend/HeroSectionController.php:45
 * @route '/admin/hero-section/store'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Backend\HeroSectionController::edit
 * @see app/Http/Controllers/Backend/HeroSectionController.php:77
 * @route '/admin/hero-section/edit/{heroSection}'
 */
export const edit = (args: { heroSection: number | { id: number } } | [heroSection: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/hero-section/edit/{heroSection}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\HeroSectionController::edit
 * @see app/Http/Controllers/Backend/HeroSectionController.php:77
 * @route '/admin/hero-section/edit/{heroSection}'
 */
edit.url = (args: { heroSection: number | { id: number } } | [heroSection: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{heroSection}', parsedArgs.heroSection.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\HeroSectionController::edit
 * @see app/Http/Controllers/Backend/HeroSectionController.php:77
 * @route '/admin/hero-section/edit/{heroSection}'
 */
edit.get = (args: { heroSection: number | { id: number } } | [heroSection: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\HeroSectionController::edit
 * @see app/Http/Controllers/Backend/HeroSectionController.php:77
 * @route '/admin/hero-section/edit/{heroSection}'
 */
edit.head = (args: { heroSection: number | { id: number } } | [heroSection: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\HeroSectionController::edit
 * @see app/Http/Controllers/Backend/HeroSectionController.php:77
 * @route '/admin/hero-section/edit/{heroSection}'
 */
    const editForm = (args: { heroSection: number | { id: number } } | [heroSection: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\HeroSectionController::edit
 * @see app/Http/Controllers/Backend/HeroSectionController.php:77
 * @route '/admin/hero-section/edit/{heroSection}'
 */
        editForm.get = (args: { heroSection: number | { id: number } } | [heroSection: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\HeroSectionController::edit
 * @see app/Http/Controllers/Backend/HeroSectionController.php:77
 * @route '/admin/hero-section/edit/{heroSection}'
 */
        editForm.head = (args: { heroSection: number | { id: number } } | [heroSection: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Backend\HeroSectionController::update
 * @see app/Http/Controllers/Backend/HeroSectionController.php:87
 * @route '/admin/hero-section/update/{heroSection}'
 */
export const update = (args: { heroSection: number | { id: number } } | [heroSection: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/admin/hero-section/update/{heroSection}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\HeroSectionController::update
 * @see app/Http/Controllers/Backend/HeroSectionController.php:87
 * @route '/admin/hero-section/update/{heroSection}'
 */
update.url = (args: { heroSection: number | { id: number } } | [heroSection: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{heroSection}', parsedArgs.heroSection.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\HeroSectionController::update
 * @see app/Http/Controllers/Backend/HeroSectionController.php:87
 * @route '/admin/hero-section/update/{heroSection}'
 */
update.post = (args: { heroSection: number | { id: number } } | [heroSection: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\HeroSectionController::update
 * @see app/Http/Controllers/Backend/HeroSectionController.php:87
 * @route '/admin/hero-section/update/{heroSection}'
 */
    const updateForm = (args: { heroSection: number | { id: number } } | [heroSection: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\HeroSectionController::update
 * @see app/Http/Controllers/Backend/HeroSectionController.php:87
 * @route '/admin/hero-section/update/{heroSection}'
 */
        updateForm.post = (args: { heroSection: number | { id: number } } | [heroSection: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, options),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\Backend\HeroSectionController::destroy
 * @see app/Http/Controllers/Backend/HeroSectionController.php:128
 * @route '/admin/hero-section/delete/{heroSection}'
 */
export const destroy = (args: { heroSection: number | { id: number } } | [heroSection: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/hero-section/delete/{heroSection}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Backend\HeroSectionController::destroy
 * @see app/Http/Controllers/Backend/HeroSectionController.php:128
 * @route '/admin/hero-section/delete/{heroSection}'
 */
destroy.url = (args: { heroSection: number | { id: number } } | [heroSection: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{heroSection}', parsedArgs.heroSection.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\HeroSectionController::destroy
 * @see app/Http/Controllers/Backend/HeroSectionController.php:128
 * @route '/admin/hero-section/delete/{heroSection}'
 */
destroy.delete = (args: { heroSection: number | { id: number } } | [heroSection: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Backend\HeroSectionController::destroy
 * @see app/Http/Controllers/Backend/HeroSectionController.php:128
 * @route '/admin/hero-section/delete/{heroSection}'
 */
    const destroyForm = (args: { heroSection: number | { id: number } } | [heroSection: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\HeroSectionController::destroy
 * @see app/Http/Controllers/Backend/HeroSectionController.php:128
 * @route '/admin/hero-section/delete/{heroSection}'
 */
        destroyForm.delete = (args: { heroSection: number | { id: number } } | [heroSection: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const HeroSectionController = { index, create, store, edit, update, destroy }

export default HeroSectionController