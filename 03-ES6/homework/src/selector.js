var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)){
    resultSet.push(startEl);
  }
  
  for(var i = 0; i < startEl.children.length; i++){
    let elements = traverseDomAndCollectElements(matchFunc, startEl.children[i]);
    resultSet = [...resultSet, ...elements]
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if(selector[0] === "#"){
    selector = "id";
  }
  else if(selector[0] === "."){
    selector = "class";
  }
  else if(selector.split["."].lenght > 1){
    selector = "tag.class";
  }
  selector = "tag";
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    matchFunction = function(e){
      return "#" + e.id === selector;
    }

  } else if (selectorType === "class") {
    matchFunction = function(e){
      let classes = e.classList;
      classes.forEach(function(e){
        if ("." + e === selector){
          return true;
        }
        return false;
      });
    }
    
  } else if (selectorType === "tag.class") {
    matchFunction = function(e){
      var [tagBuscada, classBuscada] = selector.split(".");
      return matchFunctionMaker(tagBuscada)(e) && matchFunctionMaker("." + classBuscada)(e);
    }
    
  } else if (selectorType === "tag") {
    matchFunction = function(e){
      return e.tagName.toLowerCase() === selector;
    }
    
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
