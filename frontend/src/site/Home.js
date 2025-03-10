import Carousel from "../components/Carousel";
import SectionImageText from "../components/SectionImagetext";
import GoogleReviewsCarousel from "../components/GoogleReviewsCarousel";
import Video from "../components/Video"
import SectionText from "../components/SectionText";

import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        document.title = "Accueil | Mon Site";
    }, []);

    return (
        <div className="bg-gray-100 w-screen max-w-none mx-0 px-0">
            <Carousel />

            <div className="mt-12 md:mt-0 bg-gray-100">
                <SectionImageText
                    title="Lorem Ipsum"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus ! "
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in odio vehicula, tempus massa laoreet, finibus leo. Curabitur mauris turpis, dapibus ut aliquet a, convallis non mauris. Donec fringilla, metus ac tristique semper, diam enim dictum sapien, id varius turpis magna quis nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt, nibh nec tempus dignissim, nisl magna fringilla augue, a scelerisque risus metus vel mi. Sed elementum ex quis finibus lobortis. Nam sem eros, interdum sodales diam nec, pulvinar tristique nisl. Sed gravida pulvinar odio, sed ultricies nisl scelerisque ut. Phasellus nec ligula felis. Vivamus eu neque sed mi imperdiet commodo sit amet sit amet quam. Nulla elit magna, congue a mauris a, sodales imperdiet urna. Cras at pulvinar tortor. Sed ultrices urna sit amet rhoncus vehicula. Fusce vitae velit sit amet turpis ornare porttitor. Vestibulum varius tortor enim, et pharetra ligula porta eget. Nulla sit amet sapien vitae eros congue suscipit."
                    image="https://images.unsplash.com/photo-1593642532973-d31b6557fa68"
                //reverse={1}
                />
            </div>

            <div className="mt-12 md:mt-20 bg-gray-800 w-screen max-w-none mx-0 px-0 py-12 ">
                <GoogleReviewsCarousel />
            </div>

            <div className="bg-gray-100 mx-8 mt-8 ">
                <Video />
            </div>

            <div className="mt-12 md:mt-0 bg-gray-100">
                <SectionText
                    title="Lorem Ipsum"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus ! "
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec porta nunc. Pellentesque convallis lectus vitae efficitur tempor. Fusce viverra ultrices sollicitudin. Nulla at auctor sem. Donec fermentum massa ut magna vestibulum feugiat. Etiam nec felis ut leo venenatis ultricies eget quis urna. Praesent blandit faucibus finibus. Vivamus ultricies dictum purus in rhoncus. Fusce diam dui, scelerisque eu diam et, laoreet congue mauris. In eget ipsum sit amet nunc condimentum suscipit. Nulla a blandit elit. Duis a commodo lectus, nec dignissim justo. Fusce imperdiet lacus id tellus suscipit mattis. Quisque quis lorem id est feugiat sagittis. Praesent eu dapibus nisi. Quisque libero magna, consectetur vitae facilisis non, feugiat a enim"
                />
            </div>

            <div className="mt-12 md:mt-0 bg-gray-100">
                <SectionText
                    text="Sed vehicula neque sit amet bibendum laoreet. Ut molestie aliquet magna, a convallis eros. Nullam ultricies ultrices leo. Fusce scelerisque orci quis elementum imperdiet. Nunc pharetra, erat et auctor consectetur, quam diam sollicitudin sapien, sed tempor ligula odio ac eros. Sed rhoncus ligula eget lorem interdum aliquam. In mollis nunc id nisl commodo eleifend. Mauris vestibulum felis risus, sit amet ultrices lorem blandit sed."
                />
            </div>

            <div className="mt-0 pb-12 md:mt-0 bg-gray-100">
                <SectionText
                    text="Proin vestibulum tellus in metus consequat, eget pellentesque nulla cursus. Sed iaculis, lorem sit amet volutpat consequat, orci metus condimentum mi, at ullamcorper nisl dolor sit amet ante. Duis risus leo, eleifend id porttitor id, pharetra ut justo. Quisque in est consectetur, gravida massa non, lacinia purus. Aliquam maximus, est eget laoreet varius, lorem diam dictum dolor, eu commodo orci nisl nec turpis. Nullam eget arcu pulvinar, euismod dui eu, scelerisque ex. Integer rutrum, lorem eu fringilla ultrices, nibh purus tincidunt erat, ut vestibulum nulla sapien tincidunt enim. Fusce at ipsum ac mauris porttitor semper. Nullam sed libero gravida velit malesuada ultricies. Etiam lorem lectus, mattis non lectus vitae, commodo lobortis justo. Suspendisse fermentum maximus orci vel lacinia. Cras a nulla enim. Fusce ut sodales nulla. Aenean porta sapien non orci vehicula pharetra."
                />
            </div>
        </div >
    );
}
