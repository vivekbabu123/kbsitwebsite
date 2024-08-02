import React from "react";
import Header from "../components/Header";
import blog1 from "../assest/image/bimg1.png";
import blog2 from "../assest/image/bimg2.jpg";
import blog3 from "../assest/image/bimg3.jpg";
import "./Blog.css";
import Footer from "../components/Footer";

const blogData = [
  {
      id: 1,
      src: blog1,
      alt: "blog",
      date: "July 28, 2023",
      author: "Blog",
      title: "Transforming the Digital Landscape: Empowering Businesses with Innovative KBIT Solutions",
      description: "",
      link: "/some-path"
  },
  {
      id: 2,
      src: blog2,
      alt: "blog",
      date: "July 28, 2023",
      author: "UI UX Design",
      title: "Regional Manager & Limited Time Management",
      description: "With over a decade of experience, we’ve established ourselves as one of the pioneering agencies in the region. We understand the importance of approaching each work…",
      link: "/some-path"
  },
  {
      id: 3,
      src: blog3,
      alt: "blog",
      date: "July 28, 2023",
      author: "Consulting",
      title: "Revitalising Your People Into a Retail Downturn",
      description: "With over a decade of experience, we’ve established ourselves as one of the pioneering agencies in the region. We understand the importance of approaching each work…",
      link: "/some-path"
  }
];


let Blog = () => {
  return (
    <React.Fragment>
      <Header />
      {/* blog section start */}
      <section className="blog_section">
            <div className="container">
                <div className="row">
                    {blogData.map((blog) => (
                        <div key={blog.id} className="col-md-4">
                            <div className="digital_lanscape">
                                <div className="card">
                                    <div className="card-body">
                                        <img src={blog.src} alt={blog.alt} className="img-fluid" />
                                        <div className="d-flex justify-content-around align-items-center">
                                            <div className="date_name d-flex">
                                                <span>
                                                    <box-icon
                                                        type="solid"
                                                        color="#8BC541"
                                                        name="calendar"
                                                    ></box-icon>
                                                </span>
                                                <p className="ps-2">{blog.date}</p>
                                            </div>
                                            <div className="blog_author d-flex">
                                                <box-icon
                                                    type="solid"
                                                    color="#8BC541"
                                                    name="archive-out"
                                                ></box-icon>
                                                <p className="ps-2">{blog.author}</p>
                                            </div>
                                        </div>
                                        <div className="eading_blog">
                                            <h2>{blog.title}</h2>
                                            <p>{blog.description}</p>
                                        </div>
                                        <div className="Read_more d-flex align-items-center">
                                            <a href={blog.link} className="btn pt-0 fw-bold fs-5 ">
                                                Read More
                                            </a>
                                            <span>
                                                <box-icon
                                                    type="solid"
                                                    size="18px"
                                                    name="right-arrow"
                                                ></box-icon>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

      {/* blog section finish */}
      <Footer/>
    </React.Fragment>
  );
};
export default Blog;
