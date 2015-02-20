/**
@module ember
@submodule ember-htmlbars
*/

export default function getRoot(scope, key) {
  if (key === 'this') {
    return scope.self;
  }

  if (scope.locals[key]) {
    return scope.locals[key];
  } else {
    return scope.self.getKey(key);
  }
}