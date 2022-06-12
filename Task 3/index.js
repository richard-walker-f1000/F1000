const employeesArray = [
	{ ID: 10, NAME: "Mr. TEN", MANAGER_ID: 3 },
	{ ID: 6, NAME: "Mr. SIX", MANAGER_ID: 2 },
	{ ID: 5, NAME: "Mr. FIVE", MANAGER_ID: 2 },
	{ ID: 7, NAME: "Mr. SEVEN", MANAGER_ID: 2 },
	{ ID: 8, NAME: "Mr. EIGHT", MANAGER_ID: 2 },
	{ ID: 2, NAME: "Mr. TWO", MANAGER_ID: 1 },
	{ ID: 11, NAME: "Mr. ELEVEN", MANAGER_ID: 8 },
	{ ID: 13, NAME: "Mr. THIRTEEN", MANAGER_ID: 10 },
	{ ID: 14, NAME: "Mr. FOURTEEN", MANAGER_ID: 10 },
	{ ID: 1, NAME: "Mr. ONE", MANAGER_ID: null },
	{ ID: 3, NAME: "Mr. THREE", MANAGER_ID: 1 },
	{ ID: 4, NAME: "Mr. FOUR", MANAGER_ID: 1 },
	{ ID: 9, NAME: "Mr. NINE", MANAGER_ID: 3 },
	{ ID: 12, NAME: "Mr. TWELVE", MANAGER_ID: 9 },
];

// Print the name of each parent and the name of each child
const createCountObj = (ID) => ({
	ID,
	children: [],
	get count() {
		// map through the array and return the count of children
		this._childrenCount =
			"_childrenCount" in this
				? this._childrenCount
				: this.children.length +
				  this.children.reduce((s, { count }) => s + count, 0);
		return this._childrenCount;
	},
});

const result = Object.values(
	employeesArray.reduce((r, emp) => {
		// create a count object with children and count getter
		r[emp.ID] = r[emp.ID] || createCountObj(emp.ID);

		// add the child to the parent
		if (emp.ID !== emp.MANAGER_ID) {
			// add the object to the parent's children
			if (!r[emp.MANAGER_ID])
				r[emp.MANAGER_ID] = createCountObj(emp.MANAGER_ID);

			// add to parent
			r[emp.MANAGER_ID].children.push(r[emp.ID]);
		}
		return r;
	}, {})
)
	// filter out parents with less than 5 children
	.filter(({ ID, count }) => count >= 5 && ID !== null)
	.map(({ ID, count }) => ({
		ID,
		count,
	}));

// Print Parents Name and Number of Children for each parent which has at least 5 children
const getChildCount = () => {
	result.map((r1) => {
		console.log(
			employeesArray.find((obj) => obj.ID === r1.ID).NAME +
				" contains " +
				r1.count +
				" children"
		);
	});
};

getChildCount();
