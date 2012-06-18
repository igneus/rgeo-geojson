var search_data = {"index":{"searchIndex":["rgeo","geojson","coder","entityfactory","feature","featurecollection","==()","==()","[]()","[]()","coder()","decode()","decode()","each()","encode()","encode()","entity_factory()","eql?()","eql?()","feature()","feature_collection()","feature_id()","geo_factory()","geometry()","get_feature_geometry()","get_feature_id()","get_feature_properties()","instance()","is_feature?()","is_feature_collection?()","keys()","map_feature_collection()","new()","new()","new()","properties()","property()","size()","history","readme"],"longSearchIndex":["rgeo","rgeo::geojson","rgeo::geojson::coder","rgeo::geojson::entityfactory","rgeo::geojson::feature","rgeo::geojson::featurecollection","rgeo::geojson::feature#==()","rgeo::geojson::featurecollection#==()","rgeo::geojson::feature#[]()","rgeo::geojson::featurecollection#[]()","rgeo::geojson::coder()","rgeo::geojson::decode()","rgeo::geojson::coder#decode()","rgeo::geojson::featurecollection#each()","rgeo::geojson::encode()","rgeo::geojson::coder#encode()","rgeo::geojson::coder#entity_factory()","rgeo::geojson::feature#eql?()","rgeo::geojson::featurecollection#eql?()","rgeo::geojson::entityfactory#feature()","rgeo::geojson::entityfactory#feature_collection()","rgeo::geojson::feature#feature_id()","rgeo::geojson::coder#geo_factory()","rgeo::geojson::feature#geometry()","rgeo::geojson::entityfactory#get_feature_geometry()","rgeo::geojson::entityfactory#get_feature_id()","rgeo::geojson::entityfactory#get_feature_properties()","rgeo::geojson::entityfactory::instance()","rgeo::geojson::entityfactory#is_feature?()","rgeo::geojson::entityfactory#is_feature_collection?()","rgeo::geojson::feature#keys()","rgeo::geojson::entityfactory#map_feature_collection()","rgeo::geojson::coder::new()","rgeo::geojson::feature::new()","rgeo::geojson::featurecollection::new()","rgeo::geojson::feature#properties()","rgeo::geojson::feature#property()","rgeo::geojson::featurecollection#size()","",""],"info":[["RGeo","","RGeo.html","","<p>RGeo is a spatial data library for Ruby, provided by the “rgeo” gem.\n<p>The optional RGeo::GeoJSON …\n"],["RGeo::GeoJSON","","RGeo/GeoJSON.html","","<p>This is a namespace for a set of tools that provide GeoJSON encoding. See\ngeojson.org/ for more information …\n"],["RGeo::GeoJSON::Coder","","RGeo/GeoJSON/Coder.html","","<p>This object encapsulates encoding and decoding settings (principally the\nRGeo::Feature::Factory and the …\n"],["RGeo::GeoJSON::EntityFactory","","RGeo/GeoJSON/EntityFactory.html","","<p>This is the default entity factory. It creates objects of type\nRGeo::GeoJSON::Feature and RGeo::GeoJSON::FeatureCollection …\n"],["RGeo::GeoJSON::Feature","","RGeo/GeoJSON/Feature.html","","<p>This is a GeoJSON wrapper entity that corresponds to the GeoJSON “Feature”\ntype. It is an immutable …\n"],["RGeo::GeoJSON::FeatureCollection","","RGeo/GeoJSON/FeatureCollection.html","","<p>This is a GeoJSON wrapper entity that corresponds to the GeoJSON\n“FeatureCollection” type. …\n"],["==","RGeo::GeoJSON::Feature","RGeo/GeoJSON/Feature.html#method-i-3D-3D","(rhs_)","<p>Two features are equal if their geometries, IDs, and properties are all\nequal. This method uses the == …\n"],["==","RGeo::GeoJSON::FeatureCollection","RGeo/GeoJSON/FeatureCollection.html#method-i-3D-3D","(rhs_)","<p>Two feature collections are equal if they contain the same features in the\nsame order. This methods uses …\n"],["[]","RGeo::GeoJSON::Feature","RGeo/GeoJSON/Feature.html#method-i-5B-5D","(key_)",""],["[]","RGeo::GeoJSON::FeatureCollection","RGeo/GeoJSON/FeatureCollection.html#method-i-5B-5D","(index_)","<p>Access a feature by index.\n"],["coder","RGeo::GeoJSON","RGeo/GeoJSON.html#method-c-coder","(opts_={})","<p>Creates and returns a coder object of type RGeo::GeoJSON::Coder that\nencapsulates encoding and decoding …\n"],["decode","RGeo::GeoJSON","RGeo/GeoJSON.html#method-c-decode","(input_, opts_={})","<p>High-level convenience routine for decoding an object from GeoJSON. The\ninput may be a JSON hash, a  …\n"],["decode","RGeo::GeoJSON::Coder","RGeo/GeoJSON/Coder.html#method-i-decode","(input_)","<p>Decode an object from GeoJSON. The input may be a JSON hash, a String, or\nan IO object from which to …\n"],["each","RGeo::GeoJSON::FeatureCollection","RGeo/GeoJSON/FeatureCollection.html#method-i-each","(&block_)","<p>Iterates or returns an iterator for the features.\n"],["encode","RGeo::GeoJSON","RGeo/GeoJSON.html#method-c-encode","(object_, opts_={})","<p>High-level convenience routine for encoding an object as GeoJSON. Pass the\nobject, which may one of the …\n"],["encode","RGeo::GeoJSON::Coder","RGeo/GeoJSON/Coder.html#method-i-encode","(object_)","<p>Encode the given object as GeoJSON. The object may be one of the geometry\nobjects specified in RGeo::Feature …\n"],["entity_factory","RGeo::GeoJSON::Coder","RGeo/GeoJSON/Coder.html#method-i-entity_factory","()","<p>Returns the RGeo::GeoJSON::EntityFactory used to generate GeoJSON wrapper\nentities.\n"],["eql?","RGeo::GeoJSON::Feature","RGeo/GeoJSON/Feature.html#method-i-eql-3F","(rhs_)","<p>Two features are equal if their geometries, IDs, and properties are all\nequal. This method uses the eql? …\n"],["eql?","RGeo::GeoJSON::FeatureCollection","RGeo/GeoJSON/FeatureCollection.html#method-i-eql-3F","(rhs_)","<p>Two feature collections are equal if they contain the same features in the\nsame order. This methods uses …\n"],["feature","RGeo::GeoJSON::EntityFactory","RGeo/GeoJSON/EntityFactory.html#method-i-feature","(geometry_, id_=nil, properties_=nil)","<p>Create and return a new feature, given geometry, ID, and properties hash.\nNote that, per the GeoJSON …\n"],["feature_collection","RGeo::GeoJSON::EntityFactory","RGeo/GeoJSON/EntityFactory.html#method-i-feature_collection","(features_=[])","<p>Create and return a new feature collection, given an enumerable of feature\nobjects.\n"],["feature_id","RGeo::GeoJSON::Feature","RGeo/GeoJSON/Feature.html#method-i-feature_id","()","<p>Returns the ID for this feature, which may be nil.\n"],["geo_factory","RGeo::GeoJSON::Coder","RGeo/GeoJSON/Coder.html#method-i-geo_factory","()","<p>Returns the RGeo::Feature::Factory used to generate geometry objects.\n"],["geometry","RGeo::GeoJSON::Feature","RGeo/GeoJSON/Feature.html#method-i-geometry","()","<p>Returns the geometry contained in this feature, which may be nil.\n"],["get_feature_geometry","RGeo::GeoJSON::EntityFactory","RGeo/GeoJSON/EntityFactory.html#method-i-get_feature_geometry","(object_)","<p>Returns the geometry associated with the given feature.\n"],["get_feature_id","RGeo::GeoJSON::EntityFactory","RGeo/GeoJSON/EntityFactory.html#method-i-get_feature_id","(object_)","<p>Returns the ID of the given feature, or nil for no ID.\n"],["get_feature_properties","RGeo::GeoJSON::EntityFactory","RGeo/GeoJSON/EntityFactory.html#method-i-get_feature_properties","(object_)","<p>Returns the properties of the given feature as a hash. Editing this hash\ndoes not change the state of …\n"],["instance","RGeo::GeoJSON::EntityFactory","RGeo/GeoJSON/EntityFactory.html#method-c-instance","()","<p>Return the singleton instance of EntityFactory.\n"],["is_feature?","RGeo::GeoJSON::EntityFactory","RGeo/GeoJSON/EntityFactory.html#method-i-is_feature-3F","(object_)","<p>Returns true if the given object is a feature created by this entity\nfactory.\n"],["is_feature_collection?","RGeo::GeoJSON::EntityFactory","RGeo/GeoJSON/EntityFactory.html#method-i-is_feature_collection-3F","(object_)","<p>Returns true if the given object is a feature collection created by this\nentity factory.\n"],["keys","RGeo::GeoJSON::Feature","RGeo/GeoJSON/Feature.html#method-i-keys","()","<p>Gets an array of the known property keys in this feature.\n"],["map_feature_collection","RGeo::GeoJSON::EntityFactory","RGeo/GeoJSON/EntityFactory.html#method-i-map_feature_collection","(object_, &block_)","<p>Run Enumerable#map on the features contained in the given feature\ncollection.\n"],["new","RGeo::GeoJSON::Coder","RGeo/GeoJSON/Coder.html#method-c-new","(opts_={})","<p>Create a new coder settings object. The geo factory is passed as a required\nargument.\n<p>Options include: …\n"],["new","RGeo::GeoJSON::Feature","RGeo/GeoJSON/Feature.html#method-c-new","(geometry_, id_=nil, properties_={})","<p>Create a feature wrapping the given geometry, with the given ID and\nproperties.\n"],["new","RGeo::GeoJSON::FeatureCollection","RGeo/GeoJSON/FeatureCollection.html#method-c-new","(features_=[])","<p>Create a new FeatureCollection with the given features, which must be\nprovided as an Enumerable.\n"],["properties","RGeo::GeoJSON::Feature","RGeo/GeoJSON/Feature.html#method-i-properties","()","<p>Returns a copy of the properties for this feature.\n"],["property","RGeo::GeoJSON::Feature","RGeo/GeoJSON/Feature.html#method-i-property","(key_)","<p>Gets the value of the given named property. Returns nil if the given\nproperty is not found.\n"],["size","RGeo::GeoJSON::FeatureCollection","RGeo/GeoJSON/FeatureCollection.html#method-i-size","()","<p>Returns the number of features contained in this collection.\n"],["History","","History_rdoc.html","","<p>0.2.4 / 2012-04-??\n<p>Travis CI integration.\n\n<p>0.2.3 / 2012-03-17\n"],["README","","README_rdoc.html","","<p>RGeo::GeoJSON\n<p>RGeo::GeoJSON is an optional module for RGeo that provides GeoJSON encoding\nand decoding …\n"]]}}