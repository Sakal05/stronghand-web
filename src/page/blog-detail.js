import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "primereact/avatar";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "primeflex/primeflex.min.css";
import { BsFillPlayCircleFill } from "react-icons/bs";
import Markdown from "markdown-to-jsx";
import Footer from "../components/footer";
import data from "../language/blogs.json";
const fb = "https://web.facebook.com/sh.homefix";
const telegram = "https://t.me/sh.homefix";

function BlogDetail() {
  const file = ["title.md", "des.md", "footer.md", "header.md", "body.md"];
  const [post, setPost] = useState("");
  useEffect(() => {
    import(`../markdown/${file[1]}`).then((res) => {
      fetch(res.default)
        .then((response) => response.text())
        .then((response) => setPost(response));
    });
  });

  //console.log(data.data[1]);
 
  const response = data.data[2];
  const profile = response.profile;
  const head = response.headline;
  //console.log(response.profile.author);

  return (
    <>
      <div style={{ backgroundColor: "white" }}>
        <div
          className="blog_detail_container text-color pt-8"
          style={{ maxWidth: "1200px", height: "auto", margin: "auto" }}
        >
          <div className="flex align-items-center">
            <Avatar
              image={profile.image}
              size="xlarge"
              shape="circle"
              className="m-2"
            />
            <div className="line-height-1 bill">
              <p className="title text-xl name1">{profile.author}</p>
              <div className="flex align-items-center name2">
                <p className="date">{profile.date}</p>
                <p className="ml-2 point">-</p>
                <p className="ml-2 mn1">9mn read</p>
                <p className="ml-2">-</p>
                <i
                  className="pi pi-star ml-2 -mt-1 star"
                  style={{ color: "#F2921D" }}
                ></i>
                <p className="ml-2 member1">Member-only</p>
                <Link to="">
                  <BsFillPlayCircleFill className="text-white ml-4" />
                </Link>
                <Link to="" className="no-underline text white">
                  <p className="text-white ml-1">Listen</p>
                </Link>
              </div>
            </div>
            <a href={fb} className="text-color">
              <i className="pi pi-facebook ml-8 text-2xl m-2"></i>
            </a>
            <a href={telegram} className="text-color">
              <i className="pi pi-telegram ml-3 text-2xl m-2"></i>
            </a>
          </div>
          <h1 className="m-2 mt-4 font-bold">
            {head.title}
          </h1>
          <h2 className="m-2 mt-4 font-normal">
            Build projects & get a high-paying developer job
          </h2>
          <div className="m-3 mt-8">
            <img src={head.pic} alt="" className="w-full image border-round-md" />

            {/* markdown file */}

            <div className="m-2 mt-8 text-color ">
                <h2>{head.dec}</h2> 
              {/* <Markdown
                className="text-2xl line-height-3 markdown"
                style={{ paddingBottom: "25px" }}
              >
                {post}
              </Markdown> */}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Footer />
      </div>
    </>
  );
}

export default BlogDetail;
