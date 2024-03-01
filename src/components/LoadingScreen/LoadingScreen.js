import React, {useState} from 'react';
import Lottie from 'react-lottie';
import animationData from './Animation1.json';
import './LoadingScreen.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';


export default function LoadingScreen() {
    const [animationComplete, setAnimationComplete] = useState(false);

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const handleAnimationComplete = () => {
        setAnimationComplete(true);

    };

    return (
        <div className={"loading-container"}>
            <Lottie options={defaultOptions} height={400} width={400} eventListeners={[
                {
                    eventName: 'complete',
                    callback: handleAnimationComplete
                }

            ]}
            />

            {animationComplete && (
                <>
                    <div className="text-below-lottie-container">
                        <div className="text-below-lottie">Google Developer Student Club</div>
                        <div className="text-below-lottie">Symbiosis Institute of Technology Chapter</div>
                    </div>
                    <div className="scroll-for-more animated">
                        <FontAwesomeIcon icon={faChevronDown}/>
                        <span>Scroll for More</span>
                    </div>
                </>
            )}
        </div>
    );
}
