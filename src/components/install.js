import Input from './input/index';
import Modal from './modal/index';

const components = [
    Input,
    Modal
];

const install = (Vue, opts = {}) => {
    components.map(component => {
        Vue.component(component.name, component);
    });
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    Modal
};
