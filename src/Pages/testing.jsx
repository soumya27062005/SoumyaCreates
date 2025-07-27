import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TestAOS = () => {
    useEffect(() => {
        // Initialize AOS
        AOS.init();

        // Function to check the will-change property
        const checkWillChange = () => {
            // Select all elements with data-aos attribute
            const aosElements = document.querySelectorAll('[data-aos]');
            
            console.log(`Found ${aosElements.length} elements with data-aos`);
            
            aosElements.forEach((element, index) => {
                // Add border to the element
                element.style.border = '2px dashed red';
                
                // Get computed style
                const computedStyle = window.getComputedStyle(element);
                const willChange = computedStyle.getPropertyValue('will-change');
                
                console.log(`Element ${index + 1}:`, {
                    'data-aos': element.getAttribute('data-aos'),
                    'will-change': willChange,
                    'element': element.tagName,
                    'classes': element.className
                });
            });
        };

        // Run the check after AOS has been initialized
        setTimeout(checkWillChange, 100);
    }, []);

    return (
        <>
            <style>
                {`
                    [data-aos] {
                        will-change: transform, opacity !important;
                    }
                `}
            </style>

           
        </>
    );
};

export default TestAOS;
