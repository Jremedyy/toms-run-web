import styled from "styled-components";

const EventDetailsSidebar = () => {
  return (
    <Wrapper>
      <ImgWrapper>
        <Img src="https://tomsrunrelay.org/Toms_Run_Logo.png" />
      </ImgWrapper>
      <ContentWrapper>
        <H3>{"Event Details"}</H3>
        <DeatilsWrapper>
          <Detail>
            <h4>{"When:"}</h4>
            <P>{"May 31st - June 2nd"}</P>
          </Detail>
          <Detail>
            <div>
              <h4>{"Where:"}</h4>
            </div>

            <P>{"Fairfield Inn and Suites"}</P>
            <P>{"21 N Wineow Street Cumberland,"}</P>
            <P>{"MD 21502"}</P>
            <P>{"Phone: 1-301-722-0340"}</P>
          </Detail>
          <Detail>
            <div>
              <h4>{"Files:"}</h4>
            </div>
            <FileLink href="">{"Sign-up Form"}</FileLink>
            <FileLink href="">{"Course Map PDF"}</FileLink>
            <FileLink href="https://www.nps.gov/choh/index.htm">
              {"C&O Canal Towpath"}
            </FileLink>
            <FileLink href="https://www.nps.gov/gwmp/planyourvisit/mtvernontrail.htm">
              {"Mount Vernon Trail"}
            </FileLink>
            <FileLink href="https://www.nps.gov/gwmp/planyourvisit/fort-hunt-park.htm">
              {"Fort Hunt Park"}
            </FileLink>
          </Detail>
        </DeatilsWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default EventDetailsSidebar;

const Wrapper = styled.div`
  display: none;
  height: 100%;
  width: 100%;
  padding: 1rem;
  @media only screen and (min-width: 768px) {
    display: flex;
    grid-column: 1 / span 2;
    grid-row: 3 / span 4;
    flex-direction: column;
    gap: 2em;
  }
  @media only screen and (min-width: 1024px) {
    grid-column: 1 / span 3;
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  aspect-ratio: 1 / 1;
  width: 100%;
  max-width: 200px;
`;

const Img = styled.img`
  width: 100%;
  object-fit: contain;
`;

const H3 = styled.h3`
  color: white;
  font-size: 2rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: white;
  gap: 1rem;
`;

const DeatilsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const P = styled.p``;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FileLink = styled.a`
  color: white;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: grey;
  }
`;
