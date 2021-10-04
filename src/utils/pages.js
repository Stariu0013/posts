export function getPagesCount(totalCount, limit) {
    return Math.ceil(totalCount / limit);
}

export function getPages(pagesCount) {
    const result = [];

    for(let i = 0; i < pagesCount; i++) {
        result.push(i + 1);
    }

    return result;
}