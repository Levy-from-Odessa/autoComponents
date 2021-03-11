
const templates = {
  index: name =>
    `
    // @flow
    import React from 'react';
    import './${name}.css';
    const ${name} = () => (
    <div className="${name.toLowerCase()}">
        // TODO: write rest of ${name} component
    </div>
    );
    export default ${name};
    `,
  test: name => 
    `
    // TODO: TDD
    import { shallow, render } from 'enzyme';
    import renderer from 'react-test-renderer';
    import React from 'react';
    import ${name} from '.';
    const component = <${name} />;
    describe('The ${name} component', () => {
    it('renders correctly', () => {
        const wrapper = render(component);
        expect(wrapper.hasClass('${name.toLowerCase()}')).toBeTruthy();
        const tree = renderer.create(component).toJSON();
        expect(tree).toMatchSnapshot();
    });
    });
    `,
  sass: name => 
    `
    .${name.toLowerCase()}
    color: initial
    background: initial
    `
};

module.exports = templates