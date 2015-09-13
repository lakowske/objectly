# Objectly

Creates objects from object descriptions that are sql friendly

# Create javascript object

Create default javascript object using sql friendly object descriptions

```

fields = [
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

var defaultObject = objectly.getObject(fields);

console.log(defaultObject);

```

# Output
```
{
  id: '003e897c-d32b-482a-84cc-41912b2720d8',
  name: '',
  parent: '',
  about_up: 0,
  about_right: 0,
  about_forward: 0,
  x: 0,
  y: 0,
  z: 0,
  localmatrix: [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ],
  localvectors: [ 1, 0, 0, 0, 1, 0, 0, 0, 1 ]
}
```
