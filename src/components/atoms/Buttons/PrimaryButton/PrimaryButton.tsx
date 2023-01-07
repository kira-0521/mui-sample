import { Button, ButtonProps } from '@mui/material'
import { FC, ReactNode } from 'react'

export type PrimaryButtonProps = {
  children: ReactNode
} & ButtonProps

export const PrimaryButton: FC<PrimaryButtonProps> = ({
  children,
  ...props
}) => (
  <Button variant="contained" {...props}>
    {children}
  </Button>
)
