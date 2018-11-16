
import { MiddlewareAPI, Dispatch } from 'redux'

export const BATCH = 'ENHANCED_BATCHING.BATCH';
export const PUSH = 'ENHANCED_BATCHING.PUSH';
export const POP = 'ENHANCED_BATCHING.POP';

export function batchActions(actions: any) {
    return { type: BATCH, payload: actions };
}

export function batchMiddleware(middlewareApi: MiddlewareAPI) {
    return (next: any) => {
        return (action: any) => {
            switch (action.type) {
                case BATCH: {
                    middlewareApi.dispatch({ type: PUSH });
                    const returnArray: Dispatch[] = [];
                    action.payload.forEach((batchedAction: any) => {
                        returnArray.push(middlewareApi.dispatch(batchedAction));
                    });
                    middlewareApi.dispatch({ type: POP });
                    return returnArray;
                }
                default: {
                    return next(action);
                }
            }
        };
    }
}

export function batchStoreEnhancer(next: any) {
    let currentListeners: any[] = [];
    let nextListeners = currentListeners;
    function ensureCanMutateNextListeners() {
        if (nextListeners === currentListeners) {
            nextListeners = currentListeners.slice();
        }
    }
    function subscribe(listener: any) {
        if (typeof listener !== 'function') {
            throw new Error('Expected listener to be a function.');
        }
        let isSubscribed = true;
        ensureCanMutateNextListeners();
        nextListeners.push(listener);
        return function unsubscribe() {
            if (!isSubscribed) {
                return;
            }
            isSubscribed = false;
            ensureCanMutateNextListeners();
            const index = nextListeners.indexOf(listener);
            nextListeners.splice(index, 1);
        };
    }
    function notifyListeners() {
        const listeners = currentListeners = nextListeners;
        listeners.forEach(item => {
            item()
        })
    }
    return (...args: any) => {
        const store = next(...args);
        const subscribeImmediate = store.subscribe;
        let batchDepth = 0;
        function dispatch(...dispatchArgs: any) {
            dispatchArgs.forEach((arg: any) => {
                if (arg.type) {
                    if (arg.type === PUSH) {
                        batchDepth += 1;
                    } else if (arg.type === POP) {
                        batchDepth -= 1;
                    }
                }
            });
            const res = store.dispatch(...dispatchArgs);
            if (batchDepth === 0) {
                notifyListeners();
            }
            return res;
        }
        return {
            ...store,
            dispatch,
            subscribe,
            subscribeImmediate,
        };
    };
}