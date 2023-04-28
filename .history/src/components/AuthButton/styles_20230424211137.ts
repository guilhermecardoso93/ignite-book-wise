import { styled } from "../../../stitches.config";

export const Container = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const AuthButton = styled('button', {
  width: '100%',
  height: 72,
  
  fontWeight: '$bold',
  fontSize: '$lg',
  
  display: 'flex',
  padding: '0 $6',
  alignItems: 'center',
  gap: '$5',

  background: '$gray600',
  border: 'none',
  borderRadius: 8,
  color: '$gray200',
})