import React from 'react';
import {colors} from '@styles';
import {OpaqueColorValue} from 'react-native';
import {getIconType} from './utils';

export type IconType =
  | 'ant-design'
  | 'entypo'
  | 'evilicon'
  | 'feather'
  | 'font-awesome'
  | 'font-awesome-5'
  | 'fontisto'
  | 'foundation'
  | 'ionicon'
  | 'material'
  | 'material-community'
  | 'octicon'
  | 'zocial'
  | 'simple-line-icon';

export interface IconProps {
  name: string;
  color?: string | OpaqueColorValue;
  size?: number;
  type: IconType;
}

export const Icon: React.FC<IconProps> = ({
  size = 24,
  name,
  type,
  color = colors.secondary_text,
  ...rest
}) => {
  const IconComponent = getIconType(type);

  return (
    <>
      <IconComponent
        type={type}
        name={name}
        size={size}
        color={color}
        {...rest}
      />
    </>
  );
};
