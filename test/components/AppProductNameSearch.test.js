import Vue from 'vue';
import Vuex from 'vuex';
import { createLocalVue, mount, shallowMount } from '@vue/test-utils';
import AppProductNameSearch from '@/components/AppProductNameSearch.vue';

// Create a local Vue instance for testing
const localVue = createLocalVue();
localVue.use(Vuex);

describe('AppProductNameSearch.vue', () => {
    let actions;
    let store;

    beforeEach(() => {
        // Mock Vuex actions
        actions = {
            actionUpdateQuery: jest.fn().mockResolvedValue('mocked result'),
        };

        // Create Vuex store with the mocked actions
        store = new Vuex.Store({
            actions,
        });
    });

    it('renders the input field correctly', () => {
        const wrapper = mount(AppProductNameSearch, {
            global: {
            plugins: [store],
            },
        });

        const input = wrapper.find('input');
        expect(input.exists()).toBe(true);
        expect(input.attributes('placeholder')).toBe('Update Product Name...');
    });

    it('updates the q data property when input value changes', async () => {
        const wrapper = mount(AppProductNameSearch, {
            global: {
            plugins: [store],
            },
        });

        const input = wrapper.find('input');
        await input.setValue('New Product');
        expect(wrapper.vm.q).toBe('New Product');
    });

    it('calls submitQuery when form is submitted', async () => {
        const wrapper = shallowMount(AppProductNameSearch, {
            store,
            localVue,
        });

        // Set the q data property
        wrapper.setData({ q: 'Sample Query' });

        const submitQuerySpy = jest.spyOn(wrapper.vm, 'submitQuery');
        const form = wrapper.find('form');
        await form.trigger('submit.prevent');
        expect(submitQuerySpy).toHaveBeenCalledWith(wrapper.vm.q);
    });

    it('dispatches actionUpdateQuery with the correct query and handles the result', async () => {
        const wrapper = shallowMount(AppProductNameSearch, {
            store,
            localVue,
        });

        // Set the q data property
        wrapper.setData({ q: 'Sample Query' });

        // Call submitQuery
        await wrapper.vm.submitQuery();

        // Check if the Vuex action was called with the correct arguments
        expect(actions.actionUpdateQuery).toHaveBeenCalledWith(expect.any(Object), 'Sample Query');

        // Check if the promise from dispatch resolves correctly
        const result = await actions.actionUpdateQuery.mock.results[0].value;
        expect(result).toBe('mocked result');
    });
});
