/* eslint-disable @typescript-eslint/no-var-requires */
import { IconType } from './Icon.types';

const iconTypeDictionary = {
  [IconType.zocial]: require('react-native-vector-icons/Zocial').default,
  [IconType.octicon]: require('react-native-vector-icons/Octicons').default,
  [IconType.material]: require('react-native-vector-icons/MaterialIcons')
    .default,
  [IconType['material-community']]:
    require('react-native-vector-icons/MaterialCommunityIcons').default,
  [IconType.ionicon]: require('react-native-vector-icons/Ionicons').default,
  [IconType.foundation]: require('react-native-vector-icons/Foundation')
    .default,
  [IconType.evilicon]: require('react-native-vector-icons/EvilIcons').default,
  [IconType.entypo]: require('react-native-vector-icons/Entypo').default,
  [IconType['font-awesome']]: require('react-native-vector-icons/FontAwesome')
    .default,
  [IconType['font-awesome-5']]:
    require('react-native-vector-icons/FontAwesome5').default,
  [IconType['font-awesome-5-pro']]:
    require('react-native-vector-icons/FontAwesome5Pro').default,
  [IconType['simple-line-icon']]:
    require('react-native-vector-icons/SimpleLineIcons').default,
  [IconType.feather]: require('react-native-vector-icons/Feather').default,
  [IconType.antdesign]: require('react-native-vector-icons/AntDesign').default,
  [IconType.fontisto]: require('react-native-vector-icons/Fontisto').default,
};

const getIconType = (type: IconType) => iconTypeDictionary[type];

export default getIconType;
