import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',

    backgroundColor: 'transparent',

    fontSize: 14,
    fontWeight: '500',

    ...Platform.select({
      ios: {},

      android: {
        includeFontPadding: false,
        textAlignVertical: 'center',
      },
    }),
  },
  wrap: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export { styles };
