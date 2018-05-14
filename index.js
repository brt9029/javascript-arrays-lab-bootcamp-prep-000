const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name){
  
}
function appendKitten(name){
  return [...kittens, name]
}
function removeFirstKitten(){
  return kittens.slice(1)
}
function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1)
}