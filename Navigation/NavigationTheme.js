import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'rgb(255, 45, 85)',
        background: 'white'
    },
};

export default MyTheme;