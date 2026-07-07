const internships = [

{
title: "Digital Marketing Intern",
company: "Bansiwale Enterprises",
category: "Digital Marketing",
location: "Greater Noida",
type: "Full Time",
stipend: "₹10K/Month",
skills: ["Social Media Management","Content Writing","SEO/SEM Analysis"],
tags: ["Digital Marketing","Undergraduate","Postgraduate"],
posted: "Posted Jun 18, 2026 • 13 days left",
logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
},

{
title: "HR Internship",
company: "Dev Innovations Labs",
category: "HR",
location: "Work From Home",
type: "Full Time",
stipend: "₹8K/Month",
skills: ["Communication Skills","Microsoft Office","Recruitment Strategy"],
tags: ["HR","Management","People"],
posted: "Posted Jun 17, 2026 • 12 days left",
logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
},

{
title: "Data Analyst Internship",
company: "Microsoft",
category: "Data Analysis",
location: "Remote",
type: "Full Time",
stipend: "₹12K/Month",
skills: ["Excel","SQL","Power BI"],
tags: ["Analytics","Dashboard","Data"],
posted: "Posted Jun 18, 2026 • 15 days left",
logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
},

{
title: "Data Science Internship",
company: "Amazon",
category: "Data Science",
location: "Work From Home",
type: "Full Time",
stipend: "₹18K/Month",
skills: ["Python","Machine Learning","Pandas"],
tags: ["AI","ML","Data Science"],
posted: "Posted Jun 18, 2026 • 20 days left",
logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
},

{
title: "Software Development Intern",
company: "Infosys",
category: "Software Development",
location: "Mumbai",
type: "Full Time",
stipend: "₹15K/Month",
skills: ["Java","Spring Boot","MySQL"],
tags: ["Backend","Software"],
posted: "Posted Jun 18, 2026 • 18 days left",
logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg"
},

{
title: "Web Development Internship",
company: "Adobe",
category: "Web Development",
location: "Delhi",
type: "Full Time",
stipend: "₹20K/Month",
skills: ["HTML","CSS","JavaScript"],
tags: ["Frontend","React"],
posted: "Posted Jun 17, 2026 • 10 days left",
logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg"
},

{
title: "UI UX Design Internship",
company: "Adobe",
category: "UI/UX",
location: "Remote",
type: "Full Time",
stipend: "₹18K/Month",
skills: ["Figma","Adobe XD","Wireframing"],
tags: ["Design","UI","UX"],
posted: "Posted Jun 18, 2026 • 22 days left",
logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg"
},

{
title: "Finance Internship",
company: "JP Morgan",
category: "Finance",
location: "Mumbai",
type: "Full Time",
stipend: "₹15K/Month",
skills: ["Accounting","Excel","Finance"],
tags: ["Investment","Finance"],
posted: "Posted Jun 18, 2026 • 16 days left",
logo: "https://1000logos.net/wp-content/uploads/2021/05/JP-Morgan-logo.png"
},

{
title: "Graphic Design Internship",
company: "Canva",
category: "Graphic Design",
location: "Remote",
type: "Full Time",
stipend: "₹12K/Month",
skills: ["Canva","Photoshop","Illustrator"],
tags: ["Creative","Design"],
posted: "Posted Jun 18, 2026 • 12 days left",
logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg"
}

];

const container = document.getElementById("internshipContainer");

function loadInternships(category = "All") {

if (!container) return;

container.innerHTML = "";

const filtered =
category === "All"
? internships
: internships.filter(job => job.category === category);

filtered.forEach(job => {

container.innerHTML += `

<div class="internship-card">

    <div class="card-top">

        <div class="company-info">

            <h2 class="job-title">
                ${job.title}
            </h2>

            <div class="company">
                ${job.company}
            </div>

        </div>

        <img
            src="${job.logo}"
            class="logo-img"
            onerror="this.src='https://via.placeholder.com/80'">

    </div>

    <div class="meta">

        <span>
            <i class="fa-solid fa-briefcase"></i>
            ${job.type}
        </span>

        <span>
            <i class="fa-solid fa-location-dot"></i>
            ${job.location}
        </span>

        <span>
            <i class="fa-solid fa-user-graduate"></i>
            Freshers
        </span>

    </div>

    <div class="skills">
        ${job.skills.join(" • ")}
    </div>

    <div class="tags">
        ${job.tags.map(tag =>
        `<span>${tag}</span>`
        ).join("")}
    </div>

    <div class="card-bottom">

        <div>

            <div class="posted">
                ${job.posted}
            </div>

            <div class="stipend">
                ${job.stipend}
            </div>

        </div>

        <div class="right-actions">

    <button class="icon-btn">
        <i class="fa-solid fa-share-nodes"></i>
    </button>

    <button class="icon-btn save-btn">
        <i class="fa-regular fa-heart"></i>
    </button>

</div>

    </div>

</div>

`;

});

}

function applyInternship(title){

alert(
`Application submitted for:\n${title}`
);

}

function showCategory(category){

document.querySelectorAll(".category-card")
.forEach(card=>{

card.classList.remove("active-card");

const text =
card.querySelector("span").innerText;

if(
text === category ||
(category === "All" && text === "All")
){
card.classList.add("active-card");
}

});

loadInternships(category);

const title =
document.querySelector(".main-title");

if(category === "All"){

title.innerHTML =
"27088+ Internships in India";

}
else{

title.innerHTML =
`${category} Internships in India`;

}

}

window.onload = () => {

loadInternships();

const searchInput =
document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener(
"keyup",
function(){

const value =
this.value.toLowerCase();

document
.querySelectorAll(".internship-card")
.forEach(card=>{

if(
card.innerText
.toLowerCase()
.includes(value)
){

card.style.display = "block";

}
else{

card.style.display = "none";

}

});

}
);

}

const row =
document.getElementById("categoryRow");

const right =
document.querySelector(".right-arrow");

const left =
document.querySelector(".left-arrow");

if(right){

right.addEventListener("click",()=>{

row.scrollBy({
left:300,
behavior:"smooth"
});

});

}

if(left){

left.addEventListener("click",()=>{

row.scrollBy({
left:-300,
behavior:"smooth"
});

});

}

document.addEventListener("click", function(e){

const saveBtn = e.target.closest(".save-btn");

if(saveBtn){

saveBtn.classList.toggle("active");

if(saveBtn.classList.contains("active")){
saveBtn.innerHTML =
'<i class="fa-solid fa-heart"></i>';
}
else{
saveBtn.innerHTML =
'<i class="fa-regular fa-heart"></i>';
}

}

});
}
