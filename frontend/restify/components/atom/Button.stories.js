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


export const yellow = Template.bind({});
yellow.args = {
    text: 'yellow',
    color: 'yellow',
}

export const green = Template.bind({});
green.args = {
    text: 'green',
    color: 'green',
}