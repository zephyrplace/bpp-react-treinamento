import { ReduceStore } from 'flux/utils';
import AppDispatcher from './AppDispatcher';

class AppStore extends ReduceStore {
    constructor() {
        super(AppDispatcher);
    }

    getInitialState() {
        return 'Hello World!';
    }

    reduce(state, action) {
        switch (action.type) {
            case 'foo':
            case 'bar':
                return action.payload;
            default:
                return state;
        }
    }
}

export default new AppStore();