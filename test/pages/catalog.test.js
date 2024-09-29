import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import catalog from '@/pages/product/catalog.vue'; 
// import AppNavBar from '@/components/AppNavBar.vue';
// import AppFooter from '@/components/AppFooter.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('catalog.vue', () => {
  let store;
  let state;
  let actions;

  beforeEach(() => {
    state = {
      stores: [],
      likes: [],
      query: '',
      email: '',
    };

    actions = {
      getStores: jest.fn()
      // getLikes: jest.fn(),
    };

    store = new Vuex.Store({
      state,
      actions,
    });
  });

  it('renders the main structure correctly', () => {
    const wrapper = shallowMount(catalog, { store, localVue });
    expect(wrapper.find('AppNavBar').exists()).toBe(true);
    expect(wrapper.find('AppFooter').exists()).toBe(true);
  });



  it('computes productFamilies correctly', () => {
    state.stores = [
      { Store_items: [{ Product_family: 'Family1' }, { Product_family: 'Family2' }] },
      { Store_items: [{ Product_family: 'Family1' }, { Product_family: 'Family3' }] },
    ];

    const wrapper = shallowMount(catalog, { store, localVue });
    expect(wrapper.vm.productFamilies).toEqual(['Family1', 'Family2', 'Family3']);
  });

  it('toggles side menu visibility', async () => {
    const wrapper = shallowMount(catalog, { store, localVue });
    expect(wrapper.vm.show).toBe(true);
    await wrapper.find('#button-addon1').trigger('click');
    expect(wrapper.vm.show).toBe(false);
  });

  it('sorts cards alphabetically by product name', () => {
    const wrapper = shallowMount(catalog, { store, localVue });
    const unsortedCards = [
      { Product: 'Banana' },
      { Product: 'Apple' },
      { Product: 'Orange' },
    ];
    const sortedCards = wrapper.vm.sortAlphabetically(unsortedCards);
    expect(sortedCards).toEqual([
      { Product: 'Apple' },
      { Product: 'Banana' },
      { Product: 'Orange' },
    ]);
  });

  it('filters cards by product family', () => {
    const wrapper = shallowMount(catalog, { store, localVue });
    wrapper.setData({ productFamily_checkbox: ['Family1'] });
    const cards = [
      { Product_family: 'Family1' },
      { Product_family: 'Family2' },
    ];
    const filteredCards = wrapper.vm.filterCards(cards);
    expect(filteredCards).toEqual([{ Product_family: 'Family1' }]);
  });
});
