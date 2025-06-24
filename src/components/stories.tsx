
import Girl from "../assets/img/girl.jpg"
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote, Star } from "lucide-react";
const Stories = () => {
  return (
    <div className="flex flex-col gap-10 justify-center px-4 lg:px-0 items-center py-16  mx-auto">
      <div className="flex flex-col gap-6 text-center">
        <p className="text-4xl font-semibold">Success Stories</p>
        <p className="text-lg max-w-2xl text-center">
          Real stories from candidates and employers who found success with
          Swift Recruit
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  justify-center items-center gap-6 w-full max-w-screen-xl">
        <div className="flex flex-col gap-4 justify-center items-center p-6 shadow-2xl rounded-lg">
          <p className="text-3xl">From Job Seeker to Team Leader</p>
          <p>
            "Swift Recruit didn't just find me a job - they found me a career.
            Starting as an HGV driver, their ongoing support helped me progress
            to Fleet Manager within 18 months."
          </p>
          <div className="flex gap-4 items-center w-full">
            <img src={Girl} alt="" className="size-10 rounded-full" />
            <div>
              <p>John Doe</p>
              <p>Team Leader</p>
            </div>
          </div>
        </div>
        <div>
          <img src={Girl} alt="" className="w-2xl h-80 rounded-lg" />
        </div>
      </div>
      <Carousel 
        opts={{
          align: "start",
          loop: true,
          duration: 40
        }}
        className="w-full max-w-screen-xl "
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex  items-center justify-center p-6">
                    <div className="flex flex-col gap-4 items-center">
                      <Quote className="text-green-600 size-8" />
                      <div className="flex gap-1">
                        <Star fill="yellow" className="text-yellow-200" />
                        <Star fill="yellow" className="text-yellow-200" />
                        <Star fill="yellow" className="text-yellow-200" />
                        <Star fill="yellow" className="text-yellow-200" />
                        <Star fill="yellow" className="text-yellow-200" />
                      </div>
                      <p className="text-center">
                        "Swift Recruit found me the perfect driving position.
                        Their team understood exactly what I was looking for and
                        matched me with a great company."
                      </p>
                      <div >
                        <p className="text-center">Sarah Williams</p>
                        <p className="text-center">Operations Manager</p>
                        <p className="text-center text-green-600">
                          LogiFlow Solutions
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex"/>
        <CarouselNext className="hidden lg:flex"/>
      </Carousel>
    </div>
  );
};

export default Stories;
