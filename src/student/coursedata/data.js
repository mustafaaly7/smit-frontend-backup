const CoursesData = [
    { id: 1, title: 'Web Development Bootcamp', teacher: 'John Doe', startDate: '2024-01-15', progress: 60, category: 'Web Development', isNew: true, isPopular: true, syllabus: 'HTML, CSS, JavaScript, React', students: 120 },
    { id: 2, title: 'Advanced Marketing Strategies', teacher: 'Jane Smith', startDate: '2024-02-01', progress: 30, category: 'Marketing', isNew: false, isPopular: false, syllabus: 'SEO, Content Marketing, PPC', students: 85 },
    { id: 3, title: 'Design Thinking for Creatives', teacher: 'Anna Lee', startDate: '2024-02-20', progress: 45, category: 'Design', isNew: true, isPopular: false, syllabus: 'UX/UI, Figma, Prototyping', students: 90 },
    { id: 4, title: 'Data Science Fundamentals', teacher: 'Michael Brown', startDate: '2024-03-05', progress: 70, category: 'Data Science', isNew: false, isPopular: true, syllabus: 'Python, Data Analysis, Machine Learning', students: 110 },
];

const StudentsData = [
 {
    id: 1,
    name: 'Alice Johnson',
    avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D', // Add the image URL here
    assignments: [
      { title: 'HTML Basics', status: 'Completed' },
      { title: 'CSS Styling', status: 'completed' },
    ],
    enrolledCourses: [1],
    teacher: 'John Doe',
    bio: 'A passionate web developer eager to learn new skills in frontend development.',
  },    { id: 2, name: 'Bob Smith', assignments: [{ title: 'SEO Fundamentals', status: 'Pending' }], enrolledCourses: [2], teacher: 'Jane Smith' },
    { id: 3, name: 'Charlie Brown', assignments: [{ title: 'UX Principles', status: 'Completed' }], enrolledCourses: [3], teacher: 'Anna Lee' },
    { id: 4, name: 'Diana King', assignments: [{ title: 'JavaScript Basics', status: 'In Progress' }], enrolledCourses: [1], teacher: 'John Doe' },
    { id: 5, name: 'Eva Green', assignments: [{ title: 'Python Basics', status: 'Pending' }], enrolledCourses: [4], teacher: 'Michael Brown' },
    { id: 6, name: 'Frank Harris', assignments: [{ title: 'React Components', status: 'Completed' }], enrolledCourses: [1], teacher: 'John Doe' },
    { id: 7, name: 'Grace Lee', assignments: [{ title: 'Content Marketing', status: 'In Progress' }], enrolledCourses: [2], teacher: 'Jane Smith' },
    { id: 8, name: 'Hannah White', assignments: [{ title: 'Prototyping Basics', status: 'Pending' }], enrolledCourses: [3], teacher: 'Anna Lee' },
    { id: 9, name: 'Ian Black', assignments: [{ title: 'Machine Learning Basics', status: 'Completed' }], enrolledCourses: [4], teacher: 'Michael Brown' },
    { id: 10, name: 'Jack Wilson', assignments: [{ title: 'JavaScript Advanced', status: 'In Progress' }], enrolledCourses: [1], teacher: 'John Doe' },
];


export { CoursesData, StudentsData };
