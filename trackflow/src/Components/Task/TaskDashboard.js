// import React from 'react'
// import "../../node_modules/@syncfusion/ej2-base/styles/bootstrap5.css";
// import '../../node_modules/@syncfusion/ej2-buttons/styles/bootstrap5.css';
// import "../../node_modules/@syncfusion/ej2-layouts/styles/bootstrap5.css";
// import '../../node_modules/@syncfusion/ej2-dropdowns/styles/bootstrap5.css';
// import '../../node_modules/@syncfusion/ej2-inputs/styles/bootstrap5.css';
// import "../../node_modules/@syncfusion/ej2-navigations/styles/bootstrap5.css";
// import "../../node_modules/@syncfusion/ej2-popups/styles/bootstrap5.css";
// import "../../node_modules/@syncfusion/ej2-react-kanban/styles/bootstrap5.css";

// import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";


// export default function TaskDashboard() {
//     let data = [
//         { Id: 1, Status: 'To DO', Summary: 'Analyze the new requirements gathered from the customer.', Type: 'Story', Priority: 'Low', Tags: 'Analyze,Customer', Estimate: 3.5, Assignee: 'Nancy Davloio', RankId: 1 },
//         { Id: 2, Status: 'InProgress', Summary: 'Fix the issues reported in the IE browser.', Type: 'Bug', Priority: 'Release Breaker', Tags: 'IE', Estimate: 2.5, Assignee: 'Janet Leverling', RankId: 2  },
//         { Id: 3, Status: 'Pending', Summary: 'Fix the issues reported by the customer.', Type: 'Bug', Priority: 'Low', Tags: 'Customer', Estimate: '3.5', Assignee: 'Steven walker', RankId: 1 },
//         { Id: 4, Status: 'Done', Summary: 'Arrange a web meeting with the customer to get the login page requirements.', Type: 'Others', Priority: 'Low', Tags: 'Meeting', Estimate: 2, Assignee: 'Michael Suyama', RankId: 1 },
//         { Id: 5, Status: 'InProgress', Summary: 'Validate new requirements', Type: 'Improvement', Priority: 'Low', Tags: 'Validation', Estimate: 1.5, Assignee: 'Robert King', RankId: 1 }
//     ];
//     return (
//             <div className="App">
//                 <KanbanComponent id="kanban" keyField="Status" dataSource={data} cardSettings={{ contentField: "Summary", headerField: "Id" }}>
//                     <ColumnsDirective>
//                     <ColumnDirective headerText="To Do" keyField="Open"/>
//                     <ColumnDirective headerText="In Progress" keyField="InProgress"/>
//                     <ColumnDirective headerText="Testing" keyField="Testing"/>
//                     <ColumnDirective headerText="Done" keyField="Close"/>
//                     </ColumnsDirective>
//                 </KanbanComponent>
//             </div>
//           );
// }