mapboxgl.accessToken = 'pk.eyJ1Ijoidml2ZWtwYXRpbDE3IiwiYSI6ImNseHV4bzJoMzFycXgybG9tN3ptZXd1d2QifQ.wbdQPBUeYDHlbwnmgHHI9g';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/vivekpatil17/clyq3h9t102ba01qo2idi87ux',
    center: [0, 0], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

map.on('load', function () {
    // Add the pioneer layer
    map.addSource('pioneer-data', {
        type: 'geojson',
        data: 'finalviz-pioneertanker.geojson'
    });

    map.addLayer({
        id: 'pioneer-layer',
        type: 'line',
        source: 'pioneer-data',
        layout: {
            'visibility': 'none' // Initially hide the layer
        },
        paint: {
            'line-color': '#75baff', // Blue color for the line
            'line-width': 1.5
        }
    });

    // Add the arctic2 point layer
    map.addSource('arctic2-data', {
        type: 'geojson',
        data: 'arctic2.json'
    });

    map.addLayer({
        id: 'arctic2-point-layer',
        type: 'circle',
        source: 'arctic2-data',
        layout: {
            'visibility': 'none'
        },
        paint: {
            'circle-radius': 10,
            'circle-color': '#ff5c5c',
            'circle-opacity': 1
        }
    });

    // Add the arctic2 label layer
    map.addLayer({
        id: 'arctic2-label-layer',
        type: 'symbol',
        source: 'arctic2-data',
        layout: {
            'visibility': 'none',
            'text-field': 'Arctic 2',
            'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
            'text-size': 12,
            'text-offset': [0, 1.5],
            'text-anchor': 'top'
        },
        paint: {
            'text-color': '#d1b494'
        }
    });

    // Add the asya path layer
    map.addSource('asya-path-data', {
        type: 'geojson',
        data: 'asya-path.geojson'
    });

    map.addLayer({
        id: 'asya-path-layer',
        type: 'line',
        source: 'asya-path-data',
        layout: {
            'visibility': 'none'
        },
        paint: {
            'line-color': '#00cc11',
            'line-width': 1.5
        }
    });

    // Add the asya jan-june path layer
    map.addSource('asyajan-june-data', {
        type: 'geojson',
        data: 'asyajan-june.geojson'
    });

    map.addLayer({
        id: 'asyajan-june-layer',
        type: 'line',
        source: 'asyajan-june-data',
        layout: {
            'visibility': 'none'
        },
        paint: {
            'line-color': '#00cc11',
            'line-width': 1.5
        }
    });

    // Add the asyajune-25june layer
    map.addSource('asyajune-25june-data', {
        type: 'geojson',
        data: 'asyajune-25june.geojson'
    });

    map.addLayer({
        id: 'asyajune-25june-layer',
        type: 'line',
        source: 'asyajune-25june-data',
        layout: {
            'visibility': 'none'
        },
        paint: {
            'line-color': '#00cc11',
            'line-width': 1.5
        }
    });

    // Add the asyajune-july layer
    map.addSource('asyajune-july-data', {
        type: 'geojson',
        data: 'asyajune-july.geojson'
    });

    map.addLayer({
        id: 'asyajune-july-layer',
        type: 'line',
        source: 'asyajune-july-data',
        layout: {
            'visibility': 'none'
        },
        paint: {
            'line-color': '#00cc11',
            'line-width': 1.5
        }
    });

    // Add the everest20-25august layer
    map.addSource('everest20-25august-data', {
        type: 'geojson',
        data: 'everest20-25august.geojson'
    });

    map.addLayer({
        id: 'everest20-25august-layer',
        type: 'line',
        source: 'everest20-25august-data',
        layout: {
            'visibility': 'none'
        },
        paint: {
            'line-color': '#d1b200',
            'line-width': 1.5
        }
    });

    // Add the everest-energy(1jan-14thaugust) layer
    map.addSource('everest-energy-1jan-14august-data', {
        type: 'geojson',
        data: 'everest-energy(1jan-14thaugust).geojson'
    });

    map.addLayer({
        id: 'everest-energy-1jan-14august-layer',
        type: 'line',
        source: 'everest-energy-1jan-14august-data',
        layout: {
            'visibility': 'none'
        },
        paint: {
            'line-color': '#d1b200',
            'line-width': 1.5
        }
    });

    // Add the pioneer(20aug-27aug) layer
    map.addSource('pioneer-20aug-27aug-data', {
        type: 'geojson',
        data: 'pioneer(20aug-27aug).geojson'
    });

    map.addLayer({
        id: 'pioneer-20aug-27aug-layer',
        type: 'line',
        source: 'pioneer-20aug-27aug-data',
        layout: {
            'visibility': 'none'
        },
        paint: {
            'line-color': '#75baff',
            'line-width': 1.5
        }
    });

    // Add the newenergy(20-23august) layer
    map.addSource('newenergy-20-23august-data', {
        type: 'geojson',
        data: 'newenergy(20-23august).geojson'
    });

    map.addLayer({
        id: 'newenergy-20-23august-layer',
        type: 'line',
        source: 'newenergy-20-23august-data',
        layout: {
            'visibility': 'none'
        },
        paint: {
            'line-color': '#00ffcb',
            'line-width': 1.5
        }
    });

    // Add the darksts.json point layer
    map.addSource('darksts-data', {
        type: 'geojson',
        data: 'darksts.json'
    });

    map.addLayer({
        id: 'darksts-point-layer',
        type: 'circle',
        source: 'darksts-data',
        layout: {
            'visibility': 'none'
        },
        paint: {
            'circle-radius': 7,
            'circle-color': '#ff6347',
            'circle-stroke-width': 1.5,
            'circle-stroke-color': '#ffffff'
        }
    });
 // Add a label for the darksts.json point layer
 map.addLayer({
    id: 'darksts-label-layer',
    type: 'symbol',
    source: 'darksts-data',
    layout: {
        'visibility': 'none',
        'text-field': ['get', 'name'],
        'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
        'text-size': 12,
        'text-offset': [0, 1.5],
        'text-anchor': 'top'
    },
    paint: {
        'text-color': '#ffffff'
    }
});

    // Add the new layers for Everest, Asya, SaamFSU, and DarkSTS2SaamFSU
    fetch('everest(25-4sept).geojson')
        .then(response => response.json())
        .then(data => {
            map.addSource('everest-25-4sept-data', {
                type: 'geojson',
                data: data
            });

            map.addLayer({
                id: 'everest-25-4sept-layer',
                type: 'line',
                source: 'everest-25-4sept-data',
                layout: {
                    'visibility': 'none'
                },
                paint: {
                    'line-color': '#d1b200',
                    'line-width': 1.5
                }
            });
        })
        .catch(error => {
            console.error('Error fetching geojson data:', error);
        });

    fetch('asya(25aug-4sept).geojson')
        .then(response => response.json())
        .then(data => {
            map.addSource('asya-25aug-4sept-data', {
                type: 'geojson',
                data: data
            });
            map.addLayer({
                id: 'asya-25aug-4sept-layer',
                type: 'line',
                source: 'asya-25aug-4sept-data',
                layout: {
                    'visibility': 'none'
                },
                paint: {
                    'line-color': '#00cc11',
                    'line-width': 1.5
                }
            });
        })
        .catch(error => {
            console.error('Error fetching geojson data:', error);
        });

    fetch('saamfsu25aug4sept.geojson')
        .then(response => response.json())
        .then(data => {
            map.addSource('saamfsu25aug-4sept-data', {
                type: 'geojson',
                data: data
            });

            map.addLayer({
                id: 'saamfsu25aug-4sept-layer',
                type: 'line',
                source: 'saamfsu25aug-4sept-data',
                layout: {
                    'visibility': 'none'
                },
                paint: {
                    'line-color': '#00ffcb',
                    'line-width': 3
                }
            });
        })
        .catch(error => {
            console.error('Error fetching geojson data:', error);
        });

    fetch('darksts2samfsu.json')
        .then(response => response.json())
        .then(data => {
            map.addSource('darksts2samfsu-data', {
                type: 'geojson',
                data: data
            });

            map.addLayer({
                id: 'darksts2samfsu-point-layer',
                type: 'circle',
                source: 'darksts2samfsu-data',
                layout: {
                    'visibility': 'none'
                },
                paint: {
                    'circle-radius': 7,
                    'circle-color': '#ff6347',
                    'circle-stroke-width': 1.5,
                    'circle-stroke-color': '#ffffff'
                }
            });

            map.addLayer({
                id: 'darksts2samfsu-label-layer',
                type: 'symbol',
                source: 'darksts2samfsu-data',
                layout: {
                    'visibility': 'none',
                    'text-field': ['get', 'name'],
                    'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
                    'text-size': 12,
                    'text-offset': [0, 1.5],
                    'text-anchor': 'top'
                },
                paint: {
                    'text-color': '#ffffff'
                }
            });
        })
        .catch(error => {
            console.error('Error fetching geojson data:', error);
        });

    // Add CURRENTLOCATION layer for Chapter 16
    fetch('CURRENTLOCATION.json')
        .then(response => response.json())
        .then(data => {
            map.addSource('currentlocation-data', {
                type: 'geojson',
                data: data
            });

            map.addLayer({
                id: 'currentlocation-point-layer',
                type: 'circle',
                source: 'currentlocation-data',
                layout: {
                    'visibility': 'none'
                },
                paint: {
                    'circle-radius': 7,
                    'circle-color': ['get', 'color'], // Color is based on the vessel
                    'circle-stroke-width': 0,
                    'circle-stroke-color': '#ffffff'
                }
            });

            map.addLayer({
                id: 'currentlocation-label-layer',
                type: 'symbol',
                source: 'currentlocation-data',
                layout: {
                    'visibility': 'none',
                    'text-field': ['get', 'name'],
                    'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
                    'text-size': 12,
                    'text-offset': [0, 1.5],
                    'text-anchor': 'top'
                },
                paint: {
                    'text-color': '#ffffff'
                }
            });
        })
        .catch(error => {
            console.error('Error fetching CURRENTLOCATION data:', error);
        });

    // Initialize Scrollama
    initScrollama();
});

function initScrollama() {
    const scroller = scrollama();

    scroller
        .setup({
            step: '.step',
            offset: 0.5,
            progress: true
        })
        .onStepEnter(response => {
            const chapter = response.element.id;
            handleStepEnter(chapter);
            response.element.classList.add('active');
        })
        .onStepExit(response => {
            const chapter = response.element.id;
            handleStepExit(chapter);
            response.element.classList.remove('active');
        });

    window.addEventListener('resize', scroller.resize);
}

function updateLegend(items) {
    const legendElement = document.getElementById('legend');
    if (legendElement) {
        const legendList = document.getElementById('legend-list');
        legendList.innerHTML = ''; // Clear the existing legend

        items.forEach(item => {
            const listItem = document.createElement('li');
            const colorBox = document.createElement('div');
            colorBox.className = 'legend-color-box';
            colorBox.style.backgroundColor = item.color;
            listItem.appendChild(colorBox);
            listItem.appendChild(document.createTextNode(item.label));
            legendList.appendChild(listItem);
        });

        legendElement.style.display = 'block'; // Ensure the legend is visible
    }
}

function handleStepEnter(chapter) {
    const clockElement = document.getElementById('clock');
    const legendElement = document.getElementById('legend');

    switch (chapter) {
        case 'chapter-1':
            map.flyTo({ center: [59.38618, 71.89288], zoom: 2, pitch: 6, bearing: 7.20 });
            if (clockElement) clockElement.style.display = 'none';
            if (legendElement) legendElement.style.display = 'none';
            hideAllLayers();
            stopBlinkingAnimation();
            break;

        case 'chapter-2':
            map.flyTo({ center: [28.29103, 71.51573], zoom: 4.3, pitch: 0, bearing: -10.18 });
            if (clockElement) clockElement.style.display = 'block';
            updateClock('From 15th July - 6th August 2024');
            updateLegend([
                { color: '#75baff', label: 'Pioneer Energy Path' }
            ]);
            map.setLayoutProperty('pioneer-layer', 'visibility', 'visible');
            hideOtherLayers(['pioneer-layer']);
            stopBlinkingAnimation();
            break;

        case 'chapter-3':
            map.flyTo({ center: [58.86907, 71.03377], zoom: 3.9, pitch: 0, bearing: -10.18 });
            if (clockElement) clockElement.style.display = 'block';
            updateClock('On 1st August 2024');
            updateLegend([
                { color: '#75baff', label: 'Pioneer Energy Path' },
            ]);
            map.setLayoutProperty('pioneer-layer', 'visibility', 'visible');
            map.setLayoutProperty('arctic2-point-layer', 'visibility', 'visible');
            map.setLayoutProperty('arctic2-label-layer', 'visibility', 'visible');
            hideOtherLayers(['pioneer-layer', 'arctic2-point-layer', 'arctic2-label-layer']);
            startBlinkingAnimation();
            break;

        case 'chapter-4':
            map.flyTo({ center: [28.29103, 71.51573], zoom: 4.3, pitch: 0, bearing: -10.18 });
            if (clockElement) clockElement.style.display = 'block';
            updateClock('From 2nd August - 15th August 2024');
            updateLegend([
                { color: '#00cc11', label: 'Asya Energy Path' }
            ]);
            map.setLayoutProperty('asya-path-layer', 'visibility', 'visible');
            hideOtherLayers(['asya-path-layer']);
            startBlinkingAnimation();
            break;

            case 'chapter-5':
                map.flyTo({ center: [58.86907, 71.03377], zoom: 3.9, pitch: 0, bearing: -10.18 });
                if (clockElement) clockElement.style.display = 'block';
                updateClock('On 11th August 2024');
                updateLegend([
                    { color: '#00cc11', label: 'Asya Energy Path' }
                ]);
                map.setLayoutProperty('arctic2-point-layer', 'visibility', 'visible');
                map.setLayoutProperty('arctic2-label-layer', 'visibility', 'visible');
                map.setLayoutProperty('asya-path-layer', 'visibility', 'visible');
                hideOtherLayers(['arctic2-point-layer', 'arctic2-label-layer', 'asya-path-layer']);
                startBlinkingAnimation();
                break;
    
            case 'chapter-6':
                map.flyTo({ center: [48.97317, 70.64653], zoom: 4.17, pitch: 0, bearing: -10.18 });
                if (clockElement) clockElement.style.display = 'block';
                updateClock('From 19th- 26th August 2024');
                updateLegend([
                    { color: '#d1b200', label: 'Everest Energy Path' }
                ]);
                map.setLayoutProperty('arctic2-point-layer', 'visibility', 'visible');
                map.setLayoutProperty('arctic2-label-layer', 'visibility', 'visible');
                map.setLayoutProperty('everest20-25august-layer', 'visibility', 'visible');
                hideOtherLayers(['arctic2-point-layer', 'arctic2-label-layer', 'everest20-25august-layer']);
                startBlinkingAnimation();
                break;
    
            case 'chapter-7':
                map.flyTo({ center: [32.44418, 72.49362], zoom: 5.22, pitch: 2, bearing: -10.18 });
                if (clockElement) clockElement.style.display = 'block';
                updateClock('Pioneer (15 July-6th August 2024)|Asya Energy (2-15 August)|Everest Energy (19-26 August)');
                updateLegend([
                    { color: '#75baff', label: 'Pioneer Energy Path' },
                    { color: '#d1b200', label: 'Everest Energy Path' },
                    { color: '#00cc11', label: 'Asya Energy Path' }
                ]);
                map.setLayoutProperty('pioneer-layer', 'visibility', 'visible');
                map.setLayoutProperty('everest20-25august-layer', 'visibility', 'visible');
                map.setLayoutProperty('asya-path-layer', 'visibility', 'visible');
                stopBlinkingAnimation();
                break;
    
            case 'chapter-8':
                map.flyTo({ center: [72.42133, 71.04954], zoom: 6.23, pitch: 2, bearing: 3 });
                if (clockElement) clockElement.style.display = 'none';
                if (legendElement) legendElement.style.display = 'none';
                map.setLayoutProperty('pioneer-layer', 'visibility', 'none');
                map.setLayoutProperty('arctic2-point-layer', 'visibility', 'visible');
                map.setLayoutProperty('arctic2-label-layer', 'visibility', 'visible');
                hideOtherLayers(['arctic2-point-layer', 'arctic2-label-layer']);
                stopAnimation(); // Stop any ongoing animations
                stopBlinkingAnimation();
                break;
    
            case 'chapter-9':
                map.flyTo({ center: [68.10619, 17.51712], zoom: 3.36, pitch: 2, bearing: 0 });
                if (clockElement) clockElement.style.display = 'block';
                updateClock('From 1st Jan-15th Jun 2024');
                updateLegend([
                    { color: '#00cc11', label: 'Asya Energy Path' }
                ]);
                map.setLayoutProperty('pioneer-layer', 'visibility', 'visible');
                map.setLayoutProperty('asya-path-layer', 'visibility', 'visible');
                map.setLayoutProperty('asyajan-june-layer', 'visibility', 'visible');
                hideOtherLayers(['pioneer-layer', 'asya-path-layer', 'asyajan-june-layer']);
                stopBlinkingAnimation();
                break;
    
            case 'chapter-10':
                map.flyTo({ center: [48.49182, 24.24954], zoom: 4.00, pitch: 0, bearing: 0 });
                if (clockElement) clockElement.style.display = 'block';
                updateClock('From 16th Jun- 26th Jun 2024');
                updateLegend([
                    { color: '#00cc11', label: 'Asya Energy Path' }
                ]);
                map.setLayoutProperty('pioneer-layer', 'visibility', 'visible');
                map.setLayoutProperty('asya-path-layer', 'visibility', 'visible');
                map.setLayoutProperty('asyajan-june-layer', 'visibility', 'visible');
                map.setLayoutProperty('asyajune-25june-layer', 'visibility', 'visible');
                hideOtherLayers(['pioneer-layer', 'asya-path-layer', 'asyajan-june-layer', 'asyajune-25june-layer']);
                stopBlinkingAnimation();
                break;
    
            case 'chapter-11':
                map.flyTo({ center: [14.71961, 38.67919], zoom: 4.29, pitch: 0, bearing: 0 });
                if (clockElement) clockElement.style.display = 'block';
                updateClock('From 27th Jun- 26th July 2024');
                updateLegend([
                    { color: '#00cc11', label: 'Asya Energy Path' },
                ]);
                map.setLayoutProperty('pioneer-layer', 'visibility', 'visible');
                map.setLayoutProperty('asya-path-layer', 'visibility', 'visible');
                map.setLayoutProperty('asyajan-june-layer', 'visibility', 'visible');
                map.setLayoutProperty('asyajune-july-layer', 'visibility', 'visible');
                map.setLayoutProperty('everest-energy-1jan-14august-layer', 'visibility', 'none');
                stopBlinkingAnimation();
                break;
    
            case 'chapter-12':
                map.flyTo({ center: [26.33921, 38.49713], zoom: 3.13, pitch: 38.50, bearing: 24.00 });
                if (clockElement) clockElement.style.display = 'block';
                updateClock('Asya Energy (1st Jan- 26th July 2024)| Everest Energy (1st Jan- 15th Aug 2024)');
                updateLegend([
                    { color: '#00cc11', label: 'Asya Energy Path' },
                    { color: '#d1b200', label: 'Everest Energy Path' }
                ]);
                map.setLayoutProperty('pioneer-layer', 'visibility', 'visible');
                map.setLayoutProperty('asya-path-layer', 'visibility', 'visible');
                map.setLayoutProperty('asyajan-june-layer', 'visibility', 'visible');
                map.setLayoutProperty('asyajune-25june-layer', 'visibility', 'visible');
                map.setLayoutProperty('asyajune-july-layer', 'visibility', 'visible');
                map.setLayoutProperty('everest-energy-1jan-14august-layer', 'visibility', 'visible');
                hideOtherLayers([
                    'pioneer-layer',
                    'asya-path-layer',
                    'asyajan-june-layer',
                    'asyajune-25june-layer',
                    'asyajune-july-layer',
                    'everest-energy-1jan-14august-layer'
                ]);
                stopBlinkingAnimation();
                break;
    
            case 'chapter-13':
                map.flyTo({ center: [32.56328, 31.61020], zoom: 8.6, pitch: 0, bearing: 0 });
                if (clockElement) clockElement.style.display = 'block';
                updateClock('Pioneer (20th-27th August 2024)| New Energy (20th-23rd August 2024)');
                updateLegend([
                    { color: '#75baff', label: 'Pioneer Path' },
                    { color: '#00ffcb', label: 'New Energy Path' }
                ]);
                map.setLayoutProperty('pioneer-20aug-27aug-layer', 'visibility', 'visible');
                map.setLayoutProperty('newenergy-20-23august-layer', 'visibility', 'visible');
                map.setLayoutProperty('darksts-point-layer', 'visibility', 'visible');
                map.setLayoutProperty('everest-energy-1jan-14august-layer', 'visibility', 'none');
                map.setLayoutProperty('asyajune-25june-layer', 'visibility', 'none');
                map.setLayoutProperty('asyajune-july-layer', 'visibility', 'none');
                map.setLayoutProperty('darksts-label-layer', 'visibility', 'visible');
                
                hideOtherLayers([
                    'pioneer-20aug-27aug-layer',
                    'newenergy-20-23august-layer',
                    'darksts-point-layer',
                    'darksts-label-layer'
                ]);
    
                startBlinkingAnimation('darksts-point-layer');
                break;
    
                case 'chapter-14':
                    map.flyTo({ center: [22.04935, 69.68801], zoom: 4.33, pitch: 2, bearing: 0 });
                    if (clockElement) clockElement.style.display = 'block';
                    updateClock('From 2nd Aug - 5th Sept 2024');
                    updateLegend([
                        { color: '#00cc11', label: 'Asya Energy Path' },
                    ]);
                    map.setLayoutProperty('asya-25aug-4sept-layer', 'visibility', 'visible');
                    map.setLayoutProperty('saamfsu25aug-4sept-layer', 'visibility', 'none');
                    map.setLayoutProperty('darksts2samfsu-point-layer', 'visibility', 'none');
                    map.setLayoutProperty('darksts2samfsu-label-layer', 'visibility', 'none');
                    map.setLayoutProperty('everest-25-4sept-layer', 'visibility', 'none');
                    map.setLayoutProperty('asyajune-july-layer', 'visibility', 'none');
                    map.setLayoutProperty('asyajune-25june-layer', 'visibility', 'none');
                    map.setLayoutProperty('asya-path-layer', 'visibility', 'none');
        
                    fetch('asya(25aug-4sept).geojson')
                        .then(response => response.json())
                        .then(asyaData => {
                            animateAsya(asyaData); // Animate Asya path
                        });
                    stopBlinkingAnimation();
                    break;
        
                case 'chapter-15':
                    map.flyTo({ center: [41.90751, 69.47143], zoom: 5.22, pitch: 0, bearing: 12.80 });
                    if (clockElement) clockElement.style.display = 'block';
                    updateClock('Everest energy (26th- 4th Sept 2024)');
                    updateLegend([
                        { color: '#d1b200', label: 'Everest Energy Path' }
                    ]);
        
                    map.setLayoutProperty('everest-25-4sept-layer', 'visibility', 'visible');
                    map.setLayoutProperty('asya-25aug-4sept-layer', 'visibility', 'visible');
                    map.setLayoutProperty('saamfsu25aug-4sept-layer', 'visibility', 'visible');
                    map.setLayoutProperty('darksts2samfsu-point-layer', 'visibility', 'visible');
                    map.setLayoutProperty('darksts2samfsu-label-layer', 'visibility', 'visible');
        
                    hideOtherLayers([
                        'everest-25-4sept-layer',
                        'asya-25aug-4sept-layer',
                        'saamfsu25aug-4sept-layer',
                        'darksts2samfsu-point-layer',
                        'darksts2samfsu-label-layer'
                    ]);
        
                    fetch('everest(25-4sept).geojson')
                        .then(response => response.json())
                        .then(everestData => {
                            animateEverest(everestData); // Animate Everest path
                        });
        
                    startBlinkingAnimation('darksts2samfsu-point-layer'); // Start blinking animation for darksts2samfsu layer
                    break;
        
                case 'chapter-16':
                    map.flyTo({ center: [61.02522, 53.01123], zoom: 2.7, pitch: 0, bearing: 0 });
                    if (clockElement) clockElement.style.display = 'block';
                    updateClock('Current Location (As of Sept 5, 2024)');
                    if (legendElement) legendElement.style.display = 'none';
                    map.setLayoutProperty('currentlocation-point-layer', 'visibility', 'visible');
                    map.setLayoutProperty('currentlocation-label-layer', 'visibility', 'visible');
                    hideOtherLayers(['currentlocation-point-layer', 'currentlocation-label-layer']);
                    startBlinkingAnimation('currentlocation-point-layer');
                    stopAnimation(); // Stop any ongoing animations
                    break;
            }
        }
        
        function hideOtherLayers(visibleLayers) {
            const allLayers = [
                'pioneer-layer',
                'arctic2-point-layer',
                'arctic2-label-layer',
                'asya-path-layer',
                'asyajan-june-layer',
                'asyajune-25june-layer',
                'asyajune-july-layer',
                'everest20-25august-layer',
                'everest-energy-1jan-14august-layer',
                'pioneer-20aug-27aug-layer',
                'newenergy-20-23august-layer',
                'darksts-point-layer',
                'darksts-label-layer',
                'everest-25-4sept-layer',
                'asya-25aug-4sept-layer',
                'saamfsu25aug-4sept-layer',
                'darksts2samfsu-point-layer',
                'darksts2samfsu-label-layer',
                'currentlocation-point-layer',
                'currentlocation-label-layer'
            ];
        
            allLayers.forEach(layer => {
                if (!visibleLayers.includes(layer)) {
                    map.setLayoutProperty(layer, 'visibility', 'none');
                }
            });
        }
        
        function hideAllLayers() {
            const allLayers = [
                'pioneer-layer',
                'arctic2-point-layer',
                'arctic2-label-layer',
                'asya-path-layer',
                'asyajan-june-layer',
                'asyajune-25june-layer',
                'asyajune-july-layer',
                'everest20-25august-layer',
                'everest-energy-1jan-14august-layer',
                'pioneer-20aug-27aug-layer',
                'newenergy-20-23august-layer',
                'darksts-point-layer',
                'darksts-label-layer',
                'everest-25-4sept-layer',
                'asya-25aug-4sept-layer',
                'saamfsu25aug-4sept-layer',
                'darksts2samfsu-point-layer',
                'darksts2samfsu-label-layer',
                'currentlocation-point-layer',
                'currentlocation-label-layer'
            ];
        
            allLayers.forEach(layer => {
                map.setLayoutProperty(layer, 'visibility', 'none');
            });
        }
        
        function handleStepExit(chapter) {
            stopAnimation(); // Ensure this function stops the current animation
            stopBlinkingAnimation(); // Ensure blinking stops when exiting a step
        }
        
        function updateClock(timeString) {
            const clockElement = document.getElementById('clock');
            if (clockElement) {
                clockElement.innerText = timeString;
            } else {
                console.warn('Clock element not found');
            }
        }
        
        function stopAnimation() {
            if (window.requestId) {
                cancelAnimationFrame(window.requestId);
                window.requestId = null;
            }
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
        
