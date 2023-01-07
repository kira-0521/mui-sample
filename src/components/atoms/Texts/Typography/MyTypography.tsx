import { Typography as MuiTypography, TypographyProps } from '@mui/material'
import { FC, ReactNode } from 'react'

type MyTypographyProps = {
  children: ReactNode
} & TypographyProps

export const MyTypography: FC<MyTypographyProps> = ({ children, ...props }) => (
  <MuiTypography {...props}>{children}</MuiTypography>
)
