// import Enzyme, { shallow, render, mount } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// // React 16 Enzyme adapter
// Enzyme.configure({ adapter: new Adapter() });
// // Make Enzyme functions available in all test files without importing
// global.shallow = shallow;
// global.render = render;
// global.mount = mount;

// jest.setTimeout(30000)


import { configure } from 'enzyme';
import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });



// import 'react-testing-library/cleanup-after-each';
// // this adds jest-dom's custom assertions
// import 'jest-dom/extend-expect';