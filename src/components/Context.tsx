import { ReactElement, createContext, useState } from "react";
//eslint-disable-next-line
export const CustomContext = createContext<any>(null);

export default function Context(props: { children: ReactElement }) {
  const [token, setToken] = useState<string | null>(null);
  const tokenStorage = localStorage.getItem("token");
  const [datas, setDatas] = useState<
    { image: string; title: string; content: string; id: string }[]
  >([]);

  if (tokenStorage && !token) {
    setToken(tokenStorage);
  }

  const value = {
    token,
    setToken,
    datas,
    setDatas,
  };

  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  );
}
