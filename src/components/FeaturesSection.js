import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import "./FeaturesSection.scss";

function FeaturesSection(props) {
  const items_array = props.items_array;
  const items_1 = [
    {
      title: "It starts with an enzyme",
      description:
        "The Cas9 enzyme is a special protein that functions like molecular scissors. In the context of CRISPR, the Cas9 enzyme is the actual mechanism by which DNA can be unraveled, cut, and edited.",
      image: "https://ak.picdn.net/shutterstock/videos/9052141/thumb/1.jpg",
      imageDescription: "Cas9 enzyme model."
    },
    {
      title: "The guiding mechanism",
      description:
        "The Cas9 enzyme cuts the DNA, but how does the Cas9 know where to cut? Scientists use guide RNA, a molecule that can read the genetic information of DNA. The RNA leads the Cas9 enzyme to the precise spot of the DNA that requires a cut, the Cas9 locks onto the DNA and then makes the cut.",
      image: "https://news.mit.edu/sites/default/files/images/202005/crispr-enzyme-dna_0.jpg",
      imageDescription: "Cas9 enzyme unwinding DNA. The yellow strand is the guide RNA."
    },
    {
      title: "Natural repair",
      description:
        "After cutting, the cell detects the damaged DNA and repairs the sequence using natural processes. Fixing the break may disable the gene. Alternatively, the repair process might fix a mistake or even insert a new gene (a much more difficult process). Typically, the cell will simply glue the two strands of the DNA back together.",
      image: "https://media.istockphoto.com/photos/string-with-clipping-path-picture-id91618926?k=20&m=91618926&s=612x612&w=0&h=x4y7FI1kYJbOWMD4Fmv1y3HgaN4ifNlKXS37nDNBx2g=",
      imageDescription: "A damaged sequence of DNA."
    },
  ];

  const items_2 = [
    {
      title: "High precision cutting",
      description:
        "Prime editing is based on the classic CRISPR guide and cut model, but it has some key augmentations. Prime editing uses a Cas9 nickase enzyme, a variation of the Cas9 enzyme which nicks the DNA rather than breaking apart the double helix.",
      image: "https://media.nature.com/lw800/magazine-assets/d41586-020-00340-w/d41586-020-00340-w_17663734.jpg",
      imageDescription: "Cas9 Nickase enzyme model ( very similar in appearance to the regurlar Cas9 enzyme )."
    },
    {
      title: "Insert anything",
      description:
        "Attached to the Cas9 nickase enzyme is a very long sequence of pegRNA, which guides the enzyme to the appropriate editing site and contains code for DNA substitutions, repairs, and insertions. The prime editor can edit any nucleotide and replace it with any other nucleotide. Essentially, the prime editor can rewrite a gene to any configuration.",
      image: "https://miro.medium.com/max/1200/1*RumN-FMg_ylwQ_PyIU1CCQ.gif",
      imageDescription: "Animated nucleotide swapping."
    },
  ]

  if (items_array === 1) {
    return (
      <Section
        bg={props.bg}
        textColor={props.textColor}
        size={props.size}
        bgImage={props.bgImage}
        bgImageOpacity={props.bgImageOpacity}
      >
        <Container>
          <SectionHeader
            title={props.title}
            subtitle={props.subtitle}
            size={2}
            spaced={true}
            className="text-center"
          />
          <div className="FeaturesSection__features">
            {items_1.map((item, index) => (
              <Row className="align-items-center" key={index}>
                <Col xs={12} lg={6}>
                  <SectionHeader
                    title={item.title}
                    subtitle={item.description}
                    spaced={true}
                    size={3}
                    className="text-center text-lg-left"
                  />
                </Col>
                <Col>
                    <Image src={item.image} alt={item.title} fluid={true} />
                    <p className="text-center font-italic">{item.imageDescription}</p>
                </Col>
              </Row>
            ))}
          </div>
        </Container>
      </Section>
    );
  } else if (items_array === 2) {
    return (
      <Section
        bg={props.bg}
        textColor={props.textColor}
        size={props.size}
        bgImage={props.bgImage}
        bgImageOpacity={props.bgImageOpacity}
      >
        <Container>
          <SectionHeader
            title={props.title}
            subtitle={props.subtitle}
            size={2}
            spaced={true}
            className="text-center"
          />
          <div className="FeaturesSection__features">
            {items_2.map((item, index) => (
              <Row className="align-items-center" key={index}>
                <Col xs={12} lg={6}>
                  <SectionHeader
                    title={item.title}
                    subtitle={item.description}
                    spaced={true}
                    size={3}
                    className="text-center text-lg-left"
                  />
                </Col>
                <Col>
                    <Image src={item.image} alt={item.title} fluid={true} />
                    <p className="text-center font-italic">{item.imageDescription}</p>
                </Col>
              </Row>
            ))}
          </div>
        </Container>
      </Section>
    );
  }

  
}

export default FeaturesSection;
