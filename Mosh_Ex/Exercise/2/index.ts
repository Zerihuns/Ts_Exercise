//Birds fly. Fish swim. A Pet can be a Bird or Fish. Use type aliases to represent these

type Bird = {
    fly: () => void;
   };
   
type Fish = {
    swim: () => void;
   };
   
type Pet = Bird | Fish;

let myPet:Pet = {
    fly(){
        console.log("i believe i can fly")
    },
    
    swim(){
        console.log("swim swim")
    }
}