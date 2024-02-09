import { Provider } from 'react-redux'

import EstiloGlobal, { Container } from './styles'
import Sidebar from './containers/SideBar'
import store from './store'
import ContactList from './containers/ContactList'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <ContactList />
      </Container>
    </Provider>
  )
}

export default App
