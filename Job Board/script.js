const jobs = [
  { title: "Frontend Developer", company: "TechWorld", location: "Remote" },
  { title: "Backend Developer", company: "CodeBase", location: "Bangalore" },
  { title: "Full Stack Developer", company: "WebWorks", location: "Delhi" },
  { title: "UI/UX Designer", company: "DesignPro", location: "Mumbai" },
];

function displayJobs(filteredJobs) {
  const jobList = document.getElementById("jobList");
  jobList.innerHTML = "";

  filteredJobs.forEach((job) => {
    const jobCard = document.createElement("div");
    jobCard.className = "job-card";
    jobCard.innerHTML = `
      <h3>${job.title}</h3>
      <p><strong>Company:</strong> ${job.company}</p>
      <p><strong>Location:</strong> ${job.location}</p>
    `;
    jobList.appendChild(jobCard);
  });
}

document.getElementById("searchInput").addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm) ||
    job.company.toLowerCase().includes(searchTerm) ||
    job.location.toLowerCase().includes(searchTerm)
  );
  displayJobs(filteredJobs);
});

displayJobs(jobs);
