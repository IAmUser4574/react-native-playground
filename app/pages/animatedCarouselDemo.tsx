import { View } from "react-native";
import AnimatedCarousel from "../components/animatedCarousel";
import { queryClient } from "../utils/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

export default function AnimatedCarouselDemo(){
    return (
        <QueryClientProvider client={queryClient}>
                <AnimatedCarousel />
        </QueryClientProvider>
    );
}
