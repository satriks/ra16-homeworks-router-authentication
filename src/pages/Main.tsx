import { useContext, useEffect } from "react";
import Header from "../components/Header";
import { CustomContext } from "../components/Context";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const { token } = useContext(CustomContext);
  const navigate = useNavigate();

  useEffect(() => {
    token && navigate("/news");
  }, [token, navigate]);

  return (
    <>
      <Header />
      <div className="intro">
        <h2>Neto Social</h2>
        <span>Facebook and VK killer.</span>
      </div>
    </>
  );
}
