import * as React from 'react';

import {provideDisplayName} from '../utils';

export default function sortableHandle(WrappedComponent) {
  return class WithSortableHandle extends React.Component {
    static displayName = provideDisplayName('sortableHandle', WrappedComponent);

    constructor(props) {
      super(props);
      this.wrapper = React.createRef();
    }

    componentDidMount() {
      const node = this.wrapper.current;
      node.sortableHandle = true;
    }

    render() {
      return (
        <div ref={this.wrapper}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
}

export function isSortableHandle(node) {
  return node.sortableHandle != null;
}
