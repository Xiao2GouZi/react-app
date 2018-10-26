import StoreDev from './store.dev'
import StorePro from './store.prod'
import {History} from "history";
let store: (history: History) => any;
if (process.env.NODE_ENV === 'production') {
    store = StorePro
} else {
    store = StoreDev
}
export default store