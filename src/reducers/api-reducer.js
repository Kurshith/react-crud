export function api(state = {}, action) {
    switch (action.type) {
        case 'REQUEST':
            return {
                requestStart: true
            };

        case 'SUCCESS':
            return {
                requestSuccess: true,
            };
        case 'FAILURE':
            return {
                requestFailure: true
            };
        case 'COMPLETED':
            return {
                requestCompleted: true
            }
        default:
            return state
    }
}
