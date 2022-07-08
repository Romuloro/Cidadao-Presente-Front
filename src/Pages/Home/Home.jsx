import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/SideBar/Sidebar";
import { HomeContainer, PostContainer } from "./style";

import Avatar from "@mui/material/Avatar";

const postsTitles = [
  "Rua não asfaltada",
  "Muito Lixo na Rua",
  "Transporte demora",
  "Posto de saúde sem atendimento",
  "Rua não asfaltada",
  "Muito Lixo na Rua",
  "Transporte demora",
  "Posto de saúde sem atendimento",
];

const Home = () => {
  const [post, setPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    const perPage = 2;
    const postPick = postsTitles.slice(0, (perPage * currentPage));
    console.log(postPick);
    setPost(postPick);
  }, [currentPage]);

  /* useEffect(() => {
    const element = document.getElementsByClassName("tipo-container");
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        console.log("Sentinela appears!", currentPage + 1);
        setCurrentPage((currentValue) => currentValue + 1);
      }
    });
    intersectionObserver.observe(element);
    return () => intersectionObserver.disconnect();
  }, []); */

  return (
    <HomeContainer>
      <div>
        <Sidebar />
      </div>
      <div>
        <PostContainer>
          <div className="post-container">
            <h1>Post</h1>
            {post.map((postTitle) => (
              <div className="box-post">
                <Avatar sx={{ width: 80, height: 80 }}>H</Avatar>
                <div className="content-container">
                  <h1 className="post-title">{postTitle}</h1>
                  <h2 className="post-text">
                    Mussum Ipsum, cacilds vidis litro abertis. Paisis, filhis,
                    espiritis santis.Praesent malesuada urna nisi, quis volutpat
                    erat hendrerit non. Nam vulputate dapibus.Aenean aliquam
                    molestie leo, vitae iaculis nisl.In elementis mé pra quem é
                    amistosis quis leo.
                  </h2>
                  <div className="tipo-container">
                    <spam>
                      <h6>Tipo 1</h6>
                    </spam>
                    <spam>
                      <h6>Tipo 1</h6>
                    </spam>
                    <spam>
                      <h6>Tipo 1</h6>
                    </spam>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </PostContainer>
      </div>
    </HomeContainer>
  );
};

export default Home;
