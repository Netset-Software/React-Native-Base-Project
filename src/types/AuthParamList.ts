export type AuthParamList = {
  SignupScreen: undefined;
  SplashScreen: undefined;
  LoginScreen: undefined;
  ForgotPasswordScreen: undefined
  ChangePasswordScreen: undefined
};


export type InnerStackParamList = {
  HomeScreen: {
    drugName?: object | string
    proName?: object | string
  }
  InfoScreen: undefined
  SearchByDrugScreen: undefined
  SearchByProcedureScreen: undefined
  Feedbackscreen: undefined
  GuidelineScreen: {
    data: object | any
  }
  SettingScreen: undefined;
  ProfileScreen: undefined;
  NewContactModelStep2: {
    gender: string;
    title: string
    id?: string
  };

};
