// 2 
// export let m2 = 99;

// 3
// export let projectID = 99999;
// export let projectName = 'BuildIt';

// 4.1, 4.2
// let projectId2 = 88;
// export let projectId1 = 99;
// export default projectId2;

// 4.3
// let projectId2 = 88;
// let projectId3 = 77;
// export let projectId1 = 99;
// export {projectId2 as default, projectId3}

// 5
// let projectTrueID = 88888;
// let projectTrueName = 'BreakIt';
// export {projectTrueID, projectTrueName}

// 6
export function showProject() { console.log('in original'); }
export function updateFunction() { 
	showProject = function() { console.log('in updated'); }
}