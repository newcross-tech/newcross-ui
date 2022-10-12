import { useContext } from 'react';
import { ThemeContext } from '../theme/ThemeProvider';

const useTheme = () => useContext(ThemeContext);

export default useTheme;
