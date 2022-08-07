import React, { useState, useEffect } from "react";

import Avatar from "@mui/material/Avatar";


import { PostContainer } from "./style";

const Post = ({ postTitle }) => {
  return (
    <div>
      <PostContainer>
          <Avatar sx={{ width: 80, height: 80 }}>H</Avatar>
        <div className="box-post">
          <div className="content-container">
            <h1 className="post-title">{postTitle.descricao}</h1>

            <div id="tipo-container">
              {postTitle.problemas.map((problema) => (
                <>
                  <div>
                    <span>
                      <h6>{problema.titulo}</h6>
                    </span>
                  </div>
                </>
              ))}
            </div>
            <div>
              <h2>{`Postado em ${postTitle.create_at}`}</h2>
            </div>
          </div>
        </div>
      </PostContainer>
    </div>
  );
};

export default Post;
