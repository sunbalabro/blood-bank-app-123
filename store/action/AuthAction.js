function addUser(user){
    return {
        type:"ADD_USER_DATA",
        payload:user
    }
}
module.exports = {addUser}