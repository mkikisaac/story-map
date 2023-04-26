const storyMap = [
	{
		stage: 'Discovery',
		features: [
			{ title: 'User Research', description: 'Conduct user interviews and surveys' },
			{ title: 'Competitive Analysis', description: 'Research competitors and industry trends' }
		]
	},
	{
		stage: 'Ideation',
		features: [
			{ title: 'Brainstorming', description: 'Generate and evaluate ideas' },
			{ title: 'Sketching', description: 'Create rough sketches of possible solutions' }
		]
	},
	{
		stage: 'Prototype',
		features: [
			{ title: 'Low-Fidelity Prototype', description: 'Create a basic prototype with paper or digital tools' },
			{ title: 'High-Fidelity Prototype', description: 'Create a detailed prototype with interactive elements' }
		]
	},
	{
		stage: 'Testing',
		features: [
			{ title: 'Usability Testing', description: 'Test the prototype with real users' },
			{ title: 'Feedback Analysis', description: 'Gather and analyze feedback from users' }
		]
	}
];
const mapContainer = document.getElementById('map-container');

storyMap.forEach(stage => {
	const stageDiv = document.createElement('div');
	stageDiv.classList.add('stage');
	stageDiv.innerHTML = `<h2>${stage.stage}</h2>`;
	
	stage.features.forEach(feature => {
		const featureDiv = document.createElement('div');
		featureDiv.classList.add('feature');
		featureDiv.innerHTML = `<h3>${feature.title}</h3><p>${feature.description}</p>`;
		stageDiv.appendChild(featureDiv);
	});
	
	mapContainer.appendChild(stageDiv);
});
