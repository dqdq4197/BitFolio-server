import { getRepository } from 'typeorm';
import { User } from '/typeorm/entities/user/User';

const getUserById = async (userId: number) => {
  try {
    const { password, ...userWithOutPassword } = await getRepository(User).findOne({ id: userId }) as User;
    return userWithOutPassword;
  } catch(e) {
    return null;
  }
}