const dbConnection = require('../db/dbConfig')

// Get All Trainees
const getAllTrainees = (req, res) =>{
    dbConnection.query(`SELECT trainee_name, sex_type, pronoun_type FROM trainees_info 
    INNER JOIN sex ON trainees_info.trainee_sex = sex.sex_id 
    INNER JOIN pronoun ON trainees_info.trainee_pronoun = pronoun.pronoun_id;`, (err, result) => {
        if(err){
            console.log(err)
            res.status(400).json('Error Requesting Trainees Info')
            return
        }
        return res.status(200).json(result)
    })
}

// Get One Trainee
const getOneTrainee = (req, res) =>{
    const id = req.params.id
    dbConnection.query(`SELECT trainee_name, sex_type, pronoun_type FROM trainees_info 
    INNER JOIN sex ON trainees_info.trainee_sex = sex.sex_id 
    INNER JOIN pronoun ON trainees_info.trainee_pronoun = pronoun.pronoun_id WHERE trainee_id = "${id}"`, (err, result) => {
        if(err){
            console.log(err)
            res.status(400).json('Error Requesting One Trainer')
            return
        }
        return res.status(200).json(result)
    })
}

// Add A Trainee
const addTrainee = (req, res) =>{
    const { id, name, sex, pronoun } = req.body
    dbConnection.query(`INSERT INTO trainees_info (trainee_id,trainee_name,trainee_sex,trainee_pronoun) VALUES("${id}", "${name}", "${sex}", "${pronoun}")`, (err, result) => {
        if(err){
            console.log(err)
            res.status(400).json('Error adding a Trainee')
            return
        }
        return res.status(201).json(result)
    })
}

// Edit A Trainee
const editTrainee = (req, res) =>{
    const id = req.params.id
    const {name, sex, pronoun} = req.body
    dbConnection.query(`UPDATE trainees_info SET trainee_name ="${name}" WHERE trainee_id = "${id}"`, (err, result) => {
        if(err){
            console.log(err)
            res.status(400).json('Error Editing Trainee')
            return
        }
        return res.status(200).json(result)
    })
}

// Delete A Trainee
const deleteTrainee = (req, res) =>{
    const id = req.params.id
    dbConnection.query(`DELETE FROM trainees_info WHERE trainee_id = "${id}"`, (err, result) => {
        if(err){
            console.log(err)
            res.status(400).json('Error removing Trainee')
            return
        }
        return res.status(200).json(result)
    })
}

module.exports = {
    getAllTrainees,
    getOneTrainee,
    editTrainee,
    addTrainee,
    deleteTrainee
}