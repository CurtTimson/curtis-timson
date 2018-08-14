+++
tags = ["reactjs", "react", "jest", "snapshot", "unit-testing", "mocking"]
featured = true
description = "How to use Jest Snapshot unit testing with component mocking in ReactJs"
date = "2018-08-14T17:27:00"
share = true
image = "images/post/react-jest.png"
title = "ReactJs Snapshot unit testing and mocking components"
slug = "reactjs-jest-snapshot-mocking"
author = "Curtis Timson"
draft = false
menu = ""
comments = true
postid = 35
+++

![ReactJs with Jest Snapshot Testing](/images/post/react-jest-snapshot.png)

- [What are Jest Snapshots?](#what-are-jest-snapshots)
- [Snapshot ReactJs Components](#snapshot-reactjs-components)
- [Mocking ReactJs Components](#mocking-reactjs-components)
- [GitHub Repository](#github-repository)

## What are Jest Snapshots?
[Jest](https://jestjs.io/) is a javascript unit testing framework developed by Facebook. This is primarily used with React, however can also be used with other frameworks, such as [AngularJs](/post/angularjs/angularjs-jest-unit-testing/).

Snapshots are a feature of Jest which will record an expected output state of a component.

>Capture snapshots of React trees or other serializable values to simplify testing and to analyze how state changes over time.

## Snapshot ReactJs Components

Take for an example the following ReactJs `List.js` Component which will display `ul` list of items inputted.

```js
import React, { Component } from 'react';

export default class List extends Component {
    render() {

        const listItems = this.props.items ? this.props.items.map((item, index) => (
            <li key={index}>{item}</li>
        )) : [];

        return (
            <ul>
                {listItems}
            </ul>
        )
    }
}
```

We can write some snapshot tests to record the expected outcome of this component when various property values are inputted.

The below `List.test.js` file is recording a snapshot of how the `List` component will render when `items` are set, and also when no `items` are set.

```js
import React from 'react';
import renderer from 'react-test-renderer';
import List from './List';

describe('List', () => {

  it('matches snapshot when empty list', () => {
    const tree = renderer
      .create(<List/>);
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot when items passed in', () => {
    const items = ['abc', 'def', 'ghi'];
    const tree = renderer
      .create(<List items={items}/>);
    expect(tree).toMatchSnapshot();
  });

});
```

We can then run the following command:

```bash
npm run test
```

As there are currently no existing snapshots for `List`, Jest will go ahead and create these initial snapshots automatically and provide the following output:

![](/images/post/reactjs-snapshot-terminal.png)

The snapshot will have automatically been stored in a new folder called `__snapshots__` in the same folder as the component and test file as `List.test.js.snap`.

```js
// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`List matches snapshot when empty list 1`] = `<ul />`;

exports[`List matches snapshot when items passed in 1`] = `
<ul>
  <li>
    abc
  </li>
  <li>
    def
  </li>
  <li>
    ghi
  </li>
</ul>
`;
```

Now that the snapshot has been created, the next time the tests are ran the existing snapshot will be compared to the tests.

For example if we change the `ul` to an `ol` we'll receive the following error response when running `npm run test`:

![](/images/post/reactjs-snapshot-terminal-error.png)

If it's expected that the test should now fail the failed snapshots can be updated by hitting `u` in the terminal while running tests.

## Mocking ReactJs Components

As Jest snapshots will record the full output of a component, this means it will also record the output of any nested components used within the component your testing.

This duplicates the testing of the individual components, and will exponentially increase the complexity of the parent components.

For example if our `List` component above was to be consumed by an `App` component, all uses of the `List` component will be outputted in the `App` snapshot.

**App.ts**

```js
import React, { Component } from 'react';
import './App.css';
import List from './List';

export default class App extends Component {
  render() {

    const header = this.props.title
      ? <header className="App-header">
          <h1 className="App-title">{this.props.title}</h1>
        </header>
      : null;


    const items1 = ['foo', 'bar', 'baz'];

    const items2 = ['Lorem', 'ipsum', 'dolor'];

    return (
      <div className="App">
        {header}
        <p className="App-intro">
          App Introduction
        </p>
        <h2>First List</h2>
        <List items={items1} />
        <h2>Second List</h2>
        <List items={items2} />
      </div>
    );
  }
}
```

**App.test.ts**

```js
import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

describe('App', () => {

  it('matches snapshot with title', () => {
    const tree = renderer
      .create(<App title="Example Title"/>);
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot when no title', () => {
    const tree = renderer
      .create(<App/>);
    expect(tree).toMatchSnapshot();
  });

});
```

**App.test.ts.snap**

```js
// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`App matches snapshot when no title 1`] = `
<div
  className="App"
>
  <p
    className="App-intro"
  >
    App Introduction
  </p>
  <h2>
    First List
  </h2>
  <ul>
    <li>
      foo
    </li>
    <li>
      bar
    </li>
    <li>
      baz
    </li>
  </ul>
  <h2>
    Second List
  </h2>
  <ul>
    <li>
      Lorem
    </li>
    <li>
      ipsum
    </li>
    <li>
      dolor
    </li>
  </ul>
</div>
`;

exports[`App matches snapshot with title 1`] = `
<div
  className="App"
>
  <header
    className="App-header"
  >
    <h1
      className="App-title"
    >
      Example Title
    </h1>
  </header>
  <p
    className="App-intro"
  >
    App Introduction
  </p>
  <h2>
    First List
  </h2>
  <ul>
    <li>
      foo
    </li>
    <li>
      bar
    </li>
    <li>
      baz
    </li>
  </ul>
  <h2>
    Second List
  </h2>
  <ul>
    <li>
      Lorem
    </li>
    <li>
      ipsum
    </li>
    <li>
      dolor
    </li>
  </ul>
</div>
`;
```

However we can mock the `List` component so that the implementation is not included in our snapshot tests.

Rather than outputting the `<ul/>` element with all it's contents, we can specify that we want the `List` component to only output `<List/>`:

```js
jest.mock('./List', () => () => (<list/>));
```

This will ensure that the `App` tests only cover the logic in the component itself, and not the child `List` component.

![Jest Snapshot Mocking](/images/post/jest-snapshot-mocking.png)

**App.mock.test.ts**

```js
import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';
import List from './List'; //Import the List component for mocking

jest.mock('./List', () => () => (<list/>)); //Mock the List component as <List/>

describe('App - Mocking', () => {

  it('matches snapshot with title', () => {
    const tree = renderer
      .create(<App title="Example Title"/>);
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot when no title', () => {
    const tree = renderer
      .create(<App/>);
    expect(tree).toMatchSnapshot();
  });

});
```

**App.Mock.test.js.snap**

```js
// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`App - Mocking matches snapshot when no title 1`] = `
<div
  className="App"
>
  <p
    className="App-intro"
  >
    App Introduction
  </p>
  <h2>
    First List
  </h2>
  <list />
  <h2>
    Second List
  </h2>
  <list />
</div>
`;

exports[`App - Mocking matches snapshot with title 1`] = `
<div
  className="App"
>
  <header
    className="App-header"
  >
    <h1
      className="App-title"
    >
      Example Title
    </h1>
  </header>
  <p
    className="App-intro"
  >
    App Introduction
  </p>
  <h2>
    First List
  </h2>
  <list />
  <h2>
    Second List
  </h2>
  <list />
</div>
`;
```

## GitHub Repository

A public GitHub repository is available with all the above code examples:

https://github.com/curttimson/reactjs-jest-snapshot

Please feel free to clone and let me know if you have any questions!