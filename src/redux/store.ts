import StoreDev from './store.dev'
import StorePro from './store.prod'
import {History} from "history";
import Config from '../config';

let store: (history: History) => any;
if (Config.isDev) {
    store = StoreDev
} else {
    store = StorePro
}
export default store