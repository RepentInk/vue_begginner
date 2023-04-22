<template>
  <div class="employee">
    <div class="com_header">
      <h1>{{ title }}</h1>
    </div>
    <div class="com_body">
      <form @submit.prevent="submitForm" id="employeeForm">
        <div class="form-group">
          <input
            type="text"
            required
            v-model="employee.first_name"
            class="form_data"
            placeholder="First Name"
          />
          <input
            type="text"
            required
            v-model="employee.last_name"
            class="form_data"
            placeholder="Last Name"
          />
        </div>
        <div class="form-group">
          <input
            type="date"
            required
            v-model="employee.birth_day"
            class="form_data"
            placeholder="Select Birth Date"
          />
          <input
            type="text"
            required
            v-model="employee.gender"
            class="form_data"
            placeholder="Gender"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            required
            v-model="employee.salary"
            class="form_data"
            placeholder="Salary"
          />
          <input
            type="text"
            required
            v-model="employee.emp_id"
            class="form_data"
            placeholder="Employee ID"
          />
        </div>
      </form>
    </div>
    <div class="com_footer">
      <button type="type" @click.prevent="clearFields" class="clearBtn">
        Clear
      </button>
      <button type="submit" form="employeeForm" class="saveBtn">
        {{ saveText }}
      </button>
    </div>
  </div>

  <div class="table-section">
    <h2>{{ tableTitle }}</h2>
    <Card class="card">
      <table>
        <thead>
          <tr>
            <th>Emp ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of birth</th>
            <th>Gender</th>
            <th>Salary</th>
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
            <td style="text-align: center">
              <span
                @click.prevent="viewEmployeeData(employee)"
                class="editButton"
                >Edit</span
              >
              <span class="deleteButton">Delete</span>
            </td>
          </tr>
        </tbody>
      </table>
    </Card>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      tableTitle: "LIST OF EMPLOYEES",
      employee: {
        emp_id: "",
        first_name: "",
        last_name: "",
        birth_day: "",
        gender: "",
        salary: "",
        super_id: 100,
        branch_id: 2,
      },
      employees: [],
      updateData: false,
    };
  },
  computed: {
    title() {
      return this.updateData ? "EDIT EMPLOYEE RECORD" : "ADD EMPLOYEE RECORD";
    },

    saveText() {
      return this.updateData ? "Update" : "Save";
    },
  },
  created() {
    this.getEmployeesData();
  },
  methods: {
    getEmployeesData() {
      axios
        .get("http://192.168.1.42:3000/employee")
        .then((res) => {
          this.employees = res.data;
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
    },

    submitForm() {
        if(this.updateData) {
           this.updateEmployeeData();
        } else {
           this.saveEmployee();
        }
    },
    
    saveEmployee() {
      axios
        .post("http://192.168.1.42:3000/employee", this.employee)
        .then((res) => {
            this.employees = [res.data[0], ...this.employees];
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
    },
    
    updateEmployeeData() {
        axios.put("http://192.168.1.42:3000/employee/" + this.employee.emp_id, this.employee)
             .then(res => {
                 console.log(res);
             })
             .catch(error => {
                console.log("Error: ", error);
             });
    },

    viewEmployeeData(employee) {
      Object.keys(this.employee).forEach((key) => {
        this.employee[key] = employee[key];
      });
      this.updateData = true;
    },

    clearFields() {
      Object.keys(this.employee).forEach((key) => {
        this.employee[key] = "";
      });
      this.updateData = false;
    },
  },
};
</script>
