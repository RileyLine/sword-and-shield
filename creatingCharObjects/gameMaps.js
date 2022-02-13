// Map 001
let map001 = []
map001[0] = [ 
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0],
	[0, 0, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 0, 0],
	[0, 0, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 0, 0],
	[0, 0, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 0, 0, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 0, 0],
	[0, 0, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 0, 0, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 0, 0],
	[0, 0, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 0, 0, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 0, 0],
	[0, 0, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 0, 0, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 0, 0],
	[0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0],
	[0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[0, 0, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 2, 1, 1, 2, 3, 3, 3, 3, 3, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 2, 1, 1, 2, 3, 3, 3, 3, 3, 3, 0, 0, 1, 1, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0],
	[0, 0, 2, 1, 1, 2, 3, 3, 3, 3, 3, 3, 0, 0, 1, 1, 0, 0, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0],
	[0, 0, 2, 1, 1, 2, 3, 3, 3, 3, 3, 3, 0, 0, 1, 1, 0, 0, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0],
	[0, 0, 2, 1, 1, 2, 3, 3, 3, 3, 3, 3, 0, 0, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0],
	[0, 0, 2, 1, 1, 2, 3, 3, 3, 3, 3, 3, 0, 0, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0],
	[0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
//Player starting location on map 1
map001[1] = [20, 3];

// Map 002
let map002 = []
map002[0] = [
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0],
	[0,0,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,0,0],
	[0,0,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,0,0],
	[0,0,2,1,1,2,2,2,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,2,4,4,4,0,0],
	[0,0,2,1,1,2,3,3,3,3,3,3,3,3,3,2,1,1,2,3,3,3,3,3,3,3,3,4,4,4,0,0],
	[0,0,2,1,1,2,3,3,3,3,3,3,3,3,3,2,1,1,2,3,3,3,3,3,3,3,3,4,4,4,0,0],
	[0,0,2,1,1,2,3,3,3,3,3,3,3,3,3,2,1,1,2,3,3,3,3,3,3,3,3,4,4,4,0,0],
	[0,0,2,1,1,2,3,3,3,3,3,3,3,3,3,2,1,1,2,3,3,3,3,3,3,3,3,4,4,4,0,0],
	[0,0,2,1,1,2,3,3,3,3,3,3,3,3,3,2,1,1,2,3,3,3,3,3,3,3,3,4,4,4,0,0],
	[0,0,2,1,1,2,3,3,3,3,3,3,3,3,3,2,1,1,2,3,3,3,3,3,3,3,3,4,4,4,0,0],
	[0,0,2,1,1,2,2,2,2,2,4,4,4,4,4,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,0,0],
	[0,0,2,1,1,1,1,1,1,2,4,4,4,4,4,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[0,0,2,1,1,1,1,1,1,2,4,4,4,4,4,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[0,0,2,2,2,2,2,1,1,2,4,4,4,4,4,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0],
	[0,0,3,3,3,3,2,1,1,2,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0],
	[0,0,3,3,3,3,2,1,1,2,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0],
	[0,0,3,3,3,3,2,1,1,2,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0],
	[0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
]
map002[1] = [20, 8];


// Collection of maps
let maps = [map001, map002];