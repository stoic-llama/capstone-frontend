import { shallowMount } from '@vue/test-utils';
import AppSearch from '@/components/AppSearch.vue';

const actions = {
    actionUpdateQuery: jest.fn(() => Promise.resolve())
};

const store = {
    dispatch: jest.fn((action) => {
        if (action === 'actionUpdateQuery') {
            return actions.actionUpdateQuery();
        }
    })
};

describe('AppSearch.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(AppSearch, {
            mocks: {
                $store: store,
                $router: {
                    push: jest.fn()
                }
            }
        });
    });

    it('renders the search input and button', () => {
        expect(wrapper.find('input[type="text"]').exists()).toBe(true);
        expect(wrapper.find('button').text()).toBe('Search');
    });

    it('binds the input value to query data property', async () => {
        const input = wrapper.find('input[type="text"]');
        await input.setValue('Test Query');
        expect(wrapper.vm.query).toBe('Test Query');
    });

    it('calls submitQuery when the button is clicked', async () => {
        const input = wrapper.find('input[type="text"]');
        await input.setValue('Test Query');
        const button = wrapper.find('button');
        await button.trigger('click');

        expect(store.dispatch).toHaveBeenCalledWith('actionUpdateQuery', 'Test Query');
    });

    it('navigates to the product catalog after submitting the query', async () => {
        const input = wrapper.find('input[type="text"]');
        await input.setValue('Test Query');
        const button = wrapper.find('button');
        await button.trigger('click');

        // Simulate the router push
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.$router.push).toHaveBeenCalledWith('/product/catalog');
    });
});