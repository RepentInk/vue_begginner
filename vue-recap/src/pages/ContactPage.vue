<template>
    <div class="contact-img">
        <img src="/images/home.jpeg" alt="Logo">
    </div>
    <form @submit.prevent="saveData()" class="contact-form">
        <input required v-model="traineeInfo.name" type="text" placeholder="Name" name="name">
        <select required v-model="traineeInfo.sex" name="sex">
            <option value="" selected>Sex</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
        </select>
        <select required v-model="traineeInfo.pronoun" name="pronoun">
            <option value="" selected>Pronoun</option>
            <option value="he/him">he/him</option>
            <option value="she/her">she/her</option>
            <option value="they/them">they/them</option>
            <option value="cant-say">can't say</option>
        </select>
        <button type="submit">Save</button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                traineeInfo:{
                    name: "",
                    sex: "",
                    pronoun: ""
                },
                allTraineeInfo: []
            }
        },

        methods:{
            saveData(){

                // let newTraineeInfo = {
                //     name: this.traineeInfo.name,
                //     sex: this.traineeInfo.sex,
                //     pronoun: this.traineeInfo.pronoun
                // }

                let newTraineeInfo = {}
                Object.keys(this.traineeInfo).forEach((key) =>{
                    newTraineeInfo[key] = this.traineeInfo[key]
                })
                
                // console.log(newTraineeInfo)
                let arrayLength = this.allTraineeInfo.length
                this.allTraineeInfo = arrayLength==0 ? [newTraineeInfo] : [newTraineeInfo, ...this.allTraineeInfo]
                localStorage.setItem("trainees", JSON.stringify(this.allTraineeInfo))
            }
        }


    }
</script>