import Text from "@/components/UI/text";
import track_data from "@/data/tracks";
import Link from "next/link";
import React from "react";

function ForumTracks() {
  return (
    <section className="track pt-80 pb-80">
      <div className="container">
        <div className="row wow fadeInUp mb-40" data-wow-delay=".3s">
          <div className="gap-4 text-center ">
            <Text h2>Forum Tracks</Text>
          </div>
        </div>
        <div className="row">
          {track_data?.map((item, index) => {
            return (
              <div className="col-sm-12 col-md-6 mb-40" key={index}>
                <Text h4>{item.title}</Text>
                {item.list?.map((item, index) => (
                  <div className="track_list mt-10 mb-10" key={index}>
                    <i
                      className="fa-solid fa-chevrons-right"
                      style={{ color: "#ea9038" }}
                    ></i>
                    <Text>{item.value}</Text>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ForumTracks;
