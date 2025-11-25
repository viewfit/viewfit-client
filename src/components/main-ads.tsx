import type { FC } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

export const MainAds: FC = () => {
  const adImageItems = [
    {
      name: "banner_ad_1.jpg",
    },
    {
      name: "banner_ad_2.jpg",
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="h-full"
    >
      <CarouselContent>
        {adImageItems.map((item, index) => (
          <CarouselItem key={index}>
            <Card className="p-0">
              <CardContent className="w-full h-100 overflow-hidden rounded-2xl p-0">
                <img
                  className="w-full h-full object-fill"
                  src={item.name}
                ></img>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
