let students=[
    {id:1,name:"hari",email:'hari@gmail.com',address:'ktm'},
    {id:2,name:"ram",email:'ram@gmail.com',address:'ktm'},
    {id:3,name:"sita",email:'sita@gmail.com',address:'ktm'},
]
function show(){
let output="";
students.map((student,key)=>{
output+=`
<tr>
<td>${key+1}</td>
<td>${student.name}</td>
<td>${student.email}</td>
<td>${student.address}</td>
<td>
<button>Edit</button>
<button>Delete</button>
</td>
</tr>
`    
})
document.getElementById('result').innerHTML=output;
}
show()