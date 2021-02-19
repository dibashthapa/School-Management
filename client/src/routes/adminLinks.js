export const adminLinks = [
  {
    route: "/admin/dashboard",
    icon: "meter",
    text: "Dashboard",
  },
  {
    route: "/admin/users",
    icon: "user",
    text: "Users",
    children: [
      {
        route: "/admin/users/student",
        text: "Student",
      },
      {
        route: "/admin/users/teacher",
        text: "Teacher",
      },
    ],
  },
  {
    route: "/admin/assignments",
    icon: "graduation",
    text: "Assignments",
  },
  {
    route: "/admin/routine",
    icon: "document",
    text: "Routine",
  },
];
