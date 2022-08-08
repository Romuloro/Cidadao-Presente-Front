import React, { useEffect, useState, useRef } from "react";

import { HomeContainer, PostContainer } from "./style";

import UIInfiniteScroll from "../../Components/InfiniteScroll/InfiniteScroll";
import Post from "../../Components/Post/index";
import Sidebar from "../../Components/SideBar/Sidebar";

import { api, getAllPost } from "../../api/api";
import Modal from "../../Components/Modal/modal";
import CreatedPost from "../../Components/CreatedPost";


const Home = () => {
  const [post, setPost] = useState([]);
  const [allposts, setAllPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pick, setPick] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false)

  useEffect(async () => {
    const posts_data = await fetchData();
    console.log(posts_data);
    setAllPosts(posts_data);
  }, []);

  useEffect(() => {
    const perPage = 1;
    const postPick = allposts.slice(0, perPage * currentPage);
    console.log(postPick);
    setPost(postPick);
    setPick(true);
  }, [currentPage]);

  const fetchMore = () => {
    const newPage = currentPage + 1;
    console.log("Sentinela appears!", newPage);
    setPick(false);
    setCurrentPage(newPage);
  };

  const fetchData = async () => {
    const data_post = await getAllPost();
    return data_post.data;
  };

  return (
    <HomeContainer>
      <div>
        <Sidebar />
      </div>
      <div>
        <PostContainer>
          <div className="post-container">
            <div>
              <button onClick={() => setIsModalVisible(true)}> Open </button>
              {isModalVisible ? (
                <Modal onClose={() => setIsModalVisible(false)}>
                  <CreatedPost />
                </Modal>
              ) : null}
            </div>
            {post.map((postTitle, index) => (
              <>
                <Post postTitle={postTitle} />
              </>
            ))}
            {pick && post.length < allposts.length && (
              <UIInfiniteScroll fetchMore={fetchMore} />
            )}
          </div>
        </PostContainer>
      </div>
    </HomeContainer>
  );
};

export default Home;
