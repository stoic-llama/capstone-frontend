import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import AppThumbs from '@/components/AppThumbs.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('AppThumbs', () => {
    let wrapper
    let store
    let actions
    let state
    let propsData

    beforeEach(() => {
        state = {
            token: 'test-token',
            email: 'test@example.com'
        }
        actions = {
            // Add any actions if needed
        }
        store = new Vuex.Store({
            state,
            actions
        })
        propsData = {
            total_likes: 5,
            total_dislikes: 2,
            likesArray: ['user1@example.com', 'user2@example.com'],
            dislikesArray: ['user3@example.com'],
            store_id: 'store123',
            product_id: 'product456'
        }
        wrapper = shallowMount(AppThumbs, {
            propsData,
            store,
            localVue,
            mocks: {
                $axios: {
                    post: jest.fn().mockResolvedValue({ status: 200, data: { 'message': 'SUCCESS' } })
                },
                $router: {
                    push: jest.fn()
                },
                $config: {
                    baseURL: 'http://localhost:5000/api/v1'
                }
            },
            stubs: ['NuxtLink']
        })
    })

    it('renders correctly', () => {
        expect(wrapper.exists()).toBe(true)
    })

    it('displays the correct number of likes and dislikes', () => {
        expect(wrapper.find('span').text()).toBe('5')
        expect(wrapper.findAll('span').at(1).text()).toBe('2')
    })

    it('initializes like and dislike based on email presence in arrays', () => {
        expect(wrapper.vm.like).toBe(0)
        expect(wrapper.vm.dislike).toBe(0)

        const wrapperWithUserLike = shallowMount(AppThumbs, {
            propsData: {
                ...propsData,
                likesArray: ['test@example.com']
            },
            store,
            localVue
        })
        expect(wrapperWithUserLike.vm.like).toBe(1)
    })

    it('toggles like when button is clicked', async () => {
        const likeButton = wrapper.findAll('button').at(0)
        await likeButton.trigger('click')
        expect(wrapper.vm.like).toBe(1)
    })

    it('toggles dislike when button is clicked', async () => {
        const dislikeButton = wrapper.findAll('button').at(1)
        await dislikeButton.trigger('click')
        expect(wrapper.vm.dislike).toBe(1)
    })

    it('shows login error toast if token is empty when toggling like', async () => {
        const showLoginErrorToastSpy = jest.spyOn(wrapper.vm, 'showLoginErrorToast')
        wrapper.vm.$store.state.token = null
        const likeButton = wrapper.findAll('button').at(0)
        await likeButton.trigger('click')
        expect(showLoginErrorToastSpy).toHaveBeenCalled()
    })

    it('shows login error toast if token is empty when toggling dislike', async () => {
        const showLoginErrorToastSpy = jest.spyOn(wrapper.vm, 'showLoginErrorToast')
        wrapper.vm.$store.state.token = null
        const dislikeButton = wrapper.findAll('button').at(1)
        await dislikeButton.trigger('click')
        expect(showLoginErrorToastSpy).toHaveBeenCalled()
    })

    it('submits vote when like is toggled', async () => {
        const submitVoteLikeSpy = jest.spyOn(wrapper.vm, 'submitVoteLike')
        const likeButton = wrapper.findAll('button').at(0)
        await likeButton.trigger('click')
        expect(submitVoteLikeSpy).toHaveBeenCalled()
    })

    it('submits vote when dislike is toggled', async () => {
        const submitVoteDislikeSpy = jest.spyOn(wrapper.vm, 'submitVoteDislike')
        const dislikeButton = wrapper.findAll('button').at(1)
        await dislikeButton.trigger('click')
        expect(submitVoteDislikeSpy).toHaveBeenCalled()
    })

    it('shows successful vote toast on successful vote submission', async () => {
        const showSuccessfulVoteToastSpy = jest.spyOn(wrapper.vm, 'showSuccessfulVoteToast')
        await wrapper.vm.submitVoteLike()
        expect(showSuccessfulVoteToastSpy).toHaveBeenCalled()
    })

    it('shows failed vote toast on failed vote submission', async () => {
        const error = new Error('Network error');
        wrapper.vm.$axios.post.mockRejectedValueOnce(error);
        const showFailedVoteToastSpy = jest.spyOn(wrapper.vm, 'showFailedVoteToast');
        const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
        const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {}); 

        await wrapper.vm.submitVoteLike();
        
        expect(showFailedVoteToastSpy).toHaveBeenCalledWith('Network error');
        expect(consoleLogSpy).toHaveBeenCalledWith('submitVote() error: Network error');
        expect(consoleErrorSpy).toHaveBeenCalledWith('Network error when submitting vote:', 'Network error');

        consoleLogSpy.mockRestore();
        consoleErrorSpy.mockRestore();
    });

    it('handles non-success response from postVoteLike', async () => {
        wrapper.vm.$axios.post.mockResolvedValueOnce({ status: 200, data: { update_status: 'FAILURE' } });
        const showFailedVoteToastSpy = jest.spyOn(wrapper.vm, 'showFailedVoteToast');
        
        await wrapper.vm.submitVoteLike();
        
        expect(showFailedVoteToastSpy).toHaveBeenCalledWith('Vote submission failed to update database.');
    })
})
