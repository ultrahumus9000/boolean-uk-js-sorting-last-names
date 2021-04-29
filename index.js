const NAME = prompt('whats your lastname')
const nameArray = ['Mason', 'Marcora', 'Rico', 'Neves','Ivanov']
nameArray.unshift(NAME)
console.log(nameArray)
// fist task complted
// uppercase chanllenge
const Namearray = []
for(let i = 0; i < nameArray.length; i++ ){
   let nameelement = nameArray[i].toUpperCase()
   Namearray.push(nameelement)
   console.log(nameelement)
}
console.log(Namearray)
// uppercase challenge completed

nameArray.sort()
// sort alphabet

// index of name 
for(let i = 0; i < nameArray.length; i++ ){
    if(NAME == nameArray[i])
    console.log(`your last name is in the '${i + 1}' place`)
 }
 // index of name
 newnamearray = nameArray.reverse()
console.log(`Newname order is ${newnamearray}`)

//chanllenge of adding subarray
const Newnamearray = []
for(let i = 0; i < nameArray.length; i++ ){
    let nameelement = nameArray[i].toUpperCase()
    let subnewnameArray = [nameArray[i]]
    subnewnameArray.push(nameelement)
    Newnamearray.push(subnewnameArray)
    console.log(subnewnameArray)
 }
console.log(Newnamearray)

