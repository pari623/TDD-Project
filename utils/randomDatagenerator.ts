import { faker } from '@faker-js/faker';

export class RandomDataUtil{

    //when we create static method we can access it by using just classname itself
static getFirstName()
{
   return faker.person.firstName();   
}  

static getLastname()
{
    return faker.person.lastName();
}

static getFullName()
{
    return faker.person.fullName();
}

static getEmail()
{
    return faker.internet.email();
}

static getPhoneNumber()
{
   return faker.phone.number();
}

static getPassword(length:number = 10)
{
  return faker.internet.password();
}







}