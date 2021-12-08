import React, { useState } from "react";
import { Text } from "../../react-design-system/Text";
import { Container } from "@material-ui/core";
import Button from "../../react-design-system/Button";
import { FlexDiv } from "../../react-design-system/FlexDiv";
import { Input } from "../../react-design-system/Input";
import { Select } from "../../react-design-system/Select";
import hero from "../../assets/hero-bg.svg";
import LeaguesMap from "./map/LeaguesMap";
import LeaguesTableMap from "./map/LeaguesTableMap";
import GameFeedCarousel from "./components/GameFeedCarousel";
import styled from "styled-components";

const BackgroundImage = styled.div`
  background-image: url(${hero});
  background-repeat: repeat;
  height: 300px;
`;

export const Home = () => {
  const [selected, setSelected] = useState<string>("All");

  return (
    <>
      <BackgroundImage>
        <Container style={{ color: "white", marginTop:-30}}>
          <Text style={{ width: 400, paddingTop: 50, fontSize: 28 }}>
            FIND RECREATIONAL GAMES HAPPENING AROUND YOU RIGHT NOW
          </Text>

          <Button style={{ width: 400 }} label="Get Started"></Button>
        </Container>
      </BackgroundImage>

      <GameFeedCarousel />

      <Container>
        <FlexDiv
          align="center"
          style={{ width: "50%", marginBottom:16,marginTop:32 }}
          justify="space-between"
          container
        >
          <Input
            altTheme
            label="Enter state name"
            style={{border:"1px solid lightgray",padding:"16px",borderRadius:"12px"}}
            image="https://thumbs.dreamstime.com/z/red-maps-pin-location-map-icon-location-pin-pin-icon-vector-red-maps-pin-location-map-icon-location-pin-pin-icon-vector-vector-144267433.jpg"
          />
          <Select onChange={(e: any) => setSelected(e.target.value)} style={{marginRight:16, marginLeft:16}}>
            <option value="">Outdoor/Indoor</option>
            <option value="in">Indoor</option>
            <option value="out">OutDoor</option>
          </Select>
          <Select style={{ width: 97, marginRight:16 }}>
            <option value="">Price</option>
            <option value="">$100-200</option>
            <option value="">$200-300</option>
            <option value="">$300-500</option>
            <option value="">$500-1000</option>
          </Select>
          <Select style={{ width: 97 }}>
            <option value="">Time</option>
            <option value="">3 pm</option>
            <option value="">4 pm</option>
            <option value="">5 pm</option>
            <option value="">6 pm</option>
            <option value="">7 pm</option>
          </Select>
        </FlexDiv>

      </Container>
        <FlexDiv container>
          <LeaguesMap />

          <FlexDiv
            style={{
            
              maxHeight: "80vh",
              overflow: "scroll",
              marginRight:32
            }}
          >
            <LeaguesTableMap type={selected} />
          </FlexDiv>
        </FlexDiv>
    </>
  );
};
