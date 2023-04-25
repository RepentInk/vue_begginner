const home = {template:
   `
    <!-- Page Section Form -->
        <div class="form-section">
            <h2>{{formTitle}}</h2>
            <form @submit.prevent="saveData" class="my-form">
               <div class="input-form">
                  <div>
                     <input type="text" required v-model="registration.first_name" id="fname" name="fname" placeholder="First Name">
                     <input type="tel" required v-model="registration.phone_number"id="phone" name="phone" placeholder="+233 55 753 2439">
                     <input type="date" required v-model="registration.date_of_birth"id="date" name="date" placeholder="Date of Birth">
                  </div>
                  <div>
                     <input type="text" required v-model="registration.last_name" id="lname" name="lname" placeholder="Last Name">
                     <input type="email" required v-model="registration.email"id="email" name="email" placeholder="Your Email">
                     <input type="text" required v-model="registration.location"id="location" name="location" placeholder="Location">
                  </div>
               </div>
               <div class="bio-input">
                  <textarea name="comment" v-model="registration.biography" id="biography" cols="40" rows="5"></textarea>
               </div>
               
               <div class="button-class">
                  <input @click="clearField()" type="button" class="btn" value="Clear" >
                  <input type="submit" class="btn" :value="submitTitle">
               </div>
            </form>
        </div>
         
         <!-- Page Section Table -->
        <div class="table-section">
            <h2>LIST OF ALL APPLICANTS</h2>
            <div class="card">
               <table>
                  <thead>
                     <tr>
                        <th>Id</th>
                        <th>First Name </th>
                        <th>Last Name</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Date of birth</th>
                        <th>Location</th>
                        <th>Biography</th>
                        <th>Actions</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr v-for="(student, index) in allStudents" :key="index">
                        <td>{{ student.id }}</td>
                        <td>{{ student.first_name }}</td>
                        <td>{{ student.last_name }}</td>
                        <td>{{ student.phone_number }}</td>
                        <td>{{ student.email }}</td>
                        <td>{{ student.date_of_birth }}</td>
                        <td>{{ student.location }}</td>
                        <td>{{ student.biography }}</td>
                        <td>
                           <span @click.prevent="editData(student)" class="editButton">Edit</span>
                           <span class="deleteButton">Delete</span>
                        </td>
                     </tr>
                  </tbody>
                 
               </table>
            </div>
         </div>

    `,

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

         let student = {}

         Object.keys(this.registration).forEach(key => {
            student[key] = this.registration[key]
            student.id = this.editing ? this.registration.id : parseOldData ? parseOldData.length + 1 : 1
         })
         
         if(this.editing){
            let index = parseOldData.findIndex((item) => item.id == student.id)
            parseOldData[index]=student
            this.listOfStudents = parseOldData
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
}