import { shallowMount } from '@vue/test-utils';
import Vue from 'vue'; 
import Vuex from 'vuex'; 
import AppThumbs from '@/components/AppThumbs.vue';

Vue.use(Vuex); 

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
        total_likes: 10,
        total_dislikes: 5,
      },
    });
  });

  it('renders correctly with given props', () => {
    expect(wrapper.find('span').text()).toBe('10'); 
    expect(wrapper.findAll('span').at(1).text()).toBe('5'); 
  });

  it('displays the correct number of total likes and dislikes', () => {
    expect(wrapper.props().total_likes).toBe(10);
    expect(wrapper.props().total_dislikes).toBe(5);
  });

//   it('emits actionUpdateQuery when the like button is clicked', async () => {
//     const likeButton = wrapper.find('.like-button'); // Adjust selector as needed
//     await likeButton.trigger('click');
//     expect(actions.actionUpdateQuery).toHaveBeenCalled();
//   });
});