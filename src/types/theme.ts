export interface ITheme {
  palette?: {
    primary?: Icolor;
    secondary?: Icolor;
    error?: Icolor;
    warning?: Icolor;
    info?: Icolor;
    success?: Icolor;
  };
}

export interface Icolor {
  main: string;
  contrastText: string;
  light: string;
  dark: string;
}