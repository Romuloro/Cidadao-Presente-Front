import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/SideBar/Sidebar";
import { HomeContainer, PostContainer } from "./style";

import Avatar from "@mui/material/Avatar";

const Home = () => {
  return (
    <HomeContainer>
      <div>
        <Sidebar />
      </div>
      <div>
        <PostContainer>
          <div className="post-container">
            <h1>Post</h1>
            <div className="box-post">
              <Avatar sx={{ width: 80, height: 80 }}>H</Avatar>
              <div className="content-container">
                <h1 className="post-title">Title</h1>
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
          </div>
        </PostContainer>
      </div>
    </HomeContainer>
  );
};

export default Home;
