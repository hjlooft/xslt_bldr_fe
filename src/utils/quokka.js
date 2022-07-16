// import { parserOptions } from '@vue/compiler-dom';
// import { notEqual } from 'assert';
import { sax } from './sax.js'

const strict = true; // set to false for html-mode
const parser = sax.parser(strict);

let oDom = null;
const arrAncestors = [];
let oCurParentNode = null;

parser.onerror = function (e) {
  // an error happened.
};
parser.ontext = function (t) {
  // got some text.  t is the string of text.
  console.log(t, oCurParentNode.name);
  oCurParentNode.text += t;
};


parser.onclosetag = function(tagName){
  //if before first tag
  oCurParentNode = oCurParentNode.parentNode;
}

parser.onopentag = function (node) {
  // opened a tag.  node has "name" and "attributes"
  const newNode = {name: node.name, text: ""}
  node
  let attr = node.attributes; //? 
  newNode.attr = {};
  Object.entries(node.attributes).forEach(
        k => newNode.attr[k[0]] = k[1]
  );    
  if(attr.length > 0){
  }

  if(!oDom){
    newNode.parentNode = null;
    oDom = newNode;
  } else {
    if(typeof(oCurParentNode.children)==='undefined'){
      oCurParentNode.children = [];
    }
    newNode.parentNode = oCurParentNode;
    oCurParentNode.children.push(newNode);
    
  }
  oCurParentNode = newNode;  
};
parser.onattribute = function (attr) {
  // an attribute.  attr has "name" and "value"
};
parser.onend = function () {
      // parser stream is done, and ready to have more stuff written to it.

};
//const testString = '<docEl id="1">Hello, <who>world</who>!</docEl> id="2" name="world"';
const testString = '<docEl id="1">Hello, <who><who-child>world</who-child></who><who>befChild<who-child>world</who-child>afterChild</who>!</docEl>';

parser.write(testString).close();

console.log(testString);
console.log(oDom);