export const apiActions = {
    request,
    success,
    failure,
    completed
};

function request () {
    return {
        type: 'REQUEST'
    }
}

function success () {
    return {
        type: 'SUCCESS'
    }
}

function failure () {
    return {
        type: 'FAILURE'
    }
}

function completed () {
    return {
        type: 'COMPLETED'
    }
}
