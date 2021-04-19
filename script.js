let polygonShape = [
    [-69.882232666015625, 12.411109924316406],
    [-69.874862670898438, 12.415276527404785],
    [-69.88555908203125, 12.45777702331543],
    [-69.891403198242188, 12.472221374511719],
    [-69.896957397460938, 12.480833053588867],
    [-69.932235717773438, 12.528055191040039],
    [-70.033195495605469, 12.618331909179688],
    [-70.059661865234375, 12.627776145935059],
    [-70.059036254882813, 12.540207862854004],
    [-69.946945190429688, 12.436665534973145],
    [-69.882232666015625, 12.411109924316406],
]

// require([
//     'esri/Map',
//     'esri/views/SceneView',
//     'esri/geometry/Polygon',
//     'esri/Graphic',
//     'esri/layers/GraphicsLayer',
// ], function (Map, SceneView, Polygon, Graphic, GraphicsLayer) {
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

//     const polygon = new Polygon({
//         hasZ: true,
//         hasM: true,
//         rings: polygonShape,
//         spatialReference: { wkid: 4326 },
//     })

//     const polygonGraphic = new Graphic({
//         geometry: polygon,
//         symbol: simpleFillSymbol,
//     })

//     graphicsLayer.add(polygonGraphic)
//     map.add(graphicsLayer)
// })



// Your access token can be found at: https://cesium.com/ion/tokens.
Cesium.Ion.defaultAccessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxYmZmZjRhOS0xOWY0LTRjYzktYmZlZi1iNThhYjBkZmNhOTgiLCJpZCI6MzQ3MTIsImlhdCI6MTYwMDc1MDU0NX0.9fdavjbtosrwu_RvkQVyJXZacHHIwnoqiFMAeZ2K2PM'
// Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
const viewer = new Cesium.Viewer('cesiumContainer', {
    terrainProvider: Cesium.createWorldTerrain(),
})
// Add Cesium OSM Buildings, a global 3D buildings layer.

})
