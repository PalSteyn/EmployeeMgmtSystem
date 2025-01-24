export interface Employee{
    id: number;
    name: string;
    department: string;
    isActive: boolean;
};

const emp:Employee={
    id: 1,
    name: 'John',
    department: 'IT',
    isActive: true
};
console.log("emp",emp);
