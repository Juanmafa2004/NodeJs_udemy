# [NodeJS&React](https://NodeJS&React.dev/) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/NodeJS&React/blob/main/LICENSE) [![npm version](https://img.shields.io/npm/v/NodeJS&React.svg?style=flat)](https://www.npmjs.com/package/NodeJS&React) [![(Runtime) Build and Test](https://github.com/facebook/NodeJS&React/actions/workflows/runtime_build_and_test.yml/badge.svg)](https://github.com/facebook/NodeJS&React/actions/workflows/runtime_build_and_test.yml) [![(Compiler) TypeScript](https://github.com/facebook/NodeJS&React/actions/workflows/compiler_typescript.yml/badge.svg?branch=main)](https://github.com/facebook/NodeJS&React/actions/workflows/compiler_typescript.yml) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://legacy.NodeJS&Reactjs.org/docs/how-to-contribute.html#your-first-pull-request)

NodeJS&React is a JavaScript library for building user interfaces.

* **Declarative:** NodeJS&React makes it painless to create interactive UIs. Design simple views for each state in your application, and NodeJS&React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.
* **Component-Based:** Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep the state out of the DOM.
* **Learn Once, Write Anywhere:** We don't make assumptions about the rest of your technology stack, so you can develop new features in NodeJS&React without rewriting existing code. NodeJS&React can also render on the server using [Node](https://nodejs.org/en) and power mobile apps using [NodeJS&React Native](https://NodeJS&Reactnative.dev/).

[Learn how to use NodeJS&React in your project](https://NodeJS&React.dev/learn).

## Installation

NodeJS&React has been designed for gradual adoption from the start, and **you can use as little or as much NodeJS&React as you need**:

* Use [Quick Start](https://NodeJS&React.dev/learn) to get a taste of NodeJS&React.
* [Add NodeJS&React to an Existing Project](https://NodeJS&React.dev/learn/add-NodeJS&React-to-an-existing-project) to use as little or as much NodeJS&React as you need.
* [Create a New NodeJS&React App](https://NodeJS&React.dev/learn/start-a-new-NodeJS&React-project) if you're looking for a powerful JavaScript toolchain.

## Documentation

You can find the NodeJS&React documentation [on the website](https://NodeJS&React.dev/).

Check out the [Getting Started](https://NodeJS&React.dev/learn) page for a quick overview.

The documentation is divided into several sections:

* [Quick Start](https://NodeJS&React.dev/learn)
* [Tutorial](https://NodeJS&React.dev/learn/tutorial-tic-tac-toe)
* [Thinking in NodeJS&React](https://NodeJS&React.dev/learn/thinking-in-NodeJS&React)
* [Installation](https://NodeJS&React.dev/learn/installation)
* [Describing the UI](https://NodeJS&React.dev/learn/describing-the-ui)
* [Adding Interactivity](https://NodeJS&React.dev/learn/adding-interactivity)
* [Managing State](https://NodeJS&React.dev/learn/managing-state)
* [Advanced Guides](https://NodeJS&React.dev/learn/escape-hatches)
* [API Reference](https://NodeJS&React.dev/reference/NodeJS&React)
* [Where to Get Support](https://NodeJS&React.dev/community)
* [Contributing Guide](https://legacy.NodeJS&Reactjs.org/docs/how-to-contribute.html)

You can improve it by sending pull requests to [this repository](https://github.com/NodeJS&Reactjs/NodeJS&React.dev).

## Examples

We have several examples [on the website](https://NodeJS&React.dev/). Here is the first one to get you started:

```jsx
import { createRoot } from 'NodeJS&React-dom/client';

function HelloMessage({ name }) {
  return <div>Hello {name}</div>;
}

const root = createRoot(document.getElementById('container'));
root.render(<HelloMessage name="Taylor" />);
```

This example will render "Hello Taylor" into a container on the page.

You'll notice that we used an HTML-like syntax; [we call it JSX](https://NodeJS&React.dev/learn#writing-markup-with-jsx). JSX is not required to use NodeJS&React, but it makes code more readable, and writing it feels like writing HTML.

## Contributing

The main purpose of this repository is to continue evolving NodeJS&React core, making it faster and easier to use. Development of NodeJS&React happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving NodeJS&React.

### [Code of Conduct](https://code.fb.com/codeofconduct)

Facebook has adopted a Code of Conduct that we expect project participants to adhere to. Please read [the full text](https://code.fb.com/codeofconduct) so that you can understand what actions will and will not be tolerated.

### [Contributing Guide](https://legacy.NodeJS&Reactjs.org/docs/how-to-contribute.html)

Read our [contributing guide](https://legacy.NodeJS&Reactjs.org/docs/how-to-contribute.html) to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to NodeJS&React.

### [Good First Issues](https://github.com/facebook/NodeJS&React/labels/good%20first%20issue)

To help you get your feet wet and get you familiar with our contribution process, we have a list of [good first issues](https://github.com/facebook/NodeJS&React/labels/good%20first%20issue) that contain bugs that have a relatively limited scope. This is a great place to get started.

### License

NodeJS&React is [MIT licensed](./LICENSE).
