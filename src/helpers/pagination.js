//
// endpoints
//

// privates

/**
 * Resolve page and page size.
 */
const resolvePage = query => {
    if (!query || query.page == null) {
        return {};
    }

    const pageSize = Number(query.page_size || query.pageSize || 10);
    const page = Number(query.page || 1) - 1;

    if (!pageSize) {
        return {};
    }

    return { page, pageSize };
};

// publics

/**
 * Resolve limit and offset with page and page size
 */
const resolveQuery = query => {
    const pages = resolvePage(query);

    if (!pages || pages.page == null) {
        return {};
    }

    return {
        limit: pages.pageSize,
        offset: pages.page * pages.pageSize
    };
};

/**
 * Resolve next and previous link
 */
const resolveNextAndPrevious = (basePath, results, query) => {
    const pages = resolvePage(query);

    if (!results || !results.count || pages.page == null) {
        return {};
    }

    const totalPages = Math.ceil(results.count / pages.pageSize);
    const page = pages.page + 1;

    if (page < totalPages) {
        results.next = `${basePath}?pageSize=${pages.pageSize}&page=${page + 1}`;
    }
    if (page > 1) {
        results.previous = `${basePath}?pageSize=${pages.pageSize}&page=${page - 1}`;
    }

    return results;
};

//
// export
//
module.exports = { resolveQuery, resolveNextAndPrevious };
