import { StyleSheet, Platform } from 'react-native';

import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    height: (Platform.OS === 'ios' ? 90 : 50),
    paddingTop: (Platform.OS === 'ios' ? 30 : 0),
  },
  input: {
    backgroundColor: colors.lighter,
    borderRadius: metrics.baseRadius,
    height: 44,
    paddingHorizontal: metrics.basePadding,
  },
});

export default styles;
