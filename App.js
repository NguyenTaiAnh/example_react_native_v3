import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from './src/context/BlogContext'
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";
const stack = createStackNavigator({
  Index: IndexScreen,
  Show : ShowScreen,
  Create: CreateScreen,
  Edit: EditScreen,
},{
  initialRouteName: "Index",
  defaultNavigationOptions:{
    title: "Blog"
  }
  
})

const App = createAppContainer(stack)

export default () => {
  return <Provider >
    <App/>
  </Provider>
}