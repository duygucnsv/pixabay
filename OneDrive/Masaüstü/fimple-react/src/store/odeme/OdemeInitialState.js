import { useStore } from "../index";

export const OdemeInitialState = () => {
  const { userState } = useStore();
  const { krediTutari } = userState;
  const odeme = {
    odeme: krediTutari,
    bsmv: 0,
    kkdf: 0,
  };

  return odeme;
};
