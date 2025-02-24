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
    footer: 'Developed by Patrick Spauster <br> Source: source citations, etc.  Adapted from <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'photo-title',
            alignment: 'center',
            hidden: false,
            title: 'Is New York Still Leading the Charge in the Nation’s Fight Against Climate Change?',
            type: 'image',
            imagebackground: './assets/buildings_smoke.gif',
            description: 'As New York begins to backtrack on commitments to mostly phase out the use of planet-warming fossil fuels like gas, the state approves a new project to funnel more gas into the Big Apple. <br><br> By Mariana Simões',
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
            id: 'photo-title',
            alignment: 'center',
            hidden: false,
            //title: 'New York States',
            type: 'image',
            imagebackground: './assets/buildings_smoke.gif',
            description: 'The United States is facing a pivotal moment in its fight against climate change as Donald Trump carries out plans to roll back those efforts.',
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
            id: 'photo-law',
            alignment: 'center',
            hidden: false,
            //title: 'New York States',
            //type: 'image',
            imagebackground: 'assets/clcpa_bill_signing_sjm_in_nyc_copy.jpeg',
            description: 'Back in 2019, when New York passed its landmark climate law, the CLCPA, it became a shining example of national climate action. The law established a roadmap for the State to mostly phase out planet-warming fossil fuels like gas by 2050 and transition to clean energy instead.',
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
                    opacity: 1,
                }
            ]
        },
        {
            id: 'ny-base',
            alignment: 'left',
            hidden: false,
            //title: 'New York States',
            //image: './assets/san-fran.jpeg',
            description: 'But 96 percent of the downstate region, where the Big Apple is located, is still powered by fossil fuels, through pipelines like these for natural gas. In total, only about 29 percent of the entire Empire State’s electricity comes from clean renewable sources.',
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
                }
            ]
        },
        {
            id: 'ny-iroquois',
            alignment: 'left',
            hidden: false,
            //title: 'New York States',
            //image: './assets/san-fran.jpeg',
            description: "And more gas is about to make its way to New York City, putting into question the state's ability to meet its climate goals. On February 7th, the State greenlit an enhancement project by gas supplier, Iroquois Pipeline Company, to boost the capacity of four facilities that compress gas to push more of it into the City.",
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
            id: 'ny-proposed',
            alignment: 'left',
            hidden: false,
            //title: 'New York States',
            //image: './assets/san-fran.jpeg',
            description: 'City Limits found 10 proposals for gas expansion over the last five years and mapped out continued bids to keep gas flowing in the Empire State.',
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
                    layer: 'ny-pipelines-proposed',
                    opacity: 1,
                },
                {
                    layer: 'ny-proposed-points',
                    opacity: 1,
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
                }
            ]
        },
        {
            id: 'ny-athens',
            alignment: 'left',
            hidden: false,
            //title: 'New York States',
            //image: './assets/san-fran.jpeg',
            description: 'The Iroquois project could generate $3.78 billion in climate damages and add the equivalent of 186,000 passenger cars to the road in planet-warming gasses. It will also spew pollution directly into communities like Athens, a town in southeast central New York that filmmaker, Lisa Thomas, calls home.',
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
                    layer: 'ny-pipelines-proposed',
                    opacity: 1,
                },
                {
                    layer: 'ny-proposed-points',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'ny-pipelines-proposed',
                    opacity: 1,
                },
                {
                    layer: 'ny-proposed-points',
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


