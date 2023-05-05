import AtomInputText from './AtomInputText.vue'

export default {
    component: AtomInputText,
    title: 'Atom/AtomInputText',
}

const Template = (args) => ({
    components: { AtomInputText },
    setup() {
        return { args };
    },
    template: '<input-text v-bind="args" />',
  });


export const Default = Template.bind({});
Default.args = {
    placeholderText: "default",
}
