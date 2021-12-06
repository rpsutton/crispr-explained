import React from "react";
import Meta from "./../components/Meta";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import { Container } from "react-bootstrap";

function SourcesPage(props) {
  return (
    <>
      <Meta title="Sources" />
      <Section
        bg="white"
        textColor="dark"
        size="md"
      >
        <Container>
          <SectionHeader
            title="Sources"
            size={2}
            spaced={true}
            className="text-center"
          />
          <ul>
              <li><a href="http://www.crisprtx.com/gene-editing/crispr-cas9">http://www.crisprtx.com/gene-editing/crispr-cas9</a></li>
              <li><a href="https://www.sciencenewsforstudents.org/article/explainer-how-crispr-works">https://www.sciencenewsforstudents.org/article/explainer-how-crispr-works</a></li>
              <li><a href="https://cen.acs.org/biological-chemistry/Video-CRISPR-Cas9-works/98/web/2020/10">https://cen.acs.org/biological-chemistry/Video-CRISPR-Cas9-works/98/web/2020/10</a></li>
              <li><a href="https://www.wired.com/story/a-new-crispr-technique-could-fix-many-more-genetic-diseases/">https://www.wired.com/story/a-new-crispr-technique-could-fix-many-more-genetic-diseases/</a></li>
              <li><a href="https://www.nature.com/articles/s41586-019-1711-4.epdf?sharing_token=oXIQ0ARmWZdiJGHDeYCET9RgN0jAjWel9jnR3ZoTv0MIpOYz60Tjc-ynNJiVRY3OHXQZoL87kNBM7-u9vxrAaUpuEKpkBgW_h5YDJZCVM8gBo-ZIaAPfN9_iPOFg8EzE0WgqyTj9YrPPxc1LTZEFSpiwwL-iZMl037T1Axr5YIqMP6ArpxpDsVTD5Yv_ShI7KOSXGNvGEsL8WEr4cIdztweL7lbTOEnztzKa83JjGUmlnspLPIHOfJ_Jo_cMAaNm-P-7YdY7PtjscP2upstAB8C3TugEks1XpTnVrUkSCrF5f5C6KnVd_8qwhhtFmemH&tracking_referrer=www.wired.com">https://www.nature.com/articles/s41586-019-1711-4.epdf?sharing_token=oXIQ0ARmWZdiJGHDeYCET9RgN0jAjWel9jnR3ZoTv0MIpOYz60Tjc-ynNJiVRY3OHXQZoL87kNBM7-u9vxrAaUpuEKpkBgW_h5YDJZCVM8gBo-ZIaAPfN9_iPOFg8EzE0WgqyTj9YrPPxc1LTZEFSpiwwL-iZMl037T1Axr5YIqMP6ArpxpDsVTD5Yv_ShI7KOSXGNvGEsL8WEr4cIdztweL7lbTOEnztzKa83JjGUmlnspLPIHOfJ_Jo_cMAaNm-P-7YdY7PtjscP2upstAB8C3TugEks1XpTnVrUkSCrF5f5C6KnVd_8qwhhtFmemH&tracking_referrer=www.wired.com</a></li>
              <li><a href="https://www.synthego.com/guide/crispr-methods/prime-editing">https://www.synthego.com/guide/crispr-methods/prime-editing</a></li>
              <li><a href="https://www.npr.org/sections/health-shots/2021/05/10/993656603/blind-patients-hope-landmark-gene-editing-experiment-will-restore-their-vision">https://www.npr.org/sections/health-shots/2021/05/10/993656603/blind-patients-hope-landmark-gene-editing-experiment-will-restore-their-vision</a></li>
              <li><a href="https://www.synthego.com/learn/crispr">https://www.synthego.com/learn/crispr</a></li>
              <li><a href="https://www.synthego.com/blog/crispr-bioenergy">https://www.synthego.com/blog/crispr-bioenergy</a></li>
          </ul>
          
        </Container>
      </Section>
    </>
  );
}

export default SourcesPage;
