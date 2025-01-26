import { SectionWrapper, SiteGrid } from "@/styles/globals";
import styled from "styled-components";

const HeroSection = () => {
  const coastGuardSeals = [
    "https://files.tomsrunrelay.org/Toms-Run-Files%2FDecals%2Fdecal1.png",
    "https://files.tomsrunrelay.org/Toms-Run-Files%2FDecals%2FCPOALogo.png",
    "https://files.tomsrunrelay.org/Toms-Run-Files%2FDecals%2Fcgoalogo.png",
    "https://files.tomsrunrelay.org/Toms-Run-Files%2FDecals%2FCGEAlogo.png",
  ];

  return (
    <>
      <Wrapper>
        <HeroContent>
          <DetailsWrapper>
            <H1>
              {`27th Annual Tom’s Run Relay:`} <br />{" "}
            </H1>
            <Paragraph>
              {
                "A 200-mile team-building fitness event in memory of CWO4 Tom Brooks U.S. Coast Guard"
              }
            </Paragraph>
            <Date>{"May 31st - June 2nd"}</Date>
            <Date>{"Cumberland, MD to Alexandria, Va"}</Date>
          </DetailsWrapper>
        </HeroContent>
        <HeroImageWrapper>
          <HeroImage
            src="https://www.ucsvt.org/wp-content/uploads/2022/12/T3_4413-1536x1024.jpg"
            alt="Hero Image"
          />
        </HeroImageWrapper>
      </Wrapper>
      <Wrapper>
        <SealGroupWrapper>
          {coastGuardSeals.map((seal, index) => (
            <SealWrapper key={index}>
              <Img src={seal} alt="Coast Guard Seal" />
            </SealWrapper>
          ))}
        </SealGroupWrapper>
      </Wrapper>
    </>
  );
};

export default HeroSection;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  flex-direction: column;
  grid-column: 1 / span 4;

  @media only screen and (min-width: 768px) {
    grid-column: 1 / span 8;
    padding: 1rem;
  }
  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    grid-column: 1 / span 12;
    gap: 20px;
    padding: 1rem;
    align-items: center;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: white;
  z-index: 2;
  flex: 1 1 50%;

  @media only screen and (min-width: 1024px) {
    justify-content: space-between;
  }
`;

const H1 = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.1;
  margin: 0;
  padding: 0;
  text-align: center;
  @media only screen and (min-width: 768px) {
    font-size: 3rem;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 4rem;
  }
`;

const Date = styled.h2`
  /* @media only screen and (min-width: 768px) {
    font-size: 1%.;
  } */
  font-size: 1.5rem;
  text-align: center;
  @media only screen and (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  text-align: center;
  width: 75%;
  padding: 1rem;

  @media only screen and (min-width: 1024px) {
    width: 100%;
    padding: unset;
  }
`;

const HeroImageWrapper = styled.div`
  flex: 1 1 50%;
`;

const HeroImage = styled.img`
  width: 100%;
  object-fit: contain;
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  padding: 0;
  text-align: center;
`;

const SealWrapper = styled.div`
  aspect-ratio: 1;
  width: 160px;
`;

const SealGroupWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 1rem;
  padding: 1rem;

  @media only screen and (min-width: 1024px) {
    gap: 2.5rem;
  }
`;

const Img = styled.img`
  width: 100%;
`;
