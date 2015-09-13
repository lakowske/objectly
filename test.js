/*
 * (C) 2015 Seth Lakowske
 */

var test     = require('tape');
var objectly = require('./');

sceneNodeFields = [
    {name : 'id', type: 'text', predicate : 'primary key'},
    {name : 'name', type: 'text'},
    {name : 'parent', type: 'text'},
    {name : 'about_up', type: 'float(53)', predicate : 'not null'},
    {name : 'about_right', type: 'float(53)', predicate : 'not null'},
    {name : 'about_forward', type: 'float(53)', predicate : 'not null'},
    {name : 'x', type: 'float(53)', predicate : 'not null'},
    {name : 'y', type: 'float(53)', predicate : 'not null'},
    {name : 'z', type: 'float(53)', predicate : 'not null'},
    {name : 'localmatrix', type : 'float(53)[4][4]'},
    {name : 'localvectors', type : 'float(53)[3][3]'}
]

test('can create an object', function(t) {

    var sceneNode = objectly.getObject(sceneNodeFields);

    console.log(sceneNode);
    
    t.end();
})
