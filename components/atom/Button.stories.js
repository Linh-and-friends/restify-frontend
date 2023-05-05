import ButtonComponent from './Button.vue'

export default {
    component: ButtonComponent,
    title: 'Atom/Button',
}

const Template = (args) => ({
    components: { ButtonComponent },
    setup() {
        return { args };
    },
    template: '<button-component @onClick="onClick" v-bind="args" />',
  });


export const Default = Template.bind({});
Default.args = {
    text: 'default',
    color: 'yellow',
}
