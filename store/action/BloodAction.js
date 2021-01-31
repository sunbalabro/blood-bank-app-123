function addBlood(products){
    return {
        type:"ADD_BLOOD",
        payload:products
    }
}
module.exports = {addBlood}