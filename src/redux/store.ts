import StoreDev from './store.dev';
import StorePro from './store.prod';
import Config from '../config';

export default Config.isDev ? StoreDev : StorePro;