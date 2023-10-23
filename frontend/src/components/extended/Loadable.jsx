import { Suspense } from 'react';

import Loader from './Loader';

const Loadable = (Component) => {
    const MyComponent = (props) => (
        <Suspense fallback={<Loader />}>
            <Component {...props} />
        </Suspense>
    );
    MyComponent.displayName = "MyComponent"
    return MyComponent;
};

export default Loadable;
