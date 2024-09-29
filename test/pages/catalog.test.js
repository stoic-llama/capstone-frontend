import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import catalog from '@/pages/product/catalog.vue'; 

const localVue = createLocalVue();
localVue.use(Vuex);

function createStub(name) {
  return { 
    name,
    template: `<div class="${name}"></div>` 
  }
}

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

    store = new Vuex.Store({
      state,  
      actions,
    });
  });

  it('renders the main structure correctly', () => {
    const wrapper = shallowMount(catalog, { 
      store, 
      localVue,
      stubs: {
        AppFooter: createStub('AppFooter'),
        AppAccordion: createStub('AppAccordion'),
        AppCatalogCount: createStub('AppCatalogCount'),
        AppNavBar: createStub('AppNavBar'),
        AppCard: createStub('AppCard'),
      }
    });
    
    // console.log(wrapper.html());
    // console.log('AppNavBar exists:', wrapper.findComponent({ name: 'AppNavBar' }).exists());
    // console.log('AppFooter exists:', wrapper.findComponent({ name: 'AppFooter' }).exists());
    // console.log('AppAccordion exists:', wrapper.findComponent({ name: 'AppAccordion' }).exists());
    // console.log('AppCatalogCount exists:', wrapper.findComponent({ name: 'AppCatalogCount' }).exists());
    // console.log('AppCard exists:', wrapper.findComponent({ name: 'AppCard' }).exists());
    
    expect(wrapper.findComponent({ name: 'AppNavBar' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'AppFooter' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'AppAccordion' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'AppCatalogCount' }).exists()).toBe(true);
    // expect(wrapper.findComponent({ name: 'AppCard' }).exists()).toBe(true);
  });

  it('computes productFamilies correctly', () => {
    state.stores = [
      { Store_items: [{ Product_family: 'Family1' }, { Product_family: 'Family2' }] },
      { Store_items: [{ Product_family: 'Family1' }, { Product_family: 'Family3' }] },
    ];

    const wrapper = shallowMount(catalog, { 
      store, 
      localVue,
      stubs: {
        AppFooter: createStub('AppFooter'),
        AppAccordion: createStub('AppAccordion'),
        AppCatalogCount: createStub('AppCatalogCount'),
        AppNavBar: createStub('AppNavBar'),
        AppCard: createStub('AppCard'),
      }
    });
    expect(wrapper.vm.productFamilies).toEqual(['Family1', 'Family2', 'Family3']);
  });

  it('toggles side menu visibility', async () => {
    const wrapper = shallowMount(catalog, { 
      store, 
      localVue,
      stubs: {
        AppFooter: createStub('AppFooter'),
        AppAccordion: createStub('AppAccordion'),
        AppCatalogCount: createStub('AppCatalogCount'),
        AppNavBar: createStub('AppNavBar'),
        AppCard: createStub('AppCard'),
      }
    });
    expect(wrapper.vm.show).toBe(true);
    await wrapper.find('#button-addon1').trigger('click');
    expect(wrapper.vm.show).toBe(false);
  });

  it('sorts cards alphabetically by product name', () => {
    const wrapper = shallowMount(catalog, { 
      store, 
      localVue,
      stubs: {
        AppFooter: createStub('AppFooter'),
        AppAccordion: createStub('AppAccordion'),
        AppCatalogCount: createStub('AppCatalogCount'),
        AppNavBar: createStub('AppNavBar'),
        AppCard: createStub('AppCard'),
      }
    });
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
    const wrapper = shallowMount(catalog, { 
      store, 
      localVue,
      stubs: {
        AppFooter: createStub('AppFooter'),
        AppAccordion: createStub('AppAccordion'),
        AppCatalogCount: createStub('AppCatalogCount'),
        AppNavBar: createStub('AppNavBar'),
        AppCard: createStub('AppCard'),
      }
    });
    wrapper.setData({ productFamily_checkbox: ['Family1'] });
    const cards = [
      { Product_family: 'Family1' },
      { Product_family: 'Family2' },
    ];
    const filteredCards = wrapper.vm.filterCards(cards);
    expect(filteredCards).toEqual([{ Product_family: 'Family1' }]);
  });
});
