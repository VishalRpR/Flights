const { Logger } = require("../config");



class CrudRepository{
    constructor(model){
        this.model=model;
    }

    async create(data){
        console.log("inside repo")
        try {

            const response=await this.model.create(data);
            return response;
            
        } catch (error) {
            Logger.error("something wend wrong in the Crud repo:create");
            throw error;

            
        }

    }



    async destroy(data){
        try {

            const response=await this.model.destroy({
                where:{
                    id:data
                }
            });
            return response;
            
        } catch (error) {
            Logger.error("something wend wrong in the Crud repo:destroy");
            throw error;

            
        }
}




async get(data){
    try {

        const response=await this.model.findByPK(data)
        return response;
        
    } catch (error) {
        Logger.error("something wend wrong in the Crud repo:create");
        throw error;

        
    }
}




async getAll(){
    try {

        const response=await this.model.findAll()
        return response;
        
    } catch (error) {
        Logger.error("something wend wrong in the Crud repo:create");
        throw error;

        
    }
}


async update(data){//data-->{col:value,.....}
    try {

        const response=await this.model.update(data,{
            where:{
               
            }
        });
        return response;
        
    } catch (error) {
        Logger.error("something wend wrong in the Crud repo:create");
        throw error;

        
    }
}
}



module.exports=CrudRepository;
