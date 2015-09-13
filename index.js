/*
 * (C) 2015 Seth Lakowske
 */

var uuid = require('node-uuid');


/**
 * Return a default javascript object using the given fields.
 *
 * @param {List} fields containing names, sql types and predicates to create a default object from.
 * @return {Object} a javascript object.
 */
function getObject(fields) {

    var object = {};

    fields.map(function(field) {
        object[field.name] = getValue(field.type, field.predicate);
    });

    return object;
}

/*
 * Returns a default javascript value for a sql type and predicate.
 *
 * @param {String} type is an sql type definition
 * @param {String} predicate is an sql predicate (e.g. primary key)
 * @return a default value for the given type and predicate
 */
function getValue(type, predicate) {
    var typeValues = {
        'text' : '',
        'integer' : 0,
        //ought to be more general here
        'float(53)' : 0.0,
        'float(53)[4][4]' : [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ],
        'float(53)[3][3]' : [
            1, 0, 0,
            0, 1, 0,
            0, 0, 1
        ]
    }

    if (type === 'text' && predicate === 'primary key') {
        return uuid.v4();
    }
    
    return typeValues[type];
}

module.exports.getObject = getObject;
module.exports.getValue  = getValue;
