const nodemailer = require("nodemailer")
let randomNumber = Math.floor((Math.random() * 100000) + 1)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'israr46ansari@gmail.com',
        pass: '034924799'
    }
})

module.exports.conformationEmailSenderToCompanyOwner = function (userEmail) {
    const mainOption = {
        from: 'israr46ansari@gmail.com',
        to: `${userEmail}`,
        subject: "Account Verification By CMS",
        html: `<h1> Hello User Please conform your account by clicking this link </h1> <br>
               <p>This link is send by CMS company to verify you</p> <br> 
                <a href='http://localhost:3000/companyLogIn/?verify=${randomNumber}'> Click this link to verify </a>`
    }
    return new Promise((resolve, reject) => {
        transporter.sendMail(mainOption, (err, info) => {
            if (err) {
                console.log("Error in sending Mail ", err);
                reject(err);
            }
            resolve(true);
        })

    })
}