import React from "react"
import Carousel from 'react-elastic-carousel'
import Item from "../Item";
import styled from "styled-components";
//add links!! later during stretch goal time 

function FactCarousel() {
    return (
        <CarouselWrapper>
            <CarouselTitle>how fashion impacts the environment: 👇 </CarouselTitle>
            <Carousel itemsToShow={1}>
                <Item>The fashion industry emits more carbon than international flights and maritime shopping combined. </Item>
                <Item>In Europe, fashion companies went from an average offering of two collections per year in 2000 to five in 2011. Fast fashion companies offer between 12-24 collections a year. </Item>
                <Item>Up to 85% of textiles go to landfills each year - enough to fill the Sydney harbor annually. The equivalent of one garbage truck full of clothes is burned/dumped in a landfill every second. </Item>
                <Item>Most fibers used in clothing are polyester, which is a plastic found in 60% of garments. Polyester does not break down in the ocean, and releases 2-3x more carbon emissions than cotton. </Item>
                <Item>The fashion industry is the 2nd largest consumer of water worldwide - it takes 700 gals of water to produce one cotton shirt. That’s enough water for one person to drink at least 8 cups per day for 3.5 years. </Item>
                <Item>The resale market is expected to outpace fast fashion within 10 years, according to the Business of Fashion’s 2019 report on the State of Fashion. </Item>
                <Item>93% of brands surveyed by the Fashion Checker aren’t paying garment workers a living wage. </Item>
                <Item>Nearly 70 million barrels of oil are used each year to make the world’s polyester fiber, which is now the most commonly used fiber in our clothing. But it takes more than 200 years to decompose. </Item>
                <Item>Less than 11% of brands are implementing recycling strategies for their items, and 3 out of 5 fast fashion items end up in a landfill. </Item>
            </Carousel>
        </CarouselWrapper>
    )
}

export default FactCarousel;

const CarouselWrapper = styled.div`
    text-align: center;
`
// add font here!! 
const CarouselTitle = styled.h3`
font-family: 'Anonymous Pro', monospace;
`

