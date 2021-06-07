
class ListUsers{
    index(request, response){
        const users = [
            {name: 'Lucas', age: '24'},
            {name: 'Eduardo', age: '20'},
            {name: 'kassia', age: '19'},
            {name: 'Maymi', age: '21'},
        ]
        return response.json(users)
    }
}

module.exports = ListUsers