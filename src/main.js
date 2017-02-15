/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const ol = require("openlayers");
const olMap = require("./ol-map.vue");
const olMarker = require("./ol-marker.vue");

require("../node_modules/openlayers/css/ol.css");

module.exports = class VueOpenLayers {

  constructor() {
    this.ol = ol;
  }

  install(Vue, options) {
    // wiring project components
    Vue.component("ol-map", olMap);
    Vue.component("ol-marker", olMarker);
  }
};