import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function () {
  this.route('foo', function () {
    this.route('bar', function () {
      this.route('baz');
    });
  });
});

export default Router;
