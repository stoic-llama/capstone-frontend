import { shallowMount } from '@vue/test-utils';
import Vue from 'vue'; // Add this import
import Vuex from 'vuex'; // Add this import
import AppThumbs from '@/components/AppThumbs.vue';

Vue.use(Vuex); // Add this line to use Vuex

describe('AppThumbs.vue', () => {
  let store;
  let actions;
  let wrapper;

  beforeEach(() => {
    actions = {
      actionUpdateQuery: jest.fn(),
    };
    store = new Vuex.Store({
      actions,
    });
    wrapper = shallowMount(AppThumbs, {
      store,
      propsData: {
        likes: 10,
        dislikes: 5,
      },
    });
  });

  it('renders correctly with given props', () => {
    expect(wrapper.find('span').text()).toBe('10'); // Check likes
    expect(wrapper.findAll('span').at(1).text()).toBe('5'); // Check dislikes
  });

  it('displays the correct number of likes and dislikes', () => {
    expect(wrapper.props().likes).toBe(10);
    expect(wrapper.props().dislikes).toBe(5);
  });

//   it('emits actionUpdateQuery when the like button is clicked', async () => {
//     const likeButton = wrapper.find('.like-button'); // Adjust selector as needed
//     await likeButton.trigger('click');
//     expect(actions.actionUpdateQuery).toHaveBeenCalled();
//   });
});