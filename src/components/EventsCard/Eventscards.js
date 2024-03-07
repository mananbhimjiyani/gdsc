import {useState} from 'react';
import {CCarousel, CCarouselCaption, CCarouselItem, CImage} from "@coreui/react";
import '@coreui/coreui/dist/css/coreui.min.css'
import ExampleImage1 from '../../images/pexels-pixabay-326055.jpg'
import ExampleImage2 from '../../images/pexels-philippe-donn-1133957.jpg'

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <CCarousel controls indicators>
                <CCarouselItem>
                    <CImage className="d-block w-100" src={ExampleImage1} alt="slide 1"/>
                    <CCarouselCaption className="d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" src={ExampleImage2} alt="slide 2"/>
                    <CCarouselCaption className="d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </CCarouselCaption>
                </CCarouselItem>
                {/*<CCarouselItem>*/}
                {/*    <CImage className="d-block w-100" src="" alt="slide 3"/>*/}
                {/*    <CCarouselCaption className="d-none d-md-block">*/}
                {/*        <h5>Third slide label</h5>*/}
                {/*        <p>Some representative placeholder content for the first slide.</p>*/}
                {/*    </CCarouselCaption>*/}
                {/*</CCarouselItem>*/}
            </CCarousel>
        </>
    );
}

export default ControlledCarousel;
