import React from "react";
import Meta from "./../components/Meta";
import HeroSection from "./../components/HeroSection";
import FeaturesSection from "./../components/FeaturesSection";
import FeaturesSection2 from "./../components/FeaturesSection2";
import VideoSection from "../components/VideoSection";

function IndexPage(props) {
  return (
    <>
      <Meta />
      <HeroSection
        bg="white"
        textColor="black"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="CRISPR Explained In One Webpage"
        subtitle="What is CRISPR? Why is there so much buzz about it? How does it work, and how might it be used to change the world?"
        image="https://upload.wikimedia.org/wikipedia/commons/9/96/Cas9_Anders_DNA_bound_structure.png"
      />
      <FeaturesSection
        items_array={1}
        bg="black"
        textColor="white"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Classic CRISPR"
        subtitle="CRISPR (Clustered Regularly Interspaced Short Palindromic Repeats) is a new gene-editing technology that allows scientists to edit DNA sequences."
      />
      <VideoSection
        bg="primary"
        textColor="white"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="CRISPR Visualized"
        subtitle=""
        embedUrl="https://www.youtube.com/embed/UKbrwPL3wXE"
      />
       <FeaturesSection
        items_array={2}
        bg="black"
        textColor="white"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Prime Editing"
        subtitle="Classic CRISPR is best at breaking things but not great at repairing. Recall that after the Cas9 enzyme cuts, scientists typically rely on the body's natural DNA repair processes and hope for the best. For CRISPR to reach its full potential, there must be a way to reliably insert and edit DNA instead of playing a probability game with repair processes. Recently, scientists have developed prime editing to solve precisely this issue."
      />
      <VideoSection
        bg="primary"
        textColor="white"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Prime Editing Visualized"
        subtitle=""
        embedUrl="https://www.youtube.com/embed/FzVV-AkS76I"
      />
      <FeaturesSection2
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Applications"
        subtitle="What can scientists use CRISPR for now and in the future?"
      />
    </>
  );
}

export default IndexPage;
