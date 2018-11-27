// Importar as telas
import Main from './components/Main';
import Chat from './components/Chat';
// Importar Navegação React
import  { createStackNavigator} from 'react-navigation';
// Criar o navegador
const navigator = createStackNavigator({
  Main: { screen: Main },
  Chat: { screen: Chat },
});
// Exportar como navegador padrão de exportação do componente raiz
export default navigator;
