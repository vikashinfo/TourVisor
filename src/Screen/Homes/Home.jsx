import ABOUtravelCard from "../../Section/AboutSection/AboutTrivel";
import TestimonialsAbout from "../../Section/AboutSection/Testimonals";
import VideoTravel from "../../Section/AboutSection/VideoTravel";
import BlogSection from "../../Section/BLOG/Blogs";
import HerroSection from "../../Section/HOME/Hero";

function HomeSreen() {
  return (
    <>
      <div>
        <HerroSection />
      </div>
      <div>
        <ABOUtravelCard />
      </div>
      <div>
        <TestimonialsAbout />
      </div>

      <div>
        <VideoTravel />
      </div>
      <div>
        <BlogSection />
      </div>
    </>
  );
}

export default HomeSreen;
