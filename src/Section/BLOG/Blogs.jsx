import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./Blogs.css";

const blogs = [
  {
    // image:
    //   "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80",
    category: "Travel",
    title: "10 Best Places to Visit in Dalhousie, Himachal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    comments: "12 Comment",
    featured: true,
  },
  {
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=700&q=80",
    title: "Booking a trip during Corona wise advise",
    comments: "17 Comment",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80",
    title: "Jim Morrison advises turning out the lights",
    comments: "3 Comment",
  },
];

function BlogMeta({ comments }) {
  return (
    <div className="blog-meta d-flex flex-wrap gap-3 fw-semibold text-black">
      <span>Admin</span>
      <span>Feb 2023</span>
      <span>12 Comment</span>
    </div>
  );
}

function BlogSection() {
  const featured = blogs[0];
  const recentBlogs = blogs.slice(1);

  return (
    <section className="blog-section">
      <Container Container>
        <div className="blog-heading text-center">
          <span className="blog-subtitle">Our Blogs</span>
          <h2>Recent Articles &amp; Posts</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </div>

        <Row className="blog-layout g-4">
          {/* Featured Blog */}
          <Col lg={6}>
            <Row className="g-4 featured-blog ">
              <Col xs={12} sm={6}>
                <Image
                  src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=700&q=80"
                  alt={featured.title}
                  className="featured-image w-100 "
                />
              </Col>

              <Col xs={12} sm={6}>
                <BlogMeta comments={featured.comments} />

                <h3 className="featured-title">{featured.title}</h3>

                <p className="featured-description">
                  {featured.description} Lorem ipsum dolor sit amet.
                </p>

                <Button variant="outline-success">
                  Read more <i class="fa-solid fa-arrow-right-long"></i>
                </Button>
              </Col>
            </Row>
          </Col>

          {/* Two Recent Blogs */}
          <Col lg={6}>
            <Row className="g-4 recent-blog-list">
              {recentBlogs.map((blog, index) => (
                <Col xs={12} key={blog.title}>
                  <Row className="g-3 recent-blog">
                    <Col xs={12} sm={6}>
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        className="recent-image w-100"
                      />
                    </Col>

                    <Col xs={12} sm={6}>
                      <BlogMeta comments={blog.comments} />

                      <h3 className="recent-title">{blog.title}</h3>
                      <Button variant="outline-success">
                        Read more <i class="fa-solid fa-arrow-right-long"></i>
                      </Button>
                    </Col>
                  </Row>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default BlogSection;
