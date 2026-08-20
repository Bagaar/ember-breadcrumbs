import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { LinkTo } from '@ember/routing';

import BreadcrumbsContainer from '#src/components/breadcrumbs-container.gts';
import BreadcrumbsItem from '#src/components/breadcrumbs-item.gts';

module('Integration | Component | breadcrumbs-item', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the correct class names', async function (assert) {
    await render(
      <template>
        <BreadcrumbsContainer
          @itemClass="item-class-name"
          @linkClass="link-class-name"
          class="class-name"
        />

        <BreadcrumbsItem as |linkClass|>
          <LinkTo @route="foo" class={{linkClass}}>
            Foo
          </LinkTo>
        </BreadcrumbsItem>
      </template>,
    );

    assert.dom('.class-name .item-class-name .link-class-name').exists();
  });

  test('it appends new breadcrumb items', async function (assert) {
    await render(
      <template>
        <BreadcrumbsContainer @itemClass="item-class-name" />
        <BreadcrumbsItem />
        <BreadcrumbsItem />
      </template>,
    );

    assert.dom('.item-class-name').exists({ count: 2 });
  });
});
