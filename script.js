firebase.initializeApp({
    apiKey: 'AIzaSyDXO0kw7T1D484XWaVBDgGkibnwg7ZWuQ0',
    authDomain: 'music-spirit.firebaseapp.com',
    databaseURL: 'https://music-spirit-default-rtdb.firebaseio.com',
    projectId: 'music-spirit',
    storageBucket: 'music-spirit.appspot.com',
    messagingSenderId: '651888268658',
    appId: '1:651888268658:web:716c0877472fcbcdf379eb',
})
// desktop
firebase
    .database()
    .ref('features/')
    .once('value', (snapshot) => {
        const data = snapshot.val()
        console.log(data)
    })

// require([
//     'esri/Map',
//     'esri/views/SceneView',
//     'esri/geometry/Polygon',
//     'esri/Graphic',
//     'esri/layers/GraphicsLayer',
//     'esri/layers/FeatureLayer',
//     'esri/layers/GeoJSONLayer',
// ], function (Map, SceneView, GraphicsLayer, FeatureLayer, GeoJSONLayer) {
//     var map = new Map({
//         basemap: 'topo-vector',
//         ground: 'world-elevation',
//     })
//     var view = new SceneView({
//         container: 'viewDiv',
//         map: map,
//         scale: 50000000,
//         center: [12.411109924316406, -69.882232666015625],
//     })

//     const graphicsLayer = new GraphicsLayer()

//     const simpleFillSymbol = {
//         type: 'simple-fill',
//         color: [227, 139, 79, 0.8], // Orange, opacity 80%
//         outline: {
//             color: [255, 255, 255],
//             width: 1,
//         },
//     }

//     const geoJSONLayer = new GeoJSONLayer({
//         url:
//             'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson',
//         copyright: 'USGS Earthquakes',
//     })

//     const parcelLayer = new FeatureLayer({
//         url:
//             'https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/World_Countries_(Generalized)/FeatureServer/0',
//     })

//     view.on('click', (e) => {
//         console.log(e)
//     })
//     map.add(parcelLayer)
// })
