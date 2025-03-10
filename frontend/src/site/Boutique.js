import HeroSection from "../components/HeroSection";
import ShopSection from "../components/ShopSection";
import SectionText from "../components/SectionText";

import { useEffect } from "react";

export default function Boutique() {
    useEffect(() => {
        document.title = "Boutique | Mon Site";
    }, []);

    return (
        <div>
            <div>
                <HeroSection />
            </div>

            <div className="pt-3 pb-20">  <ShopSection />
            </div>

            <div className="pt-12 pb-12 md:pt-12">
                <SectionText
                    title="Lorem Ipsum"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus ! "
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec porta nunc. Pellentesque convallis lectus vitae efficitur tempor. Fusce viverra ultrices sollicitudin. Nulla at auctor sem. Donec fermentum massa ut magna vestibulum feugiat. Etiam nec felis ut leo venenatis ultricies eget quis urna. Praesent blandit faucibus finibus. Vivamus ultricies dictum purus in rhoncus. Fusce diam dui, scelerisque eu diam et, laoreet congue mauris. In eget ipsum sit amet nunc condimentum suscipit. Nulla a blandit elit. Duis a commodo lectus, nec dignissim justo. Fusce imperdiet lacus id tellus suscipit mattis. Quisque quis lorem id est feugiat sagittis. Praesent eu dapibus nisi. Quisque libero magna, consectetur vitae facilisis non, feugiat a enim"
                />
            </div>

        </div>
    );
}
