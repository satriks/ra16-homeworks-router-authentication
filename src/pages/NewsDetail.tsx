import { useContext, useEffect, useState } from "react";
import { CustomContext } from "../components/Context";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";

export default function NewsDetails() {
  const { id } = useParams();
  const { datas, token } = useContext(CustomContext);
  const navigate = useNavigate();
  const [data, setData] = useState<{
    image: string;
    title: string;
    content: string;
    id: string;
  } | null>(null);

  useEffect(() => {
    const element = datas.find(
      (el: { image: string; title: string; content: string; id: string }) =>
        el.id === id
    );

    console.log(element, "this ele");

    !element && navigate("*");
    !token && navigate("/");

    setData(element);
  }, [token, id, navigate, datas]);

  if (data)
    return (
      <>
        <Header />
        <div className="news" style={{ margin: "auto" }}>
          <img src={data.image} />
          <h2>{data.title}</h2>
          <span>{data.content}</span>
        </div>
      </>
    );
}
