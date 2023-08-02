const square = function (number) {
	return number * number;
};

const square1 = (number) => number * number;

console.log(square(50));

console.log(square1(20));

const jobs = [
	{ id: 1, isActive: true },
	{ id: 2, isActive: true },
	{ id: 3, isActive: false },
];

const getActiveJobs = (jobs) => {
	// const activeJobs = jobs.map((j) => j.isActive === true);
	// return activeJobs;
	// const activeJobs = jobs.map((j) => j.isActive === true);
	// const activeJobs = jobs.filter((j) => j.isActive === true);
	// const activeJobs = jobs.filter((j) => {return j.isActive});
	// const activeJobs = jobs.filter((j) => j.isActive);
	// return jobs.filter((j) => !j.isActive);
	return jobs.filter((j) => j.isActive);

	// return activeJobs;
};

console.log(getActiveJobs(jobs));
