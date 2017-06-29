import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithClass,
  scryRenderedComponentsWithType
} from 'react-addons-test-utils';
import { expect } from 'chai';

import { Links } from './Links';

describe('Links', () => {
  it('should render a div with "links" class', () => {
    const git = ['i\'m just a link', 'yes i\'m only a link'];
    const stack = ['and i\'m sitting here on capitol hill'];

    const component = renderIntoDocument(
      <Links
        git={git}
        stack={stack}
      />
    );
    const linksElem = findRenderedDOMComponentWithClass(component, 'links');

    expect(linksElem).to.be.ok;
  });

  // it('should render a Todo component for each todo item', () => {
  //   const todos = [
  //     'Mow lawn',
  //     'Walk dog',
  //     'Read book'
  //   ];
  //   const component = renderIntoDocument(
  //     <TodoList
  //       todos={todos}
  //     />
  //   );
  //   const todosEle = scryRenderedComponentsWithType(component, Todo);
  //   const todo1 = ReactDOM.findDOMNode(todosEle[0]).textContent;
  //   const todo2 = ReactDOM.findDOMNode(todosEle[1]).textContent;
  //   const todo3 = ReactDOM.findDOMNode(todosEle[2]).textContent;

  //   expect(todosEle.length).to.equal(3);
  //   expect(todo1).to.equal('Mow lawn');
  //   expect(todo2).to.equal('Walk dog');
  //   expect(todo3).to.equal('Read book');
  // });
});