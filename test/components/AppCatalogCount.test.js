import { mount } from '@vue/test-utils';
import AppCatalogCount from '@/components/AppCatalogCount.vue';

describe('mount AppCatalogCount component', () => {
  it('renders "All Products Found" when query prop is empty', () => {
    const wrapper = mount(AppCatalogCount, {
      propsData: {
        query: '',
        total: 10,
      },
    });
    expect(wrapper.find('h3').text()).toBe('"All" Products Found (10)');
  });

  it('renders the correct query in the title when query prop is provided', () => {
    const wrapper = mount(AppCatalogCount, {
      propsData: {
        query: 'Shoes',
        total: 5,
      },
    });
    expect(wrapper.find('h3').text()).toBe('"Shoes" Products Found (5)');
  });

  it('renders total prop correctly', () => {
    const wrapper = mount(AppCatalogCount, {
      propsData: {
        query: 'Bags',
        total: 7,
      },
    });
    expect(wrapper.find('h3').text()).toBe('"Bags" Products Found (7)');
  });

  it('handles negative total prop gracefully', () => {
    const wrapper = mount(AppCatalogCount, {
      propsData: {
        query: 'Watches',
        total: -1,
      },
    });
    expect(wrapper.find('h3').text()).toBe('"Watches" Products Found (-1)');
  });
});
