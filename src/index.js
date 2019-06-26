import * as modules from './modules';
import * as utilities from './utilities';
import {converters as convert} from './converters';
import {sassWrapper} from './sass-wrapper';

module.exports = {
  modules,
  convert,
  utilities: utilities,
  sassFunctions: sassWrapper(modules, convert),
}
