var config = {
    style: 'mapbox://styles/mapbox/dark-v11',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoicHNwYXVzdGVyIiwiYSI6ImNtNzEzNWVuMDA4bXoycnE3dTR5MjNncnMifQ.eaNWOML8R7HzgViimF03Qg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'red'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    //title: 'HEADLINE GOES HERE',
    //subtitle: 'Subtitle is a little more verbose than the headline.',
    //byline: 'By Mariana Simoes\nDeveloped by Patrick Spauster',
    footer: "Developed by Patrick Spauster for City Limits <br> Source: Pipeline data from <a href='https://atlas.eia.gov/datasets/4a158d2113f145039f71b80d07e2c19c_0/explore?location=41.676333%2C-72.866541%2C7.00'>US Energy Information Administration</a> and author's analysis. Adapted from <a href='https://github.com/mapbox/storytelling' target='_blank'>Mapbox Storytelling</a> template.",
    chapters: [
        {
            id: 'photo-title',
            alignment: 'center',
            hidden: false,
            title: 'New York Approved a Major Gas Pipeline Expansion. What Does it Mean for its Climate Goals?',
            type: 'image',
            imagebackground: './assets/buildings_smoke.gif',
            description: "The approval of Iroquois’ enhancement project, which utility companies argue is needed to heat New Yorkers' homes in the coldest months, amps up planet-warming pollution—and signals that the state’s commitment to reaching its climate goals is faltering, critics say. <br><br> By Mariana Simões",
            location: {
                center: [-74.0179, 41.7994],
                zoom: 7.25,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'ny-pipelines-all',
                    opacity: 0,
                },
                {
                    layer: 'ny-pipelines-proposed',
                    opacity: 0,
                },
                {
                    layer: 'ny-pipelines-iroquois',
                    opacity: 0,
                },
                {
                    layer: 'ny-points-iroquois',
                    opacity: 0,
                },
                {
                    layer: 'ny-proposed-points',
                    opacity: 0,
                }
            ],
            onChapterExit: [
                {
                    layer: 'ny-pipelines-all',
                    opacity: 0,
                },
                {
                    layer: 'ny-pipelines-proposed',
                    opacity: 0,
                },
                {
                    layer: 'ny-pipelines-iroquois',
                    opacity: 0,
                },
                {
                    layer: 'ny-points-iroquois',
                    opacity: 0,
                },
                {
                    layer: 'ny-proposed-points',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'photo-title-2',
            alignment: 'center',
            hidden: false,
            //title: 'New York States',
            type: 'image',
            imagebackground: './assets/buildings_smoke.gif',
            description: 'The United States is facing a pivotal moment in its fight against climate change as President Donald Trump carries out plans to roll back those efforts.',
            location: {
                center: [-74.0179, 41.7994],
                zoom: 7.25,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'ny-pipelines-all',
                    opacity: 0,
                },
                {
                    layer: 'ny-pipelines-proposed',
                    opacity: 0,
                },
                {
                    layer: 'ny-pipelines-iroquois',
                    opacity: 0,
                },
                {
                    layer: 'ny-points-iroquois',
                    opacity: 0,
                },
                {
                    layer: 'ny-proposed-points',
                    opacity: 0,
                }
            ],
            onChapterExit: [
                {
                    layer: 'ny-pipelines-all',
                    opacity: 0,
                },
                {
                    layer: 'ny-pipelines-proposed',
                    opacity: 0,
                },
                {
                    layer: 'ny-pipelines-iroquois',
                    opacity: 0,
                },
                {
                    layer: 'ny-points-iroquois',
                    opacity: 0,
                },
                {
                    layer: 'ny-proposed-points',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'ny-state',
            alignment: 'center',
            hidden: false,
            //title: 'New York States',
            //type: 'image',
            //imagebackground: 'assets/clcpa_bill_signing_sjm_in_nyc_copy.jpeg',
            description: 'In 2019, when New York passed its landmark Climate Leadership and Community Protection Act, or CLCPA, it became a shining example of national climate action. The law established a roadmap for the state to mostly phase out planet-warming fossil fuels like gas by 2050, and transition to clean energy instead.',
            location: {
                center: [-74.0179, 41.7994],
                zoom: 7.25,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'ny-pipelines-all',
                    opacity: 0,
                },
                {
                    layer: 'ny-pipelines-proposed',
                    opacity: 0,
                },
                {
                    layer: 'ny-pipelines-iroquois',
                    opacity: 0,
                },
                {
                    layer: 'ny-points-iroquois',
                    opacity: 0,
                },
                {
                    layer: 'ny-proposed-points',
                    opacity: 0,
                },
                {
                    layer:'state',
                    opacity: .25,
                    duration: 1000
                },
                {
                    layer: 'ny-pipelines-proposed-new',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer:'state',
                    opacity: .25
                }
            ]
        },
        {
            id: 'ny-base',
            alignment: 'left',
            hidden: false,
            //title: 'New York States',
            //image: './assets/san-fran.jpeg',
            description: "But <a href = 'https://www.nyiso.com/documents/20142/2223020/2024-Power-Trends.pdf'>96 percent</a> of the downstate region is still powered by fossil fuels, through pipelines like these for natural gas. In total, only about <a href = 'https://www.nyiso.com/documents/20142/2226333/2024-Gold-Book-Public.pdf'>29 percent</a> of the entire Empire State’s electricity comes from renewable sources.",
            location: {
                center: [-74.0179, 41.7994],
                zoom: 7.25,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'ny-pipelines-all',
                    opacity: 1,
                    duration: 1000
                },
                {
                    layer:'state',
                    opacity: .25
                },
                {
                    layer: 'ny-pipelines-proposed',
                    opacity: 0,
                },
                {
                    layer: 'ny-pipelines-iroquois',
                    opacity: 0,
                },
                {
                    layer: 'ny-points-iroquois',
                    opacity: 0,
                },
                {
                    layer: 'ny-proposed-points',
                    opacity: 0,
                }
            ],
            onChapterExit: [
                {
                    layer: 'ny-pipelines-all',
                    opacity: 0,
                },
                {
                    layer: 'state',
                    opacity: 0.25
                },
                {
                    layer:'state',
                    opacity: .25
                }
            ]
        },
        {
            id: 'ny-proposed',
            alignment: 'left',
            hidden: false,
            //title: 'New York States',
            //image: './assets/san-fran.jpeg',
            description: 'Since the CLCPA was passed, companies like Iroquois have made 10 attempts to increase the flow of gas across the state. But none secured New York permits to move forward, until now.',
            location: {
                center: [-74.2179, 41.1994],
                zoom: 8,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'state',
                    opacity: 0.25
                },
                {
                    layer: 'ny-pipelines-proposed',
                    opacity: 1,
                },
                {
                    layer: 'ny-proposed-points',
                    opacity: 1,
                },
                {
                    layer: 'ny-pipelines-proposed-new',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'ny-pipelines-proposed',
                    opacity: 0,
                },
                {
                    layer: 'ny-proposed-points',
                    opacity: 0,
                },
                {
                    layer:'state',
                    opacity: 0
                },
                {
                    layer: 'ny-pipelines-proposed-new',
                    opacity: 0
                }
            ]
        },
        {
            id: 'ny-iroquois',
            alignment: 'left',
            hidden: false,
            //title: 'New York States',
            //image: './assets/san-fran.jpeg',
            description: "On Feb. 7, the state greenlit an enhancement project by gas supplier Iroquois Pipeline Company, which will boost the capacity of four facilities that compress gas to push more of it into the city.",
            location: {
                center: [-74.0179, 41.7994],
                zoom: 7.25,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'state',
                    opacity: 0.25
                },
                {
                    layer: 'ny-pipelines-iroquois',
                    opacity: 1,
                },
                {
                    layer: 'ny-points-iroquois',
                    opacity: 1,
                },
            ],
            onChapterExit: [
                {
                    layer: 'ny-pipelines-iroquois',
                    opacity: 0,
                },
                {
                    layer: 'ny-points-iroquois',
                    opacity: 0,
                },
            ]
        },
        {
            id: 'ny-iroquois2',
            alignment: 'left',
            hidden: false,
            //title: 'New York States',
            //image: './assets/san-fran.jpeg',
            description: "The approval of Iroquois’ enhancement project, which utility companies argue is needed to heat New Yorkers’ homes in the coldest months, amps up planet-warming pollution—and signals that the state’s commitment to reaching its climate goals is faltering, critics say.",
            location: {
                center: [-74.0179, 41.7994],
                zoom: 7.25,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'state',
                    opacity: 0.25
                },
                {
                    layer: 'ny-pipelines-iroquois',
                    opacity: 1,
                },
                {
                    layer: 'ny-points-iroquois',
                    opacity: 1,
                },
            ],
            onChapterExit: [
                {
                    layer: 'ny-pipelines-iroquois',
                    opacity: 1,
                },
                {
                    layer: 'ny-points-iroquois',
                    opacity: 1,
                },
            ]
        },
        {
            id: 'ny-athens',
            alignment: 'left',
            hidden: false,
            //title: 'New York States',
            //image: './assets/san-fran.jpeg',
            description: 'The Iroquois project alone could generate $3.78 billion in climate damages and add the equivalent of 186,000 passenger cars to the road in planet-warming gasses. It will also spew pollution directly into communities like Athens, a town in southeast central New York that filmmaker, Lisa Thomas, calls home.',
            location: {
                center: [-73.82212, 42.26607],
                zoom: 14.39,
                pitch: 65.50,
                bearing: -36.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'state',
                    opacity: 0,
                },
                {
                    layer: 'ny-pipelines-iroquois',
                    opacity: 1,
                },
                {
                    layer: 'ny-points-iroquois',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'ny-pipelines-iroquois',
                    opacity: 1,
                },
                {
                    layer: 'ny-points-iroquois',
                    opacity: 1,
                }
            ]
        },
        {
            id: 'ny-stations-only',
            alignment: 'left',
            hidden: false,
            type: 'reprise',
            //title: 'New York States',
            //image: './assets/san-fran.jpeg',
            description: 'In total, 8 proposals to bring more gas into New York through compressor station expansions have been put forth in the last five years, a City Limits review of public filings show. ',
            location: {
                center: [-74.2179, 41.1994],
                zoom: 8,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'ny-pipelines-all',
                    opacity: 0,
                },
                {
                    layer: 'ny-pipelines-proposed',
                    opacity: 0,
                },
                {
                    layer: 'ny-pipelines-iroquois',
                    opacity: 0,
                },
                {
                    layer: 'ny-points-iroquois',
                    opacity: 0,
                },
                {
                    layer: 'ny-proposed-points',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'ny-pipelines-all',
                    opacity: 0,
                },
                {
                    layer: 'ny-pipelines-proposed',
                    opacity: 0,
                },
                {
                    layer: 'ny-pipelines-iroquois',
                    opacity: 0,
                },
                {
                    layer: 'ny-points-iroquois',
                    opacity: 0,
                },
                {
                    layer: 'ny-proposed-points',
                    opacity: 0,
                }
            ]
        },
    ]
};


