// DoIt TS p.17
let collection : number[] | string;
collection = "TypeScript";
if(typeof collection === "string") {
	console.log(collection.split(""));
}