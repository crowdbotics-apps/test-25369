import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Settings220100Navigator from '../features/Settings220100/navigator';
import UserProfile220093Navigator from '../features/UserProfile220093/navigator';
import Settings220092Navigator from '../features/Settings220092/navigator';
import Settings220090Navigator from '../features/Settings220090/navigator';
import SignIn2220088Navigator from '../features/SignIn2220088/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Settings220100: { screen: Settings220100Navigator },
UserProfile220093: { screen: UserProfile220093Navigator },
Settings220092: { screen: Settings220092Navigator },
Settings220090: { screen: Settings220090Navigator },
SignIn2220088: { screen: SignIn2220088Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
