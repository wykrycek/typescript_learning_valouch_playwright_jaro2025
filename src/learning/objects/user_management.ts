import { User } from "./user.ts";

const user = new User("jaro", "123", 25, "jaro@jaro.cz");
const admin = new User("admin", "123", 25, "admin@admin.cz");

console.log(user.getUsername());
console.log(admin.logUser());
console.log(user.setAge(12));
console.log(user.logUser());
console.log(user.getEmail());

// volání privátní funkce
console.log(user.unsetEmail());
console.log(user.logUser());