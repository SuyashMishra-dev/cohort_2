const Add = (val)=>(
    {
        type:"add",
        val
    }
)
const Name =(name)=>(
    console.log(name),
    {
        type:"name",
        name
    }
) 
export  {Add,Name}