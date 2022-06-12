import InputText from './InputText.vue'

export default {
    component: InputText,
    title: 'Atom/InputText',
}

const Template = (args) => ({
    components: { InputText },
    setup() {
        return { args };
    },
    template: '<input-text v-bind="args" />',
  });


export const Default = Template.bind({});
Default.args = {
    placeholderText: "default",
}
