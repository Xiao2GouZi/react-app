import StoreDev from './store.dev'
import StorePro from './store.prod'
let store: any;
if (process.env.NODE_ENV === 'production') {
    store = StorePro
} else {
    store = StoreDev;
}
export default store