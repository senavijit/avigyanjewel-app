import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Meta from "../components/Meta";
import blog from "../images/blog-1.jpg";
import Container from "../components/Container";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <HiOutlineArrowLeft className="fs-4" />
                  Go back to Blogs
                </Link>
                <h3 className="title">
                  A Beautiful Sunday Morning Renaissance
                </h3>
                <img
                  src={blog}
                  className="img-fluid w-100 my-4"
                  alt=""
                />
                <p>
                  Now that the basic tools for financial decision making are in
                  place, we can begin to apply them. One of the most important
                  decisions facing a financial manager is the choice of which
                  investments the corporation should make. In Chapter 7, we
                  compare the net present value rule to other investment rules
                  that firms sometimes use and explain why the net present value
                  rule is superior. The process of allocating the firms capital
                  for investment is known as capital budgeting, and in Chapter
                  8, we outline the discounted cash flow method for making such
                  decisions. Both chapters provide a practical demonstration of
                  the power of the tools that were introduced in Part 2.
                </p>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default SingleBlog;
