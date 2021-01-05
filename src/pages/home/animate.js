import React, {useState, useEffect, useRef} from "react";

const calculateBoundingBoxes = children => {
    const boundingBoxes = {};

    React.Children.forEach(children, child => {
        const domNode = child.ref.current;
        const nodeBoundingBox = domNode !== null ? domNode.getBoundingClientRect() : undefined;

        boundingBoxes[child.key] = nodeBoundingBox;
    });

    return boundingBoxes;
};

const usePrevious = value => {
    const ref = useRef();

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
}

const AnimateElements = ({children, options = {}}) => {
    const [boundingBox, setBoundingBox] = useState({});
    const [prevBoundingBox, setPrevBoundingBox] = useState({});
    const prevChildren = usePrevious(children);
    const {motionDelay = 500} = options;
  
    useEffect(() => {
        const newBoundingBox = calculateBoundingBoxes(children);
        setBoundingBox(newBoundingBox);
    }, [children]);
  
    useEffect(() => {
        const prevBoundingBox = calculateBoundingBoxes(prevChildren);
        setPrevBoundingBox(prevBoundingBox);
    }, [prevChildren]);

    useEffect(() => {
        const hasPrevBoundingBox = Object.keys(prevBoundingBox).length;
    
        if (hasPrevBoundingBox) {
            React.Children.forEach(children, child => {
                const firstBox = prevBoundingBox[child.key];
                const lastBox = boundingBox[child.key];

                if (firstBox && lastBox) {
                    const changeInY = firstBox.top - lastBox.top;
    
                    if (changeInY) {
                        const domNode = child.ref.current;
                        
                        requestAnimationFrame(() => {
                            // Before the DOM paints, invert child to old position
                            domNode.style.transform = `translateY(${changeInY}px)`;
                            domNode.style.transition = "transform 0s";
                
                            requestAnimationFrame(() => {
                                // After the previous frame, remove
                                // the transistion to play the animation
                                domNode.style.transform = "";
                                domNode.style.transition = `transform ${motionDelay}ms`;
                            });
                        });
                    }
                }
            });
        }
    }, [boundingBox, prevBoundingBox, children]);
  
    return children;
};

export default AnimateElements;