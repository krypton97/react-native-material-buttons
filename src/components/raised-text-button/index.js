import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import RaisedButton from '../raised-button';
import { styles } from './styles';

export default class RaisedTextButton extends PureComponent {
  static defaultProps = {
    titleColor: 'rgb(66, 66, 66)',
    disabledTitleColor: 'rgba(0, 0, 0, .26)',
  };

  static propTypes = {
    ...RaisedButton.propTypes,

    title: PropTypes.string.isRequired,
    titleColor: PropTypes.string,
    disabledTitleColor: PropTypes.string,
  };

  render() {
    let { title, titleColor, disabledTitleColor, iconProps, ...props } = this.props;
    let { disabled } = this.props;

    let titleStyle = {
      color: disabled ? disabledTitleColor : titleColor,
      ...this.props.titleStyle
    };

    if (this.props.iconProps) {
      return (
        <RaisedButton rippleColor={titleColor} shadeColor={titleColor} {...props}>
          <View style={styles.wrap} >
            <Icon
              size={iconProps.size}
              name={iconProps.name}
              color={iconProps.color}
              style={{}}
            />
            <Text style={[styles.Text, titleStyle]} numberOfLines={1}>
              {title}
            </Text>
          </View>
        </RaisedButton>
      );
    } else {
      return (
        <RaisedButton rippleColor={titleColor} shadeColor={titleColor} {...props}>
          <Text style={iconProps ? [styles.iconText, titleStyle] : [styles.text, titleStyle]} numberOfLines={1}>
            {title}
          </Text>
        </RaisedButton>
      )
    }

  }
}
