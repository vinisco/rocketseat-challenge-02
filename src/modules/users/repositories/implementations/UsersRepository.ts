import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User();

    Object.assign(user, {
      name,
      email,
    });

    this.users.push(user);

    return user;
  }

  findById(id: string): User | undefined {
    const user = this.users.find((c) => c.id === id);
    return user;
  }

  findByEmail(email: string): User | undefined {
    const user = this.users.find((c) => c.email === email);
    return user;
  }

  turnAdmin(receivedUser: User): User {
    let index = this.users.findIndex((c) => c.id === receivedUser.id);

    this.users[index] = {
      ...this.users[index],
      admin: true,
      updated_at: new Date(),
    };

    return this.users[index];
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
