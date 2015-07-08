// Execute command
var result = execute('thymeleaf.render', {
  view: resolve('myview.html'),
  model: {
    friut: 'apple',
    stock: 10
  }
});
