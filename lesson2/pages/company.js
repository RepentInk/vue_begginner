const company = {template:
    `
        <div class="main-container">
            <h1>{{title}}</h1>

            <form @submit.prevent="saveEmployee()" class="form-block">
                <span>Personal info</span>
                <div>
                    <input type="text" v-model="employee.emp_id" placeholder="Id"/>
                    <input type="text" v-model="employee.first_name" placeholder="First name"/>
                    <input type="text" v-model="employee.last_name" placeholder="Last name"/>
                </div>
                <span>Bio</span>
                <div>
                    <input type="date" v-model="employee.birth_day" placeholder="Birthday"/>
                    <select v-model="employee.gender" name="gender">
                        <option value="">Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <span>Company</span>
                <div>
                    <input type="text" v-model="employee.salary" placeholder="Salary"/>
                    <input type="text" v-model="employee.super_id" placeholder="Super ID"/>
                    <input type="text" v-model="employee.branch_id" placeholder="Branch Id"/>
                </div>
                <div class="buttons">
                    <button type="button" @click.prevent="clearForm()">Clear</button>
                    <button type="submit">{{subTitle}}</button>
                </div>
            </form>
        </div>

        <div>
            <h1 style="text-align:center">{{tabTitle}}</h1>
            <!-- Page Section Table -->
            <div class="table-section">
                <div class="card">
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First Name </th>
                            <th>Last Name</th>
                            <th>Birth Day</th>
                            <th>Gender</th>
                            <th>Salary</th>
                            <th>Super ID</th>
                            <th>Branch ID</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(employee, index) in employees" :key="index">
                            <td>{{ employee.emp_id }}</td>
                            <td>{{ employee.first_name }}</td>
                            <td>{{ employee.last_name }}</td>
                            <td>{{ employee.birth_day }}</td>
                            <td>{{ employee.gender }}</td>
                            <td>{{ employee.salary }}</td>
                            <td>{{ employee.super_id }}</td>
                            <td>{{ employee.branch_id }}</td>
                            <td>
                                <span @click.prevent="editData(employee)" class="editButton">Edit</span>
                                <span class="deleteButton">Delete</span>
                            </td>
                        </tr>
                    </tbody>
                    
                </table>
                </div>
            </div>
        </div>

    `,

    data(){
        return{
        //    title: "Employee Form",
           tabTitle: "Employee Details Form",
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

           employee:{
              emp_id: "",
              first_name:"",
              last_name: "",
              birth_day: "",
              gender: "",
              salary: "",
              super_id: "",
              branch_id: ""
           },
           employees: [],
        }
    },

    // start created
    created(){

        this.getEmployeeData()
    },

    // computed data
    computed: {
        title(){
            return this.editing ? 'Edit Employee Data' : 'Save Employee Data'
        },

        subTitle(){
            return this.editing ? 'Update' : 'Save'
        }
    },

    // methods
    methods: {
        getEmployeeData (){
            axios.get("http://192.168.1.42:3000/employee")
            .then(res => {
                // console.log("Res: ", res.data);
                // this.employees = res.data
            })
            .catch(error => {
                console.log("Error", error)
            })
        },

        editData(employee) {
            Object.keys(this.employee).forEach((key) => {
                this.employee[key] = employee[key]
            })
            this.editing = true
        },

        saveEmployee(){
            // let formData = new FormData();
            // formData.append("emp_id", this.employee.emp_id)
            // formData.append("first_name", this.employee.first_name)
            // formData.append("last_name", this.employee.last_name)
            // formData.append("birth_day", this.employee.birth_day)
            // formData.append("gender", this.employee.gender)
            // formData.append("salary", this.employee.salary)
            // formData.append("super_id", this.employee.super_id)
            // formData.append("branch_id", this.employee.branch_id)

            
            // axios.post("http://192.168.1.42:3000/employee", this.employee)
            // .then(res => console.log("Message: ", res))
            // .catch(err => console.log("Error: ", err))
            
            // console.log(formData)
            
            // localStorage.setItem("employees", JSON.stringify(this.employee))

            // Set an empty object
            let currEmployee = {}

            // Map and assign keys to the current object
            Object.keys(this.employee).forEach((key) =>{
                currEmployee[key] = this.employee[key]
            })

            localStorage.setItem("employees", JSON.stringify(currEmployee))
            this.employees = JSON.parse(localStorage.getItem("employees"))
            console.log(this.employees)
            // this.clearForm()
        },

        clearForm(){
            Object.keys(this.employee).forEach((key) => {
                this.employee[key] = ""
            })

            this.editing = false
        }
    }
}