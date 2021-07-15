const Origin = require('../models/origin')

//new Origin
const  newOrigin = async(req, res, next) => {
    const origin = new Origin(req.body)
    try{
        const savedOrigin = await origin.save()
        res.status(201).send(origin)
    }catch(err){
        res.status(400).send(err)
    }
};

//get All Origin
const allOrigin = async (req, res, next) => {
    try{
        const allOrigin = await Origin.find({})
        res.send(allOrigin)
    }catch(err){
        res.status(500).send(errs)
    }
};

const allOriginById= async(req,res,next)=>{
    try{
        const origin = await Origin.findById(req.params.id)

        if(!origin){
            res.status(404).send('not found')
        }
        res.status(200).send(origin)
    }catch(err){
        res.status(500).send(err)
    }
}


const updateOrigin = async(req,res,next)=>{

    const id = req.params.id
    const body = req.body
    try{
        const origin = await Origin.findByIdAndUpdate(id, body)

        if(!origin){
            res.status(404).send('not found')
        }
        res.send(origin)
    }catch(err){
        res.status(422).send(err)
    }
}

const deleteOrigin = async(req,res,next)=>{

    const id = req.params.id
    
    try{
        const origin = await Origin.findByIdAndDelete(id)

        if(!origin){
            res.status(404).send('not found')
        }
        res.send(origin)
    }catch(err){
        res.status(500).send(err)
    }
}
module.exports = {

    allOrigin,
    newOrigin,
    allOriginById,
    updateOrigin,
    deleteOrigin

}