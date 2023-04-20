<!DOCTYPE html>
  <head>
     <title>Vue For Beginners</title>
     <link rel="stylesheet" href="./css/style.css">

     <!-- Add Vue CDN -->
     <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

   </head>
  <body>
      <div id="wrapper">
         <!-- header -->
         <div class="header-section">
            <header>
               <nav>
                  <a href="#" class="logo"><img src="images/logo.png" alt="SDB 2023"></a>
                  <ul v-for="(item, index) in headerItems">
                     <li><a :href="item.link">{{ item.name }}</a></li>
                  </ul>
               </nav>
            </header>
         </div>

         <!-- form -->
         <div class="form-section">
            <h2>{{ formTitle }}</h2>
             <form @submit.prevent="saveData" class="my-form">
               <div class="input-form">
                  <div>
                     <input type="text" required v-model="registration.first_name" id="fname" placeholder="First Name">
                     <input type="tel" required v-model="registration.phone_number" id="phone" placeholder="+233 55 753 2439">
                     <input type="date" required v-model="registration.date_of_birth" id="date" placeholder="Date of Birth">
                  </div>
                  <div>
                     <input type="text" required v-model="registration.last_name" id="lname" placeholder="Last Name">
                     <input type="email" required v-model="registration.email" id="email" placeholder="Your Email">
                     <input type="text" required v-model="registration.location" id="location" placeholder="Location">
                  </div>
               </div>
               <div class="bio-input">
                  <textarea name="comment" v-model="registration.biography" id="biography" cols="40" rows="5"></textarea>
               </div>

               <div style="border: 1px solid gray; border-radius: 0.2rem; height: 160px; margin: 6px; padding: 5px; overflow: auto;">
                   <h3>First Name: {{ registration.first_name }}</h3>
                   <h3>Last Name: {{ registration.last_name }}</h3>
                   <h3>Phone Number: {{ registration.phone_number }}</h3>
                   <h3>Email Address: {{ registration.email }}</h3>
                   <h3>Location: {{ registration.location }}</h3>
                   <h3>Biography</h3>
                   <p>{{ registration.biography }}</p>
               </div>

               <div class="button-class">
                  <input type="button" class="btn" value="Clear">
                  <input type="submit" class="btn" value="Submit">
               </div>
            </form>
         </div>
 
         <!-- table -->
         <div class="table-section">
            <h2>LIST OF ALL APPLICANTS</h2>
            <Card class="card">
              <table>
                  <thead>
                     <tr>
                        <th>ID</th>
                        <th>First Name </th>
                        <th>Last Name</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Date of birth</th>
                        <th>Location</th>
                        <th>Biography</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr v-for="(student, index) in listOfStudents" :key="index">
                        <td>{{ index }}</td>
                        <td>{{ student.first_name }}</td>
                        <td>{{ student.last_name }}</td>
                        <td>{{ student.phone_number }}</td>
                        <td>{{ student.email }}</td>
                        <td>{{ student.date_of_birth }}</td>
                        <td>{{ student.location }}</td>
                        <td>{{ student.biography }}</td>
                     </tr>
                  </tbody>
              </table>
            </Card>
         </div>

         <!-- footer -->
         <div class="footer-section">
            <div class="footer-links">
              <div class="social-icons">
                 <ul>
                    <a href="https://www.facebook.com/maximnyansa/" target="_blank"></a>
                    <a href="https://twitter.com/MaximNyansa" target="_blank"></a>
                    <a href="https://www.linkedin.com/company/maxim-nyansa-it-solutions/" target="_blank"></a>
                 </ul>
              </div>
              <div class="products">
                 <h4>Maxim Products</h4>
                 <ul>
                    <a href="https://web.trinitysoftwarecenter.com/" target="_blank">Trinity Software Center</a>
                    <a href="https://skuuni.com/" target="_blank">Skuuni</a>
                    <a href="https://library.maximnyansa.com" target="_blank">Maxim Digital Library</a>
                 </ul>
              </div>
            </div>
         </div>

      </div>
   
      <!-- script tag outside the wrapper -->
      <script>
         const { createApp } = Vue;

         createApp({
            data() {
               return {
                  formTitle: "MAXIM REGISTRATION FORM UPDATED",
                  headerItems: [
                     {
                        link: "index.html",
                        name: "Home"
                     },
                     {
                        link: "contact.html",
                        name: "Contact"
                     },
                     {
                        link: "about.html",
                        name: "About"
                     },
                     {
                        link: "product.html",
                        name: "Products"
                     },
                     {
                        link: "archive.html",
                        name: "Archive"
                     },
                  ],
                  registration: {
                     first_name: "",
                     last_name: "",
                     phone_number: "",
                     email: "",
                     date_of_birth: "",
                     location: "",
                     biography: ""
                  },
                  listOfStudents: []
               }
            },
            methods: {

               saveData() {
                   this.listOfStudents.push({
                        first_name: this.registration.first_name,
                        last_name: this.registration.last_name,
                        phone_number: this.registration.phone_number,
                        email: this.registration.email,
                        date_of_birth: this.registration.date_of_birth,
                        location: this.registration.location,
                        biography: this.registration.biography
                   });
                   this.clearField();
               },

               clearField() {
                  Object.keys(this.registration).forEach(key => {
                     this.registration[key] = "";
                  });
               }
            }
         }).mount("#wrapper");
      </script>
        
  </body>
</html>
