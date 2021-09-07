import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Next from '../imgs/next.svg';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Router basename={process.env.PUBLIC_URL}>
        <Link to="/" active="true" exact="true">
          <img src={Next} alt="return" className="arrow-left" />
        </Link>
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
