import app from "./app";

app.listen(3001, () => console.log(" Server is running at port 3001......."));

// proxima aula 18 14 minutos
// criar uma migration      yarn sequelize migration:create --name create-users-table
// rodar migration  yarn sequelize db:migrate
// yarn sequelize db:migrate:undo   desfaz a table
