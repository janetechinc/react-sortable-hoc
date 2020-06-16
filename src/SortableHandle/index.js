import * as React from 'react';
import invariant from 'invariant';

import {provideDisplayName} from '../utils';

export default function sortableHandle(
  WrappedComponent,
  config = {withRef: false},
) {
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

    getWrappedInstance() {
      invariant(
        config.withRef,
        'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call',
      );
      return this.refs.wrappedInstance;
    }

    render() {
      const ref = config.withRef ? 'wrappedInstance' : null;

      return (
        <div ref={ref}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
}

export function isSortableHandle(node) {
  return node.sortableHandle != null;
}
