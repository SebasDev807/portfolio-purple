import { testimonials } from "../data";
import { Carousel } from "./Carousel";
import { TestimonialCard } from "./TestimonialCard";


export function TestimonialsCarousel() {
    return (
        <Carousel
            items={testimonials}
            renderItem={(t, i) => <TestimonialCard key={i} {...t} />}
        />
    );
}
