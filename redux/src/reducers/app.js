const app = (state = "Hello World!", action) => {
    switch (action.type) {
        case 'foo':
        case 'bar':
            return action.payload
        default:
            return state
    }
}

export default app