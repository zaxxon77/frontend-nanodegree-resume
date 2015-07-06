
var bio = {
	"name" : "ZACK SCHMID", 
	"role" : "AEROSPACE ENGINEER, ENTREPRENEUR, ASPIRING WEB DEVELOPER", 
	"contacts" : {
		"mobile" : "(512) 766-4711",
		"email" : "zaxxon77@gmail.com",
		"github" : "zaxxon77",
		"twitter" : "too old for that shit",
		"location" : "Austin, TX"
	},
	"welcomeMessage" : "Thirteen years of Mechanical, Aeronautical, Aerospace, and Systems Engineering experience with a strong background spanning leadership and program planning, missile system navigation, guidance, and control (NG&C) design and analysis, flight software development, physics-based model and simulation development, real time hardware-in-the-loop testing (HWIL), and system/subsystem/product requirements development, verification, and validation. Experience with total product lifecycle from design to deployment. Consistent top performer, and Subject Matter Expert in boost-phase missile stability. Recent experience creating and running a small trucking business. Currently enrolled in Udacity Front End Web Developmer Nanodegree program. Always looking to learn, grow, and develop my skill set.",
	"skills" : ["Project Management", "Team Building", "Microsoft Office", "Windows", "Unix/Linux", "Pumping it Up", "Keeping it Real", "C/C++", "Fortran", "Matlab/Simulink", "Autocad"],
	"bioPic" : "images/ProfilePic.jpg"
}

bio.display = function (){
	$("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));

	$("#topContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
	$("#topContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
	//$("#header").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
	$("#topContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
	//$("#header").append(HTMLblog.replace("%data%",bio.contacts.blog));
	$("#topContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));

	$("#header").append(HTMLbioPic.replace("%data%",bio.bioPic));
	$("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (skill in bio.skills) {
			$("#skills").append(HTMLskills.replace("%data%",bio.skills[skill]));
		}
	}
}
bio.display();

footerContacts.display = function () {
	$("#footerContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
	$("#footerContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
	//$("#header").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
	$("#footerContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
	//$("#header").append(HTMLblog.replace("%data%",bio.contacts.blog));
	$("#footerContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));
}	
footerContacts.display();

var work = {
	"jobs": [
	{
		"employer": "Sequoia Trucking LLC",
		"title": "Owner",
		"location": "Austin, TX",
		"dates": "Feb 2014 - current",
		"description": "Established a long-haul semi-trucking business, set up as a freight carrier. Sequoia Trucking LLC owns and leases trucks to a broker for load scheduling, and employs CDL licensed operators.",
		"url": "https://www.facebook.com/SequoiaTrucking"
	},
	{
		"employer": "Lockheed Martin Space Systems Company",
		"title": "Staff Software Engineer on FBM",
		"location": "Sunnyvale, CA",
		"dates": "Feb 2009 - Aug 2013",
		"description": "Missile Avionics Life Extension Program Planning Team Lead, Missile NG&C Lead, Subject Matter Expert",
		"url": "http://www.lockheedmartin.com/us/products/trident-ii-d5-fleet-ballistic-missile--fbm-.html"
	},
	{
		"employer": "Lockheed Martin Space Systems Company",
		"title": "Software Engineer on THAAD",
		"location": "Sunnyvale, CA",
		"dates": "July 2000 - Jan 2009",
		"description": "Lead Autopilot Controls and Plant Estimates Analyst, Certified Principal Engineer for missile flight software builds",
		"url": "http://www.lockheedmartin.com/us/products/thaad.html"
	}
	]
}

function displaywork (){
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedEmployerURL = formattedEmployer.replace("#",work.jobs[job].url);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployerURL + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}
displaywork();


var education = {
	"schools" : [ 
	{
		"name": "San Jose State University",
		"location": "San Jose, CA",
		"degree": "Masters",
		"majors": "Aerospace Engineering",
		"date": 2005,
		"url": "http://www.sjsu.edu/"
	},
	{
		"name": "University of California at Davis",
		"location": "Davis, CA",
		"degree": "BS",
		"majors": "Mechanical and Aeronautical Engineering",
		"date": 2000,
		"url": "http://ucdavis.edu/"
	},
	{
		"name": "Santa Clara University",
		"location": "Santa Clara, CA",
		"degree": "coursework",
		"majors": "Linear, Non-linear, and Digital Control Theory",
		"date": 2003,
		"url": "http://scu.edu/ecp/"
	}
	],
	"onlineCourses": [
	{
		"title": "Intro to HTML and CSS",
		"school": "Udacity",
		"date": 2015,
		"url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
	},
	{
		"title": "Responsive Web Design Fundamentals",
		"school": "Udacity",
		"date": 2015,
		"url": "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
	},
	{
		"title": "Responsive Images",
		"school": "Udacity",
		"date": 2015,
		"url": "https://www.udacity.com/course/responsive-images--ud882"
	},
	{
		"title": "JavaScript Basics",
		"school": "Udacity",
		"date": 2015,
		"url": "https://www.udacity.com/course/javascript-basics--ud804"
	},
	{
		"title": "Intro to jQuery",
		"school": "Udacity",
		"date": 2015,
		"url": "https://www.udacity.com/course/intro-to-jquery--ud245"
	}
	]
}

education.display = function (){
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedNameAndURL = formattedName.replace("#",education.schools[school].url);
		$(".education-entry:last").append(formattedNameAndURL);

		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);

		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].date);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
		$(".education-entry:last").append(formattedMajor);

	}
	$(".education-entry:last").append(HTMLonlineClasses);
	for (course in education.onlineCourses) {
		var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
		var formattedTitleAndURL = formattedTitle.replace("#",education.onlineCourses[course].url)
		$(".education-entry:last").append(formattedTitleAndURL);
		$(".education-entry:last").append(HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school));
		$(".education-entry:last").append(HTMLonlineDates.replace("%data%",education.onlineCourses[course].date));
		//$(".education-entry:last").append(HTMLonlineURL.replace("%data%",education.onlineCourses[course].url));
	}	
}
education.display();


var projects = {
	"projects" : [
	{
		"title": "Project 1: Udacity Portfolio Website",
		"description": "Created a responsive website which matched the layout of an example portfolio, and re-styled it for personal use.  Extensive use of HTML, Bootstrap CSS framework, and responsive design fundamentals.",
		"date": 2015,
		"images": "images/Project1_screenshot.png",
		"url": "https://github.com/zaxxon77"
	},
	{
		"title": "Project 2: Resume Website",
		"description": "Created a personalized website to showcase my personal resume.  Use of jQuery’s DOM manipulation to dynamically populate resume fields. Use of JavaScript, jQuery, as well as version control using git and GitHub.",
		"date": 2015,
		"images": "images/TPS_report.jpg",
		"url": "https://github.com/zaxxon77/frontend-nanodegree-resume"
	}
	]
}
projects.display = function (){
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		var formattedProjectTitleURL = formattedProjectTitle.replace("#",projects.projects[project].url);
		$(".project-entry:last").append(formattedProjectTitleURL);

		var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[project].date);
		$(".project-entry:last").append(formattedProjectDates);

		var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectDescription);

		var formattedProjectImage = HTMLprojectImage.replace("%data%",projects.projects[project].images);
		$(".project-entry:last").append(formattedProjectImage);
	}
}
projects.display();


function inName (name) {
    var finalName = name;
    var space_index = finalName.indexOf(" ");
    var first_let = finalName[0].toUpperCase();
    var first_name = finalName.slice(1, space_index);
    first_name = first_let+first_name.toLowerCase();
    var last_name = finalName.slice(space_index+1,finalName.length).toUpperCase();
    finalName = first_name + " " + last_name;
    return finalName;
}
//console.log(inName(name));


//$("#main").append(internationalizeButton);


// Lets see a map!
$("#mapDiv").append(googleMap);


// D3.js sandbox
/*d3.select("body").transition()
    .style("background-color", "gray")
    .duration(750);
*/
// Hamburger Menu Stuff
$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});

