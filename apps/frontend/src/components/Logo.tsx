import React from 'react';
import { Box, BoxProps } from '@mui/material';

interface LogoProps extends BoxProps {
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ size = 200, ...props }) => {
  return (
    <Box
      component="img"
      src="/assets/images/freebot-logo.svg"
      alt="Freebot Logo"
      sx={{
        width: size,
        height: size,
        objectFit: 'contain',
        ...props.sx,
      }}
      {...props}
    />
  );
}; 