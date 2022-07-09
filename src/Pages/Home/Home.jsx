import React, { useEffect, useState, useRef } from "react";
import Sidebar from "../../Components/SideBar/Sidebar";
import { HomeContainer, PostContainer } from "./style";

import Avatar from "@mui/material/Avatar";
import UIInfiniteScroll from "../../Components/InfiniteScroll/InfiniteScroll";

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
  const [pick, setPick] = useState(false);

  useEffect(() => {
    const perPage = 2;
    const postPick = postsTitles.slice(0, perPage * currentPage);
    console.log(postPick);
    setPost(postPick);
    setPick(true);
    console.log(postsTitles.length);
  }, [currentPage]);

  const fetchMore = () => {
    const newPage = currentPage + 1;
    console.log("Sentinela appears!", newPage);
    setPick(false);
    setCurrentPage(newPage);
  };

  return (
    <HomeContainer>
      <div>
        <Sidebar />
      </div>
      <div>
        <PostContainer>
          <div className="post-container">
            <h1>Post</h1>
            {post.map((postTitle, index) => (
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
                  <div id="tipo-container">
                    <span>
                      <h6>Tipo 1</h6>
                    </span>
                    <span>
                      <h6>Tipo 1</h6>
                    </span>
                    <span>
                      <h6>Tipo 1</h6>
                    </span>
                  </div>
                </div>
              </div>
            ))}
            {pick && post.length < postsTitles.length && (
              <UIInfiniteScroll fetchMore={fetchMore} />
            )}
          </div>
        </PostContainer>
      </div>
    </HomeContainer>
  );
};

export default Home;
