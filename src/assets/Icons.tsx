import React from 'react';
import {
  // EmailIcon

} from './';

export enum Icons {
  EMAIL_ICON,
}

export const getIcons = (type: Icons, size?: number, colors?: string) => {
  const iconSize = size ? size : 20;
  const color = colors ? colors : "#DCE0E2"
  switch (type) {
    // case Icons.EMAIL_ICON:
    //   return <EmailIcon height={iconSize} width={iconSize} />;

  }
};
