import * as React from 'react'
import { DynamicModuleLoader, IModuleTuple } from 'redux-dynamic-modules-react'

const withReduxDynamicModules =
  <P extends object>(dynamicReduxModules: IModuleTuple) =>
  (WrappedComponent: React.ComponentType<P>): React.ComponentType<P> =>
  (props: P): JSX.Element => {
    return (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      <DynamicModuleLoader modules={dynamicReduxModules}>
        <WrappedComponent {...props} />
      </DynamicModuleLoader>
    )
  }

export default withReduxDynamicModules
