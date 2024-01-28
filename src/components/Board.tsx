import { useContext, useEffect } from "react";
import UserService from "./UserService";
import { v4 } from "uuid";
import { CustomContext } from "./Context";
import { Link } from "react-router-dom";

interface Props {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  datas: { image: string; title: string; content: string; id: string }[];
  setDatas: React.Dispatch<
    React.SetStateAction<{
      image: string;
      title: string;
      content: string;
      id: string;
    }>
  >;
}

export default function Board() {
  const { token, setToken, datas, setDatas }: Props = useContext(CustomContext);

  useEffect(() => {
    const getData = async () => {
      const res = await UserService.getData(token).catch(() => {
        setToken(null);
      });
      res && setDatas(res.data);
    };
    if (token) {
      try {
        void getData();
      } catch (error) {
        console.log(error);
      }
    }
  }, [token, setToken, setDatas]);

  return (
    <div className="news__wrapper">
      {datas &&
        datas.map((data) => {
          return (
            <Link
              to={`/news/${data.id}`}
              className="news"
              style={{ color: "black" }}
              key={v4()}
            >
              <img src={data.image} />
              <h2>{data.title}</h2>
              <span>{data.content}</span>
            </Link>
          );
        })}
    </div>
  );
}
