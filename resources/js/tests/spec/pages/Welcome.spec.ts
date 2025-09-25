import Welcome from '@/pages/Welcome.vue';
import { mount } from '@vue/test-utils';
import { expect, test } from 'vitest';

test('Shoud render the card title', () => {
    const wrapper = mount(Welcome);
    expect(wrapper.text()).toContain("Let's get started");
});
