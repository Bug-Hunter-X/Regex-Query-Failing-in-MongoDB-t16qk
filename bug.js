```javascript
const query = {
  field: { $regex: 'pattern' },
};

const cursor = db.collection('collection').find(query);

const result = await cursor.toArray();
console.log(result);
```