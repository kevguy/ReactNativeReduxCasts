import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ onPressHandler, children }) => {
  const { textStyle, buttonStyle } = styles;

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPressHandler}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fonrSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

export default Button;
