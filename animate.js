let requestId;

function startAnimation() {
    animatePioneer();
    animateNewEnergy();
    startBlinkingAnimation('darksts-point-layer');
    startBlinkingAnimation('darksts2samfsu-point-layer');
}

function animatePioneer() {
    const source = map.getSource('pioneer-20aug-27aug-data');
    if (!source || !source._data.features.length) return;

    const route = source._data.features[0].geometry.coordinates;
    let step = 0;
    const stepIncrement = Math.ceil(route.length / (5 * 60)); // 5 seconds animation

    function animate() {
        if (step < route.length - stepIncrement) {
            const segment = route.slice(0, step);
            const geojson = {
                type: 'Feature',
                geometry: {
                    type: 'LineString',
                    coordinates: segment
                }
            };
            map.getSource('pioneer-20aug-27aug-data').setData(geojson);
            step += stepIncrement;
            requestId = requestAnimationFrame(animate);
        } else {
            cancelAnimationFrame(requestId); // Stop animation when route ends
        }
    }

    animate();
}

function animateNewEnergy() {
    const source = map.getSource('newenergy-20-23august-data');
    if (!source || !source._data.features.length) return;

    const route = source._data.features[0].geometry.coordinates;
    let step = 0;
    const stepIncrement = Math.ceil(route.length / (5 * 60)); // 5 seconds animation

    function animate() {
        if (step < route.length - stepIncrement) {
            const segment = route.slice(0, step);
            const geojson = {
                type: 'Feature',
                geometry: {
                    type: 'LineString',
                    coordinates: segment
                }
            };
            map.getSource('newenergy-20-23august-data').setData(geojson);
            step += stepIncrement;
            requestId = requestAnimationFrame(animate);
        } else {
            cancelAnimationFrame(requestId); // Stop animation when route ends
        }
    }

    animate();
}

function animateAsya(asyaData) {
    const source = map.getSource('asya-25aug-4sept-data');
    if (!source || !asyaData.features.length) return;

    const route = asyaData.features[0].geometry.coordinates;
    let step = 0;
    const stepIncrement = Math.ceil(route.length / (30 * 60)); // 5 seconds animation

    function animate() {
        if (step < route.length - stepIncrement) {
            const segment = route.slice(0, step);
            const geojson = {
                type: 'Feature',
                geometry: {
                    type: 'LineString',
                    coordinates: segment
                }
            };
            map.getSource('asya-25aug-4sept-data').setData(geojson);
            step += stepIncrement;
            requestId = requestAnimationFrame(animate);
        } else {
            cancelAnimationFrame(requestId); // Stop animation when route ends
        }
    }

    animate();
}

function animateEverest(everestData) {
    const source = map.getSource('everest-25-4sept-data');
    if (!source || !everestData.features.length) return;

    const route = everestData.features[0].geometry.coordinates;
    let step = 0;
    const stepIncrement = Math.ceil(route.length / (3000 * 60)); // 5 seconds animation

    function animate() {
        if (step < route.length - stepIncrement) {
            const segment = route.slice(0, step);
            const geojson = {
                type: 'Feature',
                geometry: {
                    type: 'LineString',
                    coordinates: segment
                }
            };
            map.getSource('everest-25-4sept-data').setData(geojson);
            step += stepIncrement;
            requestId = requestAnimationFrame(animate);
        } else {
            cancelAnimationFrame(requestId); // Stop animation when route ends
        }
    }

    animate();
}

function startBlinkingAnimation(layerId) {
    let visibility = true;

    window.blinkingIntervals = window.blinkingIntervals || {};
    window.blinkingIntervals[layerId] = setInterval(() => {
        map.setPaintProperty(layerId, 'circle-opacity', visibility ? 1 : 0);
        visibility = !visibility;
    }, 300); // Change every 300ms
}

function stopBlinkingAnimation() {
    if (window.blinkingIntervals) {
        Object.keys(window.blinkingIntervals).forEach(layerId => {
            clearInterval(window.blinkingIntervals[layerId]);
            map.setPaintProperty(layerId, 'circle-opacity', 1); // Ensure it's visible when stopping
        });
        window.blinkingIntervals = {};
    }
}

function stopAnimation() {
    if (requestId) {
        cancelAnimationFrame(requestId);
        requestId = null;
    }
}
