import { ThemeProvider } from 'styled-components'

import { styles } from './styles'

const Theme: React.FC = ({ children }) => <ThemeProvider theme={styles}>{children}</ThemeProvider>

export default Theme
