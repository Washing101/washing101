function doGet(e) {
  var fileId = e.parameter.fileId;
  if (fileId) {
    var file = DriveApp.getFileById(fileId);
    var blob = file.getBlob();
    return ContentService.createImageOutput(blob);
  }
  return HtmlService
    .createTemplateFromFile('main')
    .evaluate();
}

function getPageContent(topic) {
  Logger.log("Request for topic: " + topic);
  switch (topic) {
    case 'dashboard':
      return HtmlService.createHtmlOutputFromFile('dashboard').getContent();
    case 'employee':
      return HtmlService.createHtmlOutputFromFile('employee').getContent();
    case 'profile':
      return HtmlService.createHtmlOutputFromFile('profile').getContent();
    case 'expenses':
      return HtmlService.createHtmlOutputFromFile('expenses').getContent();
    case 'vacancies':
      return HtmlService.createHtmlOutputFromFile('vacancies').getContent();
    case 'vacancy_detail':
      return HtmlService.createHtmlOutputFromFile('vacancy_detail').getContent();
    case 'candidates':
      return HtmlService.createHtmlOutputFromFile('candidates').getContent();
    case 'candidates_detail':
      return HtmlService.createHtmlOutputFromFile('candidates_detail').getContent();
    case 'department':
      return HtmlService.createHtmlOutputFromFile('department').getContent();
    case 'abclist':
      return HtmlService.createHtmlOutputFromFile('abclist').getContent();
    case 'EmpAddLeave':
      return HtmlService.createHtmlOutputFromFile('EmpAddLeave').getContent();
    case 'HRabclist':
      return HtmlService.createHtmlOutputFromFile('HRabclist').getContent();
    case 'HRAddLeave':
      return HtmlService.createHtmlOutputFromFile('HRAddLeave').getContent();
    case 'AttendanceEmployee':
      return HtmlService.createHtmlOutputFromFile('AttendanceEmployee').getContent();
    case 'estimates':  
      return HtmlService.createHtmlOutputFromFile('estimates').getContent();
    case 'HRAttendance':  
      return HtmlService.createHtmlOutputFromFile('HRAttendance').getContent();
    case 'AttendanceSheet':  
      return HtmlService.createHtmlOutputFromFile('AttendanceSheet').getContent();
    case 'employeeSalary':
      return HtmlService.createHtmlOutputFromFile('employeepay').getContent();
    case 'ProjectList':
      return HtmlService.createHtmlOutputFromFile('ProjectList').getContent();
    case 'erp':  
      return HtmlService.createHtmlOutputFromFile('erp').getContent();
    case 'cloud':  
      return HtmlService.createHtmlOutputFromFile('cloud').getContent();
    case 'mobile':  
      return HtmlService.createHtmlOutputFromFile('mobile').getContent();
    case 'website':
      return HtmlService.createHtmlOutputFromFile('website').getContent();
    case 'CreateProjectForm':
      return HtmlService.createHtmlOutputFromFile('CreateProjectForm').getContent();
    case 'CreateEmployeeForm':
      return HtmlService.createHtmlOutputFromFile('CreateEmployeeForm').getContent();
    case 'tasks':
      return HtmlService.createHtmlOutputFromFile('tasks').getContent();
     case 'vacancies_review':
      return HtmlService.createHtmlOutputFromFile('vacancies_review').getContent();
    case 'vacancies_reviewp':
      return HtmlService.createHtmlOutputFromFile('vacancies_reviewp').getContent();
    case 'vacancies_reviewf':
      return HtmlService.createHtmlOutputFromFile('vacancies_reviewf').getContent();
    case 'vacancies_reviewr':
      return HtmlService.createHtmlOutputFromFile('vacancies_reviewf').getContent();
    case 'application_review':
      return HtmlService.createHtmlOutputFromFile('application_review').getContent();
    case 'phone_review':
      return HtmlService.createHtmlOutputFromFile('phone_review').getContent();
    case 'face':
      return HtmlService.createHtmlOutputFromFile('face').getContent();
    case 'Performance':
      return HtmlService.createHtmlOutputFromFile('Performance').getContent();
    case 'evidence':
      return HtmlService.createHtmlOutputFromFile('evidence').getContent();
    case 'detailed-metrics':
      return HtmlService.createHtmlOutputFromFile('detailed-metrics').getContent();
    case 'feedback':
      return HtmlService.createHtmlOutputFromFile('feedback').getContent();
    case 'f1':
      return HtmlService.createHtmlOutputFromFile('f1').getContent();
    case 'f2':
      return HtmlService.createHtmlOutputFromFile('f2').getContent();
    case 'f3':
      return HtmlService.createHtmlOutputFromFile('f3').getContent();
    case 'f4':
      return HtmlService.createHtmlOutputFromFile('f4').getContent();
    case 'f5':
      return HtmlService.createHtmlOutputFromFile('f5').getContent();
    case 'Reward':
      return HtmlService.createHtmlOutputFromFile('Reward').getContent();
    case 'recognize':
      return HtmlService.createHtmlOutputFromFile('recognize').getContent();
    case 'recent':
      return HtmlService.createHtmlOutputFromFile('recent').getContent();
    case 'rewards':
      return HtmlService.createHtmlOutputFromFile('rewards').getContent();
    case 'leaderboard':
      return HtmlService.createHtmlOutputFromFile('leaderboard').getContent();
    case 'Appreciation':
      return HtmlService.createHtmlOutputFromFile('Appreciation').getContent();
    case 'AddReward':
      return HtmlService.createHtmlOutputFromFile('AddReward').getContent();
    case 'NewReward':
      return HtmlService.createHtmlOutputFromFile('NewReward').getContent();
    case 'RedeemShop':
      return HtmlService.createHtmlOutputFromFile('RedeemShop').getContent();
    case 'reference':
      return HtmlService.createHtmlOutputFromFile('reference').getContent();
    case 'reference_review':
      return HtmlService.createHtmlOutputFromFile('reference_review').getContent();
    default:
      return HtmlService.createHtmlOutput('<p>Page not found.</p>').getContent();
  }
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}


function getJobsPageContent() {
  return HtmlService.createHtmlOutputFromFile('jobs').getContent();
}

function getJobInfoPageContent(subPage) {
  switch(subPage) {
    case 'jobposts':
      return HtmlService.createHtmlOutputFromFile('jobposts').getContent();
    case 'scorecard':
      return HtmlService.createHtmlOutputFromFile('scorecard').getContent();
    case 'interviewplan':
      return HtmlService.createHtmlOutputFromFile('interviewplan').getContent();
    case 'hiringteam':
      return HtmlService.createHtmlOutputFromFile('hiringteam').getContent();
    case 'approvals':
      return HtmlService.createHtmlOutputFromFile('approvals').getContent();
    default:
      return HtmlService.createHtmlOutputFromFile('jobinfo').getContent();
  }
}

function getDashboardData() {
  var ss = SpreadsheetApp.openById('1YXM-Kn756XRxCBd6g12LKEMtB_3y9HTGETNqEvlPfIs');  // Replace with your actual Spreadsheet ID
  var sheet = ss.getSheets()[0];  // Assuming data is in the first sheet
  var data = sheet.getRange('A2:D2').getValues();  // Fetch the required data
  return data[0];  // Return the first row of data
}

function getDepartmentManagers() {
  var sheet = SpreadsheetApp.openById('1YXM-Kn756XRxCBd6g12LKEMtB_3y9HTGETNqEvlPfIs').getSheetByName('Worker');
  var data = sheet.getDataRange().getValues();
  var departmentManagers = {};

  for (var i = 1; i < data.length; i++) {
    var department = data[i][0]; 
    var manager = data[i][1]; 
    departmentManagers[department] = manager;
  }

  return departmentManagers;
}

function getJobDetails() {
  var sheet = SpreadsheetApp.openById('1YXM-Kn756XRxCBd6g12LKEMtB_3y9HTGETNqEvlPfIs').getSheetByName('Jobs');
  var data = sheet.getDataRange().getValues();
  var jobDetails = {};

  Logger.log('Data from sheet: %s', JSON.stringify(data));

  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var position = row[0];
    var description = row[1];
    var skills = row[2];

    jobDetails[position] = {
      description: description,
      skills: skills
    };
  }

  Logger.log('Job Details: %s', JSON.stringify(jobDetails));
  return jobDetails;
}

function getDashboardData() {
  var ss = SpreadsheetApp.openById('1YXM-Kn756XRxCBd6g12LKEMtB_3y9HTGETNqEvlPfIs');  
  var sheet = ss.getSheets()[0];  
  var data = sheet.getRange('A2:D2').getValues();  
  Logger.log('Dashboard data: ' + JSON.stringify(data[0]));
  return data[0];  
}

function getCandidatesData() {
  var sheet = SpreadsheetApp.openById('1YXM-Kn756XRxCBd6g12LKEMtB_3y9HTGETNqEvlPfIs').getSheetByName('Candidates');
  if (!sheet) {
    Logger.log('Sheet "Candidates" not found');
    return [];
  }
  var data = sheet.getDataRange().getValues();
  var candidates = [];

  for (var i = 1; i < data.length; i++) {
    candidates.push({
      name: data[i][0],
      position: data[i][1],
      imageUrl: data[i][2],
      resume: data[i][3],
      email: data[i][4],
      phone: data[i][5],
      status: data[i][6] // Include the status field
    });
  }
  
  Logger.log('Candidates data: ' + JSON.stringify(candidates));
  return candidates;
}

function getCandidateDetails(id) {
  var sheet = SpreadsheetApp.openById('1YXM-Kn756XRxCBd6g12LKEMtB_3y9HTGETNqEvlPfIs').getSheetByName('Candidates');
  var data = sheet.getDataRange().getValues();
  if (id >= 1 && id < data.length) {
    var row = data[id];
    return {
      name: row[0],
      position: row[1],
      imageUrl: row[2],
      resume: row[3],
      email: row[4],
      phone: row[5],
      status: row[6] // Include the status field
    };
  }
  return null;
}



function getVacancyById(id) {
  var ss = SpreadsheetApp.openById('1YXM-Kn756XRxCBd6g12LKEMtB_3y9HTGETNqEvlPfIs');  
  var sheet = ss.getSheetByName('Vacancies');  
  if (!sheet) {
    Logger.log('Sheet "Vacancies" not found');
    return null;
  }
  var data = sheet.getDataRange().getValues();
  
  if (id >= 0 && id < data.length - 1) {  
    return {
      id: id,
      position: data[id + 1][0], 
      count: data[id + 1][1],
      progress: data[id + 1][2],
      summary: data[id + 1][3],
      skills: data[id + 1][4],
      department: data[id + 1][5],
      approval: data[id + 1][6],
      approvalImage: data[id + 1][7]
    };
  }
  return null;
}

function getVacancies() {
  var ss = SpreadsheetApp.openById('1YXM-Kn756XRxCBd6g12LKEMtB_3y9HTGETNqEvlPfIs');  
  var sheet = ss.getSheetByName('Vacancies');  
  if (!sheet) {
    Logger.log('Sheet "Vacancies" not found');
    return [];
  }
  var data = sheet.getDataRange().getValues();
  var vacancies = [];
  
  for (var i = 1; i < data.length; i++) {
    vacancies.push({
      position: data[i][0],
      count: data[i][1],
      progress: data[i][2],
      approval: data[i][6]
    });
  }
  
  Logger.log('Vacancies: ' + JSON.stringify(vacancies));
  return vacancies;
}

function appendJobData(jobTitle, department, jobDescription, jobSkills, positionsAvailable) {
  var ss = SpreadsheetApp.openById('1YXM-Kn756XRxCBd6g12LKEMtB_3y9HTGETNqEvlPfIs');
  var sheet = ss.getSheetByName('Vacancies'); 
  sheet.appendRow([jobTitle, positionsAvailable, 0, jobDescription, jobSkills, department, false]);
}

function saveMeetingDetails(meetingDate, meetingTime, meetingLocation, meetingDescription) {
  var sheet = SpreadsheetApp.openById('1YXM-Kn756XRxCBd6g12LKEMtB_3y9HTGETNqEvlPfIs').getSheetByName('Calender');
  sheet.appendRow([meetingDate, meetingTime, meetingLocation, meetingDescription]);
}

function getExpensesData() {
  return [
    { item: 'HP Printer', from: 'Best Buy', date: '2021-03-15', by: 'Alice Johnson', amount: '$250', paidBy: 'Credit Card', status: 'Pending' },
    { item: 'Office Chair', from: 'IKEA', date: '2021-04-22', by: 'Bob Smith', amount: '$150', paidBy: 'PayPal', status: 'Approved' },
    { item: 'Monitor', from: 'Newegg', date: '2021-05-10', by: 'Charlie Brown', amount: '$300', paidBy: 'Bank Transfer', status: 'Rejected' },
    { item: 'Desk', from: 'Amazon', date: '2021-06-05', by: 'Diana Prince', amount: '$200', paidBy: 'Debit Card', status: 'Approved' },
    { item: 'Keyboard', from: 'Walmart', date: '2021-07-12', by: 'Evan Davis', amount: '$80', paidBy: 'Cash', status: 'Pending' },
  ];
}

function getEstimatesData() {
  return [
    { number: '#EST1001', client: 'Alpha Corp', by: 'HR', date: '2024-01-15', expiry: '2024-02-15', amount: '$5000', status: 'Accepted' },
    { number: '#EST1002', client: 'Beta Inc.', by: 'Admin', date: '2024-02-20', expiry: '2024-03-20', amount: '$3000', status: 'Declined' },
    { number: '#EST1003', client: 'Gamma LLC', by: 'Sales', date: '2024-03-10', expiry: '2024-04-10', amount: '$4500', status: 'Expired' },
    { number: '#EST1004', client: 'Delta Ltd.', by: 'HR', date: '2024-04-05', expiry: '2024-05-05', amount: '$2500', status: 'Accepted' },
  ];
}

function getEmployeeSalaryData() {
  var employees = [
    {id: '#TWE1001501', joiningDate: '05 Feb, 2020', name: 'Willie Torres', designation: 'Nuxt JS Developer', email: 'willie@tailwick.com', phone: '070 3715 3689', salary: '$8,500', bonus: '$500'},
    {id: '#TWE1001524', joiningDate: '12 Aug, 2023', name: 'Patricia Garcia', designation: 'ASP.Net Developer', email: 'PatriciaJGarcia@tailwick.com', phone: '077 7317 7572', salary: '$3,800', bonus: '-'},
    {id: '#TWE1001506', joiningDate: '11 Nov, 2023', name: 'Tonya Johnson', designation: 'Project Manager', email: 'TonyaEJohnson@tailwick.com', phone: '079 2383 2340', salary: '$6,000', bonus: '$1,500'},
    {id: '#TWE1001502', joiningDate: '09 Jun, 2022', name: 'Jose White', designation: 'React Developer', email: 'ameida@tailwick.com', phone: '0347 656 1412', salary: '$7,150', bonus: '$300'},
    {id: '#TWE1001503', joiningDate: '11 May, 2021', name: 'Juliette Fecteau', designation: 'Sr. Angular Developer', email: 'JulietteFecteau@tailwick.com', phone: '0723 196 2588', salary: '$7,900', bonus: '-'},
    {id: '#TWE1001504', joiningDate: '18 Jan, 2019', name: 'Jonas Frederiksen', designation: 'Team Leader', email: 'jonas@tailwick.com', phone: '061 536 2065', salary: '$5,399', bonus: '-'},
    {id: '#TWE1001505', joiningDate: '23 Apr, 2021', name: 'Kim Broberg', designation: 'UI/UX Designer', email: 'KimBroberg@tailwick.com', phone: '040 382 2096', salary: '$6,983', bonus: '$1,800'},
    {id: '#TWE1001507', joiningDate: '01 Jul, 2022', name: 'Nancy Reynolds', designation: 'Web Designer', email: 'NancyM@tailwick.com', phone: '0391 137 9211', salary: '$3,300', bonus: '-'},
    {id: '#TWE1001508', joiningDate: '08 Aug, 2021', name: 'Thomas Hatfield', designation: 'VueJS Developer', email: 'thomas@tailwick.com', phone: '0911 476 5489', salary: '$9,145', bonus: '$760'},
    {id: '#TWE1001509', joiningDate: '23 Dec, 2020', name: 'Holly Kavanaugh', designation: 'Laravel Developer', email: 'HollyKavanaugh@tailwick.com', phone: '819 047 5846', salary: '$6,150', bonus: '-'}
  ];

  var totalSalary = employees.reduce((acc, emp) => acc + parseFloat(emp.salary.replace(/[$,]/g, '')), 0);
  var totalBonus = employees.reduce((acc, emp) => acc + (emp.bonus !== '-' ? parseFloat(emp.bonus.replace(/[$,]/g, '')) : 0), 0);

  var averageSalary = (totalSalary / employees.length).toFixed(2);
  var totalPay = totalSalary + totalBonus;

  var summary = {
    averageSalary: averageSalary,
    baseSalaryPercentage: ((totalSalary / totalPay) * 100).toFixed(2),
    bonusPercentage: ((totalBonus / totalPay) * 100).toFixed(2),
    profitSharingPercentage: '35',  // Placeholder value
    totalPayPercentage: '30'  // Placeholder value
  };

  return {
    employees: employees,
    summary: summary
  };
}


// Function to fetch employees
function getEmployees() {
    // Replace with your logic to fetch employees from Sheets or Database
    return ['John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Brown', 'Charlie Davis'];
}



// Function to fetch recognitions
function getRecognitions() {
    // Replace with your logic to fetch recognitions from Sheets or Database
    return [
        { employee: 'John Doe', achievement: 'Exceeded sales targets', reward: 'Bonus' },
        { employee: 'Jane Smith', achievement: 'Improved customer satisfaction', reward: 'Gift Card' },
        { employee: 'Alice Johnson', achievement: 'Completed project ahead of schedule', reward: 'Team Lunch' },
    ];
}

// Function to fetch rewards
function getRewards() {
    // Replace with your logic to fetch rewards from Sheets or Database
    return ['Gift Card', 'Extra Day Off', 'Team Lunch', 'Bonus', 'Parking Spot'];
}