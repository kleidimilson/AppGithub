import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';


const Routes = createAppContainer(
    createStackNavigator({
        Main:{
            screen: Main,
            navigationOptions : {
                title: 'SearchDev'
            },
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Github Profile'
            },
        }, 
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#24292e'
            }
        }
    })
);

export default Routes;