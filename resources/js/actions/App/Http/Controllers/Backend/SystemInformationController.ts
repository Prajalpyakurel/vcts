import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\SystemInformationController::edit
 * @see app/Http/Controllers/Backend/SystemInformationController.php:17
 * @route '/admin/systemInformation/edit'
 */
export const edit = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/systemInformation/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\SystemInformationController::edit
 * @see app/Http/Controllers/Backend/SystemInformationController.php:17
 * @route '/admin/systemInformation/edit'
 */
edit.url = (options?: RouteQueryOptions) => {
    return edit.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\SystemInformationController::edit
 * @see app/Http/Controllers/Backend/SystemInformationController.php:17
 * @route '/admin/systemInformation/edit'
 */
edit.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\SystemInformationController::edit
 * @see app/Http/Controllers/Backend/SystemInformationController.php:17
 * @route '/admin/systemInformation/edit'
 */
edit.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\SystemInformationController::edit
 * @see app/Http/Controllers/Backend/SystemInformationController.php:17
 * @route '/admin/systemInformation/edit'
 */
    const editForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\SystemInformationController::edit
 * @see app/Http/Controllers/Backend/SystemInformationController.php:17
 * @route '/admin/systemInformation/edit'
 */
        editForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\SystemInformationController::edit
 * @see app/Http/Controllers/Backend/SystemInformationController.php:17
 * @route '/admin/systemInformation/edit'
 */
        editForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\Backend\SystemInformationController::update
 * @see app/Http/Controllers/Backend/SystemInformationController.php:27
 * @route '/admin/systemInformation/update'
 */
export const update = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/admin/systemInformation/update',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\SystemInformationController::update
 * @see app/Http/Controllers/Backend/SystemInformationController.php:27
 * @route '/admin/systemInformation/update'
 */
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\SystemInformationController::update
 * @see app/Http/Controllers/Backend/SystemInformationController.php:27
 * @route '/admin/systemInformation/update'
 */
update.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\SystemInformationController::update
 * @see app/Http/Controllers/Backend/SystemInformationController.php:27
 * @route '/admin/systemInformation/update'
 */
    const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\SystemInformationController::update
 * @see app/Http/Controllers/Backend/SystemInformationController.php:27
 * @route '/admin/systemInformation/update'
 */
        updateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(options),
            method: 'post',
        })
    
    update.form = updateForm
const SystemInformationController = { edit, update }

export default SystemInformationController