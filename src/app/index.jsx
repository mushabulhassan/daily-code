import * as React from 'react';
import { View } from 'react-native';

import {
  createStaticNavigation,
  NavigationIndependentTree,
  useLinkBuilder,
  useTheme,
} from '@react-navigation/native';

import { Text, PlatformPressable } from '@react-navigation/elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// -------------------------
// Custom Tab Bar
// -------------------------
function MyTabBar({ state, descriptors, navigation }) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();

  return (
    <View
      style={{
        flexDirection: 'row',
        height: 60,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={route.key}
            href={buildHref(route.name, route.params)}
            accessibilityState={
              isFocused ? { selected: true } : {}
            }
            accessibilityLabel={
              options.tabBarAccessibilityLabel
            }
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                color: isFocused
                  ? colors.primary
                  : colors.text,
              }}
            >
              {label}
            </Text>
          </PlatformPressable>
        );
      })}
    </View>
  );
}


// -------------------------
// Home Screen
// -------------------------
function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>Home Screen</Text>
    </View>
  );
}


// -------------------------
// Profile Screen
// -------------------------
function ProfileScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>Profile Screen</Text>
    </View>
  );
}


// -------------------------
// Bottom Tab Navigator
// -------------------------
const MyTabs = createBottomTabNavigator({
  tabBar: (props) => <MyTabBar {...props} />,

  screens: {
    Home: HomeScreen,
    Profile: ProfileScreen,
  },
});


// -------------------------
// Static Navigation
// -------------------------
const Navigation = createStaticNavigation(MyTabs);


// -------------------------
// App
// -------------------------
export default function App() {
  return (
    <NavigationIndependentTree>
      <Navigation />
    </NavigationIndependentTree>
  );
}