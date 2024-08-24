import { mount } from '@vue/test-utils'
import AppFooter from '@/components/AppFooter.vue'

test('mount AppFooter component', () => {
    const wrapper = mount(AppFooter)

    expect(wrapper.html()).toMatchSnapshot()
})


