import AppStore from './AppStore';
import AppView from './AppView';
import { Container } from 'flux/utils';
import AppDispatcher from './AppDispatcher';
import AppAction from './AppAction';

function getStores() {
    return [
        AppStore,
    ];
}

function getState() {
    return {
        value: AppStore.getState(),
        onClickFoo: () => AppDispatcher.dispatch(AppAction.CHAGE_TO_FOO),
        onClickBar: () => AppDispatcher.dispatch(AppAction.CHAGE_TO_BAR),
    };
}

export default Container.createFunctional(AppView, getStores, getState);