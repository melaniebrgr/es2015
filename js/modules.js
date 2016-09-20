// 1 Module execution
// console.log('in modules');

// 2 Loading variables
// import { m2 } from './module-basics.js';
// console.log(m2);

// 3.1 Loading multiple variables
// import { projectID, projectName } from './module-basics.js';
// console.log(`${projectID} has id: ${projectID}`);

// 3.2 Assign alias with as keyword
// import { projectID as id, projectName as name} from './module-basics.js';
// console.log(`${name} has id: ${id}`);

// 4.1 Import default by removing curly braces
// import projectId1 from './module-basics.js';
// console.log(projectId1);

// 4.2 Import default by removing curly braces
// import { default as projectId1 } from './module-basics.js';
// console.log(projectId1);

// 4.3 Export default
// import value from './module-basics.js';
// console.log(value);

// 5 Import multiple (using wildcard)
// import * as values from './module-basics.js';
// export default values;

// 6 Export functions
import { showProject, updateFunction } from './module-basics.js';
showProject();
updateFunction();
showProject();
// export default { showProject, updateFunction };