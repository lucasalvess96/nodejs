
class CreateUsers{
    create(request,response){
        const data = request.body
        const createe = {
            name: data.name,
            age: data.age,
            email: data.email
        } 
        console.log(createe)
        return response.json(createe)
    }
}

module.exports = CreateUsers
