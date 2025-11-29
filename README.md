🩸 Blood Donation Web Portal (JS_Project)

A JavaScript / HTML / CSS based web application that allows donors and needy users to sign up / sign in, share and view blood donation requirements — helping connect donors with people in need.

✅ Overview

This project is a simple, browser-based blood-donation portal built using plain HTML, CSS, and JavaScript. It enables two types of users: donors and needers. Donors can sign up / login and post donation availability or relevant details (like their readiness to donate). Needers can sign up / login and view available donors or donation posts. The aim is to enable easy access and matching between blood donors and people in need.

🔧 Features

✅ Sign up / Login for Donors

✅ Sign up / Login for Needers

✅ Donor registration / profile submission (with image upload support)

✅ Needers can view list of available donors / donation posts

✅ Gallery / listing of donor information / blood requests

✅ Responsive HTML + CSS + JavaScript — no backend dependency (static-site style)

🧰 Tech Stack

HTML5 — for markup and page structure

CSS3 — for styling and layout (index.css, donorSignUp.css, etc.)

JavaScript (vanilla) — for interactivity (index.js, form handling, image upload)

Pure frontend — no framework, no backend API (pure static / client-side implementation)

📁 Project Structure
JS_Project/
│── index.html              ← Home / landing page
│── index.css               ← Main styling
│── index.js                ← JS logic
│── donorSignUp.html        ← Donor sign-up page
│── donorLogin.html         ← Donor login page
│── neederSignUp.html       ← Needer sign-up page
│── neederSignIn.html       ← Needer login page
│── adminLoginBS.html       ← (Optional) Admin login page
│── adminCRUD.html          ← (Optional) Admin page to manage data
│── gallery.html            ← Page showing donor / request listings
│── finalDonorDetailsPage.html ← Donor details / confirmation page
│── donorPostPhtoTofireBase.html ← (Possibly placeholder for image uploads)  
│── rules.html              ← Rules / information page  
│── vendor / assets / images/   ← Directory for images and static assets  
│── README.md               ← This documentation file  


Note: Folder names and file names may vary; your actual repo includes an images/ folder (for uploaded or static images) and separate HTML/CSS/JS files for donor/needers/admin flows.

🚀 How to Run Locally

Clone the repository

git clone https://github.com/dineshkumar24v/JS_Project.git
cd JS_Project


Open index.html in your web browser.

Since it’s a static site, no server or build step is required — just open the HTML file.

(Optional) If uploading images or using advanced features — ensure paths in HTML/CSS/JS are correct.

📸 Screenshots / Demo

You can optionally capture screenshots of the key pages (home page, donor form, gallery / listing page, login / signup pages) and embed them here:
#HOME_PAGE

![Home page screenshot](./images/home-page.png)  
![Donor sign-up screenshot](./images/donor-signup.png)  
![Gallery screenshot](./images/gallery.png)  


Including visuals will make your project look much more professional to recruiters and other developers.

🤝 How to Contribute

Contributions are welcome! If you want to improve the project (e.g. add backend support, persistent storage, nicer UI, validation, search/filter, etc.), feel free to:

Fork the repo

Create a new branch

Commit your changes

Open a Pull Request

📄 License

This project is open-source. Use a license of your choice — e.g. MIT License.
