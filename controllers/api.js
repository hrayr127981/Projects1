const UsersApi = require('./../components/users/api')

class ApiV1 {

 initilize(app){
   app.use('/api/users', UsersApi);
   app.get('/',(req,res) =>{
     return res.render('register');
   });
 }
}

module.exports = new ApiV1();
