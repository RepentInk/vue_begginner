// imported from old indexedDB.html

const { createApp } = Vue

         createApp({
            //data
            data(){
               return{
                  // message: "Welcome to Vue!",
                  // formTitle: "Maxim Registration Form",
                  editing: false,
                  
                  headerItems: [
                     {
                        link: "home",
                        name: "Home"
                     },
                     {
                        link: "contact",
                        name: "Contact"
                     },
                     {
                        link: "about",
                        name: "About"
                     },
                     {
                        link: "products",
                        name: "Products"
                     },
                     {
                        link: "support",
                        name: "Support"
                     },
                  ],

                  registration:{
                     first_name: "",
                     last_name:"",
                     phone_number: "",
                     date_of_birth: "",
                     email: "",
                     date_of_birth: "",
                     location: "",
                     biography: ""
                  },
                  listOfStudents: [],
                  allStudents: []
               }
            },

            // start created
            created(){
               this.fetchData()
            },

            // computed data
            computed: {
               formTitle(){
                  return this.editing ? "Edit Student Record" : "Add Student Record"
               },
               submitTitle(){
                  return this.editing ? "Update" : "Save"
               }
            },

            // methods
            methods: {
               saveData(){
                  let oldStudents = localStorage.getItem("students")
                  let parseOldData = JSON.parse(oldStudents)

                  //set new student object
                  let student = {
                     id: parseOldData ? parseOldData.length + 1 : 1,
                     first_name: this.registration.first_name,
                     last_name: this.registration.last_name,
                     phone_number: this.registration.phone_number,
                     email: this.registration.email,
                     date_of_birth: this.registration.date_of_birth,
                     location: this.registration.location,
                     biography: this.registration.biography,
                  }
                  
                  if(this.editing){
                     oldStudents.map(item => {
                        if(item.id == student.id){
                           item = student
                        }
                     })

                     this.listOfStudents = oldStudents
                     // let search = oldStudents.find(item => item.id == student.id)
                     // this.listOfStudents = parseOldData ? [...parseOldData, {
                        
                     // }] : ''
                  }else{
                     this.listOfStudents = parseOldData ? [student, ...parseOldData] : [student]
                  }
                  localStorage.setItem("students", JSON.stringify(this.listOfStudents))
                  let students = localStorage.getItem("students")
                  this.allStudents = JSON.parse(students)
                  
                  this.clearField();
               },
               
               clearField(){
                  Object.keys(this.registration).forEach(key => {
                     this.registration[key] = ""
                  })
                  this.editing = false     
               },

               fetchData(){
                  let students = localStorage.getItem("students")
                  this.allStudents = JSON.parse(students)
               },

               editData(student){
                  Object.keys(this.registration).forEach(key => {
                     this.registration[key] = student[key]
                  })

                  this.editing = true
               }
            }
            
         }).mount("#wrapper")