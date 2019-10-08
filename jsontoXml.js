var to_xml = require('xmljson').to_xml;
 
// A JSON string
var json = '' +
    '{' +
        '"prop1":"val1",' +
        '"prop2":"val2",' +
        '"prop3":"val3"' +
    '}';
 
to_xml(json, function (error, xml) {
    // Module returns an XML string
    console.log(xml);
    // -> <data><prop1>val1</prop1><prop2>val2</prop2><prop3>val3</prop3></data>
});
