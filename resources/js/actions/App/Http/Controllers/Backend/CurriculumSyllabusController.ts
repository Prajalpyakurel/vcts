import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\CurriculumSyllabusController::store
 * @see app/Http/Controllers/Backend/CurriculumSyllabusController.php:17
 * @route '/admin/curriculum-syllabus/store'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/curriculum-syllabus/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\CurriculumSyllabusController::store
 * @see app/Http/Controllers/Backend/CurriculumSyllabusController.php:17
 * @route '/admin/curriculum-syllabus/store'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CurriculumSyllabusController::store
 * @see app/Http/Controllers/Backend/CurriculumSyllabusController.php:17
 * @route '/admin/curriculum-syllabus/store'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\CurriculumSyllabusController::store
 * @see app/Http/Controllers/Backend/CurriculumSyllabusController.php:17
 * @route '/admin/curriculum-syllabus/store'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\CurriculumSyllabusController::store
 * @see app/Http/Controllers/Backend/CurriculumSyllabusController.php:17
 * @route '/admin/curriculum-syllabus/store'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Backend\CurriculumSyllabusController::update
 * @see app/Http/Controllers/Backend/CurriculumSyllabusController.php:38
 * @route '/admin/curriculum-syllabus/update/{curriculumSyllabus}'
 */
export const update = (args: { curriculumSyllabus: number | { id: number } } | [curriculumSyllabus: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/curriculum-syllabus/update/{curriculumSyllabus}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Backend\CurriculumSyllabusController::update
 * @see app/Http/Controllers/Backend/CurriculumSyllabusController.php:38
 * @route '/admin/curriculum-syllabus/update/{curriculumSyllabus}'
 */
update.url = (args: { curriculumSyllabus: number | { id: number } } | [curriculumSyllabus: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{curriculumSyllabus}', parsedArgs.curriculumSyllabus.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CurriculumSyllabusController::update
 * @see app/Http/Controllers/Backend/CurriculumSyllabusController.php:38
 * @route '/admin/curriculum-syllabus/update/{curriculumSyllabus}'
 */
update.put = (args: { curriculumSyllabus: number | { id: number } } | [curriculumSyllabus: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Backend\CurriculumSyllabusController::update
 * @see app/Http/Controllers/Backend/CurriculumSyllabusController.php:38
 * @route '/admin/curriculum-syllabus/update/{curriculumSyllabus}'
 */
    const updateForm = (args: { curriculumSyllabus: number | { id: number } } | [curriculumSyllabus: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\CurriculumSyllabusController::update
 * @see app/Http/Controllers/Backend/CurriculumSyllabusController.php:38
 * @route '/admin/curriculum-syllabus/update/{curriculumSyllabus}'
 */
        updateForm.put = (args: { curriculumSyllabus: number | { id: number } } | [curriculumSyllabus: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Backend\CurriculumSyllabusController::destroy
 * @see app/Http/Controllers/Backend/CurriculumSyllabusController.php:57
 * @route '/admin/curriculum-syllabus/delete/{curriculumSyllabus}'
 */
export const destroy = (args: { curriculumSyllabus: number | { id: number } } | [curriculumSyllabus: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/curriculum-syllabus/delete/{curriculumSyllabus}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Backend\CurriculumSyllabusController::destroy
 * @see app/Http/Controllers/Backend/CurriculumSyllabusController.php:57
 * @route '/admin/curriculum-syllabus/delete/{curriculumSyllabus}'
 */
destroy.url = (args: { curriculumSyllabus: number | { id: number } } | [curriculumSyllabus: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{curriculumSyllabus}', parsedArgs.curriculumSyllabus.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CurriculumSyllabusController::destroy
 * @see app/Http/Controllers/Backend/CurriculumSyllabusController.php:57
 * @route '/admin/curriculum-syllabus/delete/{curriculumSyllabus}'
 */
destroy.delete = (args: { curriculumSyllabus: number | { id: number } } | [curriculumSyllabus: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Backend\CurriculumSyllabusController::destroy
 * @see app/Http/Controllers/Backend/CurriculumSyllabusController.php:57
 * @route '/admin/curriculum-syllabus/delete/{curriculumSyllabus}'
 */
    const destroyForm = (args: { curriculumSyllabus: number | { id: number } } | [curriculumSyllabus: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\CurriculumSyllabusController::destroy
 * @see app/Http/Controllers/Backend/CurriculumSyllabusController.php:57
 * @route '/admin/curriculum-syllabus/delete/{curriculumSyllabus}'
 */
        destroyForm.delete = (args: { curriculumSyllabus: number | { id: number } } | [curriculumSyllabus: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const CurriculumSyllabusController = { store, update, destroy }

export default CurriculumSyllabusController