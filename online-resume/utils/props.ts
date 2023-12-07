export interface CloseChildDialogProps {
  closeDialog: (event: React.MouseEvent) => void;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: { username: string } | null;
}

export interface AuthActions {
  login: (username: string, password: string) => void;
  logout: () => void;
}

export interface TextEditorProps {
  description: string;
  onChange: (richtext: string) => void;
}

export interface ExperiencesProps{
  companyName: string ;
  jobTitle: string;
  period: string;
}
