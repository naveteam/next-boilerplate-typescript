/* eslint @typescript-eslint/no-empty-interface: 'off' */
import 'styled-components'

import { styles } from './styles'

export type Styles = typeof styles

declare module 'styled-components' {
  export interface DefaultTheme extends Styles {}
}
