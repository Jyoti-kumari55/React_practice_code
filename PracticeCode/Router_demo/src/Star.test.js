import {render} from '@testing-library/react';
import { Star } from './Star';

test('render as h1 ', () => {
  const {getByText} = render(<Star/>);
  const h1 = getByText(/Cool Star/);
  expect(h1).toHaveTextContent("Cool Star");
});
