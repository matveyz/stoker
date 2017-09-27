let Form = require('./core/Form');

require('./vues/header');
require('./vues/footer');

require('./vues/my-lists');
require('./vues/favorites');
require('./vues/delete');
require('./vues/settings');
require('./vues/partner-settings');
require('./vues/partner-my-catalogs');
require('./vues/add-comment');
require('./vues/catalog-creating');

require('./parts/countdown');
require('./parts/owl');
require('./parts/svgxuse');
// require('./parts/vars');
require('./parts/calc-from');
require('./parts/text');
require('./parts/get-attributes');
require('./parts/extra-functions');

require('./parts/countdown');

require('./parts/owl');

require('./parts/fixed-menu');

require('./parts/menus');

// require('./parts/magnific-popup');

require('./parts/about-us');

require('./parts/show-more');

require('./parts/sort');
require('./parts/accordion');
require('./parts/formajax');

require('./parts/modals');
require('./parts/tabs');
require('./parts/validation');


if (module.hot) {
  module.hot.accept();
}