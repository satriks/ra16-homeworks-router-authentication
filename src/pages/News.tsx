import { useContext, useEffect } from "react";
import Board from "../components/Board";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { CustomContext } from "../components/Context";

export default function News() {
  const { token } = useContext(CustomContext);
  const navigate = useNavigate();

  useEffect(() => {
    !token && navigate("/");
  }, [token, navigate]);

  return (
    <>
      <Header />
      <Board />
    </>
  );
}
