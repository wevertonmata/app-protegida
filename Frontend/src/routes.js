import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Feather';

import inicial from './pages/inicial';
import register from './pages/register';
import login from './pages/login/';
import Contats from './pages/Contats'
import Help from './pages/help'
import list_conts from './pages/List_conts'
import comoAjudar from './pages/comoAjudar'
import perfil from './pages/perfil'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const AuthNavigator = () => {
  return (
      <Stack.Navigator initialRouteName="perfil" headerMode="none">
        <Stack.Screen name="inicial" component={inicial} />
        <Stack.Screen name="register" component={register} />
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="App" component={MenuNavigator} />
        <Stack.Screen name="list_conts" component={list_conts} />
        <Stack.Screen name="comoAjudar" component={comoAjudar} />
        <Stack.Screen name="perfil" component={perfil} />
      </Stack.Navigator>
  );
}

const MenuNavigator = () => {
  return (
      <Tab.Navigator 
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Feed') {
            iconName = 'rss';
          } 
          else if (route.name === 'Contatos') {
            iconName ='user'; 
          }
          else if (route.name === 'Me ajude') {
            iconName = focused ?  'heart' : 'alert-circle';
            color = 'red'
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',            
                 
        }}
      >
        <Tab.Screen name="Contatos" component={Contats}  />
        <Tab.Screen name="Me ajude" component={Help}  />
      </Tab.Navigator>
  );

}

const Navigator = () => {
  return (
      <NavigationContainer>
          <AuthNavigator/>
      </NavigationContainer>
  );
};

export default Navigator;
