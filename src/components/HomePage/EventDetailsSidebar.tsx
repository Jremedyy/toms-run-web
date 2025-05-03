import styled from "styled-components";

interface EventDetailsSidebarProps {
  bottomRef: React.RefObject<HTMLDivElement | null>;
}
const EventDetailsSidebar = ({ bottomRef }: EventDetailsSidebarProps) => {
  const whereDetails = [
    "Fairfield Inn and Suites",
    "21 N Wineow Street Cumberland,",
    "MD 21502",
    "Phone: 1-301-722-0340",
    <FileLink
      key="hotel-link"
      href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1737658046361&key=GRP&guestreslink2=true&app=resvlink"
      target="_blank"
    >
      Hotel special rate (good through 30 April)
    </FileLink>,
  ];

  const fileLinks = [
    {
      href: "https://files.tomsrunrelay.org/Toms-Run-Files/MISC/TR25%20BTE%20team%20application.pdf",
      label: "Team Application",
    },
    {
      href: "https://files.tomsrunrelay.org/Toms-Run-Files/MISC/tomsruncoursemap%202025.pdf",
      label: "Course Map PDF",
    },
    {
      href: "https://files.tomsrunrelay.org/Toms-Run-Files/MISC/Toms%20Run%20Leg%20Planner.xlsx",
      label: "Leg Planner",
    },
    {
      href: "https://files.tomsrunrelay.org/Toms-Run-Files/MISC/tomsrunequipment%20.pdf",
      label: "Recommended Equipment",
    },
    {
      href: "https://files.tomsrunrelay.org/Toms-Run-Files/MISC/tomsrundisclaimer_.pdf",
      label: "Disclaimer Form",
    },
    {
      href: "https://www.nps.gov/choh/index.htm",
      label: "C&O Canal Towpath",
    },
    {
      href: "https://www.nps.gov/gwmp/planyourvisit/mtvernontrail.htm",
      label: "Mount Vernon Trail",
    },
    {
      href: "https://www.nps.gov/gwmp/planyourvisit/fort-hunt-park.htm",
      label: "Fort Hunt Park",
    },
  ];

  return (
    <Wrapper ref={bottomRef}>
      <ImgWrapper>
        <Img src="https://images.tomsrunrelay.org/Toms_Run_Logo.png" />
      </ImgWrapper>
      <ContentWrapper>
        <H3>{"Event Details"}</H3>
        <DetailsWrapper>
          <Detail>
            <H4Wrapper>
              <h4>{"Relay Start Location:"}</h4>
            </H4Wrapper>
            {whereDetails.map((line, index) => (
              <P key={index}>{line}</P>
            ))}
          </Detail>
          <Detail>
            <H4Wrapper style={{ paddingTop: "1rem" }}>
              <h4>Files:</h4>
            </H4Wrapper>
            {fileLinks.map(({ href, label }, index) => (
              <FileLink key={index} href={href} target="_blank">
                {label}
              </FileLink>
            ))}
          </Detail>
        </DetailsWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default EventDetailsSidebar;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  padding: 1rem;
  grid-column: 1 / span 4;
  flex-direction: column;
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

const DetailsWrapper = styled.div`
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

const H4Wrapper = styled.div`
  padding-bottom: 0.25rem;
`;
