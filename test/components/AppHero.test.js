import { mount } from '@vue/test-utils'
import AppHero from '@/components/AppHero.vue'
import AppSearch from '@/components/AppSearch.vue'

test('mount AppHero component', () => {
    const wrapper = mount(AppHero)

    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.findComponent(AppSearch).exists()).toBe(true);
})


