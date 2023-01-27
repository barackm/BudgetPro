export interface IButton {
  label?: string;
  onPress: () => void;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  disabled?: boolean;
  styles?: any;
  variant?: 'outlined' | 'contained' | 'text';
  color?: 'primary' | 'secondary' | 'default';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  children?: React.ReactNode;
}
