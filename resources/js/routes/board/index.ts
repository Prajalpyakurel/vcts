import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Frontend\IndexController::member
 * @see app/Http/Controllers/Frontend/IndexController.php:98
 * @route '/board-members'
 */
export const member = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: member.url(options),
    method: 'get',
})

member.definition = {
    methods: ["get","head"],
    url: '/board-members',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\IndexController::member
 * @see app/Http/Controllers/Frontend/IndexController.php:98
 * @route '/board-members'
 */
member.url = (options?: RouteQueryOptions) => {
    return member.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\IndexController::member
 * @see app/Http/Controllers/Frontend/IndexController.php:98
 * @route '/board-members'
 */
member.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: member.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\IndexController::member
 * @see app/Http/Controllers/Frontend/IndexController.php:98
 * @route '/board-members'
 */
member.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: member.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\IndexController::member
 * @see app/Http/Controllers/Frontend/IndexController.php:98
 * @route '/board-members'
 */
    const memberForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: member.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\IndexController::member
 * @see app/Http/Controllers/Frontend/IndexController.php:98
 * @route '/board-members'
 */
        memberForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: member.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\IndexController::member
 * @see app/Http/Controllers/Frontend/IndexController.php:98
 * @route '/board-members'
 */
        memberForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: member.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    member.form = memberForm
const board = {
    member: Object.assign(member, member),
}

export default board