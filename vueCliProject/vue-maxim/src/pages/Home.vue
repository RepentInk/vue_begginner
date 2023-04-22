<template>
  <!-- form -->
  <div class="form-section">
    <h2>{{ formTitle }}</h2>
    <form @submit.prevent="saveData" class="my-form">
      <div class="input-form">
        <div>
          <input
            type="text"
            required
            v-model="registration.first_name"
            id="fname"
            :placeholder="placeFName"
          />
          <input
            type="tel"
            required
            v-model="registration.phone_number"
            id="phone"
            placeholder="+233 55 753 2439"
          />
          <input
            type="date"
            required
            v-model="registration.date_of_birth"
            id="date"
            placeholder="Date of Birth"
          />
        </div>
        <div>
          <input
            type="text"
            required
            v-model="registration.last_name"
            id="lname"
            placeholder="Last Name"
          />
          <input
            type="email"
            required
            v-model="registration.email"
            id="email"
            placeholder="Your Email"
          />
          <input
            type="text"
            required
            v-model="registration.location"
            id="location"
            placeholder="Location"
          />
        </div>
      </div>
      <div class="bio-input">
        <textarea
          name="comment"
          v-model="registration.biography"
          id="biography"
          cols="40"
          rows="5"
        ></textarea>
      </div>

      <div
        style="
          border: 1px solid gray;
          border-radius: 0.2rem;
          height: 160px;
          margin: 6px;
          padding: 5px;
          overflow: auto;
        "
      >
        <h3>First Name: {{ registration.first_name }}</h3>
        <h3>Last Name: {{ registration.last_name }}</h3>
        <h3>Phone Number: {{ registration.phone_number }}</h3>
        <h3>Email Address: {{ registration.email }}</h3>
        <h3>Location: {{ registration.location }}</h3>
        <h3>Biography</h3>
        <p>{{ registration.biography }}</p>
      </div>

      <div class="button-class">
        <input
          @click.prevent="clearField()"
          type="button"
          class="btn"
          value="Clear"
        />
        <input type="submit" class="btn" :value="submitData" />
      </div>
    </form>
  </div>

  <!-- Table -->
  <div class="table-section">
    <h2>LIST OF ALL APPLICANTS</h2>
    <Card class="card">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Date of birth</th>
            <th>Location</th>
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
            <td style="text-align: center">
              <span @click.prevent="editData(student)" class="editButton"
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
export default {
  data() {
    return {
      placeFName: "First Name",
      updateData: false,
      headerItems: [
        {
          link: "/home",
          name: "Home",
        },
        {
          link: "/contact",
          name: "Contact",
        },
        {
          link: "/about",
          name: "About",
        },
        {
          link: "/product",
          name: "Products",
        },
        {
          link: "/company",
          name: "Company",
        },
      ],
      registration: {
        id: "",
        first_name: "",
        last_name: "",
        phone_number: "",
        email: "",
        date_of_birth: "",
        location: "",
        biography: "",
      },
      listOfStudents: [],
      allStudents: [],
    };
  },

  // Computed
  computed: {
    formTitle() {
      return this.updateData
        ? "UPDATE STUDENT RECORD"
        : "ADD NEW STUDENT RECORD";
    },

    submitData() {
      return this.updateData ? "Edit Data" : "Save Data";
    },
  },

  // Created
  created() {
    this.fetchData();
  },

  // Methods
  methods: {
    saveData() {
      let oldStudents = localStorage.getItem("students");
      let parseOldData = JSON.parse(oldStudents);

      let student = {
        id: parseOldData ? parseOldData.length + 1 : 1,
        first_name: this.registration.first_name,
        last_name: this.registration.last_name,
        phone_number: this.registration.phone_number,
        email: this.registration.email,
        date_of_birth: this.registration.date_of_birth,
        location: this.registration.location,
        biography: this.registration.biography,
      };

      this.listOfStudents = parseOldData
        ? [student, ...parseOldData]
        : [student];

      localStorage.setItem("students", JSON.stringify(this.listOfStudents));

      let students = localStorage.getItem("students");
      this.allStudents = JSON.parse(students);

      this.clearField();
    },

    fetchData() {
      let students = localStorage.getItem("students");
      this.allStudents = JSON.parse(students);
    },

    clearField() {
      Object.keys(this.registration).forEach((key) => {
        this.registration[key] = "";
      });
      this.updateData = false;
    },

    editData(student) {
      Object.keys(this.registration).forEach((key) => {
        this.registration[key] = student[key];
      });
      this.updateData = true;
    },
  },
  
};
</script>
