const NAME = prompt('whats your lastname')
const nameArray = ['Mason', 'Marcora', 'Rico', 'Neves','Ivanov']
nameArray.unshift(NAME)
console.log(nameArray)
for(let i = 0; i < nameArray.length; i++ ){
   let nameelement = nameArray[i].toUpperCase()
   console.log(nameelement)
}
nameArray.sort()
console.log(nameArray)
for(let i = 0; i < nameArray.length; i++ ){
    if(NAME == nameArray[i])
    console.log(`your last name is in the '${i + 1}' place`)
 }
 newnamearray = nameArray.reverse()
console.log(`Newname order is ${newnamearray}`)

for(let i = 0; i < nameArray.length; i++ ){
    let nameelement = nameArray[i].toUpperCase()
    let subnewnameArray = [nameArray[i]]
    subnewnameArray.push(nameelement)
    console.log(subnewnameArray)
 }



