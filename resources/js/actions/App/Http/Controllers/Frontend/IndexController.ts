import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Frontend\IndexController::index
 * @see app/Http/Controllers/Frontend/IndexController.php:33
 * @route '/'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\IndexController::index
 * @see app/Http/Controllers/Frontend/IndexController.php:33
 * @route '/'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\IndexController::index
 * @see app/Http/Controllers/Frontend/IndexController.php:33
 * @route '/'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\IndexController::index
 * @see app/Http/Controllers/Frontend/IndexController.php:33
 * @route '/'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\IndexController::index
 * @see app/Http/Controllers/Frontend/IndexController.php:33
 * @route '/'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\IndexController::index
 * @see app/Http/Controllers/Frontend/IndexController.php:33
 * @route '/'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\IndexController::index
 * @see app/Http/Controllers/Frontend/IndexController.php:33
 * @route '/'
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
* @see \App\Http\Controllers\Frontend\IndexController::boardMembers
 * @see app/Http/Controllers/Frontend/IndexController.php:98
 * @route '/board-members'
 */
export const boardMembers = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: boardMembers.url(options),
    method: 'get',
})

boardMembers.definition = {
    methods: ["get","head"],
    url: '/board-members',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\IndexController::boardMembers
 * @see app/Http/Controllers/Frontend/IndexController.php:98
 * @route '/board-members'
 */
boardMembers.url = (options?: RouteQueryOptions) => {
    return boardMembers.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\IndexController::boardMembers
 * @see app/Http/Controllers/Frontend/IndexController.php:98
 * @route '/board-members'
 */
boardMembers.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: boardMembers.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\IndexController::boardMembers
 * @see app/Http/Controllers/Frontend/IndexController.php:98
 * @route '/board-members'
 */
boardMembers.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: boardMembers.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\IndexController::boardMembers
 * @see app/Http/Controllers/Frontend/IndexController.php:98
 * @route '/board-members'
 */
    const boardMembersForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: boardMembers.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\IndexController::boardMembers
 * @see app/Http/Controllers/Frontend/IndexController.php:98
 * @route '/board-members'
 */
        boardMembersForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: boardMembers.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\IndexController::boardMembers
 * @see app/Http/Controllers/Frontend/IndexController.php:98
 * @route '/board-members'
 */
        boardMembersForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: boardMembers.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    boardMembers.form = boardMembersForm
/**
* @see \App\Http\Controllers\Frontend\IndexController::teacherIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:109
 * @route '/teachers'
 */
export const teacherIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: teacherIndex.url(options),
    method: 'get',
})

teacherIndex.definition = {
    methods: ["get","head"],
    url: '/teachers',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\IndexController::teacherIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:109
 * @route '/teachers'
 */
teacherIndex.url = (options?: RouteQueryOptions) => {
    return teacherIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\IndexController::teacherIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:109
 * @route '/teachers'
 */
teacherIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: teacherIndex.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\IndexController::teacherIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:109
 * @route '/teachers'
 */
teacherIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: teacherIndex.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\IndexController::teacherIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:109
 * @route '/teachers'
 */
    const teacherIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: teacherIndex.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\IndexController::teacherIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:109
 * @route '/teachers'
 */
        teacherIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: teacherIndex.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\IndexController::teacherIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:109
 * @route '/teachers'
 */
        teacherIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: teacherIndex.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    teacherIndex.form = teacherIndexForm
/**
* @see \App\Http\Controllers\Frontend\IndexController::downloadIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:156
 * @route '/downloads'
 */
export const downloadIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadIndex.url(options),
    method: 'get',
})

downloadIndex.definition = {
    methods: ["get","head"],
    url: '/downloads',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\IndexController::downloadIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:156
 * @route '/downloads'
 */
downloadIndex.url = (options?: RouteQueryOptions) => {
    return downloadIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\IndexController::downloadIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:156
 * @route '/downloads'
 */
downloadIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadIndex.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\IndexController::downloadIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:156
 * @route '/downloads'
 */
downloadIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: downloadIndex.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\IndexController::downloadIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:156
 * @route '/downloads'
 */
    const downloadIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: downloadIndex.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\IndexController::downloadIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:156
 * @route '/downloads'
 */
        downloadIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: downloadIndex.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\IndexController::downloadIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:156
 * @route '/downloads'
 */
        downloadIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: downloadIndex.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    downloadIndex.form = downloadIndexForm
/**
* @see \App\Http\Controllers\Frontend\IndexController::downloadFileIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:168
 * @route '/downloads/{id}'
 */
export const downloadFileIndex = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadFileIndex.url(args, options),
    method: 'get',
})

downloadFileIndex.definition = {
    methods: ["get","head"],
    url: '/downloads/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\IndexController::downloadFileIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:168
 * @route '/downloads/{id}'
 */
downloadFileIndex.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return downloadFileIndex.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\IndexController::downloadFileIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:168
 * @route '/downloads/{id}'
 */
downloadFileIndex.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadFileIndex.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\IndexController::downloadFileIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:168
 * @route '/downloads/{id}'
 */
downloadFileIndex.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: downloadFileIndex.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\IndexController::downloadFileIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:168
 * @route '/downloads/{id}'
 */
    const downloadFileIndexForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: downloadFileIndex.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\IndexController::downloadFileIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:168
 * @route '/downloads/{id}'
 */
        downloadFileIndexForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: downloadFileIndex.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\IndexController::downloadFileIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:168
 * @route '/downloads/{id}'
 */
        downloadFileIndexForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: downloadFileIndex.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    downloadFileIndex.form = downloadFileIndexForm
/**
* @see \App\Http\Controllers\Frontend\IndexController::aboutUS
 * @see app/Http/Controllers/Frontend/IndexController.php:195
 * @route '/about-us'
 */
export const aboutUS = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: aboutUS.url(options),
    method: 'get',
})

aboutUS.definition = {
    methods: ["get","head"],
    url: '/about-us',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\IndexController::aboutUS
 * @see app/Http/Controllers/Frontend/IndexController.php:195
 * @route '/about-us'
 */
aboutUS.url = (options?: RouteQueryOptions) => {
    return aboutUS.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\IndexController::aboutUS
 * @see app/Http/Controllers/Frontend/IndexController.php:195
 * @route '/about-us'
 */
aboutUS.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: aboutUS.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\IndexController::aboutUS
 * @see app/Http/Controllers/Frontend/IndexController.php:195
 * @route '/about-us'
 */
aboutUS.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: aboutUS.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\IndexController::aboutUS
 * @see app/Http/Controllers/Frontend/IndexController.php:195
 * @route '/about-us'
 */
    const aboutUSForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: aboutUS.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\IndexController::aboutUS
 * @see app/Http/Controllers/Frontend/IndexController.php:195
 * @route '/about-us'
 */
        aboutUSForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: aboutUS.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\IndexController::aboutUS
 * @see app/Http/Controllers/Frontend/IndexController.php:195
 * @route '/about-us'
 */
        aboutUSForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: aboutUS.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    aboutUS.form = aboutUSForm
/**
* @see \App\Http\Controllers\Frontend\IndexController::facilityIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:332
 * @route '/facilities'
 */
export const facilityIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: facilityIndex.url(options),
    method: 'get',
})

facilityIndex.definition = {
    methods: ["get","head"],
    url: '/facilities',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\IndexController::facilityIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:332
 * @route '/facilities'
 */
facilityIndex.url = (options?: RouteQueryOptions) => {
    return facilityIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\IndexController::facilityIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:332
 * @route '/facilities'
 */
facilityIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: facilityIndex.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\IndexController::facilityIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:332
 * @route '/facilities'
 */
facilityIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: facilityIndex.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\IndexController::facilityIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:332
 * @route '/facilities'
 */
    const facilityIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: facilityIndex.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\IndexController::facilityIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:332
 * @route '/facilities'
 */
        facilityIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: facilityIndex.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\IndexController::facilityIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:332
 * @route '/facilities'
 */
        facilityIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: facilityIndex.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    facilityIndex.form = facilityIndexForm
/**
* @see \App\Http\Controllers\Frontend\IndexController::galleryIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:343
 * @route '/galleries'
 */
export const galleryIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: galleryIndex.url(options),
    method: 'get',
})

galleryIndex.definition = {
    methods: ["get","head"],
    url: '/galleries',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\IndexController::galleryIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:343
 * @route '/galleries'
 */
galleryIndex.url = (options?: RouteQueryOptions) => {
    return galleryIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\IndexController::galleryIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:343
 * @route '/galleries'
 */
galleryIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: galleryIndex.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\IndexController::galleryIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:343
 * @route '/galleries'
 */
galleryIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: galleryIndex.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\IndexController::galleryIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:343
 * @route '/galleries'
 */
    const galleryIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: galleryIndex.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\IndexController::galleryIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:343
 * @route '/galleries'
 */
        galleryIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: galleryIndex.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\IndexController::galleryIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:343
 * @route '/galleries'
 */
        galleryIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: galleryIndex.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    galleryIndex.form = galleryIndexForm
/**
* @see \App\Http\Controllers\Frontend\IndexController::noticeIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:203
 * @route '/notices'
 */
export const noticeIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: noticeIndex.url(options),
    method: 'get',
})

noticeIndex.definition = {
    methods: ["get","head"],
    url: '/notices',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\IndexController::noticeIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:203
 * @route '/notices'
 */
noticeIndex.url = (options?: RouteQueryOptions) => {
    return noticeIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\IndexController::noticeIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:203
 * @route '/notices'
 */
noticeIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: noticeIndex.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\IndexController::noticeIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:203
 * @route '/notices'
 */
noticeIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: noticeIndex.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\IndexController::noticeIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:203
 * @route '/notices'
 */
    const noticeIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: noticeIndex.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\IndexController::noticeIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:203
 * @route '/notices'
 */
        noticeIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: noticeIndex.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\IndexController::noticeIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:203
 * @route '/notices'
 */
        noticeIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: noticeIndex.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    noticeIndex.form = noticeIndexForm
/**
* @see \App\Http\Controllers\Frontend\IndexController::noticeShow
 * @see app/Http/Controllers/Frontend/IndexController.php:217
 * @route '/notice/{slug}'
 */
export const noticeShow = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: noticeShow.url(args, options),
    method: 'get',
})

noticeShow.definition = {
    methods: ["get","head"],
    url: '/notice/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\IndexController::noticeShow
 * @see app/Http/Controllers/Frontend/IndexController.php:217
 * @route '/notice/{slug}'
 */
noticeShow.url = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { slug: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    slug: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        slug: args.slug,
                }

    return noticeShow.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\IndexController::noticeShow
 * @see app/Http/Controllers/Frontend/IndexController.php:217
 * @route '/notice/{slug}'
 */
noticeShow.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: noticeShow.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\IndexController::noticeShow
 * @see app/Http/Controllers/Frontend/IndexController.php:217
 * @route '/notice/{slug}'
 */
noticeShow.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: noticeShow.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\IndexController::noticeShow
 * @see app/Http/Controllers/Frontend/IndexController.php:217
 * @route '/notice/{slug}'
 */
    const noticeShowForm = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: noticeShow.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\IndexController::noticeShow
 * @see app/Http/Controllers/Frontend/IndexController.php:217
 * @route '/notice/{slug}'
 */
        noticeShowForm.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: noticeShow.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\IndexController::noticeShow
 * @see app/Http/Controllers/Frontend/IndexController.php:217
 * @route '/notice/{slug}'
 */
        noticeShowForm.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: noticeShow.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    noticeShow.form = noticeShowForm
/**
* @see \App\Http\Controllers\Frontend\IndexController::eventIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:231
 * @route '/events'
 */
export const eventIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: eventIndex.url(options),
    method: 'get',
})

eventIndex.definition = {
    methods: ["get","head"],
    url: '/events',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\IndexController::eventIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:231
 * @route '/events'
 */
eventIndex.url = (options?: RouteQueryOptions) => {
    return eventIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\IndexController::eventIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:231
 * @route '/events'
 */
eventIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: eventIndex.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\IndexController::eventIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:231
 * @route '/events'
 */
eventIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: eventIndex.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\IndexController::eventIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:231
 * @route '/events'
 */
    const eventIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: eventIndex.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\IndexController::eventIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:231
 * @route '/events'
 */
        eventIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: eventIndex.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\IndexController::eventIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:231
 * @route '/events'
 */
        eventIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: eventIndex.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    eventIndex.form = eventIndexForm
/**
* @see \App\Http\Controllers\Frontend\IndexController::eventShow
 * @see app/Http/Controllers/Frontend/IndexController.php:245
 * @route '/event/{slug}'
 */
export const eventShow = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: eventShow.url(args, options),
    method: 'get',
})

eventShow.definition = {
    methods: ["get","head"],
    url: '/event/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\IndexController::eventShow
 * @see app/Http/Controllers/Frontend/IndexController.php:245
 * @route '/event/{slug}'
 */
eventShow.url = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { slug: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    slug: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        slug: args.slug,
                }

    return eventShow.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\IndexController::eventShow
 * @see app/Http/Controllers/Frontend/IndexController.php:245
 * @route '/event/{slug}'
 */
eventShow.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: eventShow.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\IndexController::eventShow
 * @see app/Http/Controllers/Frontend/IndexController.php:245
 * @route '/event/{slug}'
 */
eventShow.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: eventShow.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\IndexController::eventShow
 * @see app/Http/Controllers/Frontend/IndexController.php:245
 * @route '/event/{slug}'
 */
    const eventShowForm = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: eventShow.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\IndexController::eventShow
 * @see app/Http/Controllers/Frontend/IndexController.php:245
 * @route '/event/{slug}'
 */
        eventShowForm.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: eventShow.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\IndexController::eventShow
 * @see app/Http/Controllers/Frontend/IndexController.php:245
 * @route '/event/{slug}'
 */
        eventShowForm.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: eventShow.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    eventShow.form = eventShowForm
/**
* @see \App\Http\Controllers\Frontend\IndexController::activityIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:258
 * @route '/activities'
 */
export const activityIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: activityIndex.url(options),
    method: 'get',
})

activityIndex.definition = {
    methods: ["get","head"],
    url: '/activities',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\IndexController::activityIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:258
 * @route '/activities'
 */
activityIndex.url = (options?: RouteQueryOptions) => {
    return activityIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\IndexController::activityIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:258
 * @route '/activities'
 */
activityIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: activityIndex.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\IndexController::activityIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:258
 * @route '/activities'
 */
activityIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: activityIndex.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\IndexController::activityIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:258
 * @route '/activities'
 */
    const activityIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: activityIndex.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\IndexController::activityIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:258
 * @route '/activities'
 */
        activityIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: activityIndex.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\IndexController::activityIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:258
 * @route '/activities'
 */
        activityIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: activityIndex.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    activityIndex.form = activityIndexForm
/**
* @see \App\Http\Controllers\Frontend\IndexController::activityShow
 * @see app/Http/Controllers/Frontend/IndexController.php:287
 * @route '/activity/{slug}'
 */
export const activityShow = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: activityShow.url(args, options),
    method: 'get',
})

activityShow.definition = {
    methods: ["get","head"],
    url: '/activity/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\IndexController::activityShow
 * @see app/Http/Controllers/Frontend/IndexController.php:287
 * @route '/activity/{slug}'
 */
activityShow.url = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { slug: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    slug: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        slug: args.slug,
                }

    return activityShow.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\IndexController::activityShow
 * @see app/Http/Controllers/Frontend/IndexController.php:287
 * @route '/activity/{slug}'
 */
activityShow.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: activityShow.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\IndexController::activityShow
 * @see app/Http/Controllers/Frontend/IndexController.php:287
 * @route '/activity/{slug}'
 */
activityShow.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: activityShow.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\IndexController::activityShow
 * @see app/Http/Controllers/Frontend/IndexController.php:287
 * @route '/activity/{slug}'
 */
    const activityShowForm = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: activityShow.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\IndexController::activityShow
 * @see app/Http/Controllers/Frontend/IndexController.php:287
 * @route '/activity/{slug}'
 */
        activityShowForm.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: activityShow.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\IndexController::activityShow
 * @see app/Http/Controllers/Frontend/IndexController.php:287
 * @route '/activity/{slug}'
 */
        activityShowForm.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: activityShow.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    activityShow.form = activityShowForm
/**
* @see \App\Http\Controllers\Frontend\IndexController::blogIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:355
 * @route '/blogs'
 */
export const blogIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: blogIndex.url(options),
    method: 'get',
})

blogIndex.definition = {
    methods: ["get","head"],
    url: '/blogs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\IndexController::blogIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:355
 * @route '/blogs'
 */
blogIndex.url = (options?: RouteQueryOptions) => {
    return blogIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\IndexController::blogIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:355
 * @route '/blogs'
 */
blogIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: blogIndex.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\IndexController::blogIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:355
 * @route '/blogs'
 */
blogIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: blogIndex.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\IndexController::blogIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:355
 * @route '/blogs'
 */
    const blogIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: blogIndex.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\IndexController::blogIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:355
 * @route '/blogs'
 */
        blogIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: blogIndex.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\IndexController::blogIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:355
 * @route '/blogs'
 */
        blogIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: blogIndex.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    blogIndex.form = blogIndexForm
/**
* @see \App\Http\Controllers\Frontend\IndexController::blogShow
 * @see app/Http/Controllers/Frontend/IndexController.php:384
 * @route '/blog/{slug}'
 */
export const blogShow = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: blogShow.url(args, options),
    method: 'get',
})

blogShow.definition = {
    methods: ["get","head"],
    url: '/blog/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\IndexController::blogShow
 * @see app/Http/Controllers/Frontend/IndexController.php:384
 * @route '/blog/{slug}'
 */
blogShow.url = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { slug: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    slug: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        slug: args.slug,
                }

    return blogShow.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\IndexController::blogShow
 * @see app/Http/Controllers/Frontend/IndexController.php:384
 * @route '/blog/{slug}'
 */
blogShow.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: blogShow.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\IndexController::blogShow
 * @see app/Http/Controllers/Frontend/IndexController.php:384
 * @route '/blog/{slug}'
 */
blogShow.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: blogShow.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\IndexController::blogShow
 * @see app/Http/Controllers/Frontend/IndexController.php:384
 * @route '/blog/{slug}'
 */
    const blogShowForm = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: blogShow.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\IndexController::blogShow
 * @see app/Http/Controllers/Frontend/IndexController.php:384
 * @route '/blog/{slug}'
 */
        blogShowForm.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: blogShow.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\IndexController::blogShow
 * @see app/Http/Controllers/Frontend/IndexController.php:384
 * @route '/blog/{slug}'
 */
        blogShowForm.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: blogShow.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    blogShow.form = blogShowForm
/**
* @see \App\Http\Controllers\Frontend\IndexController::newsIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:398
 * @route '/news'
 */
export const newsIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: newsIndex.url(options),
    method: 'get',
})

newsIndex.definition = {
    methods: ["get","head"],
    url: '/news',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\IndexController::newsIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:398
 * @route '/news'
 */
newsIndex.url = (options?: RouteQueryOptions) => {
    return newsIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\IndexController::newsIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:398
 * @route '/news'
 */
newsIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: newsIndex.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\IndexController::newsIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:398
 * @route '/news'
 */
newsIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: newsIndex.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\IndexController::newsIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:398
 * @route '/news'
 */
    const newsIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: newsIndex.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\IndexController::newsIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:398
 * @route '/news'
 */
        newsIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: newsIndex.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\IndexController::newsIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:398
 * @route '/news'
 */
        newsIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: newsIndex.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    newsIndex.form = newsIndexForm
/**
* @see \App\Http\Controllers\Frontend\IndexController::newsShow
 * @see app/Http/Controllers/Frontend/IndexController.php:427
 * @route '/news/{slug}'
 */
export const newsShow = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: newsShow.url(args, options),
    method: 'get',
})

newsShow.definition = {
    methods: ["get","head"],
    url: '/news/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\IndexController::newsShow
 * @see app/Http/Controllers/Frontend/IndexController.php:427
 * @route '/news/{slug}'
 */
newsShow.url = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { slug: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    slug: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        slug: args.slug,
                }

    return newsShow.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\IndexController::newsShow
 * @see app/Http/Controllers/Frontend/IndexController.php:427
 * @route '/news/{slug}'
 */
newsShow.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: newsShow.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\IndexController::newsShow
 * @see app/Http/Controllers/Frontend/IndexController.php:427
 * @route '/news/{slug}'
 */
newsShow.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: newsShow.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\IndexController::newsShow
 * @see app/Http/Controllers/Frontend/IndexController.php:427
 * @route '/news/{slug}'
 */
    const newsShowForm = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: newsShow.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\IndexController::newsShow
 * @see app/Http/Controllers/Frontend/IndexController.php:427
 * @route '/news/{slug}'
 */
        newsShowForm.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: newsShow.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\IndexController::newsShow
 * @see app/Http/Controllers/Frontend/IndexController.php:427
 * @route '/news/{slug}'
 */
        newsShowForm.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: newsShow.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    newsShow.form = newsShowForm
/**
* @see \App\Http\Controllers\Frontend\IndexController::contactIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:301
 * @route '/contacts'
 */
export const contactIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contactIndex.url(options),
    method: 'get',
})

contactIndex.definition = {
    methods: ["get","head"],
    url: '/contacts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\IndexController::contactIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:301
 * @route '/contacts'
 */
contactIndex.url = (options?: RouteQueryOptions) => {
    return contactIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\IndexController::contactIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:301
 * @route '/contacts'
 */
contactIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contactIndex.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\IndexController::contactIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:301
 * @route '/contacts'
 */
contactIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: contactIndex.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\IndexController::contactIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:301
 * @route '/contacts'
 */
    const contactIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: contactIndex.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\IndexController::contactIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:301
 * @route '/contacts'
 */
        contactIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: contactIndex.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\IndexController::contactIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:301
 * @route '/contacts'
 */
        contactIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: contactIndex.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    contactIndex.form = contactIndexForm
/**
* @see \App\Http\Controllers\Frontend\IndexController::contactStore
 * @see app/Http/Controllers/Frontend/IndexController.php:310
 * @route '/contacts'
 */
export const contactStore = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: contactStore.url(options),
    method: 'post',
})

contactStore.definition = {
    methods: ["post"],
    url: '/contacts',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Frontend\IndexController::contactStore
 * @see app/Http/Controllers/Frontend/IndexController.php:310
 * @route '/contacts'
 */
contactStore.url = (options?: RouteQueryOptions) => {
    return contactStore.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\IndexController::contactStore
 * @see app/Http/Controllers/Frontend/IndexController.php:310
 * @route '/contacts'
 */
contactStore.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: contactStore.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Frontend\IndexController::contactStore
 * @see app/Http/Controllers/Frontend/IndexController.php:310
 * @route '/contacts'
 */
    const contactStoreForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: contactStore.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Frontend\IndexController::contactStore
 * @see app/Http/Controllers/Frontend/IndexController.php:310
 * @route '/contacts'
 */
        contactStoreForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: contactStore.url(options),
            method: 'post',
        })
    
    contactStore.form = contactStoreForm
/**
* @see \App\Http\Controllers\Frontend\IndexController::programShow
 * @see app/Http/Controllers/Frontend/IndexController.php:136
 * @route '/programs/{program_name}'
 */
export const programShow = (args: { program_name: string | number } | [program_name: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: programShow.url(args, options),
    method: 'get',
})

programShow.definition = {
    methods: ["get","head"],
    url: '/programs/{program_name}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\IndexController::programShow
 * @see app/Http/Controllers/Frontend/IndexController.php:136
 * @route '/programs/{program_name}'
 */
programShow.url = (args: { program_name: string | number } | [program_name: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { program_name: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    program_name: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        program_name: args.program_name,
                }

    return programShow.definition.url
            .replace('{program_name}', parsedArgs.program_name.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\IndexController::programShow
 * @see app/Http/Controllers/Frontend/IndexController.php:136
 * @route '/programs/{program_name}'
 */
programShow.get = (args: { program_name: string | number } | [program_name: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: programShow.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\IndexController::programShow
 * @see app/Http/Controllers/Frontend/IndexController.php:136
 * @route '/programs/{program_name}'
 */
programShow.head = (args: { program_name: string | number } | [program_name: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: programShow.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\IndexController::programShow
 * @see app/Http/Controllers/Frontend/IndexController.php:136
 * @route '/programs/{program_name}'
 */
    const programShowForm = (args: { program_name: string | number } | [program_name: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: programShow.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\IndexController::programShow
 * @see app/Http/Controllers/Frontend/IndexController.php:136
 * @route '/programs/{program_name}'
 */
        programShowForm.get = (args: { program_name: string | number } | [program_name: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: programShow.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\IndexController::programShow
 * @see app/Http/Controllers/Frontend/IndexController.php:136
 * @route '/programs/{program_name}'
 */
        programShowForm.head = (args: { program_name: string | number } | [program_name: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: programShow.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    programShow.form = programShowForm
/**
* @see \App\Http\Controllers\Frontend\IndexController::programsIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:119
 * @route '/programs'
 */
export const programsIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: programsIndex.url(options),
    method: 'get',
})

programsIndex.definition = {
    methods: ["get","head"],
    url: '/programs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\IndexController::programsIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:119
 * @route '/programs'
 */
programsIndex.url = (options?: RouteQueryOptions) => {
    return programsIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\IndexController::programsIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:119
 * @route '/programs'
 */
programsIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: programsIndex.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\IndexController::programsIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:119
 * @route '/programs'
 */
programsIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: programsIndex.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\IndexController::programsIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:119
 * @route '/programs'
 */
    const programsIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: programsIndex.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\IndexController::programsIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:119
 * @route '/programs'
 */
        programsIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: programsIndex.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\IndexController::programsIndex
 * @see app/Http/Controllers/Frontend/IndexController.php:119
 * @route '/programs'
 */
        programsIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: programsIndex.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    programsIndex.form = programsIndexForm
const IndexController = { index, boardMembers, teacherIndex, downloadIndex, downloadFileIndex, aboutUS, facilityIndex, galleryIndex, noticeIndex, noticeShow, eventIndex, eventShow, activityIndex, activityShow, blogIndex, blogShow, newsIndex, newsShow, contactIndex, contactStore, programShow, programsIndex }

export default IndexController