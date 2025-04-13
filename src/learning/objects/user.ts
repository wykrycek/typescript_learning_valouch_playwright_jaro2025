export class User {
    username: string;
    password: string;
    age: number;
    email: string;
    isActive: boolean = true;
    readonly role: string = 'user';

    constructor(username: string, password: string, age: number, email: string, role: string) {
        this.username = username;
        this.password = password;
        this.age = age;
        this.email = email;
        this.role = role;
        console.log(`Vytvořen nový užovatel: ${this.username} ve věku ${this.age} let s e-mailem ${this.email}, dne ${new Date().toDateString()}`);
    }

    getUsername(): string {
        return this.username;
    }

    logUser(): void {
        console.log(`Uživatel: ${this.username} ve věku ${this.age} let s e-mailem ${this.email}, aktivní: ${this.isActive}`);
    }

    setAge(age: number): void {
        this.age = age;
        console.log(`Změna věku uživatele ${this.username} z ${this.age} na ${age}`);
    }

    getEmail(): string {
        return this.email;
    }

    private unsetEmail(): void {
        this.email = '';
    }

    /*
    setRole(role: string): void {
        this.role = role;
        console.log(`Změna role uživatele ${this.username} z ${this.role} na ${role}`);
    }
    */
}

