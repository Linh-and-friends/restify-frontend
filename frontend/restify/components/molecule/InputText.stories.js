import InputText from './InputText.vue'

export default {
    component: InputText,
    title: 'Molecule/InputText',
}

const Template = (args) => ({
    components: { InputText },
    setup() {
        return { args };
    },
    template: '<input-text @onInput="onInput" v-bind="args" />',
  });


export const Default = Template.bind({});
Default.args = {
    label: "default",
    labelSize: "base",
    placeholder: "default",
    value: "",
}
