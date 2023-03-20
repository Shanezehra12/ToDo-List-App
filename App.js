
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Provider } from 'react-redux';
import { Store } from "./redux/store"

import Splash from './screens/Splash';
import ToDo from "./screens/ToDo";
import Done from "./screens/Done";
import Task from './screens/Task';



//  <<<<<<<<<<<<<<<<<<<<  "TODO" "DONE" BUTTON >>>>>>>>>>>>>>>>>>>>>>

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={
        ({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === 'To-Do') {
              iconName = 'clipboard-list';
              size = focused ? 25 : 20;
            } else if (route.name === 'Done') {
              iconName = 'clipboard-check';
              size = focused ? 25 : 20;
            }
            return (
              <FontAwesome5
                name={iconName}
                size={size}
                color={color}
              />
            );
          }
        })
      }
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'blue',
        labelStyle: { fontSize: 15, fontWeight: 'bold' }
      }}
    >
      <Tab.Screen name={'To-Do'} component={ToDo} />
      <Tab.Screen name={'Done'} component={Done} />
    </Tab.Navigator>
  );
}

//  <<<<<<<<<<<<<<<<<<<<<<NAVIGATION>>>>>>>>>>>>..>>>>>>>>>>>>>>>.....>..

const RootStack = createStackNavigator();

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#0080ff'
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: 'bold'
            }
          }}
        >
          <RootStack.Screen
            name="Splash"
            component={Splash}
            options={{
              headerShown: false,
            }}
          />

          <RootStack.Screen
            name="My Tasks"
            component={HomeTabs}
          />

          <RootStack.Screen
            name="Task"
            component={Task}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>

  )
}

export default App;



