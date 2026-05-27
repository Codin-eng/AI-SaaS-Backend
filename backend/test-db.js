const prisma = require("./src/db");

async function main() {

  const user = await prisma.user.create({
    data: {
      email: "test3@test.com",
      password: "123456"
    }
  });

  console.log(user);

}

main();