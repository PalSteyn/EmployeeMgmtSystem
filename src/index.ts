import { EmployeeService } from "./services/employeeService";

const service = new EmployeeService();
service.addEmployee({ id: 1, name: 'John', department: 'IT', isActive: true });
console.log(service.listEmployees());