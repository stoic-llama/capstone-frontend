import { mount } from '@vue/test-utils';
import AppCard from '@/components/AppCard.vue';

describe('AppCard.vue', () => {
    it('renders with props correctly', () => {
        const wrapper = mount(AppCard, {
            propsData: {
                extURL: 'https://example.com',
                imgURL: 'https://example.com/image.jpg',
                imgAlt: 'Example Image',
            },
        });

        expect(wrapper.find('img').attributes('src')).toBe('https://example.com/image.jpg');
        expect(wrapper.find('img').attributes('alt')).toBe('Example Image');
        expect(wrapper.find('a').attributes('href')).toBe('https://example.com');
    });

    it('renders slot content for title and description', () => {
        const wrapper = mount(AppCard, {
            slots: {
                title: 'Test Title',
                description: 'Test Description',
            },
        });

        expect(wrapper.find('h5 a').text()).toBe('Test Title');
        expect(wrapper.find('.card-text').text()).toBe('Test Description');
    });

    it('renders default props when not provided', () => {
        const wrapper = mount(AppCard);

        expect(wrapper.find('img').attributes('src')).toBe('');
        expect(wrapper.find('img').attributes('alt')).toBe('');
        expect(wrapper.find('a').attributes('href')).toBe(''); 
    });
});
