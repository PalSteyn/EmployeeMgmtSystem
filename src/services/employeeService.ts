import { Employee } from './../models/employee';

export class EmployeeService {
    private employees: Employee[] = [];

    addEmployee(employee: Employee): void {
        this.employees.push(employee);
    } 

    listEmployees(): Employee[] {
        return this.employees;
    }
    
}

const service = new EmployeeService();
service.addEmployee({ id: 1, name: 'John', department: 'IT', isActive: true });
service.listEmployees().forEach(emp => console.log(emp));