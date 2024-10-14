import { mount } from '@vue/test-utils';
import { nextTick } from 'vue'; 
import AppAccordion from '@/components/AppAccordion.vue';

describe('AppAccordion.vue', () => {
    it('renders with props correctly', () => {
        const wrapper = mount(AppAccordion, {
            propsData: { // Changed from 'props' to 'propsData'
                accordionId: 'testAccordion',
            },
            slots: {
                title: 'Test Title',
                body: 'Test Body',
            },
        });

        // console.log('html: ', wrapper.html());

        // Check if the title slot is rendered correctly
        expect(wrapper.find('.accordion-button').text()).toBe('Test Title');
        
        // Check if the body slot is rendered correctly
        expect(wrapper.find('.accordion-body').text()).toBe('Test Body');
        
        // Check if the accordion ID is set correctly
        expect(wrapper.find('.accordion-collapse').attributes('id')).toBe('testAccordion-collapseOne');
    });
});
