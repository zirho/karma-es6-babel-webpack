var context = require.context('./source', true, /-spec\.js$/);
console.log(context);

context.keys().forEach(context);
