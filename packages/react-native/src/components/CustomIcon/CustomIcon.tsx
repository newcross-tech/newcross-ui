import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../../../../assets/fonts/selection.json';

// const  CustomIcon = createIconSetFromIcoMoon(icoMoonConfig);

const CustomIcon = createIconSetFromIcoMoon(
  icoMoonConfig,
  'IcoMoon',
  'icomoon.ttf'
);

export default CustomIcon;

