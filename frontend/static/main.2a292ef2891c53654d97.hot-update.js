/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatefrontend"]("main",{

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mapbox-gl */ \"./node_modules/mapbox-gl/dist/mapbox-gl.js\");\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _templates_site_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../templates/site.css */ \"./templates/site.css\");\n/* harmony import */ var geojson__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! geojson */ \"../node_modules/geojson/geojson.js\");\n/* harmony import */ var geojson__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(geojson__WEBPACK_IMPORTED_MODULE_5__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n // test\n\n(mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default().accessToken) = 'pk.eyJ1Ijoia2RlYnJhdXciLCJhIjoiY2p4ZnhyaTUzMDB1eTQxbnVwOG9jbHBwdSJ9.L5RCSfMVV7RYpq1a45E68g';\n\nvar Application = /*#__PURE__*/function (_React$Component) {\n  _inherits(Application, _React$Component);\n\n  var _super = _createSuper(Application);\n\n  // deze kan later nog in eigen doc komen\n  function Application(props) {\n    var _this;\n\n    _classCallCheck(this, Application);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      lng: 5.8,\n      lat: 52,\n      zoom: 7\n    };\n    return _this;\n  }\n\n  _createClass(Application, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var map = new (mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default().Map)({\n        container: this.mapContainer,\n        style: 'mapbox://styles/kdebrauw/ckbc2iy8j0tvc1inn5bz99irc',\n        center: [this.state.lng, this.state.lat],\n        zoom: this.state.zoom\n      });\n      map.on('move', function () {\n        _this2.setState({\n          lng: map.getCenter().lng.toFixed(4),\n          lat: map.getCenter().lat.toFixed(4),\n          zoom: map.getZoom().toFixed(2)\n        });\n      });\n      map.on('click', function (event) {\n        var _event$lngLat = event.lngLat,\n            lat = _event$lngLat.lat,\n            lng = _event$lngLat.lng;\n        new (mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default().Popup)({\n          color: \"#2A3C47\"\n        }).setLngLat(event.lngLat).setText(\"Location: \" + event.lngLat).addTo(map);\n        axios__WEBPACK_IMPORTED_MODULE_3__.get('http://127.0.0.1:8000/scraper/api/location/', {\n          params: {\n            'location-list': \"SRID=4326;POINT(\".concat(lng, \" \").concat(lat, \")\")\n          }\n        }).then(function (results) {\n          console.log(results);\n        });\n      });\n      var location_data = geojson__WEBPACK_IMPORTED_MODULE_5___default().parse(results, {\n        Point: ['longitude', 'latitude'],\n        include: ['monitorcode', 'comment', 'emergency_service', 'prioritycode', 'region', 'pub_date']\n      });\n      console.log(location_data);\n      map.addSource(\"locaties\", {\n        \"type\": \"json\",\n        \"data\": {\n          \"type\": \"point\",\n          \"properties\": {},\n          \"geometry\": location_data\n        }\n      });\n      map.addLayer({\n        \"id\": \"locations\",\n        \"type\": \"symbol\",\n        \"source\": \"locaties\",\n        \"layout\": {\n          \"line-join\": \"round\",\n          \"line-cap\": \"round\"\n        },\n        \"paint\": {\n          \"line-color\": \"#888\",\n          \"line-width\": 8\n        }\n      });\n      map.addLayer({\n        'id': 'places',\n        'type': 'symbol',\n        'source': 'results',\n        'layout': {\n          'icon-image': '{icon}-15',\n          'icon-allow-overlap': true\n        }\n      }); // map.on('click', e => {\n      //   console.log('A click event has occurred at ' + e.lngLat);\n      // });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"headerStyle\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, \"Incidentradar\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"sidebarStyle\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, \"Longitude: \", this.state.lng, \" | Latitude: \", this.state.lat, \" | Zoom: \", this.state.zoom)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"introbarStyle\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, \"Work in progress, MVP launch feb 2021\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        ref: function ref(el) {\n          return _this3.mapContainer = el;\n        },\n        className: \"mapContainer\"\n      }));\n    }\n  }]);\n\n  return Application;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Application, null), document.getElementById('app'));\n\n//# sourceURL=webpack://frontend/./components/index.js?");

/***/ }),

/***/ "../node_modules/geojson/geojson.js":
/*!******************************************!*\
  !*** ../node_modules/geojson/geojson.js ***!
  \******************************************/
/***/ ((module) => {

eval("(function(GeoJSON) {\n  GeoJSON.version = '0.5.0';\n\n  // Allow user to specify default parameters\n  GeoJSON.defaults = {\n    doThrows: {\n      invalidGeometry: false\n    }\n  };\n\n  function InvalidGeometryError() {\n    var args = 1 <= arguments.length ? [].slice.call(arguments, 0) : [];\n    var item = args.shift();\n    var params = args.shift();\n\n    Error.apply(this, args);\n    this.message = this.message || \"Invalid Geometry: \" + 'item: ' + JSON.stringify(item) + ', params: ' + JSON.stringify(params);\n  }\n\n  InvalidGeometryError.prototype = Error;\n\n\n  GeoJSON.errors = {\n    InvalidGeometryError: InvalidGeometryError\n  };\n\n  //exposing so this can be overriden maybe by geojson-validation or the like\n  GeoJSON.isGeometryValid = function(geometry){\n    if(!geometry || !Object.keys(geometry).length)\n      return false;\n\n    return !!geometry.type && !!geometry.coordinates && Array.isArray(geometry.coordinates) && !!geometry.coordinates.length;\n  };\n\n  // The one and only public function.\n  // Converts an array of objects into a GeoJSON feature collection\n  GeoJSON.parse = function(objects, params, callback) {\n    var geojson,\n        settings = applyDefaults(params, this.defaults),\n        propFunc;\n\n    geomAttrs.length = 0; // Reset the list of geometry fields\n    setGeom(settings);\n    propFunc = getPropFunction(settings);\n\n    if (Array.isArray(objects)) {\n      geojson = {\"type\": \"FeatureCollection\", \"features\": []};\n      objects.forEach(function(item){\n        geojson.features.push(getFeature({item:item, params: settings, propFunc:propFunc}));\n      });\n      addOptionals(geojson, settings);\n    } else {\n      geojson = getFeature({item:objects, params: settings, propFunc:propFunc});\n      addOptionals(geojson, settings);\n    }\n\n    if (callback && typeof callback === 'function') {\n      callback(geojson);\n    } else {\n      return geojson;\n    }\n  };\n\n  // Helper functions\n  var geoms = ['Point', 'MultiPoint', 'LineString', 'MultiLineString', 'Polygon', 'MultiPolygon', 'GeoJSON'],\n      geomAttrs = [];\n\n  // Adds default settings to user-specified params\n  // Does not overwrite any settings--only adds defaults\n  // the the user did not specify\n  function applyDefaults(params, defaults) {\n    var settings = params || {};\n\n    for(var setting in defaults) {\n      if(defaults.hasOwnProperty(setting) && !settings[setting]) {\n        settings[setting] = defaults[setting];\n      }\n    }\n\n    return settings;\n  }\n\n  // Adds the optional GeoJSON properties crs and bbox\n  // if they have been specified\n  function addOptionals(geojson, settings){\n    if(settings.crs && checkCRS(settings.crs)) {\n      if(settings.isPostgres)\n        geojson.geometry.crs = settings.crs;\n      else\n        geojson.crs = settings.crs;\n    }\n    if (settings.bbox) {\n      geojson.bbox = settings.bbox;\n    }\n    if (settings.extraGlobal) {\n      geojson.properties = {};\n      for (var key in settings.extraGlobal) {\n        geojson.properties[key] = settings.extraGlobal[key];\n      }\n    }\n  }\n\n  // Verify that the structure of CRS object is valid\n  function checkCRS(crs) {\n    if (crs.type === 'name') {\n        if (crs.properties && crs.properties.name) {\n            return true;\n        } else {\n            throw new Error('Invalid CRS. Properties must contain \"name\" key');\n        }\n    } else if (crs.type === 'link') {\n        if (crs.properties && crs.properties.href && crs.properties.type) {\n            return true;\n        } else {\n            throw new Error('Invalid CRS. Properties must contain \"href\" and \"type\" key');\n        }\n    } else {\n        throw new Error('Invald CRS. Type attribute must be \"name\" or \"link\"');\n    }\n  }\n\n  // Moves the user-specified geometry parameters\n  // under the `geom` key in param for easier access\n  function setGeom(params) {\n    params.geom = {};\n\n    for(var param in params) {\n      if(params.hasOwnProperty(param) && geoms.indexOf(param) !== -1){\n        params.geom[param] = params[param];\n        delete params[param];\n      }\n    }\n\n    setGeomAttrList(params.geom);\n  }\n\n  // Adds fields which contain geometry data\n  // to geomAttrs. This list is used when adding\n  // properties to the features so that no geometry\n  // fields are added the properties key\n  function setGeomAttrList(params) {\n    for(var param in params) {\n      if(params.hasOwnProperty(param)) {\n        if(typeof params[param] === 'string') {\n          geomAttrs.push(params[param]);\n        } else if (typeof params[param] === 'object') { // Array of coordinates for Point\n          geomAttrs.push(params[param][0]);\n          geomAttrs.push(params[param][1]);\n        }\n      }\n    }\n\n    if(geomAttrs.length === 0) { throw new Error('No geometry attributes specified'); }\n  }\n\n  // Creates a feature object to be added\n  // to the GeoJSON features array\n  function getFeature(args) {\n    var item = args.item,\n      params = args.params,\n      propFunc = args.propFunc;\n\n    var feature = { \"type\": \"Feature\" };\n\n    feature.geometry = buildGeom(item, params);\n    feature.properties = propFunc.call(item);\n\n    return feature;\n  }\n\n  function isNested(val){\n    return (/^.+\\..+$/.test(val));\n  }\n\n  // Assembles the `geometry` property\n  // for the feature output\n  function buildGeom(item, params) {\n    var geom = {},\n        attr;\n\n    for(var gtype in params.geom) {\n      var val = params.geom[gtype];\n\n      // Geometry parameter specified as: {Point: 'coords'}\n      if(typeof val === 'string' && item.hasOwnProperty(val)) {\n        if(gtype === 'GeoJSON') {\n          geom = item[val];\n        } else {\n          geom.type = gtype;\n          geom.coordinates = item[val];\n        }\n      }\n\n      /* Handle things like:\n      Polygon: {\n        northeast: ['lat', 'lng'],\n        southwest: ['lat', 'lng']\n      }\n      */\n      else if(typeof val === 'object' && !Array.isArray(val)) {\n        /*jshint loopfunc: true */\n        var points = Object.keys(val).map(function(key){\n          var order = val[key];\n          var newItem = item[key];\n          return buildGeom(newItem, {geom:{ Point: order}});\n        });\n        geom.type = gtype;\n        /*jshint loopfunc: true */\n        geom.coordinates = [].concat(points.map(function(p){\n          return p.coordinates;\n        }));\n      }\n\n      // Geometry parameter specified as: {Point: ['lat', 'lng']}\n      else if(Array.isArray(val) && item.hasOwnProperty(val[0]) && item.hasOwnProperty(val[1])){\n        geom.type = gtype;\n        geom.coordinates = [Number(item[val[1]]), Number(item[val[0]])];\n      }\n\n      // Geometry parameter specified as: {Point: ['container.lat', 'container.lng']}\n      else if(Array.isArray(val) && isNested(val[0]) && isNested(val[1])){\n        var coordinates = [];\n        for (var i = 0; i < val.length; i++) {\t// i.e. 0 and 1\n          var paths = val[i].split('.');\n          var itemClone = item;\n          for (var j = 0; j < paths.length; j++) {\n            if (!itemClone.hasOwnProperty(paths[j])) {\n              return false;\n            }\n            itemClone = itemClone[paths[j]];\t// Iterate deeper into the object\n          }\n          coordinates[i] = itemClone;\n        }\n        geom.type = gtype;\n        geom.coordinates = [Number(coordinates[1]), Number(coordinates[0])];\n      }\n    }\n\n    if(params.doThrows && params.doThrows.invalidGeometry && !GeoJSON.isGeometryValid(geom)){\n      throw new InvalidGeometryError(item, params);\n    }\n\n    return geom;\n  }\n\n  // Returns the function to be used to\n  // build the properties object for each feature\n  function getPropFunction(params) {\n    var func;\n\n    if(!params.exclude && !params.include) {\n      func = function(properties) {\n        for(var attr in this) {\n          if(this.hasOwnProperty(attr) && (geomAttrs.indexOf(attr) === -1)) {\n            properties[attr] = this[attr];\n          }\n        }\n      };\n    } else if(params.include) {\n      func = function(properties) {\n        params.include.forEach(function(attr){\n          properties[attr] = this[attr];\n        }, this);\n      };\n    } else if(params.exclude) {\n      func = function(properties) {\n        for(var attr in this) {\n          if(this.hasOwnProperty(attr) && (geomAttrs.indexOf(attr) === -1) && (params.exclude.indexOf(attr) === -1)) {\n            properties[attr] = this[attr];\n          }\n        }\n      };\n    }\n\n    return function() {\n      var properties = {};\n\n      func.call(this, properties);\n\n      if(params.extra) { addExtra(properties, params.extra); }\n      return properties;\n    };\n  }\n\n  // Adds data contained in the `extra`\n  // parameter if it has been specified\n  function addExtra(properties, extra) {\n    for(var key in extra){\n      if(extra.hasOwnProperty(key)) {\n        properties[key] = extra[key];\n      }\n    }\n\n    return properties;\n  }\n\n}( true ? module.exports : 0));\n\n\n//# sourceURL=webpack://frontend/../node_modules/geojson/geojson.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "c535aabdd1fcf2355d9e"
/******/ 	})();
/******/ 	
/******/ }
);