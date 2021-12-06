import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import AspectRatio from "./AspectRatio";
import "./FeaturesSection2.scss";

function FeaturesSection2(props) {
  const items = [
    {
      title: "Genetic Disease Treatment",
      body: "Errors in DNA sequences fundamentally cause genetic diseases. Prime editing is the first treatment to address the root cause by editing the faulty genetic code itself. In a lab setting, prime editing has successfully corrected the genetic mutations which cause sickle cell anemia, cystic fibrosis, and Tay-Sachs disease. However, this is just the beginning. Scientists predict that 89% of genetic diseases can be treated with prime editing in the future.",
      image: "https://geneticliteracyproject.org/wp-content/uploads/elementor/thumbs/maxresdefault-1-1-e1595282918682-pe55z817s14zeoux54hz5s7opkb2grcjgw0pspgoz8.jpg",
    },
    {
      title: "Diagnostics",
      body: "CRISPR's search and find behavior may be used to search for genetic material from viruses. The SHERLOCK CRISPR SARS-CoV-2 kit is a currently available COVID 19 test that uses the Cas13 enzyme to locate the virus and report its presence.",
      image: "https://i.ytimg.com/vi/TkcCBRqtvDA/maxresdefault.jpg",
    },
    {
      title: "Agriculture",
      body: "In the future, CRISPR may be used to enhance crops to have greater disease and drought resistance genetically. UC Berkley and Mars Inc. are currently engineering disease-resistant cacao plants. Other genetic enhancements may grant greater shelf life, which would reduce food waste and cost.",
      image: "https://cen.acs.org/content/dam/cen/95/24/09524-cover1-openerALT.jpg",
    },
    {
      title: "Bioenergy",
      body: "Bioenergy is a fledgling field that aims to develop renewable biological fuel sources. One of the great struggles in this field is finding potential biological fuel sources that can be created fast enough to scale. CRISPR may be able to genetically alter certain algae to produce vast amounts of lipids, which can then be processed into biodiesel.",
      image: "https://images.news18.com/ibnlive/uploads/2021/08/1628511036_biofuels-1600x900.jpg",
    },
  ];

  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className="text-center">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
        />
        <Card>
          <Row className="no-gutters overflow-hidden">
            {items.map((item, index) => (
              <Col
                xs={12}
                lg={6}
                style={{
                  display: "flex",
                  alignItems: "stretch",
                  justifyContent: "center",
                  boxShadow: "1px 1px 0 0 #efefef",
                }}
                key={index}
              >
                <div className="FeaturesSection2__item has-text-centered">
                  <div className="FeaturesSection2__image-container">
                    <AspectRatio ratio={4 / 3}>
                      <Image src={item.image} alt={item.title} fluid={true} className="shadow" />
                    </AspectRatio>
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Card>
      </Container>
    </Section>
  );
}

export default FeaturesSection2;
